import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { client } from './db/client';
import LoginPage from './components/loginPage/loginPage';
import './index.css';
import GenericTemplate from './components/genericTemplate/genericTemplate';
import { store } from './redux/store';
import SongsPage from './components/songsPage/songsPage';
import PlaylistPage from './components/playlistPage/playlistPage';
import FavoritesPage from './components/favoritesPage/favoritesPage';
import { LicenseInfo } from '@mui/x-data-grid-pro';

const persistor = persistStore(store);
LicenseInfo.setLicenseKey(
  '6239d8e4e4e446a3d208d638ff7603bdT1JERVI6Um9tLVRlc3QsRVhQSVJZPTIyMjMwNjEyMDAwMDAsS0VZVkVSU0lPTj0x'
  );
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginPage/>}/>
              {/* <Route path='/home' element={<GenericTemplate/>}/> */}
              <Route path='/songs' element={<SongsPage/>}/>
              <Route path='/playlist' element={<PlaylistPage/>}/>
              <Route path='/favorite' element={<FavoritesPage/>}/>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>    
  </React.StrictMode>,
)
