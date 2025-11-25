// MIS4 DIRECT ENTRY TABLE
import React from "react";
import { rejectSpecificWord, sumColumn } from "../../utils/Utils.jsx";
import { calculationKeys } from "./calculationsKey";

const remove_sl_total = (d) => (isNaN(d) ? "" : d);
var sl_total_obj = {
  title: "১",
  className: "cl-no",
  dataIndex: "sl",
  key: "sl",
  render: (v, row, i) => {
    // console.log(v,row,i);
    return <span> {remove_sl_total(v)} </span>;
  },
};

export const mis4columns_fp = [
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ক্রমিক নম্বর",
                className: "r-th",
                children: [sl_total_obj],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "নাম",
                className: "r-th",
                children: [
                  {
                    title: "২",
                    className: "cl-no",
                    dataIndex: "orgUnit",
                    key: "orgUnit",
                    render: (v, row, i) => rejectSpecificWord(v, "union"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট সক্ষম দম্পতির সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "৩",
                    className: "cl-no",
                    dataIndex: "wSxlRUK6SEt-HllvX50cXC0",
                    key: "wSxlRUK6SEt-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "খাবার বড়ি",
    children: [
      {
        title: "স্বাভাবিক",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৪",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-hoohMhOq4I4",
                    key: "GfrzvneOQNS-hoohMhOq4I4",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৫",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-biNDt6qVuB8",
                    key: "GfrzvneOQNS-biNDt6qVuB8",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৬",
                    className: "cl-no",
                    key: "WD67KNIPVSW-HllvX50cXC0",
                    dataIndex: "WD67KNIPVSW-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c6),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "৭",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-W91zrJQgxxD",
                    key: "GfrzvneOQNS-W91zrJQgxxD",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "৮",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-WmIdlW4s7Nr",
                    key: "GfrzvneOQNS-WmIdlW4s7Nr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "প্রসব পরবর্তী",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৯",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-ihXaVctHrKy",
                    key: "GfrzvneOQNS-ihXaVctHrKy",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "১০",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-yS8D8b66Zkx",
                    key: "GfrzvneOQNS-yS8D8b66Zkx",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "১১",
                    className: "cl-no",
                    key: "GfrzvneOQNS-tk5GZkn4gFa",
                    dataIndex: "GfrzvneOQNS-tk5GZkn4gFa",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c11),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "১২",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-rrg2ehwdD86",
                    key: "GfrzvneOQNS-rrg2ehwdD86",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "১৩",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-B35cxoF9N2N",
                    key: "GfrzvneOQNS-B35cxoF9N2N",
                  },
                ],
              },
              {
                title: "প্রসব পরবর্তী মেয়াদ উত্তীর্ণ",
                className: "r-th",
                children: [
                  {
                    title: "১৪",
                    className: "cl-no",
                    dataIndex: "GfrzvneOQNS-dsco9VTvffr",
                    key: "GfrzvneOQNS-dsco9VTvffr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট খাবার বড়ি",
                className: "r-th",
                children: [
                  {
                    title: "১৫",
                    className: "cl-no",
                    dataIndex: "dYXyd0ZenSJ-HllvX50cXC0",
                    key: "dYXyd0ZenSJ-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c15),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "কনডম",
    children: [
      {
        title: "স্বাভাবিক",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "১৬",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-hoohMhOq4I4",
                    key: "PCF4Vb9n5dG-hoohMhOq4I4",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "১৭",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-biNDt6qVuB8",
                    key: "PCF4Vb9n5dG-biNDt6qVuB8",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "১৮",
                    className: "cl-no",
                    key: "HxiP4pnFLLv-HllvX50cXC0",
                    dataIndex: "HxiP4pnFLLv-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c18),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "১৯",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-W91zrJQgxxD",
                    key: "PCF4Vb9n5dG-W91zrJQgxxD",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "২০",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-WmIdlW4s7Nr",
                    key: "PCF4Vb9n5dG-WmIdlW4s7Nr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "প্রসব পরবর্তী",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "২১",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-ihXaVctHrKy",
                    key: "PCF4Vb9n5dG-ihXaVctHrKy",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "২২",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-yS8D8b66Zkx",
                    key: "PCF4Vb9n5dG-yS8D8b66Zkx",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "২৩",
                    className: "cl-no",
                    key: "TDcPXYOS877-HllvX50cXC0",
                    dataIndex: "TDcPXYOS877-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c23),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "২৪",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-rrg2ehwdD86",
                    key: "PCF4Vb9n5dG-rrg2ehwdD86",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "২৫",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-B35cxoF9N2N",
                    key: "PCF4Vb9n5dG-B35cxoF9N2N",
                  },
                ],
              },
              {
                title: "প্রসব পরবর্তী মেয়াদ উত্তীর্ণ",
                className: "r-th",
                children: [
                  {
                    title: "২৬",
                    className: "cl-no",
                    dataIndex: "PCF4Vb9n5dG-dsco9VTvffr",
                    key: "PCF4Vb9n5dG-dsco9VTvffr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট কনডম",
                className: "r-th",
                children: [
                  {
                    title: "২৭",
                    className: "cl-no",
                    dataIndex: "g1auXPxaILY-HllvX50cXC0",
                    key: "g1auXPxaILY-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c27),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "ইনজেকটেবল",
    children: [
      {
        title: "স্বাভাবিক",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "২৮",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-hoohMhOq4I4",
                    key: "jCUT3EUsujO-hoohMhOq4I4",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "২৯",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-biNDt6qVuB8",
                    key: "jCUT3EUsujO-biNDt6qVuB8",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৩০",
                    className: "cl-no",
                    key: "JBflAAaLmzV-HllvX50cXC0",
                    dataIndex: "JBflAAaLmzV-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c30),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "৩১",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-W91zrJQgxxD",
                    key: "jCUT3EUsujO-W91zrJQgxxD",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "৩২",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-WmIdlW4s7Nr",
                    key: "jCUT3EUsujO-WmIdlW4s7Nr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "প্রসব পরবর্তী",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৩৩",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-ihXaVctHrKy",
                    key: "jCUT3EUsujO-ihXaVctHrKy",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৩৪",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-yS8D8b66Zkx",
                    key: "jCUT3EUsujO-yS8D8b66Zkx",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৩৫",
                    className: "cl-no",
                    key: "ibmN7k6OGsU-HllvX50cXC0",
                    dataIndex: "ibmN7k6OGsU-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c35),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "৩৬",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-rrg2ehwdD86",
                    key: "jCUT3EUsujO-rrg2ehwdD86",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "৩৭",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-B35cxoF9N2N",
                    key: "jCUT3EUsujO-B35cxoF9N2N",
                  },
                ],
              },
              {
                title: "প্রসব পরবর্তী মেয়াদ উত্তীর্ণ",
                className: "r-th",
                children: [
                  {
                    title: "৩৮",
                    className: "cl-no",
                    dataIndex: "jCUT3EUsujO-dsco9VTvffr",
                    key: "jCUT3EUsujO-dsco9VTvffr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট ইনজেকটেবল",
                className: "r-th",
                children: [
                  {
                    title: "৩৯",
                    className: "cl-no",
                    dataIndex: "hJKvjSRrdvo-HllvX50cXC0",
                    key: "hJKvjSRrdvo-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c39),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "আইইউডি",
    children: [
      {
        title: "স্বাভাবিক",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৪০",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-hoohMhOq4I4",
                    key: "dSIi65taf2b-hoohMhOq4I4",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৪১",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-biNDt6qVuB8",
                    key: "dSIi65taf2b-biNDt6qVuB8",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৪২",
                    className: "cl-no",
                    key: "lHQWYq5e4r0-HllvX50cXC0",
                    dataIndex: "lHQWYq5e4r0-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c42),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "৪৩",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-W91zrJQgxxD",
                    key: "dSIi65taf2b-W91zrJQgxxD",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "৪৪",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-WmIdlW4s7Nr",
                    key: "dSIi65taf2b-WmIdlW4s7Nr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "প্রসব পরবর্তী",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৪৫",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-ihXaVctHrKy",
                    key: "dSIi65taf2b-ihXaVctHrKy",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৪৬",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-yS8D8b66Zkx",
                    key: "dSIi65taf2b-yS8D8b66Zkx",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৪৭",
                    className: "cl-no",
                    key: "E3HpR3qAhZA-HllvX50cXC0",
                    dataIndex: "E3HpR3qAhZA-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c47),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "৪৮",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-rrg2ehwdD86",
                    key: "dSIi65taf2b-rrg2ehwdD86",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "৪৯",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-B35cxoF9N2N",
                    key: "dSIi65taf2b-B35cxoF9N2N",
                  },
                ],
              },
              {
                title: "প্রসব পরবর্তী মেয়াদ উত্তীর্ণ",
                className: "r-th",
                children: [
                  {
                    title: "৫০",
                    className: "cl-no",
                    dataIndex: "dSIi65taf2b-dsco9VTvffr",
                    key: "dSIi65taf2b-dsco9VTvffr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট আইইউডি",
                className: "r-th",
                children: [
                  {
                    title: "৫১",
                    className: "cl-no",
                    dataIndex: "i27Oz4EeNWC-HllvX50cXC0",
                    key: "i27Oz4EeNWC-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c51),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "ইমপ্ল্যান্ট",
    children: [
      {
        title: "স্বাভাবিক",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৫২",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-hoohMhOq4I4",
                    key: "QZIyEOHohEM-hoohMhOq4I4",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৫৩",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-biNDt6qVuB8",
                    key: "QZIyEOHohEM-biNDt6qVuB8",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৫৪",
                    className: "cl-no",
                    key: "OhH4On9OZF9-HllvX50cXC0",
                    dataIndex: "OhH4On9OZF9-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c54),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "৫৫",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-W91zrJQgxxD",
                    key: "QZIyEOHohEM-W91zrJQgxxD",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "৫৬",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-WmIdlW4s7Nr",
                    key: "QZIyEOHohEM-WmIdlW4s7Nr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "প্রসব পরবর্তী",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৫৭",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-ihXaVctHrKy",
                    key: "QZIyEOHohEM-ihXaVctHrKy",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৫৮",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-yS8D8b66Zkx",
                    key: "QZIyEOHohEM-yS8D8b66Zkx",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৫৯",
                    className: "cl-no",
                    key: "yQ4FSIcH0zd-HllvX50cXC0",
                    dataIndex: "yQ4FSIcH0zd-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c59),
                  },
                ],
              },
            ],
          },
          {
            title: "ছেড়ে দিয়েছে",
            children: [
              {
                title: "কোন পদ্ধতি নেয়নি",
                className: "r-th",
                children: [
                  {
                    title: "৬০",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-rrg2ehwdD86",
                    key: "QZIyEOHohEM-rrg2ehwdD86",
                  },
                ],
              },
              {
                title: "অন্য পদ্ধতি নিয়েছে",
                className: "r-th",
                children: [
                  {
                    title: "৬১",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-B35cxoF9N2N",
                    key: "QZIyEOHohEM-B35cxoF9N2N",
                  },
                ],
              },
              {
                title: "প্রসব পরবর্তী মেয়াদ উত্তীর্ণ",
                className: "r-th",
                children: [
                  {
                    title: "৬২",
                    className: "cl-no",
                    dataIndex: "QZIyEOHohEM-dsco9VTvffr",
                    key: "QZIyEOHohEM-dsco9VTvffr",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট ইমপ্ল্যান্ট",
                className: "r-th",
                children: [
                  {
                    title: "৬৩",
                    className: "cl-no",
                    dataIndex: "ADLwP5Bj6Y0-HllvX50cXC0",
                    key: "ADLwP5Bj6Y0-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c63),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "স্থায়ী পদ্ধতি",
    children: [
      {
        title: "পুরুষ",
        children: [
          {
            title: "স্বাভাবিক",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৬৪",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-iewWuv1Q35x",
                    key: "kON6kM1s8Z4-iewWuv1Q35x",
                  },
                ],
              },
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৬৫",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-Rer4EzwcQBf",
                    key: "kON6kM1s8Z4-Rer4EzwcQBf",
                  },
                ],
              },
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৬৬",
                    className: "cl-no",
                    key: "TqPtdISq2Eq-HllvX50cXC0",
                    dataIndex: "TqPtdISq2Eq-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c66),
                  },
                ],
              },
            ],
          },
          {
            title: "প্রসব পরবর্তী",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৬৭",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-q725bxlWUuc",
                    key: "kON6kM1s8Z4-q725bxlWUuc",
                  },
                ],
              },
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৬৮",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-F1aJHMS9nN3",
                    key: "kON6kM1s8Z4-F1aJHMS9nN3",
                  },
                ],
              },
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৬৯",
                    className: "cl-no",
                    key: "rBBqxJf7arX-HllvX50cXC0",
                    dataIndex: "rBBqxJf7arX-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "r-th",
                title: "সর্বমোট পুরুষ",
                children: [
                  {
                    title: "৭০",
                    className: "cl-no",
                    key: "Ev66FqIgcam-HllvX50cXC0",
                    dataIndex: "Ev66FqIgcam-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c70),
                    // render: (value, row, index) => {
                    //     var sum = parseInt(row["kON6kM1s8Z4-iewWuv1Q35x"]) + parseInt(row["kON6kM1s8Z4-Rer4EzwcQBf"]) +
                    //         parseInt(row["kON6kM1s8Z4-q725bxlWUuc"]) + parseInt(row["kON6kM1s8Z4-F1aJHMS9nN3"]);
                    //     return remove_single_nan(row["kON6kM1s8Z4-iewWuv1Q35x"], row["kON6kM1s8Z4-Rer4EzwcQBf"]) +
                    //         remove_single_nan(row["kON6kM1s8Z4-q725bxlWUuc"], row["kON6kM1s8Z4-F1aJHMS9nN3"]);
                    // }
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "মহিলা",
        children: [
          {
            title: "স্বাভাবিক",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৭১",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-iFhegHsWrBb",
                    key: "kON6kM1s8Z4-iFhegHsWrBb",
                  },
                ],
              },
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৭২",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-iWRdOFEWjcc",
                    key: "kON6kM1s8Z4-iWRdOFEWjcc",
                  },
                ],
              },
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৭৩",
                    className: "cl-no",
                    key: "PzPKHmK0aVj-HllvX50cXC0",
                    dataIndex: "PzPKHmK0aVj-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c73),
                  },
                ],
              },
            ],
          },
          {
            title: "প্রসব পরবর্তী",
            children: [
              {
                title: "পুরাতন",
                className: "r-th",
                children: [
                  {
                    title: "৭৪",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-tf6Ohcc1Hgy",
                    key: "kON6kM1s8Z4-tf6Ohcc1Hgy",
                  },
                ],
              },
              {
                title: "নতুন",
                className: "r-th",
                children: [
                  {
                    title: "৭৫",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-xypo0YSc2pc",
                    key: "kON6kM1s8Z4-xypo0YSc2pc",
                  },
                ],
              },
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "৭৬",
                    className: "cl-no",
                    key: "hvjIFACXfCi-HllvX50cXC0",
                    dataIndex: "hvjIFACXfCi-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c76),
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট মহিলা",
                className: "r-th",
                children: [
                  {
                    title: "৭৭",
                    className: "cl-no",
                    dataIndex: "l4LrQzABAFJ-HllvX50cXC0",
                    key: "l4LrQzABAFJ-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c77),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "স্থায়ী পদ্ধতির সর্বমোট\nপ্রসব পরবর্তী  মেয়াদ উর্ত্তীণ",
                className: "r-th",
                children: [
                  {
                    title: "৭৮",
                    className: "cl-no",
                    dataIndex: "kON6kM1s8Z4-gwgu10gtwWO",
                    key: "kON6kM1s8Z4-gwgu10gtwWO",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "স্থায়ী পদ্ধতি সর্বমোট",
                className: "r-th",
                children: [
                  {
                    title: "৭৯",
                    className: "cl-no",
                    dataIndex: "QtXOq9pnTsG-HllvX50cXC0",
                    key: "QtXOq9pnTsG-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c79),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "পদ্ধতিভিত্তিক মোট \nগ্রহণকারী",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "স্বাভাবিক",
                className: "r-th",
                children: [
                  {
                    title: "৮০",
                    className: "cl-no",
                    dataIndex: "E9CrYbcTJgd-HllvX50cXC0",
                    key: "E9CrYbcTJgd-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c80),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "প্রসব পরবর্তী",
                className: "r-th",
                children: [
                  {
                    title: "৮১",
                    className: "cl-no",
                    dataIndex: "g5rtCDFKx4a-HllvX50cXC0",
                    key: "g5rtCDFKx4a-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c81),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট গ্রহণকারী",
                className: "r-th",
                children: [
                  {
                    title: "৮২",
                    className: "cl-no",
                    dataIndex: "uHxp0AiTojL-HllvX50cXC0",
                    key: "uHxp0AiTojL-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c82),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "গ্রহণকারীর হার (CAR) %",
                className: "r-th",
                children: [
                  {
                    title: "৮৩",
                    className: "cl-no",
                    dataIndex: "q9rD1VwwkXb-HllvX50cXC0",
                    key: "q9rD1VwwkXb-HllvX50cXC0",
                    render: (v, row, index) => {
                      // var n = reduceNanArrSum([parseInt(row["dYXyd0ZenSJ-HllvX50cXC0"]), parseInt(row["g1auXPxaILY-HllvX50cXC0"]), parseInt(row["hJKvjSRrdvo-HllvX50cXC0"]), parseInt(row["i27Oz4EeNWC-HllvX50cXC0"]), parseInt(row["ADLwP5Bj6Y0-HllvX50cXC0"]), parseInt(row["Ev66FqIgcam-HllvX50cXC0"]), parseInt(row["l4LrQzABAFJ-HllvX50cXC0"])]);
                      var d = parseInt(row["wSxlRUK6SEt-HllvX50cXC0"], 10);
                      var perc = (
                        (sumColumn(row, calculationKeys.c82) / d) *
                        100
                      ).toFixed(2);
                      return perc === "NaN" ? "-" : perc + "%";
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t2",
        children: [
          {
            className: "rm-b-t2",
            children: [
              {
                title:
                  "গর্ভপাত, এমআর এবং এমআরএম\nপরবর্তী পরিবার পরিকল্পনা পদ্ধতি গ্রহণকারীর সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "৮৪",
                    className: "cl-no",
                    dataIndex: "OaGf04NWcab-HllvX50cXC0",
                    key: "OaGf04NWcab-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mis4columns_reproductive_health = [
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "ক্রমিক নম্বর",
                    className: "r-th",
                    children: [sl_total_obj],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "নাম",
                    className: "r-th",
                    children: [
                      {
                        title: "",
                        className: "cl-no",
                        dataIndex: "orgUnit",
                        key: "orgUnit",
                        render: (v, row, i) => rejectSpecificWord(v, "union"),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "চলতি মাসে নবদম্পতির সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৮৫",
                        className: "cl-no",
                        dataIndex: "AhcdZnvRfqr-HllvX50cXC0",
                        key: "AhcdZnvRfqr-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "চলতি \nমাসে গর্ভবতীর সংখ্যা",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পুরাতন",
                    className: "r-th",
                    children: [
                      {
                        title: "৮৬",
                        className: "cl-no",
                        dataIndex: "cLJ23My3maB-zwYS9tKGWnW",
                        key: "cLJ23My3maB-zwYS9tKGWnW",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "নতুন",
                    className: "r-th",
                    children: [
                      {
                        title: "৮৭",
                        className: "cl-no",
                        dataIndex: "cLJ23My3maB-vtuABaZ5pDu",
                        key: "cLJ23My3maB-vtuABaZ5pDu",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মোট",
                    className: "r-th",
                    children: [
                      {
                        title: "৮৮",
                        className: "cl-no",
                        dataIndex: "cLJ23My3maB-O7Itlr7yCbJ",
                        key: "cLJ23My3maB-O7Itlr7yCbJ",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c88),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পূর্ববর্তী মাসে মোট গর্ভবতীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৮৯",
                        className: "cl-no",
                        dataIndex: "GRtLzqY08Bu-HllvX50cXC0",
                        key: "GRtLzqY08Bu-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "ইউনিয়নের সর্বমোট গর্ভবতীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৯০",
                        className: "cl-no",
                        dataIndex: "nOwLarTGQnO-HllvX50cXC0",
                        key: "nOwLarTGQnO-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "গর্ভকালীন  সেবার তথ্য",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-১",
                    className: "r-th",
                    children: [
                      {
                        title: "৯১",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-OywA5n3oe9h",
                        key: "srucdvMvBRI-OywA5n3oe9h",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-২",
                    className: "r-th",
                    children: [
                      {
                        title: "৯২",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-l5Y0spK7FJV",
                        key: "srucdvMvBRI-l5Y0spK7FJV",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-৩",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৩",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-HpfDgfqaoFU",
                        key: "srucdvMvBRI-HpfDgfqaoFU",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-৪",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৪",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-YEqHCl6GJsu",
                        key: "srucdvMvBRI-YEqHCl6GJsu",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "প্রসব পরবর্তী পরিবার পরিকল্পনা পদ্ধতি বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৫",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-TBdJvsJJBYw",
                        key: "srucdvMvBRI-TBdJvsJJBYw",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মিসোপ্রোস্টাল বড়ি সরবরাহপ্রাপ্ত গর্ভবতীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৬",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-kI8RWCoDf2M",
                        key: "srucdvMvBRI-kI8RWCoDf2M",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "৭.১% ক্লোরোহেক্সিডিন সরবরাহপ্রাপ্ত গর্ভবতীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৭",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-yJva186S4eX",
                        key: "srucdvMvBRI-yJva186S4eX",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "প্রসবপূর্ব রক্তক্ষরণ (APH) আক্রান্ত মায়ের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৮",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-KBlTUjYDgs3",
                        key: "srucdvMvBRI-KBlTUjYDgs3",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "২৪-৩৪ সপ্তাহের মধ্যে ইনজেকশন এন্টিন্যাটাল\nকরটিকোস্টেরয়েড প্রাপ্ত গর্ভবতী মায়ের  সংখ্যা (MCWC)",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৯",
                        className: "cl-no",
                        dataIndex: "srucdvMvBRI-DxqmDD6ap7I",
                        key: "srucdvMvBRI-DxqmDD6ap7I",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "প্রসব  সেবার তথ্য",
    children: [
      {
        title: "বাড়ী",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "প্রশিক্ষণপ্রাপ্ত ব্যক্তি দ্বারা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০০",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-Sk6kXif72pV",
                        key: "KTCnPcwxHuv-Sk6kXif72pV",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "প্রশিক্ষণ বিহীন ব্যক্তি দ্বারা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০১",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-h71vyw3aaLx",
                        key: "KTCnPcwxHuv-h71vyw3aaLx",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "হাসপাতাল/ ক্লিনিক",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    className: "r-th",
                    title: "স্বাভাবিক",
                    children: [
                      {
                        title: "১০২",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-oYKjcMjpq4B",
                        key: "KTCnPcwxHuv-oYKjcMjpq4B",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "সিজারিয়ান",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৩",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-hptqTp6wxIJ",
                        key: "KTCnPcwxHuv-hptqTp6wxIJ",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "অন্যান্য (ফর্সেপ/ভ্যাকুয়াম/ব্রিচ)",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৪",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-HueFyTnmThd",
                        key: "KTCnPcwxHuv-HueFyTnmThd",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "প্রসবের তৃতীয় ধাপের সক্রিয় \nব্যবস্থাপনা (AMTSL) অনুসরণ করে প্রসব করানো সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৫",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-a6cnPn0yREa",
                        key: "KTCnPcwxHuv-a6cnPn0yREa",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পার্টোগ্রাফ ব্যবহারের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৬",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-c4fbpZxqKv0",
                        key: "KTCnPcwxHuv-c4fbpZxqKv0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "প্রসবকালীন অতিরিক্ত রক্তক্ষরণ (IPH) আক্রান্ত মায়ের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৭",
                        className: "cl-no",
                        dataIndex: "KTCnPcwxHuv-ZCCCLB99UHG",
                        key: "KTCnPcwxHuv-ZCCCLB99UHG",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মিসোপ্রোস্টল বড়ি খাওয়ানোর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৮",
                        className: "cl-no",
                        dataIndex: "mtXtr0Id8Wl-HllvX50cXC0",
                        key: "mtXtr0Id8Wl-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "গর্ভপাত পরবর্তী সেবা (PAC) প্রদানের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৯",
                        className: "cl-no",
                        dataIndex: "ACKN7cUDhB5-HllvX50cXC0",
                        key: "ACKN7cUDhB5-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মারাত্নক প্রি-একলামপসিয়া/একলামপসিয়া রোগীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১১০",
                        className: "cl-no",
                        dataIndex: "zcxj4Bus0tb-HllvX50cXC0",
                        key: "zcxj4Bus0tb-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "প্রসবোত্তর সেবার তথ্য",
    children: [
      {
        title: "মা",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-১",
                    className: "r-th",
                    children: [
                      {
                        title: "১১১",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-hT3QBWEQMqf",
                        key: "OVwi8Lwj4pd-hT3QBWEQMqf",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-২",
                    children: [
                      {
                        title: "১১২",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-qa1vc72tvYm",
                        key: "OVwi8Lwj4pd-qa1vc72tvYm",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-৩",
                    children: [
                      {
                        title: "১১৩",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-ugcTBok7ch1",
                        key: "OVwi8Lwj4pd-ugcTBok7ch1",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-৪",
                    children: [
                      {
                        title: "১১৪",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-HXZ9KzIBP9p",
                        key: "OVwi8Lwj4pd-HXZ9KzIBP9p",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "বাড়ীতে ডেলিভারীর ক্ষেত্রে প্রশিক্ষণপ্রাপ্ত ব্যক্তি \nদ্বারা ২ দিনের মধ্যে প্রসবোত্তর সেবা গ্রহণকারী",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৫",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-KwmVHrSVhnc",
                        key: "OVwi8Lwj4pd-KwmVHrSVhnc",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "প্রসব পরবর্তী পরিবার পরিকল্পনা \nপদ্ধতি বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৬",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-rlM2TPWxt8m",
                        key: "OVwi8Lwj4pd-rlM2TPWxt8m",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "প্রসবোত্তর অতিরিক্ত রক্তক্ষরণ (PPH) \nআক্রান্ত মায়ের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৭",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-wC0DENUNV2z",
                        key: "OVwi8Lwj4pd-wC0DENUNV2z",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "নবজাতক",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "১ মিনিটের মধ্যে মোছানোর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৮",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-ZrnT2q1BTEa",
                        key: "OVwi8Lwj4pd-ZrnT2q1BTEa",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "নাড়ি কাটার পর ৭.১% ক্লোরোহক্সিডিন ব্যবহারের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৯",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-HZLRrnHzKyU",
                        key: "OVwi8Lwj4pd-HZLRrnHzKyU",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "নাড়ি কাটার পর মায়ের ত্বকে-ত্বক স্পর্শ প্রদানের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২০",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-QO3hQdgZE7z",
                        key: "OVwi8Lwj4pd-QO3hQdgZE7z",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "জন্মের ১ ঘন্টার মধ্যে বুকের দুধ খাওয়ানোর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২১",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-gZFTqV1GLmi",
                        key: "OVwi8Lwj4pd-gZFTqV1GLmi",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "জন্মকালীন শ্বাসকষ্টে আক্রান্ত  শিশুকে ব্যাগ ও \nমাস্ক ব্যবহার করে রিসাসিটেইট করার সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২২",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-p4bQgdRZ9qM",
                        key: "OVwi8Lwj4pd-p4bQgdRZ9qM",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-১",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৩",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-FqeFk1ml24E",
                        key: "OVwi8Lwj4pd-FqeFk1ml24E",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-১",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৪",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-Qww3loMQ7tW",
                        key: "OVwi8Lwj4pd-Qww3loMQ7tW",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-৩",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৫",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-lx5pe7Ogifx",
                        key: "OVwi8Lwj4pd-lx5pe7Ogifx",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "পরিদর্শন-৪",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৬",
                        className: "cl-no",
                        dataIndex: "OVwi8Lwj4pd-JwENNWEs6Dz",
                        key: "OVwi8Lwj4pd-JwENNWEs6Dz",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "রেফারকৃত",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "ঝুঁকিপূর্ণ/জটিল গর্ভবতীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৭",
                        className: "cl-no",
                        dataIndex: "Y1F59rRc4s7-Yc8qdhAoBOX",
                        key: "Y1F59rRc4s7-Yc8qdhAoBOX",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "একলাম্পসিয়া রোগীকে লোডিং ডোজ MgSO4 \nইনজেকশন দিয়ে রেফার করার সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৮",
                        className: "cl-no",
                        dataIndex: "Y1F59rRc4s7-UMt6eH8yHJZ",
                        key: "Y1F59rRc4s7-UMt6eH8yHJZ",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "প্রসবকালীন জটিলতায় রেফারের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৯",
                        className: "cl-no",
                        dataIndex: "Y1F59rRc4s7-dUpDjeC1iRH",
                        key: "Y1F59rRc4s7-dUpDjeC1iRH",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "প্রসবোত্তর জটিলতায় রেফারের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩০",
                        className: "cl-no",
                        dataIndex: "Y1F59rRc4s7-jUvg05aH6aR",
                        key: "Y1F59rRc4s7-jUvg05aH6aR",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "নবজাতককে জটিলতার জন্য প্রেরণের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩১",
                        className: "cl-no",
                        dataIndex: "Y1F59rRc4s7-I6ybgVG0P6Q",
                        key: "Y1F59rRc4s7-I6ybgVG0P6Q",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "বন্ধ্যা দম্পতির তথ্য",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "চিকিৎসা/পরামর্শ প্রাপ্ত",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩২",
                        className: "cl-no",
                        dataIndex: "ZnJ1FXff282-wN6uyKEH6zd",
                        key: "ZnJ1FXff282-wN6uyKEH6zd",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "রেফারকৃত",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩৩",
                        className: "cl-no",
                        dataIndex: "ZnJ1FXff282-CGpNk7hc1VQ",
                        key: "ZnJ1FXff282-CGpNk7hc1VQ",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "টিটি প্রাপ্ত মহিলার সংখ্যা",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "১ম",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩৪",
                        className: "cl-no",
                        dataIndex: "HAiusOwj9d5-QHn1D0itUDt",
                        key: "HAiusOwj9d5-QHn1D0itUDt",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "২য়",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩৫",
                        className: "cl-no",
                        dataIndex: "HAiusOwj9d5-yTObC51KICG",
                        key: "HAiusOwj9d5-yTObC51KICG",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "৩য়",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩৬",
                        className: "cl-no",
                        dataIndex: "HAiusOwj9d5-tILpufHDPR4",
                        key: "HAiusOwj9d5-tILpufHDPR4",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "৪র্থ",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩৭",
                        className: "cl-no",
                        dataIndex: "HAiusOwj9d5-qgsgEwBGEp5",
                        key: "HAiusOwj9d5-qgsgEwBGEp5",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "৫ম",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩৮",
                        className: "cl-no",
                        dataIndex: "HAiusOwj9d5-gwLqAPoyjZD",
                        key: "HAiusOwj9d5-gwLqAPoyjZD",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "ইসিপি গ্রহণকারীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৩৯",
                        className: "cl-no",
                        dataIndex: "sqjv0MUspDq-HllvX50cXC0",
                        key: "sqjv0MUspDq-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "কিশোর-কিশোরীর সেবা (১০-১৯ বৎসর)",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "বয়ঃসন্ধিকালীন পরিবর্তন বিষয়ে কাাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪০",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-VLVmSRoqoB0",
                        key: "SzrCZnQyKK3-VLVmSRoqoB0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "বাল্যবিবাহ ও কিশোরী মাতৃত্বের কুফল \nবিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪১",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-HFXntwgoWyd",
                        key: "SzrCZnQyKK3-HFXntwgoWyd",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "কিশোরীকে আয়রন ফলিক এসিড বড়ি \nখাবার বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪২",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-dl4OxrVnLEH",
                        key: "SzrCZnQyKK3-dl4OxrVnLEH",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "আয়রন ফলিক এসিড বড়ি সরবরাহপ্রাপ্ত কিশোরীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪৩",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-N21gIYtCssz",
                        key: "SzrCZnQyKK3-N21gIYtCssz",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "প্রজননতন্ত্রের সংক্রমন ও যৌনবাহিত রোগ \nবিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪৪",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-MIKY77ZNNyF",
                        key: "SzrCZnQyKK3-MIKY77ZNNyF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "প্রজননতন্ত্রের সংক্রমণ ও যৌনবাহিত রোগ নিরাময়ে চিকিৎসা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪৫",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-NSOUD9OGZDS",
                        key: "SzrCZnQyKK3-NSOUD9OGZDS",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "বিভিন্ন ধরণের পুষ্টিকর ও সুষম \nখাবার বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪৬",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-dSpYt8AKFh1",
                        key: "SzrCZnQyKK3-dSpYt8AKFh1",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "কৈশোর সহিংসতা প্রতিরোধ বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪৭",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-Gpo0OFXSwZW",
                        key: "SzrCZnQyKK3-Gpo0OFXSwZW",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "মানসিক সমস্যা এবং মাদকাসক্তি \nপ্রতিরোধ ও নিরাময় বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪৮",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-dLZBy461DKe",
                        key: "SzrCZnQyKK3-dLZBy461DKe",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title:
                      "কিশোর-কিশোরীর ব্যক্তিগত পরিষ্কার পরিচ্ছন্নতা ও \nকিশোরীর স্যানিটারি প্যাড ব্যবহার বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১৪৯",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-gnYarzpNPsD",
                        key: "SzrCZnQyKK3-gnYarzpNPsD",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "রেফার",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫০",
                        className: "cl-no",
                        dataIndex: "SzrCZnQyKK3-Uz0NBbkzRSC",
                        key: "SzrCZnQyKK3-Uz0NBbkzRSC",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "RTI/STI সংক্রান্ত চিকিৎসা প্রদানকৃত রোগীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫১",
                        className: "cl-no",
                        dataIndex: "FE01YeTJ0MT-HllvX50cXC0",
                        key: "FE01YeTJ0MT-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "এমআর (এমভিএ) সেবা প্রদানের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫২",
                        className: "cl-no",
                        dataIndex: "bO9SMMte6XA-HllvX50cXC0",
                        key: "bO9SMMte6XA-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "এমআরএম (ঔষধের মাধ্যমে এমআর) \nসেবা প্রদানের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫৩",
                        className: "cl-no",
                        dataIndex: "ZYUH94Mb2wY-HllvX50cXC0",
                        key: "ZYUH94Mb2wY-HllvX50cXC0",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "জরায়ুর মুখ  ও স্তন ক্যান্সার স্ক্রীনিং",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মোট VIA পজিটিভ",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫৪",
                        className: "cl-no",
                        dataIndex: "HJwOIOsMJny-PA3sOER6zQU",
                        key: "HJwOIOsMJny-PA3sOER6zQU",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মোট VIA নেগেটিভ",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫৫",
                        className: "cl-no",
                        dataIndex: "HJwOIOsMJny-W4DI8f4Ckpv",
                        key: "HJwOIOsMJny-W4DI8f4Ckpv",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মোট CBE পজিটিভ",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫৬",
                        className: "cl-no",
                        dataIndex: "HJwOIOsMJny-U6z7qpQBSWb",
                        key: "HJwOIOsMJny-U6z7qpQBSWb",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                className: "rm-b-t",
                children: [
                  {
                    title: "মোট CBE নেগেটিভ",
                    className: "r-th",
                    children: [
                      {
                        title: "১৫৭",
                        className: "cl-no",
                        dataIndex: "HJwOIOsMJny-OKTrZOgRf3N",
                        key: "HJwOIOsMJny-OKTrZOgRf3N",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mis4columns_child_birth = [
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ক্রমিক নম্বর",
                className: "r-th",
                children: [sl_total_obj],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "নাম",
                className: "r-th",
                children: [
                  {
                    title: "",
                    className: "cl-no",
                    dataIndex: "orgUnit",
                    key: "orgUnit",
                    render: (v, row, i) => rejectSpecificWord(v, "union"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "কেএমসি প্রপ্ত নবজাতকের সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৫৮",
                    className: "cl-no",
                    dataIndex: "a1FZGLqeD4V-HllvX50cXC0",
                    key: "a1FZGLqeD4V-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "টিকা প্রাপ্ত (০-১৫ মাস বয়সী) শিশুর সংখ্যা",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "বিসিজি",
                className: "r-th",
                children: [
                  {
                    title: "১৫৯",
                    className: "cl-no",
                    dataIndex: "GtBJHmH7uJv-HllvX50cXC0",
                    key: "GtBJHmH7uJv-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "ওপিভি ও পেন্টাভ্যালেন্ট \n(ডিপিটি, হেপ-বি, হিব)",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "১",
                children: [
                  {
                    title: "১৬০",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-P0PWVidnxzu",
                    key: "jvgDq4zdsuf-P0PWVidnxzu",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "২",
                children: [
                  {
                    title: "১৬১",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-JwCrVhE35kh",
                    key: "jvgDq4zdsuf-JwCrVhE35kh",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "৩",
                children: [
                  {
                    title: "১৬২",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-Xg2D358Qwsh",
                    key: "jvgDq4zdsuf-Xg2D358Qwsh",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "পিসিভি টিকা",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "১",
                children: [
                  {
                    title: "১৬৩",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-WtKTyWJ3Q72",
                    key: "jvgDq4zdsuf-WtKTyWJ3Q72",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "২",
                children: [
                  {
                    title: "১৬৪",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-ZlLSjPq9VXq",
                    key: "jvgDq4zdsuf-ZlLSjPq9VXq",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "৩",
                children: [
                  {
                    title: "১৬৫",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-JkOHUdQU3Y5",
                    key: "jvgDq4zdsuf-JkOHUdQU3Y5",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "বিওপিভি",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "১",
                children: [
                  {
                    title: "১৬৬",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-VE14yAWe9Co",
                    key: "jvgDq4zdsuf-VE14yAWe9Co",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "২",
                children: [
                  {
                    title: "১৬৭",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-AWydalEhvmX",
                    key: "jvgDq4zdsuf-AWydalEhvmX",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "৩",
                children: [
                  {
                    title: "১৬৮",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-M218AglHN9e",
                    key: "jvgDq4zdsuf-M218AglHN9e",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "আইপিভি\n(ফ্রাকশনাল)",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "১",
                children: [
                  {
                    title: "১৬৯",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-Ttt6QqQX643",
                    key: "jvgDq4zdsuf-Ttt6QqQX643",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "২",
                children: [
                  {
                    title: "১৭০",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-a8wtTFg8dDd",
                    key: "jvgDq4zdsuf-a8wtTFg8dDd",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "এমআর টিকা",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "১",
                children: [
                  {
                    title: "১৭১",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-AJRamDi3tTC",
                    key: "jvgDq4zdsuf-AJRamDi3tTC",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "২",
                children: [
                  {
                    title: "১৭২",
                    className: "cl-no",
                    dataIndex: "jvgDq4zdsuf-q6Tes4X8YmN",
                    key: "jvgDq4zdsuf-q6Tes4X8YmN",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "রেফারকৃত\nশিশুর সংখ্যা",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "খুব মারাত্মক রোগ",
                className: "r-th",
                children: [
                  {
                    title: "১৭৩",
                    className: "cl-no",
                    dataIndex: "TyoTzrQzxym-nnxebrCb49Y",
                    key: "TyoTzrQzxym-nnxebrCb49Y",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "নিউমোনিয়া",
                className: "r-th",
                children: [
                  {
                    title: "১৭৪",
                    className: "cl-no",
                    dataIndex: "TyoTzrQzxym-OI8J1ubkdme",
                    key: "TyoTzrQzxym-OI8J1ubkdme",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "ডায়রিয়া",
                className: "r-th",
                children: [
                  {
                    title: "১৭৫",
                    className: "cl-no",
                    dataIndex: "TyoTzrQzxym-YCp4FJHkhiZ",
                    key: "TyoTzrQzxym-YCp4FJHkhiZ",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mis4columns_death = [
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ক্রমিক নম্বর",
                className: "r-th",
                children: [sl_total_obj],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "নাম",
                className: "r-th",
                children: [
                  {
                    title: "",
                    className: "cl-no",
                    dataIndex: "orgUnit",
                    key: "orgUnit",
                    render: (v, row, i) => rejectSpecificWord(v, "union"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "জন্ম-মৃত্যু",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "মোট জীবিত জন্মের সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৭৬",
                    className: "cl-no",
                    dataIndex: "StpywjtauEL-HllvX50cXC0",
                    key: "StpywjtauEL-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title:
                  "কম জন্ম ওজনে (জন্ম ওজন ২৫০০ গ্রামের কম) \nজন্মগ্রহণকারী নবজাতক এর সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৭৭",
                    className: "cl-no",
                    dataIndex: "CPxjYFsIpLO-HllvX50cXC0",
                    key: "CPxjYFsIpLO-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title:
                  "কম জন্ম ওজনে (জন্ম ওজন ২০০০ গ্রামের কম) \nজন্মগ্রহণকারী নবজাতক এর সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৭৮",
                    className: "cl-no",
                    dataIndex: "fJszvOvdOvq-HllvX50cXC0",
                    key: "fJszvOvdOvq-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "অপরিণত (৩৭ সপ্তাহের পূর্বে জন্ম) \nনবজাতক এর সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৭৯",
                    className: "cl-no",
                    dataIndex: "wqIEX7rr4wv-HllvX50cXC0",
                    key: "wqIEX7rr4wv-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "মৃত জন্ম (Still Birth)",
                className: "r-th",
                children: [
                  {
                    title: "১৮০",
                    className: "cl-no",
                    dataIndex: "tOM9ELt87am-HllvX50cXC0",
                    key: "tOM9ELt87am-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "মৃত্যুর সংখ্যা",
        children: [
          {
            title: "এক বৎসরের কম\nমৃত শিশুর সংখ্যা",
            children: [
              {
                title: "০-৭ দিন",
                className: "r-th",
                children: [
                  {
                    title: "১৮১",
                    className: "cl-no",
                    dataIndex: "J8KFxwx0yxp-Tkfqj6qEPIl",
                    key: "J8KFxwx0yxp-Tkfqj6qEPIl",
                  },
                ],
              },
              {
                title: "৮-২৮ দিন",
                className: "r-th",
                children: [
                  {
                    title: "১৮২",
                    className: "cl-no",
                    dataIndex: "J8KFxwx0yxp-HB928gipxeM",
                    key: "J8KFxwx0yxp-HB928gipxeM",
                  },
                ],
              },
              {
                title: "২৯ দিন-<১ বৎসর",
                className: "r-th",
                children: [
                  {
                    title: "১৮৩",
                    className: "cl-no",
                    dataIndex: "J8KFxwx0yxp-dY5ErrARtaE",
                    key: "J8KFxwx0yxp-dY5ErrARtaE",
                  },
                ],
              },
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "১৮৪",
                    className: "cl-no",
                    dataIndex: "J8KFxwx0yxp-Pi4ivWAn9ND",
                    key: "J8KFxwx0yxp-Pi4ivWAn9ND",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c184),
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "১-<৫ বৎসর মৃত শিশুর সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৮৫",
                    className: "cl-no",
                    dataIndex: "d3x8N49jKcE-HllvX50cXC0",
                    key: "d3x8N49jKcE-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "মাতৃ মৃত্যুর সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৮৬",
                    className: "cl-no",
                    dataIndex: "FisCBtI669Z-HllvX50cXC0",
                    key: "FisCBtI669Z-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "অন্যান্য মৃত্যুসংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৮৭",
                    className: "cl-no",
                    dataIndex: "Mf7lR1ygdCg-HllvX50cXC0",
                    key: "Mf7lR1ygdCg-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "সর্বমোট মৃত্যুর সংখ্যা",
                className: "r-th",
                children: [
                  {
                    title: "১৮৮",
                    className: "cl-no",
                    dataIndex: "rmR8X8A2pY3-HllvX50cXC0",
                    key: "rmR8X8A2pY3-HllvX50cXC0",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c188),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mis4columns_patient_service = [
  {
    className: "rm-b-t2",
    children: [
      {
        title: "ক্রমিক নম্বর",
        className: "r-th",
        children: [sl_total_obj],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        title: "নাম",
        className: "r-th",
        children: [
          {
            title: "",
            dataIndex: "orgUnit",
            key: "orgUnit",
            className: "r-th",
            render: (v, row, i) => rejectSpecificWord(v, "union"),
          },
        ],
      },
    ],
  },
  {
    title: "বহির্বিভাগে সেবা গ্রহণকারী রোগী",
    children: [
      {
        title: "পুরুষ",
        className: "r-th",
        children: [
          {
            title: "১৮৯",
            className: "cl-no",
            dataIndex: "CZJ9xKXHB1b-AECAYBQ3Ipz",
            key: "CZJ9xKXHB1b-AECAYBQ3Ipz",
          },
        ],
      },
      {
        title: "মহিলা",
        className: "r-th",
        children: [
          {
            title: "১৯০",
            className: "cl-no",
            dataIndex: "CZJ9xKXHB1b-m4mOa30cGdI",
            key: "CZJ9xKXHB1b-m4mOa30cGdI",
          },
        ],
      },
      {
        title: "শিশু (০-১ বছর)",
        className: "r-th",
        children: [
          {
            title: "১৯১",
            className: "cl-no",
            dataIndex: "CZJ9xKXHB1b-RfDn9jHfhT1",
            key: "CZJ9xKXHB1b-RfDn9jHfhT1",
          },
        ],
      },
      {
        title: "শিশু (১-৫ বছর)",
        className: "r-th",
        children: [
          {
            title: "১৯২",
            className: "cl-no",
            dataIndex: "CZJ9xKXHB1b-Ud8SVjjZiF3",
            key: "CZJ9xKXHB1b-Ud8SVjjZiF3",
          },
        ],
      },
      {
        title: "অন্যান্য",
        className: "r-th",
        children: [
          {
            title: "১৯৩",
            className: "cl-no",
            dataIndex: "CZJ9xKXHB1b-sB1mvxceuik",
            key: "CZJ9xKXHB1b-sB1mvxceuik",
          },
        ],
      },
      {
        title: "মোট",
        className: "r-th",
        children: [
          {
            title: "১৯৪",
            className: "cl-no",
            dataIndex: "CZJ9xKXHB1b-DUd2rO6mGEo",
            key: "CZJ9xKXHB1b-DUd2rO6mGEo",
          },
        ],
      },
    ],
  },
  {
    title: "অনতবিভাগে ভর্তি রোগীর সংখ্যা",
    children: [
      {
        title: "মহিলা",
        className: "r-th",
        children: [
          {
            title: "১৯৫",
            className: "cl-no",
            dataIndex: "gKIyNW9fEEq-CbHc1uR33jU",
            key: "gKIyNW9fEEq-CbHc1uR33jU",
          },
        ],
      },
      {
        title: "শিশু (০-১ বছর)",
        className: "r-th",
        children: [
          {
            title: "১৯৬",
            className: "cl-no",
            dataIndex: "gKIyNW9fEEq-WAWYUctZg4r",
            key: "gKIyNW9fEEq-WAWYUctZg4r",
          },
        ],
      },
      {
        title: "শিশু (১-৫ বছর)",
        className: "r-th",
        children: [
          {
            title: "১৯৭",
            className: "cl-no",
            dataIndex: "gKIyNW9fEEq-VGcSJ95QZ4J",
            key: "gKIyNW9fEEq-VGcSJ95QZ4J",
          },
        ],
      },
      {
        title: "মোট",
        className: "r-th",
        children: [
          {
            title: "১৯৮",
            className: "cl-no",
            dataIndex: "gKIyNW9fEEq-bMdskeLmrio",
            key: "gKIyNW9fEEq-bMdskeLmrio",
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        title:
          "কেন্দ্রে কয়টি স্বাস্থ্য শিক্ষা (বিসিসি) \nকার্যক্রম সমপন্ন করা হয়েছে",
        className: "r-th",
        children: [
          {
            title: "১৯৯",
            className: "cl-no",
            dataIndex: "M8W5l3GesTj-HllvX50cXC0",
            key: "M8W5l3GesTj-HllvX50cXC0",
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        title:
          "এসএসিএমও (SACMO) কর্তৃক কয়টি স্কুলে স্বাস্থ্য শিক্ষা \n(বিসিসি) কার্যক্রম সম্পাদন করা হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০০",
            className: "cl-no",
            dataIndex: "PudzEWqjINH-HllvX50cXC0",
            key: "PudzEWqjINH-HllvX50cXC0",
          },
        ],
      },
    ],
  },
];

export const mis4columns_nutrition = [
  {
    className: "rm-b-t2",
    children: [
      {
        title: "ক্রমিক নম্বর",
        className: "r-th",
        children: [sl_total_obj],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        title: "নাম",
        className: "r-th",
        children: [
          {
            title: "",
            dataIndex: "orgUnit",
            key: "orgUnit",
            className: "r-th",
            render: (v, row, i) => rejectSpecificWord(v, "union"),
          },
        ],
      },
    ],
  },
  {
    title: "পুুষ্টি সেবা",
    children: [
      {
        title:
          "আইওয়াইসিএফ, আইএফএ, ভিটামিন-এ, হাত ধোয়া, \nমায়ের পুষ্টি বিষয়ক কাউন্সেলিং",
        className: "r-th",
        children: [
          {
            title: "২০১",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-vTMRUREeodD",
            key: "o8AyPjDCB7F-vTMRUREeodD",
          },
        ],
      },
      {
        title:
          "কতজন গর্ভবতী  মাকে আয়রন ফলিক এসিড এবং \nক্যালসিয়াম বড়ি দেওয়া হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০২",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-M6AX7XspPFY",
            key: "o8AyPjDCB7F-M6AX7XspPFY",
          },
        ],
      },
      {
        title:
          "কতজন ০-২৩ মাস বয়সী শিশুর মাকে আয়রন \nফলিক এসিড এবং ক্যালসিয়াম বড়ি দেওয়া হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০৩",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-v98cCSBIFVl",
            key: "o8AyPjDCB7F-v98cCSBIFVl",
          },
        ],
      },
      {
        title: "কত জন শিশুকে ৬ মাস পর্যন্ত শুধুমাত্র বুকের দুধ \nখাওয়ানো হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০৪",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-sAo3qmrA15w",
            key: "o8AyPjDCB7F-sAo3qmrA15w",
          },
        ],
      },
      {
        title: "কতজন ৬-২৩ মাস বয়সী শিশুকে পরিপূরক \nখাবার খাওয়ানো হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০৫",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-Nv8wMLLjZ1s",
            key: "o8AyPjDCB7F-Nv8wMLLjZ1s",
          },
        ],
      },
      {
        title: "কতজন ২৪-৫৯ মাস বয়সী শিশুকে পরিপূরক \nখাবার খাওয়ানো হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০৬",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-SBi7rHelvEE",
            key: "o8AyPjDCB7F-SBi7rHelvEE",
          },
        ],
      },
      {
        title:
          "কতজন ৬-২৩ মাস বয়সী শিশুকে মাল্টিপল \nমাইক্রোনিউট্রিয়েন্ট পাউডার (এমএনপি) দেয়া হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০৭",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-IVMTwvL5zZT",
            key: "o8AyPjDCB7F-IVMTwvL5zZT",
          },
        ],
      },
      {
        title:
          "কতজন ২৪-৫৯ মাস বয়সী শিশুকে মাল্টিপল \nমাইক্রোনিউট্রিয়েন্ট পাউডার (এমএনপি) দেয়া হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০৮",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-wsHvAxASLkN",
            key: "o8AyPjDCB7F-wsHvAxASLkN",
          },
        ],
      },
      {
        title: "কতজন ৬-৫৯ মাস বয়সী শিশুকে ভিটামিন-এ \nদেয়া হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২০৯",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-kdkgVZgAWkQ",
            key: "o8AyPjDCB7F-kdkgVZgAWkQ",
          },
        ],
      },
      {
        title: "কতজন ২৪-৫৯ মাস বয়সী শিশুকে কৃমিনাশক \nবড়ি দেয়া হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২১০",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-KYDHRv1lbe9",
            key: "o8AyPjDCB7F-KYDHRv1lbe9",
          },
        ],
      },
      {
        title:
          "কতজন ৬-৫৯ মাস বয়সী ডায়রিয়া আক্রান্ত শিশুকে \nখাবার স্যালাইনের সাথে জিংক বড়ি দেয়া হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২১১",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-FvgVDuQOpNq",
            key: "o8AyPjDCB7F-FvgVDuQOpNq",
          },
        ],
      },
      {
        title: "কতজন ৬-৫৯ মাস বয়সী শিশুকে \nগ্রোথ মনিটরিং (GMP) করা হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২১২",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-uitxJSufQyt",
            key: "o8AyPjDCB7F-uitxJSufQyt",
          },
        ],
      },
      {
        title:
          "কতজন ৬-৫৯ মাস বয়সী MAM (মাঝারি তীব্র অপুষ্টি) \nআক্রান্ত শিশুকে সনাক্ত এবং চিকিৎসা প্রদান  করা হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২১৩",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-RR8eCc2ceFi",
            key: "o8AyPjDCB7F-RR8eCc2ceFi",
          },
        ],
      },
      {
        title:
          "কতজন ৬-৫৯ মাস বয়সী SAM (মারাত্বক তীব্র অপুষ্টি) \nআক্রান্ত শিশুকে সনাক্ত করা হয়েছে এবং রেফার করা হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২১৪",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-FN8PH6WuKId",
            key: "o8AyPjDCB7F-FN8PH6WuKId",
          },
        ],
      },
      {
        title:
          "কতজন ০-৫৯ মাস বয়সী শিশুর Stunting \n(বয়সের তুলনায় কম উচ্চতা সম্পন্ন) সনাক্ত করা হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২১৫",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-enEJ5amAB1i",
            key: "o8AyPjDCB7F-enEJ5amAB1i",
          },
        ],
      },
      {
        title:
          "কতজন ০-৫৯ মাস বয়সী শিশুর Wasting \n(উচ্চতার তুলনায় কম ওজন সম্পন্ন) সনাক্ত",
        className: "r-th",
        children: [
          {
            title: "২১৬",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-l6AKd67audU",
            key: "o8AyPjDCB7F-l6AKd67audU",
          },
        ],
      },
      {
        title:
          "কতজন ০-৫৯ মাস বয়সী শিশুর Underweight \n(বয়সের তুলনায় কম ওজন সম্পন্ন) সনাক্ত করা হয়েছে",
        className: "r-th",
        children: [
          {
            title: "২১৭",
            className: "cl-no",
            dataIndex: "o8AyPjDCB7F-Dhcr6ZVgBCA",
            key: "o8AyPjDCB7F-Dhcr6ZVgBCA",
          },
        ],
      },
    ],
  },
];

export const mis4columns_fwa_fpi_service = [
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "ক্রমিক নম্বর",
            className: "r-th rm-b-t1",
            children: [sl_total_obj],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "নাম",
            className: "r-th rm-b-t1",
            children: [
              {
                title: "",
                className: "cl-no",
                dataIndex: "orgUnit",
                key: "orgUnit",
                render: (v, row, i) => rejectSpecificWord(v, "union"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "পরিবার কল্যাণ সহকারী কর্তৃক সম্পাদিত সেবা কার্যক্রম",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "স্যাটলাইট ক্লিনিকে উপস্থিতি",
            className: "r-th",
            children: [
              {
                title: "২১৮",
                className: "cl-no",
                dataIndex: "qBBdHlg8E3o-DlVX9y0INhG",
                key: "qBBdHlg8E3o-DlVX9y0INhG",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "ইপিআই সেশনে  উপস্থিতি",
            className: "r-th",
            children: [
              {
                title: "২১৯",
                className: "cl-no",
                dataIndex: "qBBdHlg8E3o-CyTK5LCPbtJ",
                key: "qBBdHlg8E3o-CyTK5LCPbtJ",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "কমিউনিটি ক্লিনিকে উপস্থিতি",
            className: "r-th",
            children: [
              {
                title: "২২০",
                className: "cl-no",
                dataIndex: "qBBdHlg8E3o-IVpDux97RzQ",
                key: "qBBdHlg8E3o-IVpDux97RzQ",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "অনুষ্ঠিত উঠান বৈঠকে উপস্থিতি",
            className: "r-th",
            children: [
              {
                title: "২২১",
                className: "cl-no",
                dataIndex: "qBBdHlg8E3o-KCNMJboeBWe",
                key: "qBBdHlg8E3o-KCNMJboeBWe",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "এফপিআই কর্তৃক প্রদত্ত সেবা কার্যক্রম",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "কতজনকে NSV সম্পর্কে উদ্বুদ্ধ করা হয়েছে",
            className: "r-th",
            children: [
              {
                title: "২২২",
                className: "cl-no",
                dataIndex: "FYri687GxCv-IJLPSkxidgR",
                key: "FYri687GxCv-IJLPSkxidgR",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "এভি ভ্যানের মাধ্যমে \nপ্রদর্শনির আয়োজনের  সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২২৩",
                className: "cl-no",
                dataIndex: "FYri687GxCv-JPdOELeIbu8",
                key: "FYri687GxCv-JPdOELeIbu8",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "কতদিন দম্পতির উপাত্ত \nযাচাই করা হয়েছে",
            className: "r-th",
            children: [
              {
                title: "২২৪",
                className: "cl-no",
                dataIndex: "FYri687GxCv-rNsqREqSGRq",
                key: "FYri687GxCv-rNsqREqSGRq",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "কতজন দম্পতির উপাত্ত \nযাচাই করা হয়েছে",
            className: "r-th",
            children: [
              {
                title: "২২৫",
                className: "cl-no",
                dataIndex: "FYri687GxCv-k2WQB4PIaqC",
                key: "FYri687GxCv-k2WQB4PIaqC",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "কতবার  FWA রেজিস্টার \nযাচাই করা হয়েছে",
            className: "r-th",
            children: [
              {
                title: "২২৬",
                className: "cl-no",
                dataIndex: "FYri687GxCv-X4o8iokuZau",
                key: "FYri687GxCv-X4o8iokuZau",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "দলগত সভা/ উঠান বৈঠক",
            className: "r-th",
            children: [
              {
                title: "২২৭",
                className: "cl-no",
                dataIndex: "FYri687GxCv-lMCGnLVUaQO",
                key: "FYri687GxCv-lMCGnLVUaQO",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "পাক্ষিক সভা",
            className: "r-th",
            children: [
              {
                title: "২২৮",
                className: "cl-no",
                dataIndex: "FYri687GxCv-pMYWcIcbbH3",
                key: "FYri687GxCv-pMYWcIcbbH3",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "ইউনিয়ন পরিবার \nপরিকল্পনা কমিটির সভা",
            className: "r-th",
            children: [
              {
                title: "২২৯",
                className: "cl-no",
                dataIndex: "FYri687GxCv-zpXCVwxEtZa",
                key: "FYri687GxCv-zpXCVwxEtZa",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "স্যাটেলাইট ক্লিনিকে উপস্থিতি",
            className: "r-th",
            children: [
              {
                title: "২৩০",
                className: "cl-no",
                dataIndex: "FYri687GxCv-m1lBTJeOF9e",
                key: "FYri687GxCv-m1lBTJeOF9e",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title:
              "পরিবার কল্যাণ পরিদর্শিকার জন্য \nস্যাটেলাইট ক্লিনিকের লক্ষ্যমাত্রা",
            className: "r-th rm-b-t1",
            children: [
              {
                title: "২৩১",
                className: "cl-no",
                dataIndex: "XiwkLUMnbIz-HllvX50cXC0",
                key: "XiwkLUMnbIz-HllvX50cXC0",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title:
              "পরিবার কল্যাণ পরিদর্শিকা কর্তৃক \nঅনুষ্ঠিত স্যাটেলাইট ক্লিনিক",
            className: "r-th rm-b-t1",
            children: [
              {
                title: "২৩২",
                className: "cl-no",
                dataIndex: "RSdIZoRCU5i-HllvX50cXC0",
                key: "RSdIZoRCU5i-HllvX50cXC0",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "SACMO কর্তৃক NSV ক্লায়েন্ট \nরেফার লক্ষ্যমাত্রা",
            className: "r-th rm-b-t1",
            children: [
              {
                title: "২৩৩",
                className: "cl-no",
                dataIndex: "kjrgaqUbXkg-HllvX50cXC0",
                key: "kjrgaqUbXkg-HllvX50cXC0",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "SACMO কর্র্তৃক NSV ক্লায়েন্ট রেফার সংখ্যা",
            className: "r-th rm-b-t1",
            children: [
              {
                title: "২৩৪",
                className: "cl-no",
                dataIndex: "zdSxPmUCOSk-HllvX50cXC0",
                key: "zdSxPmUCOSk-HllvX50cXC0",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "২৪/৭ ডেলিভারী সেবা  \nপ্রদানকারী  কেন্দ্রের সংখ্যা ",
            className: "r-th rm-b-t1",
            children: [
              {
                title: "২৩৫",
                className: "cl-no",
                dataIndex: "zyGev3nV0qb-HllvX50cXC0",
                key: "zyGev3nV0qb-HllvX50cXC0",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mis4columns_other_service = [
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "ক্রমিক নম্বর",
            className: "r-th rm-b-t1",
            children: [sl_total_obj],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "নাম",
            className: "r-th rm-b-t1",
            children: [
              {
                title: "",
                className: "cl-no",
                dataIndex: "orgUnit",
                key: "orgUnit",
                render: (v, row, i) => rejectSpecificWord(v, "union"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "প্রাতিষ্ঠানিক প্রসব সেবার তথ্য",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title:
              "ই্উনয়িন স্বাস্থ্য ও পরবিার \nকল্যাণ কেন্দ্রে স্বাভাবিক প্রসব সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২৩৬",
                className: "cl-no",
                dataIndex: "WHWLot4lmCL-HllvX50cXC0",
                key: "WHWLot4lmCL-HllvX50cXC0",
              },
            ],
          },
        ],
      },
      {
        title: "মা ও শিশু কল্যাণ কেন্দ্র",
        children: [
          {
            title: "স্বাভাবিক প্রসব সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২৩৭",
                className: "cl-no",
                dataIndex: "Ze7GQHdNyKm-HdziIYPkAtt",
                key: "Ze7GQHdNyKm-HdziIYPkAtt",
              },
            ],
          },
          {
            title: "সিজারিয়ান প্রসব সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২৩৮",
                className: "cl-no",
                dataIndex: "Ze7GQHdNyKm-NGPXplKeNWo",
                key: "Ze7GQHdNyKm-NGPXplKeNWo",
              },
            ],
          },
          {
            title: "অন্যান্য প্রসব সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২৩৯",
                className: "cl-no",
                dataIndex: "Ze7GQHdNyKm-VdbPEBDNjJC",
                key: "Ze7GQHdNyKm-VdbPEBDNjJC",
              },
            ],
          },
          {
            title: "মোট",
            className: "r-th",
            children: [
              {
                title: "২৪০",
                className: "cl-no",
                dataIndex: "Ze7GQHdNyKm-RyyEkEY2Bbv",
                key: "Ze7GQHdNyKm-RyyEkEY2Bbv",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "অসুস্থ শিশুর সমন্বিত \nচিকিৎসা ব্যবস্থাপনা (IMCI)",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "০-৫৯ দিন বয়সী শিশু",
            className: "r-th",
            children: [
              {
                title: "২৪১",
                className: "cl-no",
                dataIndex: "m6Tl8NjAZOA-HllvX50cXC0",
                key: "m6Tl8NjAZOA-HllvX50cXC0",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "২ মাস-৫ বছর বয়সী শিশু",
            className: "r-th",
            children: [
              {
                title: "২৪২",
                className: "cl-no",
                dataIndex: "g4gtpzP6aWE-HllvX50cXC0",
                key: "g4gtpzP6aWE-HllvX50cXC0",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mis4columns_csba = [
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "ক্রমিক নম্বর",
            className: "r-th",
            children: [sl_total_obj],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t1",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "নাম",
            className: "r-th",
            children: [
              {
                title: "২",
                dataIndex: "orgUnit",
                key: "orgUnit",
                className: "cl-no",
                render: (v, row, i) => rejectSpecificWord(v, "union"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "গর্ভকালীন  সেবার তথ্য",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "পরিদর্শন-১",
            className: "r-th",
            children: [
              {
                title: "৩",
                className: "cl-no",
                dataIndex: "U4J0MJPqnCF-OywA5n3oe9h",
                key: "U4J0MJPqnCF-OywA5n3oe9h",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "পরিদর্শন-২",
            className: "r-th",
            children: [
              {
                title: "৪",
                className: "cl-no",
                dataIndex: "U4J0MJPqnCF-l5Y0spK7FJV",
                key: "U4J0MJPqnCF-l5Y0spK7FJV",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "পরিদর্শন-৩",
            className: "r-th",
            children: [
              {
                title: "৫",
                className: "cl-no",
                dataIndex: "U4J0MJPqnCF-HpfDgfqaoFU",
                key: "U4J0MJPqnCF-HpfDgfqaoFU",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "পরিদর্শন-৪",
            className: "r-th",
            children: [
              {
                title: "৬",
                className: "cl-no",
                dataIndex: "U4J0MJPqnCF-YEqHCl6GJsu",
                key: "U4J0MJPqnCF-YEqHCl6GJsu",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "প্রসব পরবর্তী পরিবার \nপরিকল্পনা পদ্ধতি বিষয়ে কাউন্সেলিং",
            className: "r-th",
            children: [
              {
                title: "৭",
                className: "cl-no",
                dataIndex: "U4J0MJPqnCF-TBdJvsJJBYw",
                key: "U4J0MJPqnCF-TBdJvsJJBYw",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "মিসোপ্রোস্টল বড়ি \nসরবরাহপ্রাপ্ত গর্ভবতী",
            className: "r-th",
            children: [
              {
                title: "৮",
                className: "cl-no",
                dataIndex: "U4J0MJPqnCF-kI8RWCoDf2M",
                key: "U4J0MJPqnCF-kI8RWCoDf2M",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "৭.১% ক্লোরোহেক্সিডিন সরবরাহপ্রাপ্ত",
            className: "r-th",
            children: [
              {
                title: "৯",
                className: "cl-no",
                dataIndex: "U4J0MJPqnCF-yJva186S4eX",
                key: "U4J0MJPqnCF-yJva186S4eX",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "প্রসব  সেবার তথ্য",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "বাড়ীতে প্রসব করানো হয়েছে",
            className: "r-th",
            children: [
              {
                title: "১০",
                className: "cl-no",
                dataIndex: "dzMc4aWR1Ic-PoIfagz42cp",
                key: "dzMc4aWR1Ic-PoIfagz42cp",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title:
              "প্রসবের তৃতীয় ধাপের \nসক্রিয় ব্যবস্থাপনা (AMTSL) অনুসরণ করে",
            className: "r-th",
            children: [
              {
                title: "১১",
                className: "cl-no",
                dataIndex: "dzMc4aWR1Ic-nwi3vwGOsW9",
                key: "dzMc4aWR1Ic-nwi3vwGOsW9",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "মিসোপ্রস্টল বড়ি খাওয়ানো হয়েছে",
            className: "r-th",
            children: [
              {
                title: "১২",
                className: "cl-no",
                dataIndex: "dzMc4aWR1Ic-OIkiOUdYqh8",
                key: "dzMc4aWR1Ic-OIkiOUdYqh8",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "প্রসবোত্তর সেবার তথ্য",
    children: [
      {
        title: "মা",
        children: [
          {
            title: "পরিদর্শন-১",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৩",
                dataIndex: "zkWdjjwvrGY-hT3QBWEQMqf",
                key: "zkWdjjwvrGY-hT3QBWEQMqf",
              },
            ],
          },
          {
            title: "পরিদর্শন-২",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৪",
                dataIndex: "zkWdjjwvrGY-qa1vc72tvYm",
                key: "zkWdjjwvrGY-qa1vc72tvYm",
              },
            ],
          },
          {
            title: "পরিদর্শন-৩",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৫",
                dataIndex: "zkWdjjwvrGY-ugcTBok7ch1",
                key: "zkWdjjwvrGY-ugcTBok7ch1",
              },
            ],
          },
          {
            title: "পরিদর্শন-৪",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৬",
                dataIndex: "zkWdjjwvrGY-HXZ9KzIBP9p",
                key: "zkWdjjwvrGY-HXZ9KzIBP9p",
              },
            ],
          },
          {
            title:
              "বাড়ীতে ডেলিভারীর ক্ষেত্রে \n২ দিনের মধ্যে প্রসবোত্তর সেবা গ্রহণকারী",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৭",
                dataIndex: "zkWdjjwvrGY-KwmVHrSVhnc",
                key: "zkWdjjwvrGY-KwmVHrSVhnc",
              },
            ],
          },
          {
            title: "প্রসব পরবর্তী পরিবার \nপরিকল্পনা পদ্ধতি বিষয়ে  কাউন্সেলিং",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৮",
                dataIndex: "zkWdjjwvrGY-rlM2TPWxt8m",
                key: "zkWdjjwvrGY-rlM2TPWxt8m",
              },
            ],
          },
        ],
      },
      {
        title: "নবজাতক",
        children: [
          {
            title: "১ মিনিটের মধ্যে মোছানোর সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৯",
                dataIndex: "zkWdjjwvrGY-ZrnT2q1BTEa",
                key: "zkWdjjwvrGY-ZrnT2q1BTEa",
              },
            ],
          },
          {
            title: "নাড়ি কাটার পর ৭.১% \nক্লোরহেক্সিডিন ব্যবহারের সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২০",
                dataIndex: "zkWdjjwvrGY-HZLRrnHzKyU",
                key: "zkWdjjwvrGY-HZLRrnHzKyU",
              },
            ],
          },
          {
            title: "নাড়ি কাটার পর মায়ের \nত্বকে-ত্বক স্পর্শ প্রদানের সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২১",
                dataIndex: "zkWdjjwvrGY-QO3hQdgZE7z",
                key: "zkWdjjwvrGY-QO3hQdgZE7z",
              },
            ],
          },
          {
            title: "জন্মের ১ ঘন্টার মধ্যে \nবুকের দুধ খাওয়ানোর সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২২",
                dataIndex: "zkWdjjwvrGY-gZFTqV1GLmi",
                key: "zkWdjjwvrGY-gZFTqV1GLmi",
              },
            ],
          },
          {
            title:
              "জন্মকালীন শ্বাসকষ্টে আক্রান্ত  \nশিশুকে ব্যাগ ও মাস্ক ব্যবহার করে রিসাসিটেট করার সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২৩",
                dataIndex: "zkWdjjwvrGY-p4bQgdRZ9qM",
                key: "zkWdjjwvrGY-p4bQgdRZ9qM",
              },
            ],
          },
          {
            title: "পরিদর্শন-১",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২৪",
                dataIndex: "zkWdjjwvrGY-FqeFk1ml24E",
                key: "zkWdjjwvrGY-FqeFk1ml24E",
              },
            ],
          },
          {
            title: "পরিদর্শন-২",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২৫",
                dataIndex: "zkWdjjwvrGY-Qww3loMQ7tW",
                key: "zkWdjjwvrGY-Qww3loMQ7tW",
              },
            ],
          },
          {
            title: "পরিদর্শন-৩",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২৬",
                dataIndex: "zkWdjjwvrGY-lx5pe7Ogifx",
                key: "zkWdjjwvrGY-lx5pe7Ogifx",
              },
            ],
          },
          {
            title: "পরিদর্শন-৪",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২৭",
                dataIndex: "zkWdjjwvrGY-JwENNWEs6Dz",
                key: "zkWdjjwvrGY-JwENNWEs6Dz",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "রেফারকৃত",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "ঝুঁকিপূর্ণ/জটিল গর্ভবতীর সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২৮",
                className: "cl-no",
                dataIndex: "s5RBGTbzKfg-Yc8qdhAoBOX",
                key: "s5RBGTbzKfg-Yc8qdhAoBOX",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title:
              "একলামপসিয়া রোগীকে লোডিং \nডোজ MgSO4 ইনজেকশন দিয়ে রেফার করার সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২৯",
                className: "cl-no",
                dataIndex: "s5RBGTbzKfg-UMt6eH8yHJZ",
                key: "s5RBGTbzKfg-UMt6eH8yHJZ",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "নবজাতককে জটিলতার জন্য \nরেফার সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "৩০",
                className: "cl-no",
                dataIndex: "s5RBGTbzKfg-dUpDjeC1iRH",
                key: "s5RBGTbzKfg-dUpDjeC1iRH",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "জন্ম-মৃত্যু",
    children: [
      {
        className: "rm-b-t",
        children: [
          {
            title: "মোট জীবিত জন্মের সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "৩১",
                className: "cl-no",
                dataIndex: "mH0J2u7uIvi-HllvX50cXC0",
                key: "mH0J2u7uIvi-HllvX50cXC0",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "অপরিণত (৩৭ সপ্তাহের পূর্বে জন্ম)\nনবজাতক এর সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "৩২",
                className: "cl-no",
                dataIndex: "gEZEocL0vVF-HllvX50cXC0",
                key: "gEZEocL0vVF-HllvX50cXC0",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "মৃত জন্ম (Still Birth)",
            className: "r-th",
            children: [
              {
                title: "৩৩",
                className: "cl-no",
                dataIndex: "yh3vg99vS1e-HllvX50cXC0",
                key: "yh3vg99vS1e-HllvX50cXC0",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mis4columns_lmis = [
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t1",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ক্রমিক নম্বর",
                className: "r-th",
                children: [sl_total_obj],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    className: "rm-b-t2",
    children: [
      {
        className: "rm-b-t1",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "নাম",
                className: "r-th",
                children: [
                  {
                    title: "২",
                    className: "cl-no",
                    dataIndex: "orgUnit",
                    key: "orgUnit",
                    render: (v, row, i) => rejectSpecificWord(v, "union"),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "বিতরণ",
    children: [
      {
        title: "খাবার বড়ি (চক্র)",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "সুখী",
                className: "r-th",
                children: [
                  {
                    title: "৩",
                    className: "cl-no",
                    dataIndex: "NR54ZMJhmX0-ALs3I8DL4Ne",
                    key: "NR54ZMJhmX0-ALs3I8DL4Ne",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "আপন",
                className: "r-th",
                children: [
                  {
                    title: "৪",
                    className: "cl-no",
                    dataIndex: "NR54ZMJhmX0-ewGQRQ27kmy",
                    key: "NR54ZMJhmX0-ewGQRQ27kmy",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "কনডম (নিরাপদ) পিস",
                className: "r-th",
                children: [
                  {
                    title: "৫",
                    className: "cl-no",
                    dataIndex: "FSokrzrofAG-HllvX50cXC0",
                    key: "FSokrzrofAG-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "ইনজেকটেবল",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ভায়াল",
                className: "r-th",
                children: [
                  {
                    title: "৬",
                    className: "cl-no",
                    dataIndex: "BHkL8TYYlyA-lRMQG0JEaT7",
                    key: "BHkL8TYYlyA-lRMQG0JEaT7",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "সিরিঞ্জ",
                className: "r-th",
                children: [
                  {
                    title: "৭",
                    className: "cl-no",
                    dataIndex: "BHkL8TYYlyA-zqF9BByuTDc",
                    key: "BHkL8TYYlyA-zqF9BByuTDc",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "আইইউডি",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "বিতরণ",
                className: "r-th",
                children: [
                  {
                    title: "৮",
                    className: "cl-no",
                    dataIndex: "sJYY4HYBtJg-hN70miup83N",
                    key: "sJYY4HYBtJg-hN70miup83N",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "খুলে ফেলা",
                className: "r-th",
                children: [
                  {
                    title: "৯",
                    className: "cl-no",
                    dataIndex: "sJYY4HYBtJg-lHoptCbz6gq",
                    key: "sJYY4HYBtJg-lHoptCbz6gq",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "ইমপ্ল্যান্ট",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ইমপ্ল্যানন",
                className: "r-th",
                children: [
                  {
                    title: "১০",
                    className: "cl-no",
                    dataIndex: "NSHtrAXUx3C-Ep1LgvSQjn8",
                    key: "NSHtrAXUx3C-Ep1LgvSQjn8",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "জেডেল",
                className: "r-th",
                children: [
                  {
                    title: "১১",
                    className: "cl-no",
                    dataIndex: "NSHtrAXUx3C-WZMro3v0W9K",
                    key: "NSHtrAXUx3C-WZMro3v0W9K",
                  },
                ],
              },
            ],
          },
          {
            className: "rm-b-t",
            children: [
              {
                title: "খুলে ফেলা",
                className: "r-th",
                children: [
                  {
                    title: "১২",
                    className: "cl-no",
                    dataIndex: "NSHtrAXUx3C-gs15NTe9F0u",
                    key: "NSHtrAXUx3C-gs15NTe9F0u",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ইসিপি",
                className: "r-th",
                children: [
                  {
                    title: "১৩",
                    className: "cl-no",
                    dataIndex: "vDkD9ubPdGk-HllvX50cXC0",
                    key: "vDkD9ubPdGk-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "মিসো-প্রোস্টল (ডোজ)",
                className: "r-th",
                children: [
                  {
                    title: "১৪",
                    className: "cl-no",
                    dataIndex: "kx4gng8DNQd-HllvX50cXC0",
                    key: "kx4gng8DNQd-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "এমআরএম (প্যাক)",
                className: "r-th",
                children: [
                  {
                    title: "১৫",
                    className: "cl-no",
                    dataIndex: "s5bHvpoXQeN-HllvX50cXC0",
                    key: "s5bHvpoXQeN-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "৭.১% ক্লোরোহেক্্িরডিন",
                className: "r-th",
                children: [
                  {
                    title: "১৬",
                    className: "cl-no",
                    dataIndex: "lWpKjU3Puxn-HllvX50cXC0",
                    key: "lWpKjU3Puxn-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ইনজেকশন MgSO4",
                className: "r-th",
                children: [
                  {
                    title: "১৭",
                    className: "cl-no",
                    dataIndex: "QEg7vuVKdsN-HllvX50cXC0",
                    key: "QEg7vuVKdsN-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ইনজেকশন অক্সিটোক্সিন  (ডোজ)",
                className: "r-th",
                children: [
                  {
                    title: "১৮",
                    className: "cl-no",
                    dataIndex: "saxkvSUpRAf-HllvX50cXC0",
                    key: "saxkvSUpRAf-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "এমএনপি (স্যাসেট)",
                className: "r-th",
                children: [
                  {
                    title: "১৯",
                    className: "cl-no",
                    dataIndex: "eG6VmKjLc7L-HllvX50cXC0",
                    key: "eG6VmKjLc7L-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "স্যানিটারী প্যাড (সংখ্যা)",
                className: "r-th",
                children: [
                  {
                    title: "২০",
                    className: "cl-no",
                    dataIndex: "iJ2RWbRs7SN-HllvX50cXC0",
                    key: "iJ2RWbRs7SN-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "এমআর (এমভিএ) কিট (সংখ্যা)",
                className: "r-th",
                children: [
                  {
                    title: "২১",
                    className: "cl-no",
                    dataIndex: "tjAlfA40bMK-HllvX50cXC0",
                    key: "tjAlfA40bMK-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ডেলিভারী কিট (সংখ্যা)",
                className: "r-th",
                children: [
                  {
                    title: "২২",
                    className: "cl-no",
                    dataIndex: "yRpGsSyWWTS-HllvX50cXC0",
                    key: "yRpGsSyWWTS-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ডিডিএস কিট (সংখ্যা)",
                className: "r-th",
                children: [
                  {
                    title: "২৩",
                    className: "cl-no",
                    dataIndex: "lPFTuWUQvC0-HllvX50cXC0",
                    key: "lPFTuWUQvC0-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ইনজেকশন এন্টিন্যাটাল করটিকোস্টেরয়ড",
                className: "r-th",
                children: [
                  {
                    title: "২৪",
                    className: "cl-no",
                    dataIndex: "EJfWgPaZDjt-HllvX50cXC0",
                    key: "EJfWgPaZDjt-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            className: "rm-b-t",
            children: [
              {
                title: "ইনজেকশন জেন্টামাইসিন",
                className: "r-th",
                children: [
                  {
                    title: "২৫",
                    className: "cl-no",
                    dataIndex: "ZwHlL4uRCVQ-HllvX50cXC0",
                    key: "ZwHlL4uRCVQ-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "সম্পাদন",
    children: [
      {
        title: "স্থায়ী পদ্ধতি",
        children: [
          {
            className: "",
            children: [
              {
                title: "পুুরুষ (সংখ্যা)",
                className: "r-th",
                children: [
                  {
                    title: "২৬",
                    className: "cl-no",
                    dataIndex: "lLz7i3AhYSi-HllvX50cXC0",
                    key: "lLz7i3AhYSi-HllvX50cXC0",
                  },
                ],
              },
            ],
          },
          {
            title: "মহিলা (সংখ্যা)",
            children: [
              {
                title: "স্বাভাবিক",
                className: "r-th",
                children: [
                  {
                    title: "২৭",
                    className: "cl-no",
                    dataIndex: "jKyH8byL1Ap-vfiJmmxBUDr",
                    key: "jKyH8byL1Ap-vfiJmmxBUDr",
                  },
                ],
              },
              {
                title: "প্রসব পরবর্তী",
                className: "r-th",
                children: [
                  {
                    title: "২৮",
                    className: "cl-no",
                    dataIndex: "jKyH8byL1Ap-eYi2bO7GeEU",
                    key: "jKyH8byL1Ap-eYi2bO7GeEU",
                  },
                ],
              },
              {
                title: "মোট",
                className: "r-th",
                children: [
                  {
                    title: "২৯",
                    className: "cl-no",
                    dataIndex: "jKyH8byL1Ap-jAc81eoAssm",
                    key: "jKyH8byL1Ap-jAc81eoAssm",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
