import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      width: 675,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function Info (props) {

    const classes = useStyles();
        let {state}=props.location
        return (
            <div>
               
                    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Api Info
        </Typography>
        {state ?<div>
            <Typography className={classes.pos} color="textSecondary">
        Name -   {state.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        NASA jpl Url - {state.nasa_jpl_url}

        </Typography>  
        <Typography className={classes.pos} color="textSecondary">
        Potentially_hazardous_asteroid - {state.is_potentially_hazardous_asteroid}
        </Typography>
        </div>:
        
        <Typography className={classes.pos} color="textSecondary">
       No Data Available For This Id
        </Typography>
    
                    
                }
       
      </CardContent>
      <CardActions>
      </CardActions>
    </Card> 
            </div>
        )
    
}

export default Info
