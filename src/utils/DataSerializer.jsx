import _ from "underscore";

export const sumby = (keys, data, total_label = "সরকারি সংস্থার মোট") => {
  var allKeys = keys;

  var d = data;
  var sums = {};
  var carTotal = [];
  _.each(d, (item) => {
    _.each(allKeys, (k) => {
      if (k !== "orgUnit" && k !== "sl" && k !== "key") {
        var getType = typeof item[k];
        if (getType === "undefined") {
        } else if (getType === "string" || getType === "number") {
          sums[k] = (sums[k] || 0) + parseFloat(item[k]);
        }
      }
      if (k === "q9rD1VwwkXb-HllvX50cXC0" && item[k]) {
        carTotal.push(parseFloat(item[k]));
      }
    });
  });
  var cT = getTotalParcetage(carTotal);
  sums.orgUnit = total_label;
  sums.sl = total_label.split(" ").join("-");
  sums["customRowKey"] = total_label.split(" ").join("-");
  sums.key = total_label.split(" ").join("-");
  sums["q9rD1VwwkXb-HllvX50cXC0"] = cT;
  return sums;
};

export const getTotalParcetage = (data) => {
  if (!data || data.length === 0) return "0.00";
  var t = _.reduce(
    data,
    (m, num) => {
      return m + num;
    },
    0
  );
  return (t / data.length).toFixed(2);
};

export const dataSetKeyUnion = (data) => {
  var d = data;
  var allKeys = [];
  _.each(d, (rows) => {
    var keys = _.keys(rows);
    allKeys.push(keys);
  });
  var allKeysUnion = _.union.apply(_, allKeys);
  return allKeysUnion;
};

export const mis4serializer = (
  data,
  enableSum = true,
  total_label = "সরকারি সংস্থার মোট"
) => {
  var d = _.groupBy(data, "orgUnit");
  var a = _.map(d, (v, k) => {
    var obj = {
      orgUnit: k,
    };

    var objKeys = Object.keys(d);
    _.map(objKeys, (elem, index) => {
      if (k === elem) {
        obj["sl"] = ++index;
        obj["customRowKey"] = index;
      }
    });
    _.map(v, (e, i) => {
      var key = e.dataElement + "-" + e.categoryOptionCombo;
      obj[key] = e.value;
      obj["key"] = key + i;
    });
    return obj;
  });
  // Get Sum Value of Unions
  var dataSetKeys = dataSetKeyUnion(a);
  if (enableSum) {
    var sums = sumby(dataSetKeys, a, total_label);
    a.push(sums);
  }
  return a;
};

export const mis5Extractor = (table) => {
  console.log("=== MIS5 Extractor - Processing Data ===");
  console.log("Input table:", table);

  const aggregatedResults = [];

  // Process each upazila's API response
  table.forEach((apiResponse, index) => {
    const reportData = apiResponse.data;
    const upazilaName =
      apiResponse.config && apiResponse.config.params
        ? apiResponse.config.params.upazilaName
        : `Upazila ${index + 1}`;

    console.log(`\n--- Processing Upazila: ${upazilaName} ---`);

    // Create result object for this upazila
    const result = {
      sl: index + 1,
      orgUnit: upazilaName,
      key: `mis5_row_${index + 1}`, // Add unique key for React table
    };

    // Check if reportData is an array of sections (structured format)
    if (Array.isArray(reportData)) {
      console.log(`Found ${reportData.length} sections in report`);

      // Process each section
      reportData.forEach((section, sectionIndex) => {
        if (
          section &&
          typeof section === "object" &&
          section.rows &&
          Array.isArray(section.rows)
        ) {
          console.log(
            `\nSection ${sectionIndex}: ${section.title || "Untitled"}`
          );
          console.log(`Headers:`, section.headers);
          console.log(`Rows: ${section.rows.length}`);

          // Process each row
          section.rows.forEach((row, rowIndex) => {
            if (Array.isArray(row)) {
              // Process each cell in the row
              row.forEach((cellValue, cellIndex) => {
                // Check if cell contains HTML span elements with data attributes
                if (
                  typeof cellValue === "string" &&
                  cellValue.includes("<span")
                ) {
                  // Extract data from HTML span elements
                  const spanPattern =
                    /<span class="val" data-de="([^"]+)" data-co="([^"]+)">([^<]*)<\/span>/g;
                  const matches = [...cellValue.matchAll(spanPattern)];

                  matches.forEach((match) => {
                    const dataElement = match[1];
                    const categoryOption = match[2];
                    const value = match[3];

                    // Create composite key for data storage
                    const key = `${dataElement}-${categoryOption}`;

                    // Store non-empty values
                    if (value && value.trim() !== "") {
                      result[key] = value;
                      console.log(`  Extracted: ${key} = ${value}`);
                    }
                  });
                }
                // Handle plain numeric or text values
                else if (
                  cellValue &&
                  typeof cellValue === "string" &&
                  cellValue.trim() !== ""
                ) {
                  // Try to match this value with a header if available
                  if (section.headers && section.headers[cellIndex]) {
                    const headerName = section.headers[cellIndex].name;

                    // Clean header name for use as key
                    const cleanHeaderName = headerName
                      .replace(/<[^>]*>/g, "") // Remove HTML tags
                      .replace(/\s+/g, "_") // Replace spaces with underscore
                      .trim();

                    // Only store if it's a numeric value or meaningful text
                    if (!isNaN(cellValue) || cellValue.length < 50) {
                      result[cleanHeaderName] = cellValue;
                    }
                  }
                }
              });
            }
          });

          // Also process headers that might contain span elements (like in the distribution section)
          if (section.headers && Array.isArray(section.headers)) {
            section.headers.forEach((header, headerIndex) => {
              if (
                header.name &&
                typeof header.name === "string" &&
                header.name.includes("<span")
              ) {
                const spanPattern =
                  /<span class="val" data-de="([^"]+)" data-co="([^"]+)">([^<]*)<\/span>/g;
                const matches = [...header.name.matchAll(spanPattern)];

                matches.forEach((match) => {
                  const dataElement = match[1];
                  const categoryOption = match[2];
                  const value = match[3];
                  const key = `${dataElement}-${categoryOption}`;

                  if (value && value.trim() !== "") {
                    result[key] = value;
                    console.log(`  Extracted from header: ${key} = ${value}`);
                  }
                });
              }
            });
          }
        }
      });
    }
    // Handle old HTML string format (backward compatibility)
    else if (typeof reportData === "string" && reportData.includes("<span")) {
      console.log("Processing old HTML string format");
      const spanPattern =
        /<span class="val" data-de="([^"]+)" data-co="([^"]+)">([^<]*)<\/span>/g;
      const matches = [...reportData.matchAll(spanPattern)];

      matches.forEach((match) => {
        const dataElement = match[1];
        const categoryOption = match[2];
        const value = match[3];
        const key = `${dataElement}-${categoryOption}`;

        if (value && value.trim() !== "") {
          result[key] = value;
        }
      });
    }

    console.log(`\nFinal result for ${upazilaName}:`, result);
    console.log(
      `Total data points extracted: ${Object.keys(result).length - 3}`
    ); // Subtract sl, orgUnit, key

    aggregatedResults.push(result);
  });

  console.log("\n=== MIS5 Extractor - Complete ===");
  console.log(`Total upazilas processed: ${aggregatedResults.length}`);
  console.log("Final aggregated results:", aggregatedResults);

  return aggregatedResults;
};

