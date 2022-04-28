import { Alignment, Button, IconName, MenuItem } from "@blueprintjs/core";
import { ItemRenderer, Select } from "@blueprintjs/select";
import React, { useMemo } from "react";
import {
  EntitiesState,
  useEntitiesContext,
} from "../../context/EntitiesContext";
import { useMapContext } from "../../context/MapContext";
import { Folder } from "../../types";

export interface FolderListItem {
  path: string | null;
  name: string;
  id: string;
  icon: IconName;
}

interface FolderSelectProps {
  selectedFolder: FolderListItem | null;
  setSelectedFolder: React.Dispatch<
    React.SetStateAction<FolderListItem | null>
  >;
}

const FolderSelect: React.FC<FolderSelectProps> = ({
  selectedFolder,
  setSelectedFolder,
}) => {
  const { entitiesState } = useEntitiesContext();
  const { mapState } = useMapContext();

  const getFolderList: FolderListItem[] = useMemo(() => {
    const tempFolders: FolderListItem[] = [];
    if (mapState.currentMap)
      mapState.maps.forEach((map) => {
        if (map.id === mapState.currentMap) {
          tempFolders.push({
            id: map.rootFolder?.id! as string,
            name: "Root",
            icon: map.icon as IconName,
            path: null,
          });
        }
      });

    const recursivePush = (folders: EntitiesState[], path?: string) => {
      folders.forEach((folder) => {
        if (folder.nodeData.type === "FOLDER") {
          tempFolders.push({
            id: folder.id! as string,
            name: folder.label! as string,
            icon: folder.icon! as IconName,
            path: path || null,
          });
        }
        if (folder.childNodes)
          recursivePush(
            folder.childNodes,
            `${path ? path : ""}${folder.label} / `
          );
      });
    };

    recursivePush(entitiesState);
    return tempFolders;
  }, [entitiesState]);

  const folderItemRenderer: ItemRenderer<FolderListItem> = (
    item,
    itemProps
  ) => {
    return (
      <MenuItem
        selected={itemProps.modifiers.active}
        icon={item.icon}
        text={
          item.path ? (
            <>
              <span
                style={{
                  color: "GrayText",
                }}
              >
                {" "}
                {item.path}
              </span>
              {item.name}
            </>
          ) : (
            item.name
          )
        }
        onClick={itemProps.handleClick}
      />
    );
  };
  return (
    <Select
      popoverProps={{
        minimal: true,
        popoverClassName: "markerEdit__icons__popover",
      }}
      activeItem={selectedFolder}
      matchTargetWidth
      items={entitiesState ? getFolderList : []}
      className="markerEdit__icons"
      itemRenderer={folderItemRenderer}
      onItemSelect={(item, event) => {
        setSelectedFolder(item);
      }}
      filterable={false}
    >
      <Button
        text={
          selectedFolder ? (
            selectedFolder.path ? (
              <>
                <span
                  style={{
                    color: "GrayText",
                  }}
                >
                  {" "}
                  {selectedFolder.path}
                </span>
                {selectedFolder.name}
              </>
            ) : (
              selectedFolder.name
            )
          ) : (
            "Wybierz folder"
          )
        }
        style={{
          width: "316px",
        }}
        alignText={Alignment.LEFT}
        icon={selectedFolder?.icon || "folder-open"}
        rightIcon={"double-caret-vertical"}
      />
    </Select>
  );
};

export default FolderSelect;
