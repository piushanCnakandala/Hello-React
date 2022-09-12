import React,{Component,Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Grid, TextField, Typography} from "@mui/material";
import StyleButton from "../../components/common/Button";

class Item extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {classes}=this.props;
        return(
            <Fragment>
                <Grid className={classes.main_container} container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style} label={"Item Name"} variant={"outlined"} size={"small"}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField  className={classes.txt_style} label={" Item QTY"} variant={"outlined"} size={"small"}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style}  label={"Item"} variant={"outlined"} size={"small"}/>
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style}  label={" Salary"} variant={"outlined"}size={"small"}/>
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style}  label={"Customer Salary"} variant={"outlined"} size={"small"}/>
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField className={classes.txt_style}  label={"Customer Salary"} variant={"outlined"} size={"small"}/>
                    </Grid>
                    <StyleButton variant="contained" label="Save"/>
                    <StyleButton variant="contained" label="clear"/>
                </Grid>


            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Item)