export const styleSheet ={
    container:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        height:'100vh',
        width:'100vw'
    },
    loginView:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height: '60%',
        width:'30%',
        backgroundColor:'white',
        borderRadius:'10%'
    },
    login_title:{
        display:'flex',
        alignItems:'center',
        height:'20%',
        color:'blue'
    },
    textField_container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        height:'40%'
    },

    login_button_container:{
        height:'20%'
    },

    textField: {
        "& label.Mui-focused": {
            color: "#3B82F6",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#AAAAAA",
            },
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                borderColor: "White",
            },
        },
        "& .MuiOutlinedInput-root input": {
            color: "White",
        },
        "& label": {
            color: "#AAAAAA",
        },
        '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
            color:'red'
        }
    }

}