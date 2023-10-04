
import {Link} from 'react-router-dom';
import {Grid,Button} from '@mui/material';


const Home = () => {
    
  return (
     
      <Grid container justifyContent="flex-end">
              <Grid item>
               <Button><Link to="/register" variant="body2">
                   Sign up
                </Link>
                </Button> 
                <Button>
                <Link to="/login" variant="body2">
                   Sign in
                </Link>
                </Button>
              </Grid>
            </Grid>

  )
}

export default Home