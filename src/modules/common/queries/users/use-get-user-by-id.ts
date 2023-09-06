import { useQuery } from 'react-query';
import { UserService } from '@/services/user-service/user-service';
import { toast } from 'react-toastify';

export const useGetUserById = (id?: number) => {
  const { data, isLoading, error, refetch } = useQuery(['useGetUserById', id], () => UserService.getById(id!), {
    enabled: !!id,
    onError: () => toast.error('Unable to get the user!'),
  });

  return {
    user: data,
    isUserLoading: isLoading,
    userError: error,
    userRefetch: refetch,
  };
};
