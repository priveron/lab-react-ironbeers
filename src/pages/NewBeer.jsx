import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './NewBeer.css';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contribued_by: '',
  };

  onChange = (evt) => {
    const newValue =
      evt.target.id === 'attenuation_level'
        ? Number(evt.target.value)
        : evt.target.value;
    this.setState({
      [evt.target.id]: newValue,
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="newBeer">
          <form
            action="https://ih-beers-api2.herokuapp.com/beers/new"
            method="post"
          >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={this.onChange} />
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              onChange={this.onChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              onChange={this.onChange}
            ></textarea>
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              type="text"
              id="first_brewed"
              name="first_brewed"
              onChange={this.onChange}
            />
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input
              type="text"
              id="brewers_tips"
              name="brewers_tips"
              onChange={this.onChange}
            />
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              onChange={this.onChange}
            />
            <label htmlFor="contributed_by">Contributed By</label>
            <input
              type="text"
              id="contributed_by"
              name="contributed_by"
              onChange={this.onChange}
            />
            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
}
