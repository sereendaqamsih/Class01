import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
/*import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Card from 'react-bootstrap/Card';*/
import Button from 'react-bootstrap/Button';


class Selected extends React.Component {
    render(){
        
        

        return(
            <>
             <Modal show={this.props.showModal1} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.data1.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <Modal.Img variant="top" src={this.props.data1.image_url} alt={this.props.data1.altImage} width={300}/>
</Modal.Body>
        <Modal.Body>{this.props.data1.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.close}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </>
        )
    }
}
export default Selected;