import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useAddSequence() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, sequence }: { id: string; sequence: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addSequence(id, sequence);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sequences'] });
    }
  });
}

export function useGetSequence(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<string | null>({
    queryKey: ['sequence', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getSequence(id);
    },
    enabled: !!actor && !isFetching && !!id
  });
}

export function useGetAllSequences() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, string]>>({
    queryKey: ['sequences'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSequences();
    },
    enabled: !!actor && !isFetching
  });
}
