import React from "react";
const axios = require("axios");
export default class FetchTrendingHashtags extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      tempVar: 0,
      trend: [],
      //Setting bydefault value to India
      selectValue: "23424748",
      selectCountry: "India",
      woeids: {
        //More countries can be added here
        India: "23424848",
        USA: "23424977",
        Canada: "23424775",
        Japan: "23424856",
        UnitedKingdom: "23424975",
        Russia: "23424936",
        Australia: "23424748",
      },
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount() {
    this.makeAPICall();
  }

  async makeAPICall() {
    const BASE_URL = "http://localhost:5000/trends";
    axios
      .get(BASE_URL, {
        params: {
          id: this.state.selectValue,
        },
      })
      .then(
        (response) => {
          var result = response.data;
          this.setState({
            trend: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  handleDropdownChange(e) {
    console.log("handleDropdownChange triggered");
    console.log("fetching trends in " + e.target.value);
    const selectedWoeID = this.state.woeids[e.target.value];
    console.log("selected WOEID is" + selectedWoeID);
    this.setState({
      selectValue: selectedWoeID,
      selectCountry: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>
            This website gives you current trending topics as per the country
            name selected. <br />
            Make good use of it :)
          </h2>
          <div>
            What's special about this project? Well this project is my first
            react + node app that communicates with twitter api and serves
            requests from node to react end.
          </div>
          <div>
            Also this project is mainly developed for serving as guinea pig to
            setup an end to end pipeline that is production ready.
          </div>
          <div>
            You can find the code to this repo at my{" "}
            <a href="https://github.com/sshikhar1234/twitter-trends">github</a>
          </div>
          <label for="countries">Choose a country:</label>
          <select
            name="countries"
            id="countries"
            defaultValue={this.state.selectValue}
            onChange={this.handleDropdownChange.bind(this)}
          >
            <option value="India">India</option>
            <option value="USA">Unites States of America</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="UnitedKingdom">United Kingdom</option>
            <option value="Japan">Japan</option>
            <option value="Russia">Russia</option>
          </select>
          <button onClick={() => this.makeAPICall()}>Fetch Trends</button>
          <table>
            <th>Current trends on twitter in {this.state.selectCountry}</th>
            <tr>
              <td>Title</td>
              <td># of Tweets</td>
            </tr>
            <tr>
              <td>
                {this.state.trend.map((currentTrend) => (
                  <ul key={currentTrend.id}>{currentTrend.name}</ul>
                ))}
              </td>
              <td>
                {this.state.trend.map((currentTrend) => (
                  <ul key={currentTrend.id}>{currentTrend.tweet_volume}</ul>
                ))}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
