import React, {useState, useEffect} from "react";
import Header from "./Header";
import Container from "./Container";
import Heading from "./Heading";
import Box from "./Box";
import Searchbar from "./Searchbar";
/*Kad viską sujungti:
1. Sarch field pradinė reikšmė yra tuščias stringas
Tada kviečiam SEARCBAR fukciją, kad SEARCHFIELD vertę nustatytų.

2. FETCHAS paima pradini useriu sarasą. Tada jį filtruojam ir priskiriam kaip naują masyvą. 

3. Su useffect pasiimu USERS masyvą ir pagal SEARCHFIELD vertę atfiltruoju.
Tada nustatau filtered users kaip tą naują masyvą.

4. Realiai pirmas filtered users masyvas yra tiesiog USERS. o USEEFFET keičia tą masyvą, kai keičiasi users ir 
SEARCFIELD vertės. 
*/

export default function App(){
    const [searchField, setSearchField] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilterUsers] = useState(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((users) => setUsers(users));
      }, []);

    useEffect(() => {
        const newFilteredUsers = users.filter((user) => {
          return user.name.toLocaleLowerCase().includes(searchField);
        });
    
        setFilterUsers(newFilteredUsers);
        console.log(newFilteredUsers);
      }, [users, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
        console.log("Rezas yra: " + searchFieldString);
    };

    return (
        <div>
            <Header />
            <Container>
                <Searchbar
                    className='input__main'
                    onChangeHandler={onSearchChange}
                    placeholder='Search now'
                />
                <Heading/>
                <div className="boxes">
                    {filteredUsers.map((user) => <Box key={user.id} user={user}/>)}
                </div>
            </Container>
        </div>
    )
}