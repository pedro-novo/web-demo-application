import { useQuery } from 'react-query';
import { UserService } from '@/services/user-service/user-service';

export const useGetUserById = (id?: number) => {
  const { data, isLoading, error, refetch } = useQuery(['useGetUserById', id], () => UserService.getById(id!), {
    enabled: !!id,
  });

  return {
    user: data,
    isUserLoading: isLoading,
    userError: error,
    userRefetch: refetch,
  };
};
