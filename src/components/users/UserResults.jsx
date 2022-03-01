import { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  // Retrieve data from context
  const { users, fetchUsers, isLoading } = useContext(GithubContext);

  useEffect(() => {
    // Get users from API on render
    fetchUsers();
  }, []);

  if (!isLoading) {
    // Show users when data received from github api
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    // Show spinner when loading
    return <Spinner />;
  }
}

export default UserResults;
