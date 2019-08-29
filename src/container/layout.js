import React, { Component } from 'react';
import Searchbar from '../component/SearchBar.js'
import Searchbutton from '../component/SearchButton.js'
import Searchtile from '../component/SearchTile.js'
import Nodata from '../component/Nodata.js'
import { throwStatement } from '@babel/types';
import Abdulkalam from "../shared/img/abdulkalam.jpg";
import Beyonce from "../shared/img/Beyonce.jpg";
import Jack from "../shared/img/jackma.jpg";
import Nawazuddin from "../shared/img/Nawazuddin.jpg";
import Jeff from "../shared/img/Jeff.jpg";
import Satya from "../shared/img/satya.jpg";
import Shantanu from "../shared/img/Shantanu.jpg";
import Steve from "../shared/img/steve.jpg";
import Tim from "../shared/img/Tim.jpeg";
import Sundar from "../shared/img/Sundar.jpg";

class Maincontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterator: null,
            data: [{ "name": "A.P.J Abdul Kalam", "img": Abdulkalam, "Details": "Avul Pakir Jainulabdeen Abdul Kalam was an aerospace scientist who served as the 11th President of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering" },
            { "name": "Steve Jobs", "img": Steve, "Details": "Steven Paul Jobs was an American business magnate, entrepreneur and investor. He was the chairman, chief executive officer, and co-founder of Apple Inc." },
            { "name": "Jack Ma", "img": Jack, "Details": "Jack Ma, or Ma Yun, is a Chinese business magnate, investor, politician and philanthropist. He is the co-founder and executive chair of Alibaba Group, a multinational technology conglomerate" },
            { "name": "Satya Nadella", "img": Satya, "Details": "Satya Nadella is an engineer and Indian American business executive. He currently serves as the Chief Executive Officer of Microsoft, succeeding Steve Ballmer in 2014." },
            { "name": "Sundar Pichai", "img": Sundar, "Details": "Pichai Sundararajan, also known as Sundar Pichai, is an Indian-American business executive. He is an engineer and the chief executive officer of Google LLC" },
            { "name": "Tim Cook", "img": Tim, "Details": "Timothy Donald Cook is an American business executive and industrial engineer. Cook is the chief executive officer of Apple Inc., and previously served as the company's chief operating officer under its cofounder Steve Jobs" },
            { "name": "Jeff Bezos", "img": Jeff, "Details": "Jeffrey Preston Bezos is an American technology entrepreneur, investor, and philanthropist. He is the founder, CEO, and president of Amazon.com, Inc. Bezos was born in Albuquerque, New Mexico, and raised in Houston" },
            { "name": "Shantanu Narayen", "img": Shantanu, "Details": "Shantanu Narayen is an Indian American business executive, and the chairman and CEO of Adobe Inc. Prior to this he had been the president and chief operating officer since 2005" },
            { "name": "Beyonce Knowles", "img": Beyonce, "Details": "Beyoncé Giselle Knowles-Carter is an American singer, songwriter and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child" },
            { "name": "Nawazuddin Siddique", "img": Nawazuddin, "Details": "Nawazuddin Siddiqui is an Indian actor, known for his works in Hindi cinema. An alumnus of the National School of Drama," },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
                // { "name": "", "img": Land, "Details": "" },
            ]
        }
        this.changes = this.changes.bind(this);
    }

    changes(e) {
        this.setState({
            iterator: e
        })
    }

    render() {
        return (
            <div className="main-wrapper">
                <Searchbar items={this.state.data} test={this.changes} />
                <Searchbutton />
                {!this.state.iterator ? (
                    <Nodata />
                ) : (this.state.iterator.map((val) =>
                            <Searchtile key={val.name} filteredItem={val} />
                        )
                    )}
            </div>
        )
    }
}

export default Maincontainer;
