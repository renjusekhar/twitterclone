import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    const n = this.props.items;
    this.state = {
      filtered: []
        
    };
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }





  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.items;
  
      let val = e.target.value.toLowerCase();
      let matches = currentList.filter(v => v.name.toLowerCase().includes(val));
      this.props.test(matches);  


    } else {
      newList = this.props.items;
    }
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (

      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Search.." name="search" />
        </form>
      </div>

    )

  }

}

export default Searchbar;

