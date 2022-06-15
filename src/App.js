import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserData from './components/UserData'
import LoadingPersonsData from './components/OnLoadingUserData'

function App() {

  const DataLoading = LoadingPersonsData(UserData);

  const [appState, SetAppState] = useState(
    {
      loading: false,
      persons: null,
    }
  );


  useEffect(() => {
    SetAppState({ loading: true })
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      SetAppState({
        loading: false,
        persons: allPersons
      });
    })
  }, [SetAppState])

  return (
    <div className="App">
      <DataLoading isLoading={appState.loading} persons={appState.persons}  />

    </div >
  );
}

export default App;
