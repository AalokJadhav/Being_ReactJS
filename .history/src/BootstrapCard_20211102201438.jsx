import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const BootstrapCard = () => {

    return (
        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵 <u>Bootstrap Cards</u></h5><br /><br />

            <h1> Welcome To Bootstrap Cards</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="https://picsum.photos/id/237/201/300" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="https://picsum.photos/id/237/200/301" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BootstrapCard;