import React from 'react';
import ReactDOM from 'react-dom';

interface IAppProps {
    title: string;
}

const App = (props: IAppProps) => <h1>{props.title}</h1>;

ReactDOM.render(
    <App title={"Hello, React!!"} />,
    document.getElementById('root')
);