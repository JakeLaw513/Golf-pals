import { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';
import { Link } from 'react-router-dom';


const DisplayAll = () => {
    const [allGolfers, setAllGolfers] = useState([])
    useEffect(() => {
    axios
        .get("http://localhost:8000/api/golf")
        .then((response) => {
            setAllGolfers(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);
    return (
        <div className="container">
            <Link to='/new' className="blue">Let other players know you're ready</Link>
            <div className="row">
                <div className="col-6">
                    <p className="left">Golfers in your area that are ready to play!</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="border" scope="col">Name</th>
                            <th className="border" scope="col">Handicap</th>
                            <th className="border" scope="col">Profile</th>
                        </tr>
                        </thead>
                        <tbody classname="table">
                            {allGolfers.map((golf, index) => {
                                return(
                                    <tr key={golf._id}>
                                        <td className="border">{golf.name}</td>
                                        <td className="border">{golf.type}</td>
                                        <td>
                                            <Link to={`/golfDetails/${golf._id}`}>
                                                <button className= "primary-2">View Profile</button>
                                            </Link>
                                            <br></br>
                                            <Link to={`/ContactForm/${golf._id}`}>
                                                <button className= "primary-2">Message</button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
);
};

    export default DisplayAll;
