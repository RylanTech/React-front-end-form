//I used openAI to assist with making the template of this code, it should be noted that it has since been heavly modified
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { ListGroup, Modal } from 'react-bootstrap';

const Schedule = () => {
  const [date, setDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleCalendarChange = (selectedDate) => {
    const today = new Date();
    if (selectedDate >= today) {
      setDate(selectedDate);
      setShowForm(true);
    }
  }

  const handleFormChange = (event) => {
    switch(event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'time':
        setTime(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Day: ${date}, Name: ${name}, Time: ${time}, Email: ${email}, Phone: ${phone}`)
    //handle form submission
  }

  const handleBackClick = () => {
    setShowForm(false);
  }

  return (
    <div>
      {showForm ? (
        <div className='fillOut'>
          <Container>
            <Row>
            <div className='col-md-1 col-lg-2'></div>
            <Card className='c61B570 col-12 col-md-10 col-lg-8'>
              <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group>
                    <Form.Label>Selected Date</Form.Label>
                    <Form.Control type="text" value={date} readOnly />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={handleFormChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="text" name="time" value={time} onChange={handleFormChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleFormChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phone" value={phone} onChange={handleFormChange} />
                  </Form.Group>
                  <div className='formButton'>
                    <Row>
                      <Button type="submit" variant='outline-success' className='col-4' onClick={handleShow}>Schedule Appointment</Button>
                      <div className='col-4'></div>
                      <Button onClick={handleBackClick} variant='outline-secondary' className='col-4'>Back to Calendar</Button>
                    </Row>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <div className='col-md-1 col-lg-2'></div>
            </Row>
        </Container>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Scheduled!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Not really though, there isn't a database to go to. Here is the data sumbitted though.
          <br/>
          <ListGroup>
            <ListGroup.Item>
              Name: {name}
            </ListGroup.Item>
            <ListGroup.Item>
              Time: {time}
            </ListGroup.Item>
            <ListGroup.Item>
              Email: {email}
            </ListGroup.Item>
            <ListGroup.Item>
              Phone: {phone}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </div>
        
      ) : (
        <Container>
            <Calendar
          tileClassName="tile"
          value={date}
          onChange={handleCalendarChange}
          next2Label={null}
          prev2Label={null}
          minDate={new Date()}
        />
        </Container>
      )}
    </div>
  );
};

export default Schedule;