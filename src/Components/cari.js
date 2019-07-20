import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import '../assets/Search.css'

class Search extends Component {
  state = {
    books: null,
    loading: false,
    value: ''
  };

  search = async (val) => {
    this.setState({ loading: true });
    const res = await axios(
      `http://localhost:6969/name?name=${val}`
    );
    const books = await res.data.result;
    this.setState({ books, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderBooks() {
    let books =  <Card list={this.props.data.bookList} />
    if (this.state.books) {
      books = <Card list={this.state.books} />;
    }

    return books;
  }

  render() {
    return (
      <div>
        <input className='Search'
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Search Book"
        />
          {this.renderBooks}
      </div>
    );
  }
}

export default Search;