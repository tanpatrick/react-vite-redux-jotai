import { useEffect } from 'react';
import { Header } from '../components/Header';
import { fetchUsersAction } from './reducers/usersReducer';
import { useAppDispatch, useAppSelector } from './store';

export const ReduxUsers = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  return (
    <div>
      <Header value="Users" size="h5" />
      {isLoading ? <h3>Please wait...</h3> : <ReduxUsersList />}
    </div>
  );
};

const ReduxUsersList = () => {
  const data = useAppSelector((state) => state.usersReducer.entities);
  return (
    <ul className="list-group text-left">
      {data.map((entity, index) => (
        <li className="list-group-item  text-left" key={index}>
          {entity.first_name}
        </li>
      ))}
    </ul>
  );
};
