import React from 'react';
import Searchbar from '../component/searchBar.js'
import Searchbutton from '../component/searchButton.js'

import Searchtile from '../component/searchTile.js'




export default function Maincontainer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-body">

                        <div className="row">
						<div className="col-xs-3">
							<h5>
								<small>TWEETS</small>
								<a href="#">1,545</a>
							</h5>
						</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="media">
                            <Searchbar />
                            <Searchbutton/>
                            <Searchtile/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-body">
                        <Searchbar />

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}