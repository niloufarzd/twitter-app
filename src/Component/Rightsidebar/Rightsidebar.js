import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { ButtonBase } from '@material-ui/core';
const hashtags=[
     "پرچم_دار جدید","کرونا_ویروس","سامسونگ","هلو_ سامر"

]

export const Rightsidebar = () => {
    return (
        
    <div className="main"  >

         <Grid container  direction={"row"} alignItems="center">
              <Grid item>
              <img src="images/logo.png"  alt=""></img>
              </Grid>
              <Typography className="logoType" >توییتر فارسی </Typography>
               <Typography className="hashTitle">داغ ترین هشتگ ها </Typography>
           </Grid>
           <Grid container  direction="column" alignItems="center">
                    {
                         hashtags.map(item=>
                              
                              <ButtonBase className="hashtagParent">
                                   <Grid item container>
                                    <img src="images/hashtag.png" alt=""></img>
                                    <Typography  className="hashtag">{item}</Typography>

                                   </Grid>

                              </ButtonBase>
                              
                              )
                    }

               </Grid>
          

    </div>
    );
};
 export default Rightsidebar;
