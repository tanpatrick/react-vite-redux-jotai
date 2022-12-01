import { Col, Row } from '../components/Grid';
import { JotaiCounterCard } from './JotaiCounterCard';
import { JotaiSummary } from './JotaiSummary';

export const JotaiApp = () => {
  return (
    <>
      <Row>
        <Col size={3}>
          <JotaiCounterCard name="A" />
        </Col>
        <Col size={3}>
          <JotaiCounterCard name="B" />
        </Col>
      </Row>
      <JotaiSummary />
    </>
  );
};
