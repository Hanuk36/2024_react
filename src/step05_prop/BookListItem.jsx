import { Grid, Paper, Typography } from "@mui/material";
import React, {Component} from "react";

class BookListItem extends Component{
    render(){
        const {book} = this.props;
        return(
            <Paper>
                <Grid container spacing={2}>
                    <Grid item>
                        <img src={book.imgUrl} />
                    </Grid>  
                    <Grid item>
                        {/* Typography 글자꾸미는것 variant = 글자크기 */}
                        <Typography component='h5' variant="h5">
                            {book.title}
                        </Typography>
                        <Typography>
                            {book.author}
                        </Typography>
                        <Typography>
                            {book.introduce}
                        </Typography>
                    </Grid>                   
                </Grid>
            </Paper>
        )
    }
}

export default BookListItem;