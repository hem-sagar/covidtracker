import React, {useEffect,useState} from 'react';
import ReactDom from 'react-dom';
import logo from './img/logo.png';
import './css/index.css';
const App = () =>{
    const [data,setData] = useState([]);

    const getCovidData = async() => {
        try {
            // const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/us/daily.json');
            const res = await fetch('https://api.covid19api.com/summary');
            const actualData = await res.json();
            console.log(actualData.Countries[121]);
            setData(actualData.Countries[121]);
            
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    },[]);


    return (
        <div className="hero">     
            <div className="ui container">
                <div className="ui centered card">
                    <div className="image">
                        <img src={logo} alt="Logo"/>
                    </div>
                </div>
                <h1 className="ui center aligned icon header">
                    {data.Country}
                </h1>
                <h2 className="ui center aligned icon header">
                {data.Date}
                </h2>
                
                <div className="details">
                    <div className = "ui centered cards">
                        <div className="card">
                            <div className="center aligned content">
                                <div className="header">
                                    <h1>Total Confirmed</h1>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="center aligned description">
                                    <h2>{data.TotalConfirmed}</h2>
                                </div>
                            </div>                    
                        </div>
                        <div className="card">
                            <div className="center aligned content">
                                <div className="header">
                                    <h1>Total Recovered</h1>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="center aligned description">
                                    <h2>{data.TotalRecovered}</h2>
                                </div>
                            </div>
                            
                        </div>

                        <div className="card">
                            <div className="center aligned content">
                                <div className="header">
                                    <h1>Total Confirmed</h1>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="center aligned description">
                                    <h2>{data.TotalConfirmed}</h2>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector("#root")
);