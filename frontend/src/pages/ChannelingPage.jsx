import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChannelingCards from "../components/ChannelingCards";
import useFetch from "../hooks/useFetch";

export default function ChannelingPage() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error, reFetch } = useFetch(`${apiUrl}/serviceProvider`);
    if (loading) return <p>Loading...</p>;
    console.log(data);
    return (
        <div className="flex flex-col">
        <Navbar />
        <h1 className="mt-20 md:text-5xl text-xl text-center font-bold py-4"> Channeling Centres</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-16 mx-auto py-10">
        {data.map((item) => (
            <ChannelingCards
            key={item._id}
            CentreName={item.Name}
            description={item.Description}
            image={item.Image}
            rating={parseInt(item.Rating, 10)}
            id={item._id}
            district={item.District}
            />
        ))}
        </div>
        <Footer />
        </div>
    );
    }