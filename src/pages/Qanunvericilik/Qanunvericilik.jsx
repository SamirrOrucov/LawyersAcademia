import { useEffect, useState } from "react";
import "./Qanunvericilik.scss";
import { Link } from "react-router-dom";

function Qanunvericilik() {
  const [legislation, setLegislation] = useState([]);
  async function getLegislation() {
    const response = await fetch("http://localhost:3003/legislation");
    const data = await response.json();
    setLegislation(data);
  }
  useEffect(() => {
    getLegislation();
  }, []);

  return (
    <div className="qanunvericilik">
      <div className="qanunvericilik_container">
        <div className="qanunvericilik_header">
          <p>Qanunvericilik</p>
          <div className="lines">
            <div className="line One"></div>
            <div className="line Two"></div>
            <div className="line Three"></div>
            <div className="line Four"></div>
            <div className="line Five"></div>
          </div>
        </div>
        <div className="qanunvericilik_container_main">
          {legislation.map((item) => (
            <Link to={"/qanunvericilik/detail/" + item._id}>
              <div key={item._id} className="link">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Qanunvericilik;
