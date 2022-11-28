import { Col, Row } from './components/Grid';
import { CounterCard } from './components/CounterCard';
import { Summary } from './components/Summary';

function App() {
  return (
    <>
      <Row>
        <Col size={6}>
          <Summary
            summaries={[
              { name: 'A', value: 1 },
              { name: 'B', value: 1 },
            ]}
          />
          <div className="my-3"></div>
        </Col>
        <Col size={3}>
          <CounterCard counter="A" />
        </Col>
        <Col size={3}>
          <CounterCard counter="B" />
        </Col>
      </Row>
    </>
  );
}

export default App;
