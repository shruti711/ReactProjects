
const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
  
  function DisplayUser() {
    return (
      <>
        <h3>User names</h3>
        <ul>
         {users.map((user) => 
            <li key={user.id}>
              {console.log('user',user.name)}
              {user.name}
              user
            </li>
          )}
        </ul>
      </>
    );
  }
  
  export default DisplayUser;