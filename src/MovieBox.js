import { Modal, Button, show } from 'react-bootstrap';
import React, { useState } from 'react';


const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <div className="card text-center bg-white m-3">
            <div className="card-body m-2">
                <img className="card-img-top" src={API_IMG + poster_path} />
                <div className="card-body">
                    <button type="button" classname="btn btn-dark" onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Hey Buddy ! I am'{title}' </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" style={{ width: '18rem' }} src={API_IMG + poster_path} />
                            <h4>Release Date: {release_date}</h4>
                            <h5>IMDb Rating: {vote_average}</h5>
                            <h6>Overview</h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;