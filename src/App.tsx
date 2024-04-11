import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <h2>Welcom</h2>
            <h3>Pal</h3>
            <Title>Welcome to IT-INCUBATOR</Title>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;