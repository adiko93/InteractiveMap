import { Alignment, Button, IconName, MenuItem } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ItemPredicate, Select } from "@blueprintjs/select";
import React, { useMemo } from "react";

interface IconPickerProps {
  selectedIcon: IconName | null;
  setSelectedIcon: React.Dispatch<React.SetStateAction<IconName | null>>;
}

const IconPicker: React.FC<IconPickerProps> = ({
  selectedIcon,
  setSelectedIcon,
}) => {
  const getIconNames: IconName[] = useMemo(() => {
    const iconNames = new Set<IconName>();
    for (const [, name] of Object.entries(IconNames)) {
      iconNames.add(name);
    }
    return Array.from(iconNames.values());
  }, [IconNames]);

  const filterIcons: ItemPredicate<IconName> = (query, icon) => {
    return icon.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  };

  return (
    <Select
      popoverProps={{
        minimal: true,
        popoverClassName: "markerEdit__icons__popover",
      }}
      itemPredicate={filterIcons}
      activeItem={selectedIcon}
      matchTargetWidth
      items={getIconNames}
      className="markerEdit__icons"
      itemRenderer={(item, itemProps) => {
        return (
          <MenuItem
            selected={itemProps.modifiers.active}
            icon={item}
            text={item}
            onClick={itemProps.handleClick}
          />
        );
      }}
      onItemSelect={(item) => {
        setSelectedIcon(item);
      }}
    >
      <Button
        text={selectedIcon || "Wybierz ikone"}
        style={{
          width: "250px",
        }}
        alignText={Alignment.LEFT}
        icon={selectedIcon}
        rightIcon={"double-caret-vertical"}
      />
    </Select>
  );
};

export default IconPicker;
