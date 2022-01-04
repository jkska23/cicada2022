import React from 'react';
import puzzle from "../assets/cicada.jpg";

const Home = () => {
    return (
        <div className="relative">
            <img src={puzzle} alt={"puzzle"} />
            <p className="text-white absolute bottom-0 right-0">Run Dirbuster on me!</p>
        </div>
    );
};

export default Home;