import { useMemo } from 'react';
import { LegendChipProps, Scheme } from '../../types';
import Legend from '../UI/Legend';
export const LegendsChip: React.FunctionComponent<LegendChipProps> = ({ scheme, title, nodes, relationships }) => {
  const nodeCount = useMemo(
    () => [...new Set(nodes?.filter((n) => n?.labels?.includes(title)).map((i) => i.id))].length,
    [nodes, title]
  );

  const relationshipCount = useMemo(
    () => [...new Set(relationships?.filter((r) => r?.type === title).map((i) => i.id))].length,
    [relationships, title]
  );
  const chunkCount = useMemo(() => {
    if (nodes && relationships) {
      return nodeCount && relationshipCount;
    } else if (nodes) {
      return nodeCount;
    } else if (relationships) {
      return relationshipCount;
    };
  }, [nodes, relationships, nodeCount, relationshipCount]);
  return <Legend title={title} chunkCount={chunkCount} bgColor={scheme[title]} />;
};