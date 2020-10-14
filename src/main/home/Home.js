import React,{ Component } from "react";
import "./Home.css";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Books from "../books/Books";

class Home extends Component {
    state = {
        books: []
    };
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/Banner/'); // fetching the data from api, before the page loaded
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
        
        <div className="slide-container">
            
            <Fade>
                {this.state.books.map(banners => ( 
                    <div className="each-fade" key={banners.id}>
                    <div className="image-container">
                            <img src={banners.banner} className="image-slide" />
                    </div>
                        <h2 className="carousel__title">{banners.headline}</h2>
                    </div>
               ))}
            </Fade> 
        </div>
     
    )
}
}
export default Home
