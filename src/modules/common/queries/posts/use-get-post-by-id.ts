import { PostService } from '@/services/post-service/post-service';
import { useQuery } from 'react-query';

export const useGetPostById = (id: number) => {
  const { data, isLoading, error, refetch } = useQuery(['useGetPostById', id], () => PostService.getById(id), {
    enabled: false,
  });

  return {
    post: data,
    isPostLoading: isLoading,
    postError: error,
    postRefetch: refetch,
  };
};
