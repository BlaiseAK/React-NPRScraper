import React, {Component} from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import API from '../utils/API';

class SearchContainer extends Component {
    state = {
        search: '',
        results: []
    };

    componentDidMount() {
        this.searchNYT();
    }

    searchNYT = query => {
        API.search(query)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchNYT(this.state.search);
    };

    render () {
        return (
            <div>
                <SearchForm />
                <Results />
            </div>
        )
    }
}