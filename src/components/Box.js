import React from "react";

export default function Box({ user }){
    const {id, name} = user;
    return (
        <div className='box'>
            <img
                alt={`user ${name}`}
                src={`https://robohash.org/${id}?set=set3&size=100x100`}
            />
            <h2>{name}</h2>
        </div>
    )
}