import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [quarterData, setQuarterData] = useState({});
  const [selectedQuarter, setSelectedQuarter] = useState("Quarter 1 (Dec 22)");

  useEffect(() => {
    fetchData(selectedQuarter);
  }, [selectedQuarter]);

  const fetchData = async (quarter) => {
    try {
      const response = await fetch(`http://localhost:8000/api/${quarter}`);

      const data = await response.json();
      setQuarterData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div>
          <h1 className="headlineH1">Financial Quarters Dashboard</h1>
        </div>
        <div className="card">
          <div className="dropDown">
            <select
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
            >
              <option value="Quarter 1 (Dec 22)">Quarter 1</option>
              <option value="Quarter 2 (Mar 23)">Quarter 2</option>
              <option value="Quarter 3 (Jun 23)">Quarter 3</option>
              <option value="Quarter 4 (Sep 23)">Quarter 4</option>
            </select>
          </div>
          <div className="quarterMenu">
            <h2>{selectedQuarter} Metrics</h2>
            <div className="quarterData">
              <div>
                <p className="tableHeading">Revenue (INR)</p>
                <p className="metricValue"> {quarterData.revenue} </p>
              </div>
              <div>
                <p className="tableHeading">Net Income (INR)</p>
                <p className="metricValue"> {quarterData.netIncome} </p>
              </div>
              <div>
                <p className="tableHeading">Net Profit</p>
                <p className="metricValue">{quarterData.netProfit}</p>
              </div>
              <div>
                <p className="tableHeading">Operating Income (INR)</p>
                <p className="metricValue"> {quarterData.operatingIncome} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
