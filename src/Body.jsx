import React, { Component } from "react";
import Connectlogo from "./connectingpeople.png";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div class="container">
        <div class="leftSide">
          <h2>
            Facebook membantu Anda terhubung dan berbagi dengan orang-orang
            dalam kehidupan Anda.
          </h2>
          <img src={Connectlogo} alt="test2" />
        </div>
        <div className="rightSide" />
        <h1>Daftar</h1>
        <h3>Gartis, Sampai kapan pun.</h3>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Phone No or Email" />
        <input type="password" placeholder="New Password" />
        <label htmlFor="tanggal" />
        <select name="date" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select name="Month" id="">
          <option value="January">January</option>
          <option value="Febuary">Febuary</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="SeptemberOctober">SeptemberOctober</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select name="year" id="">
          <option value="20018">20018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
        </select>
        <label htmlFor="">Why do I need to provide my date of birth?</label>
        <input type="radio" name="gender" value="male" />
        Male
        <input type="radio" name="gender" value="female" />
        Female
        <label htmlFor="">
          By clicking Sign Up, you agree to our{" "}
          <a href="#"> Terms, Data Policy</a> and <a href="#">Cookie Policy.</a>{" "}
          You may receive SMS notifications from us and can opt out at any time.
        </label>
        <button>Sign Up</button>
        <h5>
          <a href="#">Create a Page</a>
          for a celebrity, band or business.
        </h5>
      </div>
    );
  }
}

export default Body;
