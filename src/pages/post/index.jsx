import React,{Component,Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Grid, TextField, Typography} from "@mui/material";
import StyleButton from "../../components/common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class Post extends Component{

    constructor(props) {
        super(props);
        this.state={
            formData :{
                userId: '',
                id:'',
                title:'',
                body:''
            }
        }
    }

    handleSubmit =() =>{
        console.log('save btn clicked')
        console.log(this.state.formData)
    }

    render() {
        const {classes}=this.props;
        return(
            <Fragment>
                <Typography variant="h4">Post Manager</Typography>

                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >

                <Grid className={classes.main_container} container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextValidator className={classes.txt_style} label={"User id"} variant={"outlined"} size={"small"}
                                       value ={this.state.formData.userId}
                                       onChange={(e)=>{
                                           let formData=this.state.formData
                                           formData.userId=e.target.value
                                           this.setState({formData})
                                       }}
                                       validators={['required']}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextValidator className={classes.txt_style} label={" Id"} variant={"outlined"} size={"small"}
                                       value ={this.state.formData.id}
                                       onChange={(e)=>{
                                           let formData=this.state.formData
                                           formData.id=e.target.value
                                           this.setState({formData})
                                       }}
                                       validators={['required',]}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextValidator  className={classes.txt_style}label={"Title"} variant={"outlined"} size={"small"}
                                        value ={this.state.formData.title}
                                        onChange={(e)=>{
                                            let formData=this.state.formData
                                            formData.title=e.target.value
                                            this.setState({formData})
                                        }}
                                        validators={['required']}/>
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextValidator className={classes.txt_style} label={" Body"} variant={"outlined"} size={"small"}
                                       value ={this.state.formData.body}
                                       onChange={(e)=>{
                                           let formData=this.state.formData
                                           formData.body=e.target.value
                                           this.setState({formData})
                                       }}
                                       validators={['required']}/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} style={{display: "flex"}} justifyContent="flex-end">
                        <StyleButton variant="contained" label="Save" type="submit"/>
                    </Grid>

                </Grid>
              </ValidatorForm>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Post)