import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditGolf = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [golfName, setGolfName] = useState("");
    const [golfType, setGolfType] = useState("");
    const [golfDescription, setGolfDescription] = useState("");
    const [errors, setErrors] = useState({})
    console.log(id)
useEffect(() => {
    axios.get(`http://localhost:8000/api/golf/${id}`)
    .then((response) => {
        console.log(response.data);
        setGolfName(response.data.name);
        setGolfType(response.data.type);
        setGolfDescription(response.data.description);

    })
    .catch(err => {
        console.log(err.response);
    })
}, [id]);
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/golf/${id}`, {name: golfName, description: golfDescription, type: golfType})
        .then((response) => {
            console.log(response);
            navigate('/');
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
    });
};

    return (
    <div className="container">
        <div className="row">
            <div className="col-4">
                <form onSubmit={submitHandler}>
                <Link to="/" className="home">back to home</Link>
                    <h1 className="left">Message {golfName}</h1>
                <div className="col-xs-6">
                    <label htmlFor="name">Your Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    value={golfName} 
                    className="form-control" 
                    onChange={(e) => setGolfName(e.target.value)}
                    />
                    <label htmlFor="type">Your Email Address</label>
                    <input 
                    type="text" 
                    id="type" 
                    value={golfType}
                    className="form-control"  
                    onChange={(e) => setGolfType(e.target.value)}
                    />
                    <label htmlFor="Description">Short Description</label>
                    <input 
                    type="text" 
                    id="description"  
                    value={golfDescription} 
                    className="form-control" 
                    onChange={(e) => setGolfDescription(e.target.value)}
                    />
                </div>
                {errors.name ? <p>{errors.name.message}</p> : null}
                <button type="submit" className="btn-primary">Send Message</button>
            </form>
        </div>
    </div>
</div>
    );
};

export default EditGolf;
