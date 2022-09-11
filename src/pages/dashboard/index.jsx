import React,{Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import { Typography} from "@mui/material";
import StyleButton from "../../components/common/Button";
import {Link} from  'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {classes}= this.props
        return(
            <div className={classes.container}>
                <div className={classes.nav_container}>

                    <div className={classes.nav_left_side}>
                        <div className={classes.title_name}>
                            <Typography variant="h3">Dashboard</Typography>
                        </div>
                    </div>
                    <div className={classes.nav_right_side}>
                        <div className={classes.customer_button}>
                            <Link to = "/customer">  <StyleButton variant="contained" label="Customer"/></Link>

                        </div>
                        <div className={classes.item_button}>
                            <Link to="/item">
                                <StyleButton variant="contained" label="Item"/>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className={classes.main_container}></div>
            </div>

        )
    }
}
export default withStyles(styleSheet)(Dashboard)
