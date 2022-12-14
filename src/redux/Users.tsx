import { useEffect } from 'react';
import { Card } from '../components/Card';
import { Col, Row } from '../components/Grid';
import { apiAction as apiAction, getUserByIdApi, getUsersApi } from './reducers/apiReducer';
import { useApiSelector, useAppDispatch } from './store';
import { UserDetails } from './UserDetails';

interface Xxx {}

const helloAction = (arg: Xxx) => {};

class GetUsers implements Xxx {}

export const Users = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      apiAction({
        apiFn: getUsersApi,
        apiKey: 'users',
        queryKey: 'users',
      })
    );
  }, []);

  return <UsersList />;
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching } = useApiSelector<User[]>('users');
  return (
    <Card title="Users" titleSize="h6">
      <Row className="p-3">
        <Col size={6}>
          <ul className="list-group text-left">
            {isFetching && <li className="list-group-item text-left">Loading...</li>}
            {data?.map((user, index) => (
              <li className="list-group-item text-left" key={index}>
                <a
                  className="link-primary"
                  onClick={() => {
                    dispatch(
                      apiAction({
                        apiFn: async () => await getUserByIdApi(user.id),
                        apiKey: 'userById',
                        queryKey: ['user', user.id],
                      })
                    );
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {user.first_name}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col size={6}>
          <UserDetails />
        </Col>
      </Row>
    </Card>
  );
};
