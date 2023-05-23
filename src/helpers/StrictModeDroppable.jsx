// Original post: https://github.com/atlassian/react-beautiful-dnd/issues/2399#issuecomment-1175638194
import React, { useEffect, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

export function StrictModeDroppable(droppableProps) {
  const { children, ...props } = droppableProps;
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Droppable {...props}>{children}</Droppable>;
}
