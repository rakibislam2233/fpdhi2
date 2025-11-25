import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker, Select, Button, Form, Row, Spin, message } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { fetchZillas } from "../../redux/actions/getgeo.action";
import { rejectSpecificWord } from "../../utils/Utils.jsx";

const { MonthPicker } = DatePicker;
const { Option } = Select;

const Report = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getgeo = useSelector((state) => state.getgeo);

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [reportUrl, setReportUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    dispatch(fetchZillas());
  }, [dispatch]);

  const handleDistrictChange = (districtCode) => {
    console.log("District Code", districtCode);
    setSelectedDistrict(districtCode);
  };

  const handleMonthChange = (date) => {
    console.log("Date", date);
    setSelectedMonth(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Format date as YYYY-MM-DD (using last day of month)
    const monthId = selectedMonth.endOf("month").format("YYYY-MM-DD");
    const distCode = selectedDistrict;

    const newUrl = `https://mis.dgfp.gov.bd/ss/ss9/review_district/misform5_view9.php?month_id=${monthId}&dist_code=${distCode}`;

    console.log("New URL", newUrl);

    setReportUrl(newUrl);
    setShowReport(true);
    setLoading(false);

    console.log("Report loaded successfully!");
  };

  const handleDownloadPDF = async () => {
    if (!reportUrl) {
      message.warning("Please view the report first!");
      return;
    }

    try {
      // Show loading message
      const loadingMessage = document.createElement("div");
      loadingMessage.style.position = "fixed";
      loadingMessage.style.top = "50%";
      loadingMessage.style.left = "50%";
      loadingMessage.style.transform = "translate(-50%, -50%)";
      loadingMessage.style.backgroundColor = "rgba(0,0,0,0.8)";
      loadingMessage.style.color = "white";
      loadingMessage.style.padding = "20px";
      loadingMessage.style.borderRadius = "5px";
      loadingMessage.style.zIndex = "9999";
      loadingMessage.textContent = "Generating PDF...";
      document.body.appendChild(loadingMessage);

      // Create a temporary iframe to load the content for PDF generation
      const pdfIframe = document.createElement("iframe");
      pdfIframe.style.position = "absolute";
      pdfIframe.style.left = "-9999px";
      pdfIframe.style.width = "100%";
      pdfIframe.style.height = "100%";
      pdfIframe.style.border = "none";

      document.body.appendChild(pdfIframe);

      pdfIframe.src = reportUrl;

      pdfIframe.onload = async () => {
        try {
          // Wait for the content to be fully loaded
          await new Promise((resolve) => setTimeout(resolve, 2000));

          // Access the iframe content
          const iframeDoc =
            pdfIframe.contentDocument || pdfIframe.contentWindow.document;
          const iframeBody = iframeDoc.body;

          // Clone the content to work with it in the main window
          const clonedElement = iframeBody.cloneNode(true);
          clonedElement.style.width = "210mm"; // A4 width
          clonedElement.style.height = "auto";
          clonedElement.style.overflow = "hidden";
          clonedElement.style.position = "absolute";
          clonedElement.style.left = "-9999px";
          clonedElement.style.top = "0";
          clonedElement.style.backgroundColor = "white";
          clonedElement.style.fontSize = "12px";
          clonedElement.style.boxSizing = "border-box";

          document.body.appendChild(clonedElement);

          // Use html2canvas to convert the cloned content to canvas
          const canvas = await html2canvas(clonedElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false,
          });

          // Remove the cloned element
          document.body.removeChild(clonedElement);

          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgWidth = 210; // A4 width in mm
          const pageHeight = 295; // A4 height in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          // Add additional pages if content is longer than one page
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          // Save the PDF
          pdf.save("report.pdf");
          message.success("PDF downloaded successfully!");
        } catch (error) {
          console.error("PDF generation failed:", error);
          message.error("PDF generation failed. Please try printing instead.");
        } finally {
          // Clean up the temporary iframe
          if (pdfIframe && document.body.contains(pdfIframe)) {
            document.body.removeChild(pdfIframe);
          }
          // Remove loading message
          if (document.body.contains(loadingMessage)) {
            document.body.removeChild(loadingMessage);
          }
        }
      };

      // Handle iframe loading errors
      pdfIframe.onerror = () => {
        console.error("Failed to load iframe content");
        if (document.body.contains(loadingMessage)) {
          document.body.removeChild(loadingMessage);
        }
        message.error("Could not load report content for PDF generation.");
      };
    } catch (error) {
      console.error("Error in PDF download:", error);
      message.error(
        "An error occurred while generating the PDF. Please try again."
      );
    }
  };

  const handlePrint = () => {
    if (!reportUrl) {
      message.warning("Please view the report first!");
      return;
    }

    // Create a temporary iframe to load the content for printing
    const printIframe = document.createElement("iframe");
    printIframe.style.position = "absolute";
    printIframe.style.left = "-9999px";
    printIframe.style.width = "100%";
    printIframe.style.height = "100%";
    printIframe.style.border = "none";

    document.body.appendChild(printIframe);

    printIframe.src = reportUrl;

    printIframe.onload = () => {
      try {
        printIframe.contentWindow.focus();
        printIframe.contentWindow.print();
      } catch (error) {
        console.error("Print failed:", error);
        // Fallback: open in new tab for printing
        window.open(reportUrl, "_blank");
      } finally {
        // Clean up the temporary iframe after a delay
        setTimeout(() => {
          if (printIframe && document.body.contains(printIframe)) {
            document.body.removeChild(printIframe);
          }
        }, 1000);
      }
    };
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* Form Header Section */}
      <div
        className="criteria-holder"
        style={{ padding: "20px", backgroundColor: "#f5f5f5" }}
      >
        <Row type="flex" justify="center">
          <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item
              label="জেলা"
              name="district"
              rules={[{ required: true, message: "Please select a District!" }]}
            >
              <Select
                size="large"
                onChange={handleDistrictChange}
                style={{ width: 200 }}
                placeholder="Select District"
              >
                {getgeo.zilla?.map((e, i) => (
                  <Option key={e.id} value={e.id}>
                    {rejectSpecificWord(e.name, "district")}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="মাস"
              name="monthpicker"
              rules={[{ required: true, message: "Please select a Month!" }]}
            >
              <MonthPicker
                format="MMMM-YYYY"
                placeholder="Select Month"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Spin spinning={loading || getgeo.loading} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
              >
                View Report
              </Button>
            </Form.Item>

            {showReport && (
              <React.Fragment>
                <Form.Item>
                  <Button
                    onClick={handleDownloadPDF}
                    size="large"
                    style={{
                      backgroundColor: "#52c41a",
                      color: "white",
                      borderColor: "#52c41a",
                    }}
                  >
                    Download PDF
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    onClick={handlePrint}
                    size="large"
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      borderColor: "#1890ff",
                    }}
                  >
                    Print Report
                  </Button>
                </Form.Item>
              </React.Fragment>
            )}
          </Form>
        </Row>
      </div>

      <hr />

      {/* Report Display Section */}
      {showReport && reportUrl ? (
        <iframe
          src={reportUrl}
          title="Report"
          width="100%"
          height="800px"
          style={{ border: "none" }}
        />
      ) : (
        <div style={{ textAlign: "center", padding: "50px", color: "#999" }}>
          <p>Please select a District and Month to view the report</p>
        </div>
      )}
    </div>
  );
};

export default Report;
