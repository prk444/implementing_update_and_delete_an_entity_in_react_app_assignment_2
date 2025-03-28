import React, { useState } from "react";
import Item from "./Item";

const ItemList = ({ initialItems }) => {
    // State to manage the list of items
    const [items, setItems] = useState(initialItems);

    // Function to handle deleting an item
    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    // Function to handle editing an item
    const handleEdit = (updatedItem) => {
        const updatedItems = items.map((item) =>
            item.id === updatedItem.id ? updatedItem : item
        );
        setItems(updatedItems);
    };

    return (
        <>
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onDelete={handleDelete}
                    onEdit={(item) => {
                        const newName = prompt("Edit item name:", item.name);
                        if (newName) {
                            handleEdit({ ...item, name: newName });
                        }
                    }}
                />
            ))}
        </>
    );
};

export default ItemList;