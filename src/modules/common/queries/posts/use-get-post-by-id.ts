import { PostService } from '@/services/post-service/post-service';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

export const useGetPostById = (id: number) => {
  const { data, isLoading, error, refetch } = useQuery(['useGetPostById', id], () => PostService.getById(id), {
    enabled: false,
    onError: () => toast.error('Unable to get the post!'),
  });

  return {
    post: data,
    isPostLoading: isLoading,
    postError: error,
    postRefetch: refetch,
  };
};
