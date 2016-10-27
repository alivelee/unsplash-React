import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import MainGallery from './components/MainGallery';
import Photo from './components/photos';
import NotFound from './components/NotFound';
import Devices from './components/Devices';
import { BrowserRouter , Match,Miss} from 'react-router';
import './styles/index.css';
import './styles/font-awesome/css/font-awesome.min.css';
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Main}/>
        <Match exactly pattern="/gallery" component={MainGallery} />
        <Match pattern="/photo/:photoId" component={Photo}/>
        <Match pattern="/devices" component={Devices} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
