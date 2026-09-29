import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <div className="card-container">
        <h2>How it Works</h2>
      <Card>
        <Card.Body>
          <p>Create Account</p>
          <i class="fa-solid fa-mobile-screen"></i>
          
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
           <p>Plcae Order</p>
         <i class="fa-solid fa-mobile-vibrate"></i>
         
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <p>Pick and order</p>
        <i class="fa-solid fa-key"></i>
          
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
             <p>Service complete</p>
         <i class="fa-solid fa-taxi"></i>
       
        </Card.Body>
      </Card>

    </div>
  );
}

export default TextExample;