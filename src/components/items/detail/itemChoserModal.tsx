import { Card, Modal, Row } from "react-bootstrap";
import Flavor from "../../../dataTypes/flavor";

import './itemChoserModal.css'

interface IProps {
  items: Flavor[];
  show: boolean;
  onHide: () => any;
  selectItemById: (id: number) => any
}

const ModalRecipientes: React.FC<IProps> = ({items, show, onHide, selectItemById}) => {

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
          <Row className="item-container-choser-modal justify-content-center">
            {items.map(i => {
                return <div key={i.id} className="card-img-modal">
                  <Card className="item-card" >
                    <Card.Img width="100px" variant="top" src={window.location.origin + i.pictureUrl}/>
                    <Card.Body className="body-choser-modal" >
                      <Card.Title className="title-choser-modal btn stretched-link" onClick={() => {selectItemById(i.id); onHide();}}>
                        {i.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div> 
            })}
          </Row>
        </Modal.Body>
      </Modal>
    );
  }

export default ModalRecipientes;