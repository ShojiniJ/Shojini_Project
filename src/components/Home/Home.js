import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  Carousel,
  Button,
  Image,
  NavDropdown,
  Collapse
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchallcountriesdata } from "../../Redux/Actions/Action";
import './Home.css';
import Footer from "../Footer/footer";

const Sliderimages = [
  {
    image1: `${process.env.PUBLIC_URL}/images/Capture2.png`,
  },
  {
    image1: `${process.env.PUBLIC_URL}/images/Capture2.png`,
  },
  {
    image1: `${process.env.PUBLIC_URL}/images/Capture2.png`,
  },
];

function Home() {
  const contrieslist = useSelector((state) => state.countrylist.data);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(12)
  const [open, setOpen] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    dispatch(fetchallcountriesdata());
  }, [dispatch]);

  const getCurrentItems = () => {
    return contrieslist.slice(0, itemsToShow);
  }

  const handleViewMore = () => {
    if (itemsToShow + 12 >= contrieslist.length) {
      setItemsToShow(contrieslist.length);
     // setShowLess(true);
    } else {
      setItemsToShow(itemsToShow + 12);
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Sliderimages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Sliderimages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold" >Countries</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setOpen(!open)} />
          <Navbar.Collapse id="basic-navbar-nav" in={open}>
            <Nav className="ms-auto"  variant="underline">
              <Nav.Link  className="fw-bold">All</Nav.Link>
              <Nav.Link  className="fw-bold">Asia</Nav.Link>
              <Nav.Link className="fw-bold">Europe</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4 ">
        <Row className="text-center ">
          {/* Web View:  */}
          <Col className="d-none d-md-block">
          
      <hr className="my-1" style={{border:'3px solid #3D3D3D'}} />
 
          </Col>
          <Col xs="auto" className="d-none d-md-block">
            <h1 className="m-0">WELCOME</h1>
          </Col>
          <Col className="d-none d-md-block row">
        
      <hr style={{marginTop:'35px',border:'3px solid #3D3D3D',width:'400px'}}  />
  
            </Col>

        {/* // Mobile View */}
          <Col xs={12} className="d-md-none" >
            <hr  />
          </Col>
          <Col xs={12} className="d-md-none text-center">
            <h1 className="m-0">WELCOME</h1>
          </Col>
          <Col xs={12} className="d-md-none">
            <hr />
          </Col>
        </Row>
        <Row className="mt-4" >

        <Col md={3}  className="order-1 order-md-2 mb-3 d-flex justify-content-center">
            <Card className="text-center card-image" style={{       border: "2px solid #3D3D3D", }}>
              <Card.Body > 
                <div className="d-flex justify-content-center align-items-center h-100">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Capture2.png`}
                    style={{height:'120px',width:'120px',borderRadius:'16px'}}
                    alt="Frame"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9}  className="order-2 order-md-1 view">
            <div style={{ position: "relative"  }}  >
              <Carousel className="carousel-image"
                indicators={false}
                controls={false}
                style={{ border: '2px solid #3D3D3D' , 
                     }}
                activeIndex={activeIndex}
                onSelect={handleSelect}
                
              >
                {Sliderimages.map((item, index) => (
                  <Carousel.Item key={index} className="justify-content-center align-items-center"   >

                
              
          <img 
            src={item.image1} 
            alt="Slide" 
            style={{height:'120px',width:'120px',borderRadius:'16px'}}
       
          />
       
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* Custom Navigation Arrows */}
              <div
  className="d-flex justify-content-center"
  style={{
    position: "absolute",
    bottom: "10px",
    width: "100%",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    gap: "10px", // Space between the arrows and dots
  }}
>
  <button
    className="btn btn-link"
    onClick={handlePrev}
    style={{
      fontSize: "30px",
      textDecoration: "none",
      color: "black",
    }}
  >
    ←
  </button>

  {/* Custom Navigation Dots */}
  <div
    className="d-flex justify-content-center"
    style={{
      display: "flex",
      gap: "10px", // Space between each dot
    }}
  >
    {Sliderimages.map((_, index) => (
      <div
        key={index}
        onClick={() => handleSelect(index)}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: index === activeIndex ? "black" : "gray",
          cursor: "pointer",
        }}
      ></div>
    ))}
  </div>

  <button
    className="btn btn-link"
    onClick={handleNext}
    style={{
      fontSize: "30px",
      textDecoration: "none",
      color: "black",
    }}
  >
    →
  </button>
</div>

            </div>
          </Col>

         
        </Row>
        <Container className="containerclass">
      <Row className="mt-4 justify-content-center">
        {getCurrentItems().map((item, index) => (
          <Col xs={12} md={6} key={index} className="d-flex justify-content-center">
            <Card
              className="mb-4 custom-card"
              style={{
                border: '2px solid #3E3E3E',
                borderStartEndRadius: '0px',
                borderRadius: '0px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                width: '100%', // Ensure card takes full width on mobile
              }}
            >
              <Card.Body className="card-body d-flex align-items-center">
                <div className="col-3 d-flex justify-content-center">
                  <Image className="images" src={item.flag} fluid />
                </div>
                <div className="col-9 text-start">
                  <Card.Title className="text-dark">{item.name}</Card.Title>
                  <Card.Text className="region">{item.region}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {contrieslist.length > itemsPerPage * (currentPage + 1) && (
        <div className="d-flex justify-content-center">
          <Button
            onClick={handleViewMore}
            className="mb-3"
            style={{
              width: '146px',
              height: '48px',
              backgroundColor: '#3C3C3C',
              borderRadius: 0,
              borderColor: '#3C3C3C',
            }}
          >
            Load More
          </Button>
        </div>
      )}
    </Container>
<Footer />
      </Container>
    </div>
  );
}

export default Home;
