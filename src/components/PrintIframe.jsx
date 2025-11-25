import React, { useEffect, useRef } from 'react';

const PrintIframe = ({ content }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        iframeAppend();
    }, []);

    useEffect(() => {
        iframeAppend();
    }, [content]);

    const iframeAppend = () => {
        if (!iframeRef.current) return;

        var doc = iframeRef.current.contentWindow;
        const css = `
            @media print {
                table{
                    margin:0;
                }
                @page {size: A3 landscape;}
            }
            .ant-table-body{
                width:100%;
                overflow:hidden !important;
            }
            .ant-table-thead > tr > th[colspan] {
                text-align: center;
            }
            table {
            font-size: 13px;
            width:100% !important;
            zoom: .75;
            margin-right:-10px;
            border-collapse: collapse;
            page-break-after:always;
            }
            table tr,td{
            word-break: normal !important;
            color: black;
            text-align: left;
            font-family: NikoshBAN;
            }
            .ant-table-thead > tr > th, .ant-table-tbody > tr > td{
            padding: 5px 0 !important;
            }

            th.r-th {
            vertical-align: bottom;
            }
            th{
            font-size: 11px;
            white-space: pre;
            }
            thead tr>th,  tbody td{
            border: 1px solid #000 !important;
            }
            th.r-th>div {
            writing-mode: vertical-rl;
            transform: translate(.01em,0) rotate(180deg);
            vertical-align: bottom;
            /* display: inline-block;
            white-space: nowrap;
            writing-mode: tb; */
            }
            .form-header{
            text-align: center;
            }
            .logo img{ height:48; width:48;margin-left:35px;}

            .mistables th.r-th>div {
                writing-mode: vertical-rl;
                transform: translate(.01em,0) rotate(180deg);
                vertical-align: bottom;
                /* display: inline-block;
                white-space: nowrap;
                writing-mode: tb; */
            }
            table tr:nth-last-child(2)>td:first-child, .mistables table tr:nth-last-child(2)>td:first-child{
                color: transparent;
            }
            .rm-b-t{
                border-bottom-color: transparent !important;
                border-right-color: #000 !important;
                border-left: 1px solid #000 !important;
            }
            .rm-b-t1{
                border-bottom: 0px #fff !important;
                border-right: 1px solid #000 !important;
                border-left: 1px solid #000 !important;
                border-top: 1px solid #000 !important;
            }
            .rm-b-t2{
                border-top: 1px solid #000 !important;
                border-right: 1px solid #000 !important;
                border-left: 1px solid #000 !important;
                border-bottom: 1px solid #fff !important;
            }
            .cl-no{
                text-align: center !important;
            }
            .form-header{
                text-align: center;
                font-weight: bold;
            }
            .ex-btn {
                margin-top: 4px;
                background-color: crimson !important;
                color:#fff !important;
            }
            .ant-tabs-tab{
                font-weight: bold !important;
            }
            `;
        doc.document.open();
        doc.document.write('<html><head><title></title>');
        doc.document.write('</head><body>');
        doc.document.write('<style>' + css + '</style>');
        //console.log(content);
        doc.document.write(content);
        doc.document.write('</body>');

        doc.document.close();
        doc.focus();
        doc.print();
    };

    return (
        <iframe title="Print Iframe" style={{ position: "absolute", left: -10000 }} ref={iframeRef} />
    );
};

export default PrintIframe;