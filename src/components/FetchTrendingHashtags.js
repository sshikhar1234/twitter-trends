import React from "react";
export default class FetchTrendingHashtags extends React.Component{
state={
    loading: true,
    person: null,
    trend: [],
};
async componentDidMount(){
    
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
