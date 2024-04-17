import { Container, List, ListItem } from "@mui/material";
import React, {Component} from "react";
import BookListItem from "./BookListItem";

class BookList extends Component{
    render(){
        // const books = this.props.books;

        //구조분해할당
        const {books} = this.props;
        const bookItems = books.map((k)=>{
            return(
                <ListItem>
                    <BookListItem book={k} />
                </ListItem>
            )
        })

        return(
            <Container maxWidth="sm">
                <List>
                    {bookItems}
                </List>

            </Container>
        )
    }
}


export default BookList;