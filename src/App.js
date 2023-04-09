import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/Card';
import Header from './components/Header';
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
        <Header main= "Galeria de Imagenes"/>
        <Container>
        <CardComponent titulo= "Mario" url="https://e1.pngegg.com/pngimages/583/828/png-clipart-paper-mario-brushes-super-mario-illustration.png"/>
        <CardComponent titulo= "Luigi" url="https://e7.pngegg.com/pngimages/612/233/png-clipart-mario-luigi-paper-jam-mario-luigi-superstar-saga-luigi-s-mansion-luigi.png"/>
        <CardComponent titulo= "Bowser" url="https://w7.pngwing.com/pngs/631/985/png-transparent-super-paper-mario-bowser-super-mario-bros-bowser-food-heroes-super-mario-bros.png"/>
        </Container>  
        <Footer /> 
    </div>
  );
}

export default App;
