import React, { Component } from 'react';
import { Tabs, Tab, Cell, Grid, ListItem, ListItemAction, List, ListItemContent, Button } from 'react-mdl';
import { Table } from 'react-bootstrap';




class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (

        <div>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div >
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
              <ListItemAction>
                <Button onClick={this.onPageChange} raised accent ripple name="/dashboard/main/PageInfo">View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple >View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>
          <List style={{ width: '650px', padding: '10px', border: '1px solid black' }}>
            <ListItem threeLine>
              <ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
              <ListItemAction>
                <Button raised accent ripple>View</Button>
              </ListItemAction>
            </ListItem>
          </List>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div style={{ width: '50%', backgroundColor: 'white' }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name Of MarketPlace</th>
                <th>Number of Toll Collectors</th>
                <th><span>(GH&#8373;)</span>Daily Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Kumasi Central Market</td>
                <td>45</td>
                <td>2500.00</td>

              </tr>
              <tr>
                <td>2</td>
                <td>Asafo Market</td>
                <td>20</td>
                <td>1500.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Tech Market</td>
                <td>12</td>
                <td>1200.00</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name Of MarketPlace</th>
                <th>Number of Toll Collectors</th>
                <th><span>(GH&#8373;)</span>Daily Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Kumasi Central Market</td>
                <td>45</td>
                <td>2500.00</td>

              </tr>
              <tr>
                <td>2</td>
                <td>Asafo Market</td>
                <td>20</td>
                <td>1500.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Tech Market</td>
                <td>12</td>
                <td>1200.00</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
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
  onPageChange = (e) => {
    this.props.history.push(e.target.name);
  };

}

export default DashBoard;
