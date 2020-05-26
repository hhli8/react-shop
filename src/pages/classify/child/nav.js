import React, { useContext } from 'react'
const AppContext = React.createContext({});
const Navbar = () => {
  const { username } = useContext(AppContext);
  console.log(useContext(AppContext))
  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  );
}
export default Navbar