
import { Avatar, Col, Row } from "antd";

const MisReportHeader = ({ upazila, zilla, month }) => {
  if (upazila) {
    // Conditional logic if needed
  }
  return (
    <div className="report-header">
      <Row>
        <Col span={4}>
          <div className="logo">
            <p id="slogan">
              ছেলে হোক মেয়ে হোক,
              <br />
              দু'টি সন্তানই যথেষ্ট
            </p>
            <Avatar
              shape="square"
              size={48}
              src={`${import.meta.env.PUBLIC_URL}/images/fpi_logo.png`}
            />
          </div>
        </Col>
        <Col span={16}>
          <div>
            <p className="form-header">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              <br />
              পরিবার পরিকল্পনা অধিদপ্তর
              <br />
              পরিবার পরিকল্পনা, মা ও শিশু স্বাস্থ্য কার্যক্রমের মাসিক অগ্রগতির
              প্রতিবেদন
            </p>
            <p className="form-header">
              মাসঃ {month}
              <br />
              {upazila &&
                "উপজেলা/থানাঃ " +
                  rejectSpecificWord(upazila, "upazila")}
              {zilla &&
                "জেলাঃ " + rejectSpecificWord(zilla, "district")}
              <br />
            </p>
            <hr />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MisReportHeader;
