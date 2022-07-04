import React from "react";

export const ItemDetail = ({ data }) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail-image" src={data.img}/>
                <div className="content">
                    <h1>{data.banda}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;