import React,{Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import StyleButton from "../../components/common/Button";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {classes}= this.props
        return(
            <div className={classes.container}>
                <div className={classes.nav_container}>
                    <div className={classes.title_name}>
                        <Typography variant="h3">Dashboard</Typography>
                    </div>
                    <div className={classes.customer_button}>
                       <StyleButton variant="contained" label="Customer"/>
                    </div>
                    <div className={classes.item_button}>
                        <StyleButton variant="contained" label="Item"/>
                    </div>
                </div>
                <div className={classes.main_container}></div>
            </div>

        )
    }
}
export default withStyles(styleSheet)(Dashboard)
