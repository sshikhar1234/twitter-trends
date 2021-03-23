import React from "react";
export default class FetchTrendingHashtags extends React.Component{
state={
    loading: true,
    person: null,
    trend: [],
};
async componentDidMount(){
    // const api_key = "XwOosefoG21azEyt8NVxToesj"
    // const api_secret = "AjKoYBNgsvhIogATyM4wmPFRi4doQoAxxbPpfzDd5uNurZbFwK"
    // const access_token = "2483583809-OXbIAiOwhpwDAmekRcJIiwvCNsKmxsssd0eG4Qa"
    // const access_token_secret = "K8PnlwukS6Rb0wkvpyPSaVQTH3ECz6Izd9eTRX4a05uju"
    // const bearer_token = "AAAAAAAAAAAAAAAAAAAAAFI%2BNwEAAAAAAp9G5I6AMuZvgFQiBHUlLFFsWmE%3DjvM6fx3pheFMET1I0yZ54VhuoWlETnq7CIIoIXhKd2JPm942rA"
    
    const BASE_URL = "https://api.twitter.com/1.1/trends/place.json?id="
    const locationID = "23424975"
    const resp = await fetch(BASE_URL+locationID)
    const data = await resp.json()
    // this.setState({person: data.results[0]})
    this.setState({loading: false})
    this.setState({trend: data.results})
    // const resp = fetch(BASE_URL+"?q="+query)
    console.log(data)
}

render(){
    return(
        <div>
            {this.state.loading? (<div>Loading data...</div>
            ) : (
            <div>

            </div>
            )}
        </div>
    )
}
}