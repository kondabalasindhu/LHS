import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



export default function Admin() {

  return (
<>
    <Navbar />
    <div className="admin">
      <h1 className="admin" >Admin dashboard</h1>
     <p><Button as={Link} to="/AddDoctor">
        Add Doctor
      </Button></p> {" "}
      <p><Button as={Link} to="/UserDetails">
        User Details
      </Button></p>{" "}
      
      <p><Button as={Link} to="/AddNurse">
      Add Nurse
      </Button></p>
      {" "}
      
      <p><Button as={Link} to="/AddPharmacist">
      AddPharmacist
      </Button></p>
      {" "}
      
      <p><Button as={Link} to="/AddReceptionist">
   AddReceptionist
      </Button></p>
      {" "}
      
      <p><Button as={Link} to="/user/nursesignup">
       nurse details
      </Button></p>
      {" "}
      
      <p><Button as={Link} to="/user/nursesignup">
        pharmacist details
      </Button></p>
      {" "}
      
     <p> <Button as={Link} to="/user/nursesignup">
     my profile
      </Button></p>
      {" "}
      
      <p><Button as={Link} to="/user/nursesignup">
       Add pharmacist
      </Button></p>

      <hr />
    
    </div>
    </>
  );
}
