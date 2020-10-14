import React, { Component } from "react";
import "./Books.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShareIcon from '@material-ui/icons/Share';
class MultiCarouselPage extends Component {
    state = {
        books: []
    };
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/Book/'); // fetching the data from api, before the page loaded
            const books = await res.json();
            this.setState({
                books
            });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div></div>
        );
    }
}
export default MultiCarouselPage;