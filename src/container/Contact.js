import React from 'react';
import Card from 'react-bootstrap/Card'


function Contact() {
    return(
        <div>
            <h1>contact</h1>
            <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        kedai silogisme
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          come and <cite title="Source Title">enjoy</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
        </div>
    )
}
export default Contact