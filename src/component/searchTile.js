import React from 'react';
export default function Searchtile(props) {
    return (
        <div className="card-wrap">
            <div className="wrap">
                <div className="usr-name">{props.filteredItem.name}</div>
                <p>
                    {props.filteredItem.Details}
                        </p>
                <div className="img-wrap">
                    <img src={props.filteredItem.img}></img>
                </div>
            </div>
            <div className="view-wrap">5,127 views</div>
        </div>
    )
}
