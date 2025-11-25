import { Table, Tabs } from "antd";
import React from "react";
import MisReportHeader from "../../../components/MisReportHeader";
import {
  mis4columns_child_birth,
  mis4columns_csba,
  mis4columns_death,
  mis4columns_fp,
  mis4columns_fwa_fpi_service,
  mis4columns_lmis,
  mis4columns_nutrition,
  mis4columns_other_service,
  mis4columns_patient_service,
  mis4columns_reproductive_health,
} from "../../../components/reporttablecolumns/mis4columnsaggr";

const TabPane = Tabs.TabPane;

const Mis4ReportTable = ({
  data,
  month,
  upazila,
  zilla,
  aggrdata,
  ngoaggrdata,
  multisectoralaggrdata,
}) => {
  const govData = data?.govDataSet || aggrdata;
  const multiSectoralData = data?.multiSectoralDataSet || multisectoralaggrdata;
  const ngoData = data?.ngoDataset || ngoaggrdata;

  const hasData =
    (data && Object.keys(data).length > 0) ||
    (aggrdata && aggrdata.length > 0) ||
    (govData && govData.length > 0);

  return (
    <div>
      {hasData && (
        <MisReportHeader
          month={month}
          upazila={upazila instanceof Object && upazila[0].displayName}
          zilla={zilla}
        ></MisReportHeader>
      )}

      <Tabs defaultActiveKey="1" type="card">
        <TabPane
          className="tab-text"
          tab="পরিবার পরিকল্পনা পদ্ধতি গ্রহণকারী"
          key="1"
        >
          {govData && govData.length > 0 && (
            <Table
              columns={mis4columns_fp}
              dataSource={govData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
          {multiSectoralData && multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_fp}
              dataSource={multiSectoralData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
          {ngoData && ngoData.length > 0 && (
            <Table
              columns={mis4columns_fp}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>

        <TabPane tab="প্রজনন স্বাস্থ্য সেবা" key="2">
          {govData && govData.length > 0 && (
            <Table
              columns={mis4columns_reproductive_health}
              dataSource={govData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData && multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_reproductive_health}
              dataSource={multiSectoralData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {ngoData && ngoData.length > 0 && (
            <Table
              columns={mis4columns_reproductive_health}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane tab="শিশু (০-৫ বৎসর) সেবা" key="3">
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_child_birth}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_child_birth}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_child_birth}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane tab="জন্ম-মৃত্যু" key="4">
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_death}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_death}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_death}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane tab="সাধারণ রোগীর সেবা" key="5">
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_patient_service}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_patient_service}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_patient_service}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane tab="পুুষ্টি সেবা" key="6">
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_nutrition}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_nutrition}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_nutrition}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane
          tab="পরিবার কল্যাণ সহকারী এবং এফপিআই কর্তৃক প্রদত্ত সেবা কার্যক্রম"
          key="7"
        >
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_fwa_fpi_service}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_fwa_fpi_service}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_fwa_fpi_service}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane tab="প্রাতিষ্ঠানিক ও অন্যান্য সেবা " key="8">
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_other_service}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_other_service}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_other_service}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane
          tab="সিএসবিএ কর্তৃক প্রদত্ত সেবার তথ্য(প্রজনন স্বাস্থ্য সেবা) "
          key="9"
        >
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_csba}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_csba}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_csba}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
        <TabPane tab="বিতরণ ও সম্পাদন বিষয়ক " key="10">
          {govData && govData.length > 0 && govData.length > 0 && (
            <Table
              columns={mis4columns_lmis}
              dataSource={govData}
              bordered
              className="mistables"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

          {multiSectoralData &&
            multiSectoralData.length > 0 &&
            multiSectoralData.length > 0 && (
              <Table
                columns={mis4columns_lmis}
                dataSource={multiSectoralData}
                bordered
                className="mistables"
                size="small"
                rowKey="sl"
                pagination={false}
                scroll={{ x: 1000 }}
              />
            )}

          {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
            <Table
              columns={mis4columns_lmis}
              dataSource={ngoData}
              bordered
              className="mistables"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}
        </TabPane>
      </Tabs>
      <div style={{ position: "absolute", left: "-10000px" }}>
        {govData && govData.length > 0 && (
          <Table
            columns={mis4columns_fp}
            dataSource={govData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData && multiSectoralData.length > 0 && (
          <Table
            columns={mis4columns_fp}
            dataSource={multiSectoralData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {ngoData && ngoData.length > 0 && (
          <Table
            columns={mis4columns_fp}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && (
          <Table
            columns={mis4columns_reproductive_health}
            dataSource={govData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData && multiSectoralData.length > 0 && (
          <Table
            columns={mis4columns_reproductive_health}
            dataSource={multiSectoralData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {ngoData && ngoData.length > 0 && (
          <Table
            columns={mis4columns_reproductive_health}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_child_birth}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_child_birth}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_child_birth}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_death}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_death}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_death}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_patient_service}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_patient_service}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_patient_service}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_nutrition}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_nutrition}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_nutrition}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_fwa_fpi_service}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_fwa_fpi_service}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_fwa_fpi_service}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_other_service}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_other_service}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_other_service}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_csba}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_csba}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_csba}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {govData && govData.length > 0 && govData.length > 0 && (
          <Table
            columns={mis4columns_lmis}
            dataSource={govData}
            bordered
            className="mistablesprint"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}

        {multiSectoralData &&
          multiSectoralData.length > 0 &&
          multiSectoralData.length > 0 && (
            <Table
              columns={mis4columns_lmis}
              dataSource={multiSectoralData}
              bordered
              className="mistablesprint"
              size="small"
              rowKey="sl"
              pagination={false}
              scroll={{ x: 1000 }}
            />
          )}

        {ngoData && ngoData.length > 0 && ngoData.length > 0 && (
          <Table
            columns={mis4columns_lmis}
            dataSource={ngoData}
            bordered
            className="mistablesprint"
            size="small"
            rowKey="sl"
            pagination={false}
            scroll={{ x: 1000 }}
          />
        )}
      </div>
    </div>
  );
};
export default Mis4ReportTable;
