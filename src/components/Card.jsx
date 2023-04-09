import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const CardComponent = ({url, titulo})=> {
 const estilos = {
    height:"400px", 
    width: "300px",
    
}

 return(
<Card className="mb-5 text-secondary" style= {estilos}>
      <Card.Img variant="top" src={url}  />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Paper Mario
        </Card.Text>
      </Card.Body>
    </Card>

    
 )
}
export default CardComponent;