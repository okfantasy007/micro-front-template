import React from "react";
import { Link } from "react-router-dom";

const Home = () =>
    <section>
        <div style={{ padding: 20 }}>React App</div>
        <div style={{ padding: 20 }}>
            <Link to={'/list'}>列表页</Link>
        </div>
    </section>


export default Home;