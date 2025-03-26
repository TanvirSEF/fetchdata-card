import React, { useEffect, useState } from "react";

const Home = () => {
  const [card, setCard] = useState([]);
  
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setCard(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {card.map((item) => (
        <div
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out"
          key={item.id}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
