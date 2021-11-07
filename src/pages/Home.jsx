import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="allBeers">
          <Link to="/beers">
            <img src={beers} alt="" />
            <h1>All Beers</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            possimus minus commodi consequuntur a quia magni sunt cum assumenda
            maxime hic ut ratione, debitis qui mollitia magnam maiores at amet?
          </p>
        </div>
        <div className="randomBeer">
          <Link to="/random-beer">
            <img src={randomBeer} alt="" />
            <h1>Random Beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            itaque. Assumenda in consectetur minima suscipit quo, pariatur nobis
            doloribus quisquam obcaecati aperiam, ullam quia fugiat odio ipsum
            itaque soluta officia?
          </p>
        </div>
        <div className="newBeer">
          <Link to="/new-beer">
            <img src={newBeer} alt="" />
            <h1>New Beer</h1>
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit in sapiente quidem ipsam placeat cupiditate provident
            similique tenetur enim doloremque debitis molestias, eius quo
            corrupti aut vel ratione quod. In?
          </p>
        </div>
      </div>
    );
  }
}
