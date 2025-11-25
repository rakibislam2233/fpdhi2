import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import MisForm4 from "./pages/mis4/MisForm4";
import MisForm5 from "./pages/mis5/MisForm5";
import Report from "./features/reports/Report";
import { navbarToggle } from "./redux/slices/navbarSlice";
import { SS_IMPLEMENTED } from "./utils/SsImplemented";
const { Header, Sider, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const menuCollapsed = useSelector((state) => state.navBar.toggleOpen);
  // Placeholder for user data that was previously provided by DHIS2
  const userDataViewZillaCode = useSelector(
    (state) => state.d2ui?.userDataViewZillaCode || "01"
  );

  const toggle = () => {
    dispatch(navbarToggle());
    console.log(typeof import.meta.env.VITE_SS_ACTIVATE_DISTRICT);
  };

  const location = useLocation();

  return (
    <div style={{ height: '100vh' }}>
      <Layout style={{ height: '100%' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={menuCollapsed}
          width={250}
          style={{
            background: '#001529',
            boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
          <div
            className="logo"
            style={{
              height: 64,
              padding: '0 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              borderBottom: '1px solid #000c17',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1890ff, #096dd9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
                D
              </div>
              {!menuCollapsed && (
                <span style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                  letterSpacing: '0.5px'
                }}>
                  DGFP DHIS2
                </span>
              )}
            </div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
            style={{
              background: '#001529',
              borderRight: 0,
              height: 'calc(100% - 64px)',
              overflowY: 'auto',
            }}
            items={[
              {
                key: '/mis4',
                icon: <span style={{ fontSize: '16px' }}>📊</span>,
                label: <Link to="/mis4">MIS-4 Report</Link>,
              },
              {
                key: '/mis5',
                icon: <span style={{ fontSize: '16px' }}>📈</span>,
                label: <Link to="/mis5">MIS-5 Report</Link>,
              },
              ...(userDataViewZillaCode && SS_IMPLEMENTED.includes(userDataViewZillaCode)
                ? [{
                    key: '/import-ss',
                    icon: <span style={{ fontSize: '16px' }}>📤</span>,
                    label: <Link to="/import-ss">Import from SS</Link>,
                  }]
                : []),
              {
                key: '/report',
                icon: <span style={{ fontSize: '16px' }}>📋</span>,
                label: <Link to="/report">Report</Link>,
              }
            ]}
          />
        </Sider>
        <Layout style={{ marginLeft: menuCollapsed ? 80 : 250 }}>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Space style={{ marginLeft: 16 }}>
              <Button
                type="text"
                icon={
                  menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
                onClick={toggle}
                style={{
                  fontSize: 18,
                  width: 64,
                  height: 64,
                }}
              />
            </Space>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 10,
              background: "#fff",
              minHeight: 280,
              overflow: "scroll",
            }}
          >
            <Routes>
              <Route path="/mis4" element={<MisForm4 />} />
              <Route path="/mis5" element={<MisForm5 />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
