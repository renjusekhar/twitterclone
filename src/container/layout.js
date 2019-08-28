import React, { Component} from 'react';
import Searchbar from '../component/SearchBar.js'
import Searchbutton from '../component/SearchButton.js'
import Searchtile from '../component/SearchTile.js'
import Nodata from '../component/Nodata.js'

class Maincontainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                "Go to the store",
                "Wash the dishes",
                "Learn some code"
            ]
        }
    }

    render () {
        return (
            <div>
                <div className="layout-wrapper">
                    <div className="col-sm-6">
                        <Searchbar />
                        <Searchbutton />
                        {/* <Nodata /> */}
                        <Searchtile />
                    </div>
                </div>
                <div className="layout-wrapper">
                    <div className="col-sm-6">
                        <Searchbar items={this.state.list} />
                        <Searchbutton />
                        {/* <Nodata /> */}
                        <Searchtile />
                    </div>
                </div>
            </div>
        )

    }



}

export default Maincontainer;
