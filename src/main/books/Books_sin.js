import React, { Component } from "react";
import "./Books.css";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
} from "mdbreact";
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
            <MDBContainer className="container">

                <MDBCarousel activeItem={1} length={1} slide={true} showControls={true} showIndicators={false} l multiItem>
                    <MDBCarouselInner className="corouse_inner">
                        <div className="Cat_bar">
                            <h2>Tamil Spritual book</h2>
                        </div>
                        <MDBRow className="MDBRow">
                            {this.state.books.map(book => (
                                <MDBCarouselItem itemId="1" className="CarouselItem">
                                    <MDBCol md="4" className="card_md" key={book.id}>
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src={book.image} />
                                            <MDBCardBody>
                                                <MDBCardTitle className="CardTitle">{book.book}</MDBCardTitle>
                                                <div className="span-tag">
                                                    <span className="span_tags1">Language: {book.language}</span><br />
                                                    <span className="span_tags2">Pages: {book.pages}</span><br />
                                                    <span className="span_tags3">Category: {book.category}</span><br />
                                                    <span className="span_tags4">Ed: {book.edition}</span><br />
                                                    <span className="span_tags5">Available</span><br />
                                                </div>
                                                <MDBCardText>
                                                    {book.description}
                                                </MDBCardText>
                                                <div className="Share">
                                                    <a><ShareIcon className="icon" ></ShareIcon><p >Share</p></a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBCarouselItem>
                            ))}
                        </MDBRow>
                    </MDBCarouselInner>
                </MDBCarousel>

            </MDBContainer>
        );
    }
}
export default MultiCarouselPage;