import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const GolfForm= () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/golf", { name, type, description, skill1, skill2, skill3})
        .then(response => {
            console.log(response);
            navigate('/');
        })
        .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.err.errors);
        });
    };

    return (
    <div className="container">
        <div className="row">
            <div className="col-4">
                <Link to="/" className="home-2">back to home</Link>
                <p className="left">Looking to partner up?</p>
                <form onSubmit={handleSubmit}>
                <div className= 'col-xs-6'>
                        <label htmlFor="name">Your Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                    <label htmlFor="type">Your Handicap:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                        />
                    {errors.type ? <p>{errors.type.message}</p> : null}
                    <label htmlFor="description">Favorite brand/sponser:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        />
                    {errors.type ? <p>{errors.description.message}</p> : null}
                </div>
                <div className= 'col-xs-8'>
                    <h2 className="skills">Your top three local courses (optional:)</h2>
                        <label htmlFor="skill 1">Course 1:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setSkill1(e.target.value)}
                        value={skill1}
                        />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                    <label htmlFor="skill 2">Course 2:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setSkill2(e.target.value)}
                        value={skill2}
                        />
                    {errors.type ? <p>{errors.type.message}</p> : null}
                    <label htmlFor="skill 3">Course 3:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setSkill3(e.target.value)}
                        value={skill3}
                        />
                    {errors.type ? <p>{errors.description.message}</p> : null}
                </div>
                <button className="btn-primary" type="submit">
                    Get Playing!
                </button>
            </form>
        </div>
    </div>
</div>
    );
};

export default GolfForm;