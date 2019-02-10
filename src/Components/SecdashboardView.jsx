import React, { Component } from "react";
import "./App.css";
import "./App.js";
import { Link } from 'react-router-dom'
import Routes from "./Components/Routes";

//import DashBoard from "./Components/DashBoard.jsx";
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";


class SecDashboardView extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">MMDA SECTION HEAD</Link>} scroll>
                        <Navigation>
                            <Link to="sec/dashboard/main">DashBoard</Link>
                            <Link to="sec/dashboard/logout">Logout</Link>
                        </Navigation>
                    </Header>
                    <Drawer className="drawer" title="WELCOME" >
                        <Navigation>
                            <Link to="sec/dashboard/main"><i class="fas fa-signal"></i>DashBoard</Link>
                            <Link to="sec/dashboard/activeCollectors"><i class="fas fa-walking"></i>Active Collectors</Link>
                            <Link to="sec/dashboard/help"><i class="fas fa-question-circle"></i>Help</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Routes />
                    </Content>
                    <Footer className="footer" size="mini" style={{ height: '5px' }}>
                        <FooterSection type="left" logo="MMDA">
                            <FooterLinkList>
                                <a href="/">Help</a>
                                <a href="/">Privacy & Terms</a>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default SecDashboardView;
