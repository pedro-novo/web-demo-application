import { PostService } from '@/services/post-service/post-service';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

export const useGetPosts = () => {
  const { data, isLoading, error } = useQuery(['useGetPosts'], () => PostService.getAll(), {
    onError: () => toast.error('Unable to get the posts!'),
  });

  return {
    posts: data,
    isPostsLoading: isLoading,
    postsError: error,
  };
};
