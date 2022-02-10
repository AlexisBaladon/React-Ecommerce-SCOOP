import { Button, Card, Modal } from "react-bootstrap";
import DtItem from "../../../dataTypes/item";

import './itemChooserModal.css'

interface IProps {
  items: DtItem[];
  show: boolean;
  onHide: any;
}

const ModalRecipientes: React.FC<IProps> = ({items, show,onHide}) => {
    return (
      <Modal
        onHide={onHide}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Elige un sabor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{overflowY: "auto"}}>
            {items.map(i => {
                return <div key={i.id} style={{width: "10rem"}} className="card-img-modal">
                    <Card className="item-card" style={{}} >
                        <Card.Img width="100px" variant="top" src={window.location.origin + i.pictureUrl}/>
                    <Card.Body style={{padding: "0 0 15px 0"}} className="body-card">
                        <Card.Title style={{ height: "15px"}} className="item-title btn stretched-link">
                            {i.title}
                        </Card.Title>
                    </Card.Body>
                    </Card>
                </div> 
            })}
            
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalRecipientes;