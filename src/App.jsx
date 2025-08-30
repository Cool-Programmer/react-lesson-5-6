import Auth from './components/Auth/Auth'
import { useState } from 'react';

function App() {
  const [users, setUser] = useState([]);

  const handleAddUser = (newUser) => {
    if (users.some(user => user.email_address_reg === newUser.email_address_reg)) {
      alert('User with this email already exists!');
      return;
    } else {
      setUser([...users, newUser]);
    }
  };

  return(
    <>
        <Auth handleAddUser={handleAddUser} users={users}/>
    </>
  )
}

export default App
