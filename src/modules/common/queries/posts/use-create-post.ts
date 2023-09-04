import { PostService } from '@/services/post-service/post-service';
import { Post } from '@modules/common/interface/post';
import { useMutation } from 'react-query';

export const useCreatePost = () => {
  const { mutate, isLoading, error } = useMutation('createPost', ({ userId, post }: { userId: number; post: Post }) =>
    PostService.createPost({ userId, post }),
  );

  return {
    createPost: ({ userId, post }: { userId: number; post: Post }) => mutate({ userId, post }),
    createPostLoading: isLoading,
    createPostError: error,
  };
};
