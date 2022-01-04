import React from 'react';
import puzzle from "../assets/cicada.jpg";

const Home = () => {
    return (
        <>
            <img src={puzzle} alt={"puzzle"} />
            <p className="text-white">Run Dirbuster on me!</p>
        </>
    );
};

export default Home;