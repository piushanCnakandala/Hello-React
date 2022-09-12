import React,{Component,Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Grid, TextField, Typography} from "@mui/material";
import StyleButton from "../../components/common/Button";

class Post extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {classes}=this.props;
        return(
            <Fragment>
                <Typography variant="h4">Post Manager</Typography>
                <Grid className={classes.main_container} container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style} label={"User id"} variant={"outlined"} size={"small"}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style} label={" Id"} variant={"outlined"} size={"small"}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField  className={classes.txt_style}label={"Title"} variant={"outlined"} size={"small"}/>
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style} label={" Body"} variant={"outlined"} size={"small"}/>
                    </Grid>
                    <StyleButton variant="contained" label="Save"/>
                </Grid>


            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Post)