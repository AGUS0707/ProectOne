import "./sass/main.scss";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Item from "./components/Item";

import {Container, Row, Col} from "reactstrap";

function App() {

   let number = 34;

   function nimadir() {
      console.log("Hello world!")
   }

  return (
    <div>
       <NavigationBar/>
       <Header/>

       <div className="container">
          <div className="row mt-3">
             <div className="col-4">
                <Item/>
             </div>
             <div className="col-4">
                <Item/>
             </div>
             <div className="col-4">
                <Item/>
             </div>
          </div>
       </div>

       <Container className="mt-3">
          <Row className="nizom">
             <Col md="4" lg="3" xl="4">
                <Item/>
             </Col>
             <Col md="4" lg="3" xl="4">
                <Item/>
             </Col>
             <Col md="4" lg="3" xl="4">
                <Item/>
             </Col>
          </Row>
       </Container>

      <h3 className="text">Lorem ipsum dolor.</h3>

       <img src="/images/img100.jpg" width="200" onClick={nimadir}/>
       <p style={{color: "red", fontSize: "25px"}}>{number}</p>

       {/*<div/>*/}
       {/*<img></img>*/}
       {/*<br></br>*/}


    </div>
  );
}


export default App;

// npx create-react-app lesson-38
