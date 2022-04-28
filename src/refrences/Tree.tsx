const INITIAL_STATE: TreeNodeInfo[] = [
  {
    id: 0,
    hasCaret: true,
    icon: (
      <Icon
        icon="path-search"
        intent={Intent.PRIMARY}
        className={Classes.TREE_NODE_ICON}
        color="red"
      />
    ),
    label: (
      <ContextMenu2 content={<div>Hello there!</div>}>
        Domyślne znaczniki
      </ContextMenu2>
    ),
    secondaryLabel: (
      <Checkbox
        style={{
          marginBottom: "0",
        }}
      />
    ),
  },
  {
    id: 1,
    icon: "folder-close",
    isExpanded: true,
    label: (
      <ContextMenu2 content={<div>Hello there!</div>}>
        <Tooltip2 content="I'm a folder <3" placement="left" usePortal>
          Pacific
        </Tooltip2>
      </ContextMenu2>
    ),
    childNodes: [
      {
        id: 2,
        icon: (
          <Icon className={Classes.TREE_NODE_ICON} icon="person" color="red" />
        ),
        label: (
          <ContextMenu2
            content={
              <Menu>
                <MenuItem icon="trash" text="Usuń marker" />
              </Menu>
            }
          >
            Item 0
          </ContextMenu2>
        ),
        secondaryLabel: (
          <Checkbox
            style={{
              marginBottom: "0",
            }}
          />
        ),
      },
      {
        id: 3,
        icon: (
          <Icon
            icon="tag"
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
          />
        ),
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
      {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: (
          <ContextMenu2 content={<div>Hello there!</div>}>
            <Tooltip2 content="foo" placement="right">
              Folder 2
            </Tooltip2>
          </ContextMenu2>
        ),
      },
      {
        id: -1,
        hasCaret: false,
        icon: "plus",
        label: "Dodaj nowy folder",
      },
    ],
  },
  {
    id: -1,
    hasCaret: false,
    icon: "plus",
    label: "Dodaj nową mape",
  },
];
