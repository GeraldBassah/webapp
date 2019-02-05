import React, { Component } from 'react';
import { Tabs, Tab, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton, Footer, FooterLinkList, FooterSection, Table, TableHeader } from 'react-mdl';
import { Grid, Row, Col } from "react-bootstrap";



class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (

        <div className="content">
          <Grid fluid>
            <Row>
              <Col lg={3} sm={6}>

              </Col>
            </Row>
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div >
          <Card shadow={0} style={{ width: '500px', height: '200px', padding: '10px' }}>
            <CardTitle style={{ height: '170px', background: 'url(https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912719/62358443-avatar-man-smiling-cartoon-male-person-user-vector-illustration.jpg) center /cover' }}> Toll Collector 1</CardTitle>

            <CardText>
              Hello i'm a toll collector in Ghana
         </CardText>
            <CardActions border>
              <Button colored>Open</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
          <Card shadow={0} style={{ width: '500px', height: '200px', padding: '10px' }}>
            <CardTitle style={{ height: '170px', background: 'url(https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912719/62358443-avatar-man-smiling-cartoon-male-person-user-vector-illustration.jpg) center /cover' }}> Toll Collector 2</CardTitle>

            <CardText>
              Hello i'm a toll collector in Ghana
         </CardText>
            <CardActions border>
              <Button colored>Open</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
          <Card shadow={0} style={{ width: '500px', height: '200px', padding: '10px' }}>
            <CardTitle style={{ height: '170px', background: 'url(https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912719/62358443-avatar-man-smiling-cartoon-male-person-user-vector-illustration.jpg) center /cover' }}> Toll Collector 3</CardTitle>

            <CardText>
              Hello i'm a toll collector in Ghana
         </CardText>
            <CardActions border>
              <Button colored>Open</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {

    }

  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Sectional Heads</Tab>
          <Tab> Toll Collectors</Tab>
          <Tab>Accounting Information</Tab>
        </Tabs>

        <Grid  >
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}
            </div>
          </Cell>
        </Grid>

      </div>


    );



  }
}
export default DashBoard;
