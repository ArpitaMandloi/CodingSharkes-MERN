import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <div className="card-container">
       <h2>Why Choose Us</h2>

      <Card>
        <Card.Body>
          <p>Package</p>
          <i className="fa-solid fa-box-archive"></i>
          
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
           <p>Cars</p>
          <i className="fa-solid fa-car"></i>
         
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <p>Location</p>
          <i className="fa-solid fa-location-dot"></i>
          
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
             <p>Profile</p>
          <i className=" icon fa-solid fa-user"></i>
       
        </Card.Body>
      </Card>

    </div>
  );
}

export default TextExample;