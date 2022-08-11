import "./Home.css";
import {Container} from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

export  default function Home() {
    return (
        <>
        <header>
        <Navbar />
        





        <Container id="llh" className=" align-items-center ">
            <div className="container text-center position-relative">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">REEGISTER</button>
  <button class="btn btn-primary" type="button">LOGIN</button>
</div>






                <h1 className="home">WELCOME TO LHS</h1>
                
            </div>
        </Container>
        
        </header>
        </>
    );
}