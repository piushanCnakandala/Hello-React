import React, {Component} from 'react';
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextField, Typography} from "@mui/material";
import StyleButton from "../../components/common/Button";
import StyleSnackBar from "../../components/common/SnackBar";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userName:'admin',
            password:'admin',
            formData: {
                user_name:'',
                password:''
            },
            //for snackBar
            open: false,
            message:'',
            severity:''
        }
    }
    checkValidity(){
        console.log("Login button  clicked")
        console.log(this.state.formData )
        let formData=this.state.formData
        if (formData.user_name==this.state.userName && formData.password== this.state.password){
            console.log("login done")
            this.setState({
                open:true,
                message:'User credential matching Success!',
                severity:'success'
            })
        }else{
            console.log("login failed")
            this.setState({
                open:true,
                message:'User credential not matching !',
                severity:'error'
            })
        }
    }

    render() {
        const {classes}=this.props
        return (
            <div className={classes.container}>
                <div className={classes.loginView}>
                    <div className={classes.login_title}>
                        <Typography variant="h3">Login Now</Typography>
                    </div>
                    <div className={classes.textField_container}>
                        <TextField label={"User Name"} variant={"outlined"} onChange={(e)=>{
                            console.log(e.target.value)
                            let formData =this.state.formData
                            formData.user_name=e.target.value
                            this.setState({formData})

                        }}/>
                        <TextField type={"password"} label={"Password"} onChange={(e)=>{
                            console.log(e.target.value)
                            let formData =this.state.formData
                            formData.password=e.target.value
                            this.setState({formData})
                        }}/>
                    </div>
                    <div className={classes.login_button_container}>
                         <StyleButton variant="contained" label="Login" onClick={() =>{
                             this.checkValidity()
                         }}/>
                    </div>

                </div>
                <StyleSnackBar
                open={this.state.open}
                onClose={()=>{
                this.setState({open:false})
                }}
                message={this.state.message}
                autoHideDuration={3000}
                severity={this.state.severity}
                variant="filled"
                />

            </div>
        );
    }
}

export default withStyles(styleSheet)(Login);