import { calculationKeys } from "./calculationsKeyAggr";

const remove_sl_total = (d) => (isNaN(d) ? "" : d);
var sl_total_obj = {
  title: "১",
  className: "cl-no",
  dataIndex: "sl",
  key: "sl",
  render: (v, row, i) => {
    // console.log(v);
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
                    dataIndex: "LKMyOgLJJFR-HllvX50cXC0",
                    key: "LKMyOgLJJFR-HllvX50cXC0",
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
                    dataIndex: "VursvhR5YzP-hoohMhOq4I4",
                    key: "VursvhR5YzP-hoohMhOq4I4",
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
                    dataIndex: "VursvhR5YzP-biNDt6qVuB8",
                    key: "VursvhR5YzP-biNDt6qVuB8",
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
                    key: "VursvhR5YzP-hoohMhOq4I4-VursvhR5YzP-biNDt6qVuB8",
                    dataIndex:
                      "VursvhR5YzP-hoohMhOq4I4-VursvhR5YzP-biNDt6qVuB8",
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
                    dataIndex: "VursvhR5YzP-W91zrJQgxxD",
                    key: "VursvhR5YzP-W91zrJQgxxD",
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
                    dataIndex: "VursvhR5YzP-WmIdlW4s7Nr",
                    key: "VursvhR5YzP-WmIdlW4s7Nr",
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
                    dataIndex: "VursvhR5YzP-ihXaVctHrKy",
                    key: "VursvhR5YzP-ihXaVctHrKy",
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
                    dataIndex: "VursvhR5YzP-yS8D8b66Zkx",
                    key: "VursvhR5YzP-yS8D8b66Zkx",
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
                    key: "VursvhR5YzP-ihXaVctHrKy-VursvhR5YzP-yS8D8b66Zkx",
                    dataIndex:
                      "VursvhR5YzP-ihXaVctHrKy-VursvhR5YzP-yS8D8b66Zkx",
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
                    dataIndex: "VursvhR5YzP-rrg2ehwdD86",
                    key: "VursvhR5YzP-rrg2ehwdD86",
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
                    dataIndex: "VursvhR5YzP-B35cxoF9N2N",
                    key: "VursvhR5YzP-B35cxoF9N2N",
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
                    dataIndex: "VursvhR5YzP-dsco9VTvffr",
                    key: "VursvhR5YzP-dsco9VTvffr",
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
                    dataIndex:
                      "VursvhR5YzP-hoohMhOq4I4-VursvhR5YzP-biNDt6qVuB8-VursvhR5YzP-ihXaVctHrKy-VursvhR5YzP-yS8D8b66Zkx",
                    key: "VursvhR5YzP-hoohMhOq4I4-VursvhR5YzP-biNDt6qVuB8-VursvhR5YzP-ihXaVctHrKy-VursvhR5YzP-yS8D8b66Zkx",
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
                    dataIndex: "ntmPyJHhbJ8-hoohMhOq4I4",
                    key: "ntmPyJHhbJ8-hoohMhOq4I4",
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
                    dataIndex: "ntmPyJHhbJ8-biNDt6qVuB8",
                    key: "ntmPyJHhbJ8-biNDt6qVuB8",
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
                    key: "ntmPyJHhbJ8-hoohMhOq4I4-ntmPyJHhbJ8-biNDt6qVuB8",
                    dataIndex:
                      "ntmPyJHhbJ8-hoohMhOq4I4-ntmPyJHhbJ8-biNDt6qVuB8",
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
                    dataIndex: "ntmPyJHhbJ8-W91zrJQgxxD",
                    key: "ntmPyJHhbJ8-W91zrJQgxxD",
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
                    dataIndex: "ntmPyJHhbJ8-WmIdlW4s7Nr",
                    key: "ntmPyJHhbJ8-WmIdlW4s7Nr",
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
                    dataIndex: "ntmPyJHhbJ8-ihXaVctHrKy",
                    key: "ntmPyJHhbJ8-ihXaVctHrKy",
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
                    dataIndex: "ntmPyJHhbJ8-yS8D8b66Zkx",
                    key: "ntmPyJHhbJ8-yS8D8b66Zkx",
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
                    key: "ntmPyJHhbJ8-ihXaVctHrKy-ntmPyJHhbJ8-yS8D8b66Zkx",
                    dataIndex:
                      "ntmPyJHhbJ8-ihXaVctHrKy-ntmPyJHhbJ8-yS8D8b66Zkx",
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
                    dataIndex: "ntmPyJHhbJ8-rrg2ehwdD86",
                    key: "ntmPyJHhbJ8-rrg2ehwdD86",
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
                    dataIndex: "ntmPyJHhbJ8-B35cxoF9N2N",
                    key: "ntmPyJHhbJ8-B35cxoF9N2N",
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
                    dataIndex: "ntmPyJHhbJ8-dsco9VTvffr",
                    key: "ntmPyJHhbJ8-dsco9VTvffr",
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
                    dataIndex:
                      "ntmPyJHhbJ8-hoohMhOq4I4-ntmPyJHhbJ8-biNDt6qVuB8-ntmPyJHhbJ8-ihXaVctHrKy-ntmPyJHhbJ8-yS8D8b66Zkx",
                    key: "ntmPyJHhbJ8-hoohMhOq4I4-ntmPyJHhbJ8-biNDt6qVuB8-ntmPyJHhbJ8-ihXaVctHrKy-ntmPyJHhbJ8-yS8D8b66Zkx",
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
                    dataIndex: "QhkrKKbh1ns-hoohMhOq4I4",
                    key: "QhkrKKbh1ns-hoohMhOq4I4",
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
                    dataIndex: "QhkrKKbh1ns-biNDt6qVuB8",
                    key: "QhkrKKbh1ns-biNDt6qVuB8",
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
                    key: "QhkrKKbh1ns-hoohMhOq4I4-QhkrKKbh1ns-biNDt6qVuB8",
                    dataIndex:
                      "QhkrKKbh1ns-hoohMhOq4I4-QhkrKKbh1ns-biNDt6qVuB8",
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
                    dataIndex: "QhkrKKbh1ns-W91zrJQgxxD",
                    key: "QhkrKKbh1ns-W91zrJQgxxD",
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
                    dataIndex: "QhkrKKbh1ns-WmIdlW4s7Nr",
                    key: "QhkrKKbh1ns-WmIdlW4s7Nr",
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
                    dataIndex: "QhkrKKbh1ns-ihXaVctHrKy",
                    key: "QhkrKKbh1ns-ihXaVctHrKy",
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
                    dataIndex: "QhkrKKbh1ns-yS8D8b66Zkx",
                    key: "QhkrKKbh1ns-yS8D8b66Zkx",
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
                    key: "QhkrKKbh1ns-ihXaVctHrKy-QhkrKKbh1ns-yS8D8b66Zkx",
                    dataIndex:
                      "QhkrKKbh1ns-ihXaVctHrKy-QhkrKKbh1ns-yS8D8b66Zkx",
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
                    dataIndex: "QhkrKKbh1ns-rrg2ehwdD86",
                    key: "QhkrKKbh1ns-rrg2ehwdD86",
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
                    dataIndex: "QhkrKKbh1ns-B35cxoF9N2N",
                    key: "QhkrKKbh1ns-B35cxoF9N2N",
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
                    dataIndex: "QhkrKKbh1ns-dsco9VTvffr",
                    key: "QhkrKKbh1ns-dsco9VTvffr",
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
                    dataIndex: "H8eahQlCyW4-hoohMhOq4I4",
                    key: "H8eahQlCyW4-hoohMhOq4I4",
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
                    dataIndex: "H8eahQlCyW4-biNDt6qVuB8",
                    key: "H8eahQlCyW4-biNDt6qVuB8",
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
                    key: "H8eahQlCyW4-hoohMhOq4I4-H8eahQlCyW4-biNDt6qVuB8",
                    dataIndex:
                      "H8eahQlCyW4-hoohMhOq4I4-H8eahQlCyW4-biNDt6qVuB8",
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
                    dataIndex: "H8eahQlCyW4-W91zrJQgxxD",
                    key: "H8eahQlCyW4-W91zrJQgxxD",
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
                    dataIndex: "H8eahQlCyW4-WmIdlW4s7Nr",
                    key: "H8eahQlCyW4-WmIdlW4s7Nr",
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
                    dataIndex: "H8eahQlCyW4-ihXaVctHrKy",
                    key: "H8eahQlCyW4-ihXaVctHrKy",
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
                    dataIndex: "H8eahQlCyW4-yS8D8b66Zkx",
                    key: "H8eahQlCyW4-yS8D8b66Zkx",
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
                    key: "H8eahQlCyW4-ihXaVctHrKy-H8eahQlCyW4-yS8D8b66Zkx",
                    dataIndex:
                      "H8eahQlCyW4-ihXaVctHrKy-H8eahQlCyW4-yS8D8b66Zkx",
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
                    dataIndex: "H8eahQlCyW4-rrg2ehwdD86",
                    key: "H8eahQlCyW4-rrg2ehwdD86",
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
                    dataIndex: "H8eahQlCyW4-B35cxoF9N2N",
                    key: "H8eahQlCyW4-B35cxoF9N2N",
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
                    dataIndex: "H8eahQlCyW4-dsco9VTvffr",
                    key: "H8eahQlCyW4-dsco9VTvffr",
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
                    dataIndex:
                      "H8eahQlCyW4-hoohMhOq4I4-H8eahQlCyW4-biNDt6qVuB8-H8eahQlCyW4-ihXaVctHrKy-H8eahQlCyW4-yS8D8b66Zkx",
                    key: "H8eahQlCyW4-hoohMhOq4I4-H8eahQlCyW4-biNDt6qVuB8-H8eahQlCyW4-ihXaVctHrKy-H8eahQlCyW4-yS8D8b66Zkx",
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
                    dataIndex: "aG1JC2H9947-hoohMhOq4I4",
                    key: "aG1JC2H9947-hoohMhOq4I4",
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
                    dataIndex: "aG1JC2H9947-biNDt6qVuB8",
                    key: "aG1JC2H9947-biNDt6qVuB8",
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
                    key: "aG1JC2H9947-hoohMhOq4I4-aG1JC2H9947-biNDt6qVuB8",
                    dataIndex:
                      "aG1JC2H9947-hoohMhOq4I4-aG1JC2H9947-biNDt6qVuB8",
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
                    dataIndex: "aG1JC2H9947-W91zrJQgxxD",
                    key: "aG1JC2H9947-W91zrJQgxxD",
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
                    dataIndex: "aG1JC2H9947-WmIdlW4s7Nr",
                    key: "aG1JC2H9947-WmIdlW4s7Nr",
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
                    dataIndex: "aG1JC2H9947-ihXaVctHrKy",
                    key: "aG1JC2H9947-ihXaVctHrKy",
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
                    dataIndex: "aG1JC2H9947-yS8D8b66Zkx",
                    key: "aG1JC2H9947-yS8D8b66Zkx",
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
                    key: "aG1JC2H9947-ihXaVctHrKy-aG1JC2H9947-yS8D8b66Zkx",
                    dataIndex:
                      "aG1JC2H9947-ihXaVctHrKy-aG1JC2H9947-yS8D8b66Zkx",
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
                    dataIndex: "aG1JC2H9947-rrg2ehwdD86",
                    key: "aG1JC2H9947-rrg2ehwdD86",
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
                    dataIndex: "aG1JC2H9947-B35cxoF9N2N",
                    key: "aG1JC2H9947-B35cxoF9N2N",
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
                    dataIndex: "aG1JC2H9947-dsco9VTvffr",
                    key: "aG1JC2H9947-dsco9VTvffr",
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
                    dataIndex:
                      "aG1JC2H9947-hoohMhOq4I4-aG1JC2H9947-biNDt6qVuB8-aG1JC2H9947-ihXaVctHrKy-aG1JC2H9947-yS8D8b66Zkx",
                    key: "aG1JC2H9947-hoohMhOq4I4-aG1JC2H9947-biNDt6qVuB8-aG1JC2H9947-ihXaVctHrKy-aG1JC2H9947-yS8D8b66Zkx",
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
                    dataIndex: "gs7QuMz8Fak-iewWuv1Q35x",
                    key: "gs7QuMz8Fak-iewWuv1Q35x",
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
                    dataIndex: "gs7QuMz8Fak-Rer4EzwcQBf",
                    key: "gs7QuMz8Fak-Rer4EzwcQBf",
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
                    key: "gs7QuMz8Fak-iewWuv1Q35x-gs7QuMz8Fak-Rer4EzwcQBf",
                    dataIndex:
                      "gs7QuMz8Fak-iewWuv1Q35x-gs7QuMz8Fak-Rer4EzwcQBf",
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
                    dataIndex: "gs7QuMz8Fak-q725bxlWUuc",
                    key: "gs7QuMz8Fak-q725bxlWUuc",
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
                    dataIndex: "gs7QuMz8Fak-F1aJHMS9nN3",
                    key: "gs7QuMz8Fak-F1aJHMS9nN3",
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
                    key: "gs7QuMz8Fak-q725bxlWUuc-gs7QuMz8Fak-F1aJHMS9nN3",
                    dataIndex:
                      "gs7QuMz8Fak-q725bxlWUuc-gs7QuMz8Fak-F1aJHMS9nN3",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c69),
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
                title: "সর্বমোট পুরুষ",
                children: [
                  {
                    title: "৭০",
                    className: "cl-no",
                    key: "gs7QuMz8Fak-iewWuv1Q35x-gs7QuMz8Fak-Rer4EzwcQBf-gs7QuMz8Fak-q725bxlWUuc-gs7QuMz8Fak-F1aJHMS9nN3",
                    dataIndex:
                      "gs7QuMz8Fak-iewWuv1Q35x-gs7QuMz8Fak-Rer4EzwcQBf-gs7QuMz8Fak-q725bxlWUuc-gs7QuMz8Fak-F1aJHMS9nN3",
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c70),
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
                    dataIndex: "gs7QuMz8Fak-iFhegHsWrBb",
                    key: "gs7QuMz8Fak-iFhegHsWrBb",
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
                    dataIndex: "gs7QuMz8Fak-iWRdOFEWjcc",
                    key: "gs7QuMz8Fak-iWRdOFEWjcc",
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
                    key: "gs7QuMz8Fak-iFhegHsWrBb-gs7QuMz8Fak-iWRdOFEWjcc",
                    dataIndex:
                      "gs7QuMz8Fak-iFhegHsWrBb-gs7QuMz8Fak-iWRdOFEWjcc",
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
                    dataIndex: "gs7QuMz8Fak-tf6Ohcc1Hgy",
                    key: "gs7QuMz8Fak-tf6Ohcc1Hgy",
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
                    dataIndex: "gs7QuMz8Fak-xypo0YSc2pc",
                    key: "gs7QuMz8Fak-xypo0YSc2pc",
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
                    key: "gs7QuMz8Fak-tf6Ohcc1Hgy-gs7QuMz8Fak-xypo0YSc2pc",
                    dataIndex:
                      "gs7QuMz8Fak-tf6Ohcc1Hgy-gs7QuMz8Fak-xypo0YSc2pc",
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
                    dataIndex:
                      "gs7QuMz8Fak-iFhegHsWrBb-gs7QuMz8Fak-iWRdOFEWjcc-gs7QuMz8Fak-tf6Ohcc1Hgy-gs7QuMz8Fak-xypo0YSc2pc",
                    key: "gs7QuMz8Fak-iFhegHsWrBb-gs7QuMz8Fak-iWRdOFEWjcc-gs7QuMz8Fak-tf6Ohcc1Hgy-gs7QuMz8Fak-xypo0YSc2pc",
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
                    dataIndex: "gs7QuMz8Fak-gwgu10gtwWO",
                    key: "gs7QuMz8Fak-gwgu10gtwWO",
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
                      var d = parseInt(row["LKMyOgLJJFR-HllvX50cXC0"], 10);
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
                  "গর্ভপাত, এমআর এবং\n এমআরএম পরবর্তী\n পরিবার পরিকল্পনা\n পদ্ধতি গ্রহণকারীর\n সংখ্যা",
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
                        dataIndex: "wv9VuBHx0eN-HllvX50cXC0",
                        key: "wv9VuBHx0eN-HllvX50cXC0",
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
                        dataIndex: "gdcOX7zsolK-zwYS9tKGWnW",
                        key: "gdcOX7zsolK-zwYS9tKGWnW",
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
                        dataIndex: "gdcOX7zsolK-vtuABaZ5pDu",
                        key: "gdcOX7zsolK-vtuABaZ5pDu",
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
                        dataIndex:
                          "gdcOX7zsolK-zwYS9tKGWnW-gdcOX7zsolK-vtuABaZ5pDu",
                        key: "gdcOX7zsolK-zwYS9tKGWnW-gdcOX7zsolK-vtuABaZ5pDu",
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
                        dataIndex: "Dsstw6pbIth-HllvX50cXC0",
                        key: "Dsstw6pbIth-HllvX50cXC0",
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
                        dataIndex: "JjzapM4Wx2R-HllvX50cXC0",
                        key: "JjzapM4Wx2R-HllvX50cXC0",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c90),
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
                        dataIndex: "Dn095f38VKa-OywA5n3oe9h",
                        key: "Dn095f38VKa-OywA5n3oe9h",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c91),
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
                        dataIndex: "Dn095f38VKa-l5Y0spK7FJV",
                        key: "Dn095f38VKa-l5Y0spK7FJV",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c92),
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
                        dataIndex: "Dn095f38VKa-HpfDgfqaoFU",
                        key: "Dn095f38VKa-HpfDgfqaoFU",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c93),
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
                        dataIndex: "Dn095f38VKa-YEqHCl6GJsu",
                        key: "Dn095f38VKa-YEqHCl6GJsu",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c94),
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
                      "প্রসব পরবর্তী পরিবার পরিকল্পনা\n পদ্ধতি বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৫",
                        className: "cl-no",
                        dataIndex: "Dn095f38VKa-TBdJvsJJBYw",
                        key: "Dn095f38VKa-TBdJvsJJBYw",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c95),
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
                    title: "মিসোপ্রোস্টাল বড়ি সরবরাহপ্রাপ্ত\n গর্ভবতীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৬",
                        className: "cl-no",
                        dataIndex: "Dn095f38VKa-kI8RWCoDf2M",
                        key: "Dn095f38VKa-kI8RWCoDf2M",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c96),
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
                      "৭.১% ক্লোরোহেক্সিডিন\n সরবরাহপ্রাপ্ত গর্ভবতীর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৭",
                        className: "cl-no",
                        dataIndex: "Dn095f38VKa-yJva186S4eX",
                        key: "Dn095f38VKa-yJva186S4eX",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c97),
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
                    title: "প্রসবপূর্ব রক্তক্ষরণ (APH)\nআক্রান্ত মায়ের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৮",
                        className: "cl-no",
                        dataIndex: "eusaUmEQBlc-y8qayP3216s",
                        key: "eusaUmEQBlc-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c98),
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
                      "২৪-৩৪ সপ্তাহের মধ্যে\n ইনজেকশন এন্টিন্যাটাল\nকরটিকোস্টেরয়েড প্রাপ্ত গর্ভবতী\n মায়ের  সংখ্যা (MCWC)",
                    className: "r-th",
                    children: [
                      {
                        title: "৯৯",
                        className: "cl-no",
                        dataIndex: "NRrMpZThRIG-y8qayP3216s",
                        key: "NRrMpZThRIG-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c99),
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
                    className: "rm-b-t",
                    title: "প্রশিক্ষণপ্রাপ্ত ব্যক্তি দ্বারা",
                    children: [
                      {
                        title: "১০০",
                        className: "cl-no",
                        dataIndex: "xx1FlJ3kOpd-Sk6kXif72pV",
                        key: "xx1FlJ3kOpd-Sk6kXif72pV",
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
                    className: "r-th",
                    title: "প্রশিক্ষণ বিহীন ব্যক্তি দ্বারা",
                    children: [
                      {
                        title: "১০১",
                        className: "cl-no",
                        dataIndex: "xx1FlJ3kOpd-h71vyw3aaLx",
                        key: "xx1FlJ3kOpd-h71vyw3aaLx",
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
                        dataIndex: "xx1FlJ3kOpd-oYKjcMjpq4B",
                        key: "xx1FlJ3kOpd-oYKjcMjpq4B",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c102),
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
                        dataIndex: "xx1FlJ3kOpd-hptqTp6wxIJ",
                        key: "xx1FlJ3kOpd-hptqTp6wxIJ",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c103),
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
                        dataIndex: "mJO7Kby4sae-y8qayP3216s",
                        key: "mJO7Kby4sae-y8qayP3216s",
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
                      "প্রসবের তৃতীয় ধাপের সক্রিয়\nব্যবস্থাপনা (AMTSL) অনুসরণ\nকরে প্রসব করানো\nসংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১০৫",
                        className: "cl-no",
                        dataIndex: "w6DDSu3kpAl-y8qayP3216s",
                        key: "w6DDSu3kpAl-y8qayP3216s",
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
                        dataIndex: "QvhrHfQsq94-y8qayP3216s",
                        key: "QvhrHfQsq94-y8qayP3216s",
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
                        dataIndex: "dckSKpzJwUP-y8qayP3216s",
                        key: "dckSKpzJwUP-y8qayP3216s",
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
                        dataIndex: "c9CDY5bFl3e-HllvX50cXC0",
                        key: "c9CDY5bFl3e-HllvX50cXC0",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c108),
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
                        dataIndex: "gLUSCjwYbOo-y8qayP3216s",
                        key: "gLUSCjwYbOo-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c109),
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
                        dataIndex: "NWO3k6BMEtA-y8qayP3216s",
                        key: "NWO3k6BMEtA-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c110),
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
                    className: "rm-b-t",
                    title: "পরিদর্শন-১",
                    className: "r-th",
                    children: [
                      {
                        title: "১১১",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-hT3QBWEQMqf",
                        key: "ueUNyMlXaca-hT3QBWEQMqf",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c111),
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
                    className: "r-th",
                    children: [
                      {
                        title: "১১২",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-qa1vc72tvYm",
                        key: "ueUNyMlXaca-qa1vc72tvYm",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c112),
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
                        title: "১১৩",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-ugcTBok7ch1",
                        key: "ueUNyMlXaca-ugcTBok7ch1",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c113),
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
                    title: "পরিদর্শন-৪",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৪",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-HXZ9KzIBP9p",
                        key: "ueUNyMlXaca-HXZ9KzIBP9p",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c114),
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
                    title:
                      "বাড়ীতে ডেলিভারীর ক্ষেত্রে প্রশিক্ষণপ্রাপ্ত ব্যক্তি \nদ্বারা ২ দিনের মধ্যে প্রসবোত্তর সেবা গ্রহণকারী",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৫",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-KwmVHrSVhnc",
                        key: "ueUNyMlXaca-KwmVHrSVhnc",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c115),
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
                    title:
                      "প্রসব পরবর্তী পরিবার পরিকল্পনা \nপদ্ধতি বিষয়ে কাউন্সেলিং",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৬",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-rlM2TPWxt8m",
                        key: "ueUNyMlXaca-rlM2TPWxt8m",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c116),
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
                    title:
                      "প্রসবোত্তর অতিরিক্ত রক্তক্ষরণ (PPH) \nআক্রান্ত মায়ের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৭",
                        className: "cl-no",
                        dataIndex: "o7TNDUtoqy8-y8qayP3216s",
                        key: "o7TNDUtoqy8-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c117),
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
                    className: "rm-b-t",
                    title: "১ মিনিটের মধ্যে মোছানোর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৮",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-ZrnT2q1BTEa",
                        key: "ueUNyMlXaca-ZrnT2q1BTEa",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c118),
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
                    title: "নাড়ি কাটার পর ৭.১% ক্লোরোহক্সিডিন ব্যবহারের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১১৯",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-HZLRrnHzKyU",
                        key: "ueUNyMlXaca-HZLRrnHzKyU",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c119),
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
                    title:
                      "নাড়ি কাটার পর মায়ের ত্বকে-ত্বক স্পর্শ প্রদানের সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২০",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-QO3hQdgZE7z",
                        key: "ueUNyMlXaca-QO3hQdgZE7z",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c120),
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
                    title: "জন্মের ১ ঘন্টার মধ্যে বুকের দুধ খাওয়ানোর সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২১",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-gZFTqV1GLmi",
                        key: "ueUNyMlXaca-gZFTqV1GLmi",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c121),
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
                    title:
                      "জন্মকালীন শ্বাসকষ্টে আক্রান্ত  শিশুকে ব্যাগ ও \nমাস্ক ব্যবহার করে রিসাসিটেইট করার সংখ্যা",
                    className: "r-th",
                    children: [
                      {
                        title: "১২২",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-p4bQgdRZ9qM",
                        key: "ueUNyMlXaca-p4bQgdRZ9qM",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c122),
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
                    title: "পরিদর্শন-১",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৩",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-FqeFk1ml24E",
                        key: "ueUNyMlXaca-FqeFk1ml24E",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c123),
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
                    title: "পরিদর্শন-১",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৪",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-Qww3loMQ7tW",
                        key: "ueUNyMlXaca-Qww3loMQ7tW",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c124),
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
                    title: "পরিদর্শন-৩",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৫",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-lx5pe7Ogifx",
                        key: "ueUNyMlXaca-lx5pe7Ogifx",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c125),
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
                    title: "পরিদর্শন-৪",
                    className: "r-th",
                    children: [
                      {
                        title: "১২৬",
                        className: "cl-no",
                        dataIndex: "ueUNyMlXaca-JwENNWEs6Dz",
                        key: "ueUNyMlXaca-JwENNWEs6Dz",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c126),
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
                        dataIndex: "QtxvCJGVccC-Yc8qdhAoBOX",
                        key: "QtxvCJGVccC-Yc8qdhAoBOX",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c127),
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
                        dataIndex: "QtxvCJGVccC-UMt6eH8yHJZ",
                        key: "QtxvCJGVccC-UMt6eH8yHJZ",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c128),
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
                        dataIndex: "F16fiFq9qIS-y8qayP3216s",
                        key: "F16fiFq9qIS-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c129),
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
                        dataIndex: "rqxa7Bs0OAk-y8qayP3216s",
                        key: "rqxa7Bs0OAk-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c130),
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
                        dataIndex: "QtxvCJGVccC-I6ybgVG0P6Q",
                        key: "QtxvCJGVccC-I6ybgVG0P6Q",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c131),
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
                        dataIndex: "XdDkJzDKs5F-wN6uyKEH6zd",
                        key: "XdDkJzDKs5F-wN6uyKEH6zd",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c132),
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
                        dataIndex: "XdDkJzDKs5F-CGpNk7hc1VQ",
                        key: "XdDkJzDKs5F-CGpNk7hc1VQ",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c133),
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
                        dataIndex: "GTIvXoni1Ba-QHn1D0itUDt",
                        key: "GTIvXoni1Ba-QHn1D0itUDt",
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
                        dataIndex: "GTIvXoni1Ba-yTObC51KICG",
                        key: "GTIvXoni1Ba-yTObC51KICG",
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
                        dataIndex: "GTIvXoni1Ba-tILpufHDPR4",
                        key: "GTIvXoni1Ba-tILpufHDPR4",
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
                        dataIndex: "GTIvXoni1Ba-qgsgEwBGEp5",
                        key: "GTIvXoni1Ba-qgsgEwBGEp5",
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
                        dataIndex: "GTIvXoni1Ba-gwLqAPoyjZD",
                        key: "GTIvXoni1Ba-gwLqAPoyjZD",
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
                        dataIndex: "VV34bOPjAtU-HllvX50cXC0",
                        key: "VV34bOPjAtU-HllvX50cXC0",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c139),
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
                        dataIndex: "Q093zBmg3sh-VLVmSRoqoB0",
                        key: "Q093zBmg3sh-VLVmSRoqoB0",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c140),
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
                        dataIndex: "Q093zBmg3sh-HFXntwgoWyd",
                        key: "Q093zBmg3sh-HFXntwgoWyd",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c141),
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
                        dataIndex: "Q093zBmg3sh-dl4OxrVnLEH",
                        key: "Q093zBmg3sh-dl4OxrVnLEH",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c142),
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
                        dataIndex: "bU2c6Tnnl8e-HllvX50cXC0",
                        key: "bU2c6Tnnl8e-HllvX50cXC0",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c143),
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
                        dataIndex: "Q093zBmg3sh-MIKY77ZNNyF",
                        key: "Q093zBmg3sh-MIKY77ZNNyF",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c144),
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
                        dataIndex: "IJHv1hYteMj-y8qayP3216s",
                        key: "IJHv1hYteMj-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c145),
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
                        dataIndex: "Q093zBmg3sh-dSpYt8AKFh1",
                        key: "Q093zBmg3sh-dSpYt8AKFh1",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c146),
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
                        dataIndex: "Q093zBmg3sh-Gpo0OFXSwZW",
                        key: "Q093zBmg3sh-Gpo0OFXSwZW",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c147),
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
                        dataIndex: "Q093zBmg3sh-dLZBy461DKe",
                        key: "Q093zBmg3sh-dLZBy461DKe",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c148),
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
                        dataIndex: "Q093zBmg3sh-gnYarzpNPsD",
                        key: "Q093zBmg3sh-gnYarzpNPsD",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c149),
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
                        dataIndex: "Q093zBmg3sh-Uz0NBbkzRSC",
                        key: "Q093zBmg3sh-Uz0NBbkzRSC",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c150),
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
                        dataIndex: "VeFaTJc7OXF-y8qayP3216s",
                        key: "VeFaTJc7OXF-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c151),
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
                        dataIndex: "fTyEdqJL3w6-y8qayP3216s",
                        key: "fTyEdqJL3w6-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c152),
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
                        dataIndex: "GE4n1TOIRTh-y8qayP3216s",
                        key: "GE4n1TOIRTh-y8qayP3216s",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c153),
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
                        dataIndex: "ujMTvXWCPe5-EpknWsjfsuj",
                        key: "ujMTvXWCPe5-EpknWsjfsuj",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c154),
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
                        dataIndex: "ujMTvXWCPe5-ZOEmMYGyF43",
                        key: "ujMTvXWCPe5-ZOEmMYGyF43",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c155),
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
                        dataIndex: "ujMTvXWCPe5-FM2llr7HiwA",
                        key: "ujMTvXWCPe5-FM2llr7HiwA",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c156),
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
                        dataIndex: "ujMTvXWCPe5-fvy7yLW6tc3",
                        key: "ujMTvXWCPe5-fvy7yLW6tc3",
                        render: (v, row, index) =>
                          sumColumn(row, calculationKeys.c157),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.c158),
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
                    dataIndex: "nPNOUKoLdVx-HllvX50cXC0",
                    key: "nPNOUKoLdVx-HllvX50cXC0",
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
                    dataIndex: "gN5qaNrxMSg-P0PWVidnxzu",
                    key: "gN5qaNrxMSg-P0PWVidnxzu",
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
                    dataIndex: "gN5qaNrxMSg-JwCrVhE35kh",
                    key: "gN5qaNrxMSg-JwCrVhE35kh",
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
                    dataIndex: "gN5qaNrxMSg-Xg2D358Qwsh",
                    key: "gN5qaNrxMSg-Xg2D358Qwsh",
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
                    dataIndex: "gN5qaNrxMSg-WtKTyWJ3Q72",
                    key: "gN5qaNrxMSg-WtKTyWJ3Q72",
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
                    dataIndex: "gN5qaNrxMSg-ZlLSjPq9VXq",
                    key: "gN5qaNrxMSg-ZlLSjPq9VXq",
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
                    dataIndex: "gN5qaNrxMSg-JkOHUdQU3Y5",
                    key: "gN5qaNrxMSg-JkOHUdQU3Y5",
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
                    dataIndex: "gN5qaNrxMSg-VE14yAWe9Co",
                    key: "gN5qaNrxMSg-VE14yAWe9Co",
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
                    dataIndex: "gN5qaNrxMSg-AWydalEhvmX",
                    key: "gN5qaNrxMSg-AWydalEhvmX",
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
                    dataIndex: "gN5qaNrxMSg-M218AglHN9e",
                    key: "gN5qaNrxMSg-M218AglHN9e",
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
                    dataIndex: "gN5qaNrxMSg-Ttt6QqQX643",
                    key: "gN5qaNrxMSg-Ttt6QqQX643",
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
                    dataIndex: "gN5qaNrxMSg-a8wtTFg8dDd",
                    key: "gN5qaNrxMSg-a8wtTFg8dDd",
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
                    dataIndex: "gN5qaNrxMSg-AJRamDi3tTC",
                    key: "gN5qaNrxMSg-AJRamDi3tTC",
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
                    dataIndex: "gN5qaNrxMSg-q6Tes4X8YmN",
                    key: "gN5qaNrxMSg-q6Tes4X8YmN",
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
                    dataIndex: "O68y5pgJORY-nnxebrCb49Y",
                    key: "O68y5pgJORY-nnxebrCb49Y",
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
                    dataIndex: "O68y5pgJORY-OI8J1ubkdme",
                    key: "O68y5pgJORY-OI8J1ubkdme",
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
                    dataIndex: "O68y5pgJORY-YCp4FJHkhiZ",
                    key: "O68y5pgJORY-YCp4FJHkhiZ",
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
                    dataIndex: "RSxNHJbeSS1-HllvX50cXC0",
                    key: "RSxNHJbeSS1-HllvX50cXC0",
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
                    dataIndex: "S8Fyw3Xjvwz-HllvX50cXC0",
                    key: "S8Fyw3Xjvwz-HllvX50cXC0",
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
                    dataIndex: "MqQeWVpv2Jv-HllvX50cXC0",
                    key: "MqQeWVpv2Jv-HllvX50cXC0",
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
                    dataIndex: "JwDVpaWOIzD-HllvX50cXC0",
                    key: "JwDVpaWOIzD-HllvX50cXC0",
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
                    dataIndex: "jAtCtTVPYxy-HllvX50cXC0",
                    key: "jAtCtTVPYxy-HllvX50cXC0",
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
                    dataIndex: "nTLf4oeV8Jf-Tkfqj6qEPIl",
                    key: "nTLf4oeV8Jf-Tkfqj6qEPIl",
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
                    dataIndex: "nTLf4oeV8Jf-HB928gipxeM",
                    key: "nTLf4oeV8Jf-HB928gipxeM",
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
                    dataIndex: "nTLf4oeV8Jf-dY5ErrARtaE",
                    key: "nTLf4oeV8Jf-dY5ErrARtaE",
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
                    dataIndex: "LxvVh8VQ6Js-HllvX50cXC0",
                    key: "LxvVh8VQ6Js-HllvX50cXC0",
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
                    dataIndex: "ShBvq5yRj1e-HllvX50cXC0",
                    key: "ShBvq5yRj1e-HllvX50cXC0",
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
                    dataIndex: "lldugdjYbLs-HllvX50cXC0",
                    key: "lldugdjYbLs-HllvX50cXC0",
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c189),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c190),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c191),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c192),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c193),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c194),
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
            dataIndex: "Eo7jHmiJAiB-sqbtAgPYXSv",
            key: "Eo7jHmiJAiB-sqbtAgPYXSv",
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
            dataIndex: "Eo7jHmiJAiB-F2tu3wZOPVC",
            key: "Eo7jHmiJAiB-F2tu3wZOPVC",
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
            dataIndex: "Eo7jHmiJAiB-nwK2pbWj5mh",
            key: "Eo7jHmiJAiB-nwK2pbWj5mh",
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c198),
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
            dataIndex: "OSz3QYhIhQR-HllvX50cXC0",
            key: "OSz3QYhIhQR-HllvX50cXC0",
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
            dataIndex: "QTLIVW7UkU0-HllvX50cXC0",
            key: "QTLIVW7UkU0-HllvX50cXC0",
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c201),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c202),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c203),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c204),
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
            dataIndex: "KUonAFN7Sc8-gVCgdhm7woH",
            key: "KUonAFN7Sc8-gVCgdhm7woH",
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
            dataIndex: "KUonAFN7Sc8-sroi5ilcwwJ",
            key: "KUonAFN7Sc8-sroi5ilcwwJ",
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c207),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c208),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c209),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c210),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c211),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c212),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c213),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c214),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c215),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c216),
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
            render: (v, row, index) => sumColumn(row, calculationKeys.c217),
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
                dataIndex: "W3NCU5eSLSC-HllvX50cXC0",
                key: "W3NCU5eSLSC-HllvX50cXC0",
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
                dataIndex: "ke3g8RskWEV-HllvX50cXC0",
                key: "ke3g8RskWEV-HllvX50cXC0",
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
                dataIndex: "gODbrwkFZbQ-HllvX50cXC0",
                key: "gODbrwkFZbQ-HllvX50cXC0",
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
                dataIndex: "DNTOAClA9hq-HllvX50cXC0",
                key: "DNTOAClA9hq-HllvX50cXC0",
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
                dataIndex: "JTOHcudPMjh-IJLPSkxidgR",
                key: "JTOHcudPMjh-IJLPSkxidgR",
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
                dataIndex: "JTOHcudPMjh-JPdOELeIbu8",
                key: "JTOHcudPMjh-JPdOELeIbu8",
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
                dataIndex: "JTOHcudPMjh-rNsqREqSGRq",
                key: "JTOHcudPMjh-rNsqREqSGRq",
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
                dataIndex: "JTOHcudPMjh-k2WQB4PIaqC",
                key: "JTOHcudPMjh-k2WQB4PIaqC",
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
                dataIndex: "JTOHcudPMjh-X4o8iokuZau",
                key: "JTOHcudPMjh-X4o8iokuZau",
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
                dataIndex: "JTOHcudPMjh-lMCGnLVUaQO",
                key: "JTOHcudPMjh-lMCGnLVUaQO",
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
                dataIndex: "JTOHcudPMjh-pMYWcIcbbH3",
                key: "JTOHcudPMjh-pMYWcIcbbH3",
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
                dataIndex: "JTOHcudPMjh-zpXCVwxEtZa",
                key: "JTOHcudPMjh-zpXCVwxEtZa",
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
                dataIndex: "JTOHcudPMjh-m1lBTJeOF9e",
                key: "JTOHcudPMjh-m1lBTJeOF9e",
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
                dataIndex: "SAfkkz43YAB-lNtIncHFHja",
                key: "SAfkkz43YAB-lNtIncHFHja",
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
                dataIndex: "SAfkkz43YAB-eN7FollVER2",
                key: "SAfkkz43YAB-eN7FollVER2",
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
                dataIndex: "qvFHuiSYOPO-lNtIncHFHja",
                key: "qvFHuiSYOPO-lNtIncHFHja",
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
                dataIndex: "qvFHuiSYOPO-eN7FollVER2",
                key: "qvFHuiSYOPO-eN7FollVER2",
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
                dataIndex: "RASKJrsiQeD-y8qayP3216s-c236",
                key: "RASKJrsiQeD-y8qayP3216s-c236",
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
                dataIndex: "RASKJrsiQeD-y8qayP3216s-c237",
                key: "RASKJrsiQeD-y8qayP3216s-c237",
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
                dataIndex: "qOAT1tBQQag-y8qayP3216s-c238",
                key: "qOAT1tBQQag-y8qayP3216s-c238",
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
                dataIndex: "mJO7Kby4sae-y8qayP3216s-c239",
                key: "mJO7Kby4sae-y8qayP3216s-c239",
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
                render: (v, row, index) => sumColumn(row, calculationKeys.c240),
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
                render: (v, row, index) => sumColumn(row, calculationKeys.c241),
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
                render: (v, row, index) => sumColumn(row, calculationKeys.c242),
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
                dataIndex: "Dn095f38VKa-OywA5n3oe9h",
                key: "Dn095f38VKa-OywA5n3oe9h",
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
                dataIndex: "Dn095f38VKa-l5Y0spK7FJV",
                key: "Dn095f38VKa-l5Y0spK7FJV",
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
                dataIndex: "Dn095f38VKa-HpfDgfqaoFU",
                key: "Dn095f38VKa-HpfDgfqaoFU",
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
                dataIndex: "Dn095f38VKa-YEqHCl6GJsu",
                key: "Dn095f38VKa-YEqHCl6GJsu",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "প্রসব পরবর্তী পরিবার \nপরিকল্পনা পদ্ধতি বিষয়ে কাউন্সেলিং",
            className: "r-th",
            children: [
              {
                title: "৭",
                className: "cl-no",
                dataIndex: "Dn095f38VKa-TBdJvsJJBYw",
                key: "Dn095f38VKa-TBdJvsJJBYw",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "মিসোপ্রোস্টল বড়ি \nসরবরাহপ্রাপ্ত গর্ভবতী",
            className: "r-th",
            children: [
              {
                title: "৮",
                className: "cl-no",
                dataIndex: "Dn095f38VKa-kI8RWCoDf2M",
                key: "Dn095f38VKa-kI8RWCoDf2M",
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
                dataIndex: "Dn095f38VKa-yJva186S4eX",
                key: "Dn095f38VKa-yJva186S4eX",
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
            title: "বাড়ীতে প্রসব করানো হয়েছে",
            className: "r-th",
            children: [
              {
                title: "১০",
                className: "cl-no",
                dataIndex: "cHfc15ybwZW-PoIfagz42cp",
                key: "cHfc15ybwZW-PoIfagz42cp",
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
              "প্রসবের তৃতীয় ধাপের \nসক্রিয় ব্যবস্থাপনা (AMTSL) অনুসরণ করে",
            className: "r-th",
            children: [
              {
                title: "১১",
                className: "cl-no",
                dataIndex: "cHfc15ybwZW-nwi3vwGOsW9",
                key: "cHfc15ybwZW-nwi3vwGOsW9",
              },
            ],
          },
        ],
      },
      {
        className: "rm-b-t",
        children: [
          {
            title: "মিসোপ্রস্টল বড়ি খাওয়ানো হয়েছে",
            className: "r-th",
            children: [
              {
                title: "১২",
                className: "cl-no",
                dataIndex: "cHfc15ybwZW-OIkiOUdYqh8",
                key: "cHfc15ybwZW-OIkiOUdYqh8",
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
                dataIndex: "ueUNyMlXaca-hT3QBWEQMqf",
                key: "ueUNyMlXaca-hT3QBWEQMqf",
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
                dataIndex: "ueUNyMlXaca-qa1vc72tvYm",
                key: "ueUNyMlXaca-qa1vc72tvYm",
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
                dataIndex: "ueUNyMlXaca-ugcTBok7ch1",
                key: "ueUNyMlXaca-ugcTBok7ch1",
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
                dataIndex: "ueUNyMlXaca-HXZ9KzIBP9p",
                key: "ueUNyMlXaca-HXZ9KzIBP9p",
              },
            ],
          },
          {
            title:
              "বাড়ীতে ডেলিভারীর ক্ষেত্রে \n২ দিনের মধ্যে প্রসবোত্তর সেবা গ্রহণকারী",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৭",
                dataIndex: "ueUNyMlXaca-KwmVHrSVhnc",
                key: "ueUNyMlXaca-KwmVHrSVhnc",
              },
            ],
          },
          {
            title: "প্রসব পরবর্তী পরিবার \nপরিকল্পনা পদ্ধতি বিষয়ে  কাউন্সেলিং",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "১৮",
                dataIndex: "ueUNyMlXaca-rlM2TPWxt8m",
                key: "ueUNyMlXaca-rlM2TPWxt8m",
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
                dataIndex: "ueUNyMlXaca-ZrnT2q1BTEa",
                key: "ueUNyMlXaca-ZrnT2q1BTEa",
              },
            ],
          },
          {
            title: "নাড়ি কাটার পর ৭.১% \nক্লোরহেক্সিডিন ব্যবহারের সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২০",
                dataIndex: "ueUNyMlXaca-HZLRrnHzKyU",
                key: "ueUNyMlXaca-HZLRrnHzKyU",
              },
            ],
          },
          {
            title: "নাড়ি কাটার পর মায়ের \nত্বকে-ত্বক স্পর্শ প্রদানের সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২১",
                dataIndex: "ueUNyMlXaca-QO3hQdgZE7z",
                key: "ueUNyMlXaca-QO3hQdgZE7z",
              },
            ],
          },
          {
            title: "জন্মের ১ ঘন্টার মধ্যে \nবুকের দুধ খাওয়ানোর সংখ্যা",
            className: "r-th",
            children: [
              {
                className: "cl-no",
                title: "২২",
                dataIndex: "ueUNyMlXaca-gZFTqV1GLmi",
                key: "ueUNyMlXaca-gZFTqV1GLmi",
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
                dataIndex: "ueUNyMlXaca-p4bQgdRZ9qM",
                key: "ueUNyMlXaca-p4bQgdRZ9qM",
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
                dataIndex: "ueUNyMlXaca-FqeFk1ml24E",
                key: "ueUNyMlXaca-FqeFk1ml24E",
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
                dataIndex: "ueUNyMlXaca-Qww3loMQ7tW",
                key: "ueUNyMlXaca-Qww3loMQ7tW",
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
                dataIndex: "ueUNyMlXaca-lx5pe7Ogifx",
                key: "ueUNyMlXaca-lx5pe7Ogifx",
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
                dataIndex: "ueUNyMlXaca-JwENNWEs6Dz",
                key: "ueUNyMlXaca-JwENNWEs6Dz",
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
                dataIndex: "QtxvCJGVccC-Yc8qdhAoBOX",
                key: "QtxvCJGVccC-Yc8qdhAoBOX",
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
              "একলামপসিয়া রোগীকে লোডিং \nডোজ MgSO4 ইনজেকশন দিয়ে রেফার করার সংখ্যা",
            className: "r-th",
            children: [
              {
                title: "২৯",
                className: "cl-no",
                dataIndex: "QtxvCJGVccC-UMt6eH8yHJZ",
                key: "QtxvCJGVccC-UMt6eH8yHJZ",
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
                dataIndex: "QtxvCJGVccC-I6ybgVG0P6Q",
                key: "QtxvCJGVccC-I6ybgVG0P6Q",
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
                dataIndex: "ZeBZhfLLNZI-HllvX50cXC0",
                key: "ZeBZhfLLNZI-HllvX50cXC0",
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
                render: (v, row, index) =>
                  sumColumn(row, calculationKeys.ccsba32),
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
                render: (v, row, index) =>
                  sumColumn(row, calculationKeys.ccsba33),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis3),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis4),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis5),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis6),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis7),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis8),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis9),
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
                    dataIndex: "Vb4BjdD4gII-dTn0cbawwPE",
                    key: "Vb4BjdD4gII-dTn0cbawwPE",
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
                    dataIndex: "Vb4BjdD4gII-rR6uiud0g1n",
                    key: "Vb4BjdD4gII-rR6uiud0g1n",
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis12),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis13),
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis14),
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
                    dataIndex: "Vb4BjdD4gII-MowmpjFBixE",
                    key: "Vb4BjdD4gII-MowmpjFBixE",
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis16),
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
                    dataIndex: "Vb4BjdD4gII-icBGL8Ew1qJ",
                    key: "Vb4BjdD4gII-icBGL8Ew1qJ",
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
                    dataIndex: "Vb4BjdD4gII-lthgQJBDGd1",
                    key: "Vb4BjdD4gII-lthgQJBDGd1",
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis19),
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
                    dataIndex: "Vb4BjdD4gII-iFrF7bPcxES",
                    key: "Vb4BjdD4gII-iFrF7bPcxES",
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
                    dataIndex: "Vb4BjdD4gII-Ih3wZC3DRqi",
                    key: "Vb4BjdD4gII-Ih3wZC3DRqi",
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
                    dataIndex: "Vb4BjdD4gII-KbUYC0KYdgI",
                    key: "Vb4BjdD4gII-KbUYC0KYdgI",
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
                    dataIndex: "Vb4BjdD4gII-nqPjXw4UYCU",
                    key: "Vb4BjdD4gII-nqPjXw4UYCU",
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
                    dataIndex: "Vb4BjdD4gII-Dj8OodfMtbc",
                    key: "Vb4BjdD4gII-Dj8OodfMtbc",
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
                    dataIndex: "Vb4BjdD4gII-fvvAwXnb4AQ",
                    key: "Vb4BjdD4gII-fvvAwXnb4AQ",
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis26),
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
                    dataIndex: "W0N8h5FriNB-ImKYYx8r02T",
                    key: "W0N8h5FriNB-ImKYYx8r02T",
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
                    dataIndex: "W0N8h5FriNB-BZYuSEBiV5V",
                    key: "W0N8h5FriNB-BZYuSEBiV5V",
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
                    render: (v, row, index) =>
                      sumColumn(row, calculationKeys.clmis29),
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
