import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RenderTip = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Description of available status(es)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>       
          <p><strong>Versioned.</strong> The resource is now available as open source or open access. We can implement it as part of client projects. Others can use it as specified in the resource's license.</p>
          <p><strong>Operational.</strong> We have developed a working version of this resource. We are testing it further before versioning it as open source or open access. That said, we can already implement it as part of client projects.</p>
          <p><strong>Development.</strong> We are currently developing this resource. We are confident it will come online at some point. However, we cannot specify timelines. It will be ready when it's ready.</p>
          <p><strong>Ideation.</strong> We want to develop this resource and are thinking about ways to go about it.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const StatusTip = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className='statustip' onClick={() => setModalShow(true)}>?</button>

      <RenderTip
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default StatusTip