import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import quotes from '../data/data.js'
import '../views/style.css'
import colors from '../data/colors.js'
import $ from 'jquery'

class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      quote: 'The Very Beginning',
      author: 'God',
      randomNum: 0,
      accentColor: 'grey'
    }

    this.generateNewQuote = this.generateNewQuote.bind(this)
  }

  generateNewQuote() {   
    let rand = Math.floor(Math.random() * quotes.length)
    this.setState({
      randonNum: rand,
      quote: quotes[rand].quote,
      author: quotes[rand].author,
      accentColor:colors[rand]
    })

  }
  
  render() {
    $('#text').animate({ opacity: 0 }, 0, function () {
      $(this).animate({ opacity: 1 }, 400);
    }) 

    $('#author').animate({ opacity: 0 }, 0, function () {
      $(this).animate({ opacity: 1 }, 0);
    })     
    
    return (
      <section style={{backgroundColor: this.state.accentColor}} id="main_sec">
        <Link to='/'><i className='fa-solid fa-home' style={{color: this.state.accentColor}}></i></Link>
        <div id="quote-box" style={
          {color:this.state.accentColor}}>
          <div id="content">
              <h3 id="text" style={{color: this.state.accentColor}}><sup><i className='fa-solid fa-quote-left'></i></sup>{this.state.quote}</h3>
              <p id="author"> - {this.state.author}</p>
          </div>
          <div id="actionButtons">
            <div id="share-icons">
                <a style={{backgroundColor:this.state.accentColor}} href='twitter.com/intent/tweet' target="_blank" id='tweet-quote'><i className='fa-brands fa-twitter'></i></a>
                <a style={{backgroundColor:this.state.accentColor}} href='tumblr.com' target="_blank" id='tumblr-quote'><i className='fa-brands fa-tumblr'></i></a>
            </div>
            <button id='new-quote' onClick={this.generateNewQuote} style={{backgroundColor:this.state.accentColor}}>New quote</button>
          </div>
        </div>
          <div id="developer">
            <p>by George Igboanugo</p>
          </div>
      </section>
    )
  }
}

export default Quote