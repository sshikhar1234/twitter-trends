import React from "react";
const axios = require("axios");

export default class FetchTrendingHashtags extends React.Component {
  state = {
    loading: true,
    tempVar: 0,
    trend: [],
  };
  async componentDidMount() {
    const BASE_URL = "http://localhost:5000/trends";

    axios
      .get(BASE_URL, {
        params: {
          id: "23424748",
        },
      })
      .then(
        (response) => {
          var result = response.data;
          console.log(result[0]);
          this.setState({
            loading: false,
            tempVar: 10,
            trend: result,
          });
          console.log(this.state.trend[0].name);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div>
        <table>
          <th>Current trends on twitter in INDIA</th>
          <tr>
            <td>Title</td>
            <td># of Tweets</td>
            <td>URL</td>
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
            <td>
              {this.state.trend.map((currentTrend) => (
                <ul key={currentTrend.id}>{currentTrend.url}</ul>
              ))}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
