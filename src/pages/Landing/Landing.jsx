import { Button, Alert } from 'react-bootstrap'


const Landing = ({ user }) => {
  return (
    <>
      <main className="container-top">
        <div className="flex-top">
          <div className="top-1">
            <h1 className="logo">X'plor</h1>
            <h3 className="plan">PLAN</h3>
          </div>
          <div className="top-2">
            <div className="splash-landing">
              <div className="suggestion">
                <Alert variant="primary">button</Alert>
                <Button className="btn-danger">btn</Button>
                <div className="destination">Destination</div>
                <div className="arrival">Arrival</div>
                <div className="departure">Departure</div>
                <div className="expand">Expand</div>
              </div>
            </div>
          </div>
        </div><div className="splash-suggestion">
          <div className="h3-container">
            <h3>Xperience Top Destinations</h3>
          </div>
          <div className="choice-container">
            <div className="state">
              <h4>state</h4>
              <div className="svg"></div>
            </div>
            <div className="splash-choice"></div>
            <div className="splash-choice"></div>
            <div className="splash-choice"></div>
          </div>
        </div><div className="attractions">
          <div className="event-container">
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
            <div className="event"></div>
          </div>
          <div className="event-details"></div>
        </div>
      </main >
    </>
  )
}



export default Landing
