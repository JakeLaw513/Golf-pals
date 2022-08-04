import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const GolfDetails = () => {
    const { id } = useParams();
    const [golfName, setGolfName] = useState("");
    const [golfType, setGolfType] = useState("");
    const [golfDescription, setGolfDescription] = useState("");
    const [errors, setErrors] = useState({})
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const navigate = useNavigate();
    console.log(id)
useEffect(() => {
    axios.get(`http://localhost:8000/api/golf/${id}`)
    .then((response) => {
        console.log(response.data);
        setGolfName(response.data.name);
        setGolfType(response.data.type);
        setGolfDescription(response.data.description);
        setSkill1(response.data.skill1);
        setSkill2(response.data.skill2);
        setSkill3(response.data.skill3);
    })
    .catch(err => {
        console.log(err.response);
    })
}, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/golf/${id}`, {name: golfName})
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
    });
}
const [oneGolf, setOneGolf] = useState([])
useEffect(() => {
    axios
      .get(`http://localhost:8000/api/golf/${id}`)
      .then((response) => {
        console.log(response.data);
        setOneGolf(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

const handleBlockGolf = (id) => {
    axios
      .delete(`http://localhost:8000/api/golf/${id}`)
      .then((response) => {
        console.log("Block successful!");
        console.log(response);
        navigate('/');
        const filteredGolfs = oneGolf.filter((golf) => {
          return golf._id !== id;
     });
        setOneGolf(filteredGolfs);
      })
      .catch((err) => {
        console.log("error loading golfers", err.response);
      });
  };
    return (
            <form onSubmit={submitHandler}>
                <Link to="/" className="home-2">back to home</Link>
                <button className="blocking"
                        onClick={() => handleBlockGolf(id)}
                        >Block {golfName}</button>
                          <Link to={`/ContactForm/${id}`}>
                                                <button className= "blocking-2">Message {golfName}</button>
                                            </Link>
                <h1 className ="details">Details about: {golfName}</h1>
                <div className="form-group">
                    <ul className="list">
                        <li htmlFor="type" className="combine">Handicap:</li>
                        <li className="combine-1">{golfType}</li>
                        <br/>
                        <br/>
                        <li htmlFor="Description" className="combine">Favorite brand/sponser:</li>
                        <br/>
                        <li className="combine-1">{golfDescription}</li>
                        <br/>
                        <br/>
                        <li htmlFor="skills" className="combine">Favorite local courses:</li>
                        <br/>
                        <br/>
                        <li className="combine-1">{skill1}</li>
                        <br/>
                        <li className="combine-1">{skill2}</li>
                        <br/>
                        <li className="combine-1">{skill3}</li>
                    </ul>
                </div>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </form>
        );
    };

export default GolfDetails;