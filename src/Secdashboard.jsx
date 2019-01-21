import React, { Component } from "react";
import "./App.css";
import "./App.js";
import { Link } from 'react-router-dom'
import Routes from "./Components/Routes";
//import DashBoard from "./Components/DashBoard.jsx";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";


class DashboardView extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">MMDA SECTION HEAD</Link>} scroll>
                        <Navigation>
                            <Link to="/dashboard/main">DashBoard</Link>
                            <Link to="/dashboard/logout">Logout</Link>
                        </Navigation>
                    </Header>
                    <Drawer className="drawer" title="WELCOME" >
                        <Navigation>
                            <Link to="/dashboard/main">DashBoard</Link>
                            <Link to="/dashboard/activeCollectors">Active Collectors</Link>

                            <Link to="/dashboard/help">Help</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Routes />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default DashboardView;
