import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import logo from "./logo.svg";

import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // console.log("render");
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMoster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMoster);
  }, [monsters, searchField]);

  const onStringChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className={"monster-search-box"}
        onChangeHandler={onStringChange}
        placeholder={"mostros"}
      />{" "}
      <br />
      <SearchBox
        className={"monster-search-box"}
        onChangeHandler={onTitleChange}
        placeholder={"mostros"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     let searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMoster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Catz Rolodex</h1>
//         <SearchBox
//           className={"monster-search-box"}
//           onChangeHandler={onSearchChange}
//           placeholder={"mostros"}
//         />
//         <CardList monsters={filteredMoster} />
//       </div>
//     );
//   }
// }

export default App;
