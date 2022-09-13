import React,{Component,Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Grid, TextField, Typography} from "@mui/material";
import StyleButton from "../../components/common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import PostService from "../../services/PostService";
import StyleSnackBar from "../../components/common/SnackBar";

class Post extends Component{

    constructor(props) {
        super(props);
        this.state={
            formData :{
                userId: '',
                id:'',
                title:'',
                body:''
            },
            alert: false,
            message:'',
            severity:''
        }
    }

      async loadData(){
        let res= await PostService.fetchPost()
          if (res.status == 200) {
              console.log("res :" + JSON.stringify(res.data))
          }else {
              console.log("fetching error :" + res)
          }

    }

    componentDidMount() {
        this.loadData();
        console.log('post Screen Mounted!')
    }
/*
    componentWillUnmount() {
        console.log('post Screen UnMounted!')
    }*/


    handleSubmit =async () => {
        console.log('save btn clicked')
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status == 201) {
            this.state({
                alert:true,
                message:'post created succesfully!',
                severity:'success'
            })
        }else {
            this.setState({
                alert:true,
                message:'post created Unsuccesfully!',
                severity:'error'
            })
        }
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
                                       validators={['required']}/>
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
                        <StyleButton variant="contained" label="Save" type="submit" size="small"/>
                    </Grid>

                </Grid>
              </ValidatorForm>
                <StyleSnackBar
                    open={this.state.alert}
                    onClose={()=>{
                        this.setState({open:false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(Post)