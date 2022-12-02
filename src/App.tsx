import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Col, Row } from './components/Grid';
import { Header } from './components/Header';
import { JotaiApp } from './jotai/JotaiApp';
import { ReduxApp } from './redux/ReduxApp';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Row>
        <Col size={6}>
          <Header value="Jotai" size="h2" />
          <JotaiApp />
        </Col>
        <Col size={6}>
          <Header value="Redux" size="h2" />
          <ReduxApp />
        </Col>
      </Row>
    </QueryClientProvider>
  );
}

export default App;
