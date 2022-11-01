import {Container} from './components/styles/Container.styled';
import {TextColor} from './components/styles/TextColor.styled';
import './index.css';
import './App.css';
import Form from './components/Form';

const App = () =>{

  return (
    <Container>
      <TextColor><h1>Tasklist app </h1></TextColor> 
       <Form />
    </Container>
  );
}

export default App;
