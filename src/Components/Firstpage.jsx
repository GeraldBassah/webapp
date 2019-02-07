import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Footer, FooterLinkList, FooterSection } from 'react-mdl';
import "./Firstpage.css";
import { Layout, Header, Navigation, Content, IconButton, MenuItem, Menu } from "react-mdl";

//import  RevLogin  from "./Components/RevLogin";


class Firstpage extends Component {

  render() {
    return (
      // <div className="entire">
      //  <Link to="/RevLogin">Revenue Head</Link>
      // <Link to="/SecLogin"> Section Head</Link>


      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout fixedHeader>
          <Header className="Header" title={<span><strong>MMDA</strong></span>}>
            <Navigation>
              <div style={{ position: 'relative' }}>
                <IconButton name="more_vert" id="demo-menu-top-right" />
                <Menu target="demo-menu-top-right" valign="bottom" align="right" ripple>
                  <MenuItem>How to use Software ?</MenuItem>
                  <MenuItem>Exit</MenuItem>

                </Menu>
              </div>
            </Navigation>
          </Header>
          <Content className="wrapper">

            <Button bsStyle="primary" bsSize="large" block onClick={this.onPageChange}
              style={{ width: '400px', margin: '200px auto 10px', height: '80px' }} name="/rev/login" >
              Revenue Head
       </Button>


            <Button bsSize="large" block onClick={this.onPageChange} style={{ width: '400px', margin: '0 auto 10px', height: '80px' }} name="/sec/login">
              Sectional Head
       </Button>

          </Content>
          <Footer className="footer" size="mini" style={{ height: '10px' }}>
            <FooterSection type="right" logo="Copyright &copy; 2019 MMDA">
              <FooterLinkList>
                <a href="/">Help</a>
                <a href="/">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>



        </Layout>
      </div >




    );
  }
  onPageChange = (e) => {
    this.props.history.push(e.target.name);
  };
}



export default Firstpage;
