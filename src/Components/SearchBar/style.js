import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../Assets/header.jpg';

export default makeStyles((theme) => ({
    header: {
      margin: '0 auto',
      width: '100%',
      height: '600px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 20%', // elegant way i found to stitch this image
      backgroundSize: 'cover', // also this, thanks stackoverflow ;)
      objectFit: 'cover',
      paddingTop: '10px'
    },
    typography: {
      margin: 'auto',
      width: '60%',
      paddingTop: '60px',
      paddingBottom: '60px',
      color: '#eee',
    },
    searchBar: {
      margin: 'auto',
      width: '60%',
      padding: 10
    },
    inputSearch: {
      paddingLeft: '20px', // for placeholder
      paddingRight: '20px', // for placeholder
      width: '100%',
      height: '60px',
      marginBottom: 20, // between searchbox and chips
      color: 'black',
      background: '#eee',
      borderRadius: '10px',
    },
    suggestion: {      
      paddingLeft: '20px',
      paddingRight: '20px',
      width: '100%',
      height: '60px',
      color: '#eee'
    },
    chips: {
      margin: '1px',
      backgroundColor: '#696969',
      color: '#fff',
    }
  }))