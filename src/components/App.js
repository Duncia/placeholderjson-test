import React, {useState, useEffect} from "react";
import Header from "./Header";
import Container from "./Container";
import Heading from "./Heading";
import Box from "./Box";

export default function App(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((users) => setUsers(users));
      }, []);

    return (
        <div>
            <Header />
            <Container>
                <Heading/>
                <div className="boxes">
                    {users.map((user) => <Box key={user.id} user={user}/>)}
                </div>
            </Container>
        </div>
    )
}