//MIS4 AGGR
export const getResult = (results, keyToFilter, valueEndsWith) => {
  return _.filter(results, (d) => {
    if (!d[keyToFilter]) return false;
    var res = d[keyToFilter].endsWith(valueEndsWith);
    if (res) {
      return true;
    } else {
      return d[keyToFilter].match(/Ward-/g);
    }
  });
};

export const onlyGov = (result) => {
  var r = _.filter(
    result,
    (v, k) =>
      v.orgUnit &&
      !(v.orgUnit.endsWith("(NGO)") || v.orgUnit.endsWith("(Multi-Sectoral)"))
  );
  return r;
};

export const makeMis4TableFormatAggr = (data) => {
  console.log(data);
  var d = [];
  var i = 1;
  var sortedData = {};
  Object.keys(data)
    .sort()
    .forEach((k) => {
      sortedData[k] = data[k];
    });
  _.map(sortedData, (v, k) => {
    var dataSet = {};
    dataSet["orgUnit"] = k;
    _.map(v, (value) => {
      if (value !== undefined) {
        var de = value["dataElement"],
          co = value["categoryOptionCombo"],
          dv = parseInt(value["value"], 10);

        var index = de + "-" + co;
        if (_.has(dataSet, index)) {
          var temp = dataSet[index];
          dataSet[index] = dv + temp;
        } else {
          dataSet[index] = dv;
        }
      }
    });

    dataSet["sl"] = i;
    dataSet["key"] = i;
    i++;
    d.push(dataSet);
  });

  console.log(d);
  var govDataSet = onlyGov(d);
  var ngoDataset = getResult(d, "orgUnit", "(NGO)");
  var multiSectoralDataSet = getResult(d, "orgUnit", "(Multi-Sectoral)");

  // Get Sum Value of GOV, NGO, MULTI-SECTORAL
  var dataSetKeysAll = dataSetKeyUnion(d);
  var dataSetKeysGov = dataSetKeyUnion(govDataSet);
  var dataSetKeysNgo = dataSetKeyUnion(ngoDataset);
  var dataSetKeysMultiSectoral = dataSetKeyUnion(multiSectoralDataSet);

  //Sum
  var sumGov = sumby(dataSetKeysGov, govDataSet, "সরকারি সংস্থার মোট");
  var sumNgo = sumby(dataSetKeysNgo, ngoDataset, "অসরকারি সংস্থার মোট");
  var sumMultiSectoral = sumby(
    dataSetKeysMultiSectoral,
    multiSectoralDataSet,
    "বহুমুখী সংস্থার মোট"
  );
  var sumUpazila = sumby(dataSetKeysAll, d, "উপজেলা মোট");

  //APPENDING
  govDataSet.push(sumGov);
  govDataSet.push(sumNgo);
  govDataSet.push(sumMultiSectoral);
  govDataSet.push(sumUpazila);

  ngoDataset.push(sumNgo);
  multiSectoralDataSet.push(sumMultiSectoral);

  return {
    govDataSet,
    ngoDataset,
    multiSectoralDataSet,
  };
};
