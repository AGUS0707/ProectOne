import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import Wrap from "./components/Wrap";
import LessonQirq from "./components/LessonQirq";
import Trello from "./components/Trello";
import Lifecycle from "./components/Lifecycle";
import Employee from "./components/Employee";
import Hooks from "./components/Hooks";
import Routing from "./components/Routing";
import RegisterRoute from "./components/RegisterRoute";
import Counter from "./components/Counter";

ReactDOM.render(<Counter/>, document.getElementById('root'));
