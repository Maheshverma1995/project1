import React from 'react'
import { Link } from 'react-router-dom';
import abc from'../Picture/img5.jpg';

const Datail = () => {
    const myimg = "C:/Users/hp/Desktop/mahesh/project1/src/Picture/img.jpg";
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <img src="image/img3.jpg" alt="noimage" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <img src={abc} alt="noimage" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <img src={myimg} alt="noimage" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datail
