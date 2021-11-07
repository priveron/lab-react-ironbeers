import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './BeerList.css';

export default class BeerList extends Component {
  state = {
    beers: '',
  };

  async componentDidMount() {
    try {
      const res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      console.log('res.data');
      console.log(res.data);
      this.setState({
        beers: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { beers } = this.state;
    return (
      <div className="home">
        <Navbar />
        {!beers ? (
          <p>loading...</p>
        ) : (
          <div className="beers">
            {beers.map((v) => {
              return (
                <div className="beer" key={v._id}>
                    <Link key={v._idid} to={'/beers/' + v._id}>
                        <img src={v.image_url} alt={v.name} />
                    </Link>
                  <div>
                    <h1>{v.name}</h1>
                    <h2>{v.tagline}</h2>
                    <p>
                      <b>Created by:</b> {v.contributed_by}
                    </p>
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
