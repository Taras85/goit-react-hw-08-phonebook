import { Button, } from '@chakra-ui/react';
import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  lable: {
    fontWeight: 500,
    fontSize: 30,

    color: 'teal',
  },
  paragraph: {
    fontWeight: 300,
    fontSize: 24,

    color: 'teal',
  },
};

// var datalocal = JSON.parse(localStorage.getItem('persist:auth'))
// console.log('datalocal:', datalocal.token)

export default function Profile() {
  const dispatch = useDispatch();
  const { user,  } = useAuth();
  
  return (
    <div style={styles.container}>
      <label style={styles.lable}>
        Name <p style={styles.paragraph}>{user.name}</p>
      </label>
      <label style={styles.lable}>
        Email<p style={styles.paragraph}>{user.email}</p>
      </label>


      <Button
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <span>LOGOUT</span>
      </Button>
    </div>
  );
}
