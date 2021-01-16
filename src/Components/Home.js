import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import  {makeStyles}  from '@material-ui/core/styles'
import axios from 'axios'
import './Home.css'
const key="apJCgdEgd0nOx1YIJO9QsuRzZ0R3O5EwBZAB1bSn"


const useStyles=makeStyles({
    
    input:{
        marginTop:'35px',
        width:'200px',
        height:'30px'
    },
      root1:{
          background:'linear-gradient(45deg,#85daed 30% ,#FF8E53 90%)',
          border:0,
          borderRadius:3,
          boxShadow:'0 3px 5px 2px rgba(255,105,135,.3)',
          color:'white',
          height:38,
          padding:'0 30px',
          marginTop:'10px'
      },
      root2:{
       width:'200px',
       height:'30px',
        padding:'0 30px',
        marginTop:'0px'
    }
})



function Home (props)  {
    const [asteroidId, setAsteroidId] = useState("")
    const [check, setCheck] = useState(true)
 
    const valueChange=(e)=>{
        setAsteroidId(e.target.value)
        setCheck(e.target.value.length===0?true:false)
    }
   const getData=()=>{
        let {history} =props
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${key}`)
        .then(res=>{
          console.log(res.data);
             if(res && res.data){
                 console.log();
                 history.push({pathname:'/info',state:res.data})
             }
        }).catch(err=>{
            console.log(err);
            history.push({pathname:'/info',state:""})
        })
        
    } 
    const randomData=()=>{
        let {history} =props

       axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${key}`)
       .then(res=>{
           console.log(res);
             if(res && res.data && res.data.near_earth_objects){
                 console.log(res.data.near_earth_objects);
                 let length=res.data.near_earth_objects.length
                 let random=Math.random() *(length-0)+0
                   let final=Math.floor(random)
                let info=res.data.near_earth_objects[final]
                history.push({pathname:'/info',state:info})
             }
       }).catch(err=>{
        history.push({pathname:'/info',state:""})
       })
    }
        let classes=useStyles()
        return (
            <div>
                <Grid container spacing={3}>
                      <Grid item xs={12}>
                      <input className={classes.input} name="asteroidId" value={asteroidId} placeholder="Enter Asteroid ID"
                onChange={valueChange} /> 
                      </Grid>
                      <Grid item xs={6}>
                <button className={classes.root2}  disabled={check} onClick={getData}>Submit</button>
                      </Grid>
                      <Grid item xs={6}>
                      <button className={classes.root1} onClick={randomData}>Random Asteroid</button>
                      </Grid>
                </Grid>
               
            </div>
        )
    }

export default Home
