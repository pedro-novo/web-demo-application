import { useQuery } from 'react-query';
import { UserService } from '@/services/user-service/user-service';

export const useGetUsers = () => {
  const { data, isLoading, error } = useQuery(['useGetUsers'], () => UserService.getAll());

  return {
    users: data,
    isUsersLoading: isLoading,
    usersError: error,
  };
};
