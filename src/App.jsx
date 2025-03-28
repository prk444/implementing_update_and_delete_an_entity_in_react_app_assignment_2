import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
    // State to store items fetched from the server
    const [items, setItems] = useState([]);

    // Fetch items from the API when the component mounts
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URI);
                if (!response.ok) {
                    throw new Error("Failed to fetch items");
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();
    }, []);

    return <ItemList initialItems={items} />;
}

export default App;