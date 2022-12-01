import { Col, Row } from '../components/Grid';
import { JotaiCounterCard } from './JotaiCounterCard';
import { JotaiFeed } from './JotaiFeed';
import { JotaiSummary } from './JotaiSummary';

export const JotaiApp = () => {
  return (
    <>
      <Row>
        <Col size={6}>
          <JotaiCounterCard name="A" />
        </Col>
        <Col size={6}>
          <JotaiCounterCard name="B" />
        </Col>
      </Row>

      <JotaiSummary />
      <JotaiFeed />
    </>
  );
};
