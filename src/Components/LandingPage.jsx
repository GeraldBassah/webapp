import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>MMDA SUITE WELCOMES YOU</h1>

              <hr />

              <p>Easier | Faster | Efficient | </p>
            </div>
          </Cell>


        </Grid>
        <h1>LandingPage</h1>
      </div>

    );
  }
}

export default LandingPage;
