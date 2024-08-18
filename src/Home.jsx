import React from "react";
import { Services, Transactions, Welcome } from "./components";

const Home = () => {
    return(
        <div className="gradient-bg-services">
            <Welcome />
            <Services />
            <Transactions />
        </div>
    )
}

export default Home;
