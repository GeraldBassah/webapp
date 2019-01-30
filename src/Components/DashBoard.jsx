import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton, Footer, FooterLinkList, FooterSection, Table, TableHeader } from 'react-mdl';
import { ITiChartBar } from "react-icons/ti";
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (

        <div className="DashBoard-grid"
        >
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '170px', background: 'url(https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg) center /cover' }}> Section Head 2</CardTitle>

            <CardText>
              Hello i'm a Section Head in Ghana
           </CardText>
            <CardActions border>
              <Button colored>Open</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '170px', background: 'url(https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg) center /cover' }}> Section Head 3</CardTitle>

            <CardText>
              Hello i'm a Section Head in Ghana
           </CardText>
            <CardActions border>
              <Button colored>Open</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '170px', background: 'url(https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg) center /cover' }}> Section Head 1</CardTitle>

            <CardText>
              Hello i'm a Section Head in Ghana
           </CardText>
            <CardActions border>
              <Button colored>Open</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '170px', background: 'url(https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg) center /cover' }}> Section Head 2</CardTitle>

            <CardText>
              Hello i'm a Section Head in Ghana
           </CardText>
            <CardActions border>
              <Button colored>Open</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="DashBoard-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
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
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
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
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
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
      return (
        <div className="DashBoard-grid">
          <Table
            sortable
            shadow={5}
            rows={[
              { material: 'Acrylic (Transparent)', quantity: 25, price: 2.90 },
              { material: 'Plywood (Birch)', quantity: 50, price: 1.25 },
              { material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35 }
            ]}
          >
            <TableHeader
              name="material"
              sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
              tooltip="The amazing material name"
            >
              Material
        </TableHeader>
            <TableHeader
              numeric
              name="quantity"
              tooltip="Number of materials"
            >
              Quantity
        </TableHeader>
            <TableHeader
              numeric
              name="price"
              cellFormatter={(price) => `\$${price.toFixed(2)}`}
              tooltip="Price pet unit"
            >
              Price
        </TableHeader>
          </Table>
          <Table
            sortable
            shadow={0}
            rows={[
              { material: 'Acrylic (Transparent)', quantity: 25, price: 2.90 },
              { material: 'Plywood (Birch)', quantity: 50, price: 1.25 },
              { material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35 }
            ]}
          >
            <TableHeader
              name="material"
              sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
              tooltip="The amazing material name"
            >
              Material
        </TableHeader>
            <TableHeader
              numeric
              name="quantity"
              tooltip="Number of materials"
            >
              Quantity
        </TableHeader>
            <TableHeader
              numeric
              name="price"
              cellFormatter={(price) => `\$${price.toFixed(2)}`}
              tooltip="Price pet unit"
            >
              Price
        </TableHeader>
          </Table>
          <Table
            sortable
            shadow={0}
            rows={[
              { material: 'Acrylic (Transparent)', quantity: 25, price: 2.90 },
              { material: 'Plywood (Birch)', quantity: 50, price: 1.25 },
              { material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35 }
            ]}
          >
            <TableHeader
              name="material"
              sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
              tooltip="The amazing material name"
            >
              Material
        </TableHeader>
            <TableHeader
              numeric
              name="quantity"
              tooltip="Number of materials"
            >
              Quantity
        </TableHeader>
            <TableHeader
              numeric
              name="price"
              cellFormatter={(price) => `\$${price.toFixed(2)}`}
              tooltip="Price pet unit"
            >
              Price
        </TableHeader>
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


        <Grid >
          <Cell col={12}>
            <div className="content" style={{
              background: '#D3CCE3',  /* fallback for old browsers */
              background: '-webkit-linear-gradient(to left, #E9E4F0, #D3CCE3)',  /* Chrome 10-25, Safari 5.1-6 */
              background: 'linear-gradient(to left, #E9E4F0, #D3CCE3)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}>{this.toggleCategories()}
            </div>
          </Cell>
        </Grid>


      </div >


    )

  }
}




export default DashBoard;
