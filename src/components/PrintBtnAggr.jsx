import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import _ from 'underscore';
import PrintIframe from './PrintIframe';

const PrintBtnAggr = () => {
    const dispatch = useDispatch();
    const { iframeContent, header } = useSelector(state => ({
        iframeContent: state.misform4aggr.printcontent,
        header: state.misform4aggr.header
    }));

    const exportToPdf = (e) => {
        e.preventDefault();
        // Landscape export, 2×4 inches
        var head = document.head;
        var report_header = document.getElementsByClassName('report-header')[0];
        var ts = document.querySelectorAll('.mistablesprint');
        // console.log(typeof(ts));
        var _ts = "";
        _.map(ts,(elem)=>{
            _ts+= report_header.innerHTML + elem.innerHTML;
        });

        dispatch(setIframeContent(head,_ts)).then((e)=>{
            setTimeout(() => {
                console.log("Iframe Reset");
                dispatch(resetIframeContent());
            }, 1000);
        });
        console.log("export to pdf click happened");
        // dispatch(resetIframeContent());
        // var pdf = new jsPDF("landscape", "pt", "a3");
        // pdf.fromHTML(content);
        // pdf.output('dataurlnewwindow');
        // pdf.save("_______.pdf");
        // console.log(content);
        // html2canvas(content).then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     console.log(imgData);
        // const pdf = new jsPDF("landscape", "pt", "a3");
        // pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        // pdf.save("_______.pdf");
        // });
    };

    return (
        <div>
            <Button className="ex-btn" type="submit" onClick={exportToPdf}>Download PDF</Button>
            {iframeContent && <PrintIframe header={header} content={iframeContent}></PrintIframe>}
        </div>
    );
};

export default PrintBtnAggr;