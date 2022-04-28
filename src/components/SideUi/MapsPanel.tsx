import {
  MaybeElement,
  PanelProps,
  Tree,
  TreeNodeInfo,
} from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { useMapContext } from "../../context/MapContext";
import FoldersPanel from "./FoldersPanel";

type NodePath = number[];

const MapsPanel = (props: PanelProps<object>) => {
  const { mapState, mapDispatch } = useMapContext();
  const [mapTree, setMapTree] = useState<TreeNodeInfo[]>([
    { id: "test", label: "test2", icon: "map" },
  ]);

  useEffect(() => {
    const tempMaps: TreeNodeInfo[] = mapState.maps?.map((map) => ({
      id: map.id!,
      label: map.name!,
      icon: map.icon as never as MaybeElement,
    }));
    setMapTree(tempMaps);
  }, [mapState.maps]);

  const handleNodeClick = (
    node: TreeNodeInfo,
    nodePath: NodePath,
    e: React.MouseEvent<HTMLElement>
  ) => {
    mapDispatch({
      type: "currentMap",
      payload: {
        data: node.id! as string,
      },
    });

    props.openPanel({
      props: {
        mapId: node.id! as string,
      },
      title: node.label,
      renderPanel: FoldersPanel,
    });
  };

  return (
    <div>
      <Tree contents={mapTree} onNodeClick={handleNodeClick} />
    </div>
  );
};

export default MapsPanel;
