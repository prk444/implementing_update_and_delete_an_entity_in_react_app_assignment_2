import React from "react";

const Item = ({ item, onDelete, onEdit }) => {
    // Render a single item with Delete and Edit buttons
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ flex: 1 }}>{item.name}</span>
            <button onClick={() => onEdit(item)} style={{ marginRight: "5px" }}>
                Edit
            </button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

export default Item;