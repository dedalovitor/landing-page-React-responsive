import React from "react";

//create your first component
const Card = () => {
    return (
        <div className="col">
            <div className="card">
                <img src="https://img.freepik.com/foto-gratis/nave-espacial-que-brilla-intensamente-orbita-planeta-galaxia-estrellada-generada-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.539837299.1712102400&semt=sph" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
