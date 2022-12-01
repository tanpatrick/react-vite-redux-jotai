import { Provider } from 'react-redux';
import { Col, Row } from '../components/Grid';
import { ReduxCounterCard } from './ReduxCounterCard';
import { ReduxSummary } from './ReduxSummary';
import store from './store';

export const ReduxApp = () => {
  return (
    <Provider store={store}>
      <Row>
        <Col size={3}>
          <ReduxCounterCard name="A" />
        </Col>
        <Col size={3}>
          <ReduxCounterCard name="B" />
        </Col>
      </Row>
      <ReduxSummary />
    </Provider>
  );
};
