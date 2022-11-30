import { Col, Row } from './components/Grid';

import { JotaiSummary } from './jotai/JotaiSummary';
import { JotaiCounterCard } from './jotai/JotaiCounterCard';
import { JotaiFeed } from './jotai/JotaiFeed';

function App() {
  return (
    <>
      <JotaiApp />
    </>
  );
}

const JotaiApp = () => {
  return (
    <>
      <Row>
        <Col size={6}>
          <JotaiSummary />
        </Col>
        <Col size={3}>
          <JotaiCounterCard name="A" />
        </Col>
        <Col size={3}>
          <JotaiCounterCard name="B" />
        </Col>
        <Col>
          <JotaiFeed />
        </Col>
      </Row>
    </>
  );
};

export default App;
