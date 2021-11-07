import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class RandomBeer extends Component {
  state = {
    beer: '',
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      console.log('res.data');
      console.log(res.data);
      this.setState({
        beer: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const { beer } = this.state;
    return (
      <>
        <Navbar />
        <div className="beer" key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />
          <h1>{beer.name}</h1>
          <h2>{beer.tagline}</h2>
          <h3>{beer.attenuation_level}</h3>
          <span>{beer.first_brewed}</span>
          <p>
            {beer.description}
            <br />
            <b>{beer.contributed_by}</b>
          </p>
        </div>
      </>
    );
  }
}
