import Badge from 'react-bootstrap/Badge'; 


const Footer = (props) => {
       return (     
       <div>
            <h3 className="text-center mb-5">{props.main}
                ¿Quieres ver la nueva pelicula de Mario? <Badge bg="secondary">Click aquí</Badge>
            </h3>
       </div> 
        ); 
    };  
    export default Footer;