import React, {useState} from 'react'
import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const PopUp = ({children,footer,header,color,btn_label,showModal,toggleModal}) =>{


        return(
       <Container>     
                <div className="btn-comp">
                  <Button color={color} onClick={()=>toggleModal()}>{btn_label}</Button>
                </div>

                <div className="modal-comp">
                  <Modal isOpen={showModal} toggle={()=>toggleModal()}>
                   <ModalHeader toggle={toggleModal}>{header}</ModalHeader>
                                
                   <ModalBody>
                  {children}
                  </ModalBody>

                  <ModalFooter>
                  {/* <Button color="primary" onClick={() => doAction}>Confirm</Button>{' '} */}
                  {footer}
                  </ModalFooter>
                  </Modal>
                </div>
       </Container> 
        )
}
export default PopUp;