import namor from "namor";
import _ from "underscore";

export const reduceNanArrSum = (nums) => {
  //recieves array of string and sum them
  var numbers = _.each(nums, parseInt);
  var sum = _.reduce(
    _.compact(numbers),
    function (m, n) {
      return m + n;
    },
    0
  );
  return sum;
};

export const sumColumn = (row, calculationKeys) => {
  // console.log(row,calculationKeys);
  var s = _.reduce(
    _.map(calculationKeys, (e) => row[e]),
    (m, n) => (+m || 0) + (+n || 0)
  );
  // console.log(s);
  return s;
};

export const rejectSpecificWord = (str, reject) => {
  // console.log(import.meta.env.VITE_REJECTED_WORD,str);
  if (typeof str === "string") {
    return str.replace(
      new RegExp(import.meta.env.VITE_REJECTED_WORD, "gi"),
      ""
    );
  }
};

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single",
  };
};

export function makeData(len = 5553) {
  return range(len).map((d) => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    };
  });
}

export const Logo = () => (
  <div
    style={{
      margin: "1rem auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    For more examples, visit {""}
    <br />
    <a href="https://github.com/react-tools/react-table" target="_blank" rel="noopener noreferrer">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        alt="React Table Logo"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>
);

export const Tips = () => (
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);

export const orgUnitDataSets = (data) => {
  var orgUnitAll = {
    mis2: [],
    mis3: [],
  };
  _.filter(data, (orgUnit) => {
    _.some(orgUnit.dataSets, (dataSets) => {
      if (dataSets.id === "qlYSHtdGSh9") {
        orgUnitAll["mis2"].push(orgUnit);
      } else if (dataSets.id === "tkatBAhuUF7") {
        orgUnitAll["mis3"].push(orgUnit);
      }
    });
  });
  return orgUnitAll;
};
export const mergeByProperty = (arr1, arr2, prop) => {
  _.each(arr2, function (arr2obj) {
    var arr1obj = _.find(arr1, function (arr1obj) {
      // console.log(arr1obj);
      return arr1obj[prop] === arr2obj[prop];
    });

    //If the object already exist extend it with the new values from arr2, otherwise just add the new object to arr1
    arr1obj ? _.extend(arr1obj, arr2obj) : arr1.push(arr2obj);
  });
  // console.log(arr1);
  return arr1;
};
export const replaceOrgUnitId = (dataSet, orgUnit) => {
  var o = {},
    d = {};
  _.map(orgUnit, (d) => {
    o[d["id"]] = d["displayName"];
  });
  _.each(dataSet, (v, k) => {
    k = o[k] || k;
    // console.log(k);
    d[k] = v;
    // console.log(v, k);
  });
  return d;
};
