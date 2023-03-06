import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
const Registiereung = () => {
  const registerUser = async (e) => {
    e.preventDefault()
    console.log(e.target);
    const response = await fetch("http://localhost:1337/api/register", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email1:email1,
        password,
        repeatedPassword
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={registerUser}>
      <MDBContainer
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}>
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5 text-center">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <MDBInput
              wrapperClass="mb-4  "
              className=" text-center"
              placeholder="Your Name"
              size="lg"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              className=" text-center"
              placeholder="Your Email"
              size="lg"
              id="form2"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              className=" text-center"
              placeholder="Password"
              size="lg"
              id="form3"
              type="password"
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Repeat your password"
              size="lg"
              id="form4"
              type="password"
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label=" I agree all statements in Terms of service"
              />
            </div>
            <Button type="submit" className="mb-4 " size="lg">
              Register
            </Button>
          </MDBCardBody>
          <div style={{ marginBottom: "40px" }}>
            Have already an account? <a href="#">Login here</a>
          </div>
        </MDBCard>
      </MDBContainer>
    </form>
  );
};

export default Registiereung;
