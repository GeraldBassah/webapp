import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton, Footer, FooterLinkList, FooterSection, Table, TableHeader } from 'react-mdl';
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
                <StatsCard
                  bigIcon={<i className="pe-7s-server text-warning" />}
                  statsText="Capacity"
                  statsValue="105GB"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText="Updated now"
                />
              </Col>
              <Col lg={3} sm={6}>
                <StatsCard
                  bigIcon={<i className="pe-7s-wallet text-success" />}
                  statsText="Revenue"
                  statsValue="$1,345"
                  statsIcon={<i className="fa fa-calendar-o" />}
                  statsIconText="Last day"
                />
              </Col>
              <Col lg={3} sm={6}>
                <StatsCard
                  bigIcon={<i className="pe-7s-graph1 text-danger" />}
                  statsText="Errors"
                  statsValue="23"
                  statsIcon={<i className="fa fa-clock-o" />}
                  statsIconText="In the last hour"
                />
              </Col>
              <Col lg={3} sm={6}>
                <StatsCard
                  bigIcon={<i className="fa fa-twitter text-info" />}
                  statsText="Followers"
                  statsValue="+45"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText="Updated now"
                />
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card
                  statsIcon="fa fa-history"
                  id="chartHours"
                  title="Users Behavior"
                  category="24 Hours performance"
                  stats="Updated 3 minutes ago"
                  content={
                    <div className="ct-chart">
                      <ChartistGraph
                        data={dataSales}
                        type="Line"
                        options={optionsSales}
                        responsiveOptions={responsiveSales}
                      />
                    </div>
                  }
                  legend={
                    <div className="legend">{this.createLegend(legendSales)}</div>
                  }
                />
              </Col>
              <Col md={4}>
                <Card
                  statsIcon="fa fa-clock-o"
                  title="Email Statistics"
                  category="Last Campaign Performance"
                  stats="Campaign sent 2 days ago"
                  content={
                    <div
                      id="chartPreferences"
                      className="ct-chart ct-perfect-fourth"
                    >
                      <ChartistGraph data={dataPie} type="Pie" />
                    </div>
                  }
                  legend={
                    <div className="legend">{this.createLegend(legendPie)}</div>
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card
                  id="chartActivity"
                  title="2014 Sales"
                  category="All products including Taxes"
                  stats="Data information certified"
                  statsIcon="fa fa-check"
                  content={
                    <div className="ct-chart">
                      <ChartistGraph
                        data={dataBar}
                        type="Bar"
                        options={optionsBar}
                        responsiveOptions={responsiveBar}
                      />
                    </div>
                  }
                  legend={
                    <div className="legend">{this.createLegend(legendBar)}</div>
                  }
                />
              </Col>

              <Col md={6}>
                <Card
                  title="Tasks"
                  category="Backend development"
                  stats="Updated 3 minutes ago"
                  statsIcon="fa fa-history"
                  content={
                    <div className="table-full-width">
                      <table className="table">
                        <Tasks />
                      </table>
                    </div>
                  }
                />
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
