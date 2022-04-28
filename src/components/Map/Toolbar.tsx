import { Icon, MaybeElement, Slider } from "@blueprintjs/core";
import { Tooltip2, Popover2InteractionKind } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash-es";
import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";

interface ToolbarProps {
  paintPolygon: MutableRefObject<any>;
  setToolMode: Dispatch<SetStateAction<boolean>>;
  paintPath: MutableRefObject<any>;
  map: MutableRefObject<L.Map | null>;
}

interface SubMenuItem {
  id: string;
  title: string;
  selected: boolean;
  tooltip?: {
    enabled?: boolean;
    content?: string;
    slider?: boolean;
  };
}

interface MenuItem {
  id: string;
  tooltip: string;
  icon: string;
  selected: boolean;
  submenu?: SubMenuItem[];
}

const Toolbar = ({
  paintPolygon,
  setToolMode,
  paintPath,
  map,
}: ToolbarProps) => {
  const [brushSize, setBrushSize] = useState(30);
  // const brushSize = useRef(30);
  const slider = () => (
    <Slider
      min={10}
      max={50}
      className="fix-slider-height"
      labelValues={[]}
      value={brushSize}
      onChange={(value) => {
        setBrushSize(value);
        console.log(this);
      }}
    />
  );

  const [menuProps, setMenuProps] = useState<MenuItem[]>([
    {
      id: "move",
      tooltip: "Tryb przesuwania",
      icon: "hand",
      selected: true,
    },
    {
      id: "paint",
      tooltip: "Tryb rysowania obszarów",
      icon: "full-circle",
      selected: false,
      submenu: [
        {
          id: "erase",
          title: "Gumka",
          selected: false,
        },
        {
          id: "size",
          title: "Rozmiar",
          selected: false,
          tooltip: {
            enabled: true,
            slider: true,
          },
        },
        {
          id: "clear",
          title: "Wyczyść",
          selected: false,
        },

        {
          id: "save",
          title: "Zapisz",
          selected: false,
        },
      ],
    },
    {
      id: "path",
      tooltip: "Tryb rysowania linii",
      icon: "one-to-one",
      selected: false,
      submenu: [
        {
          id: "move",
          title: "Przesuń",
          selected: false,
        },
        {
          id: "add",
          title: "Dodaj",
          selected: false,
          tooltip: {
            enabled: true,
            content: "Dodaj punkty na lini, klikająć w puste miejsce",
          },
        },
        {
          id: "delete",
          title: "Usuń",
          selected: false,
        },

        {
          id: "save",
          title: "Zapisz",
          selected: false,
        },
      ],
    },
    {
      id: "marker",
      tooltip: "Tryb dodawania znaczników",
      icon: "area-of-interest",
      selected: false,
    },
  ]);

  useEffect(() => {
    if (paintPolygon.current) paintPolygon.current.setRadius(brushSize);
  }, [brushSize]);

  const resetTools = () => {
    setToolMode(false);
    paintPolygon.current.stop();
  };

  const handleToolChange = (id: string, subId?: string) => {
    switch (id) {
      case "move":
        resetTools();
        break;
      case "paint":
        switch (subId) {
          case "erase":
            paintPolygon.current.startErase();
            break;
          case "clear":
            paintPolygon.current.eraseAll();
            break;
          case "size":
            break;
          case "save":
            console.log(paintPolygon.current.getLayer());
            break;
          default:
            paintPolygon.current.startDraw();
            break;
        }
        setToolMode(true);
        break;
      // case "path":
      //   switch (subId) {
      //     case "add":
      //       paintPath.current.setMode(L.Pather.MODE.APPEND);
      //       break;
      //     case "move":
      //       paintPath.current.setMode(L.Pather.MODE.EDIT);
      //       map.current.dragging.disable();
      //       break;
      //     case "delete":
      //       paintPath.current.setMode(L.Pather.MODE.DELETE);
      //       break;
      //     case "save":
      //       paintPath.current.setMode(L.Pather.MODE.CREATE);
      //       break;
      //     default:
      //       // paintPath.setOptions({
      //       //   mode: L.Pather.MODE.ALL,
      //       // });
      //       // console.log(paintPath);
      //       paintPath.current.setMode(L.Pather.MODE.CREATE);
      //   }
    }
  };

  const handleSelect = (index: number) => {
    const tempMenuProps = menuProps.map((menu, menuIndex) => {
      if (index === menuIndex) {
        menu.selected = true;
        return menu;
      }
      menu.selected = false;
      return menu;
    });
    setMenuProps(tempMenuProps);
  };

  return (
    <div className={`tools-navbar leaflet-control leaflet-bar`}>
      {menuProps.map((menu, index) => (
        <>
          <div
            className={
              menu.selected
                ? "tools-navbar__tool--selected"
                : "tools-navbar__tool"
            }
            key={index}
          >
            <Tooltip2
              content={menu.tooltip}
              placement="left"
              hoverOpenDelay={500}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(index);
                  handleToolChange(menu.id);
                }}
              >
                <Icon icon={menu.icon as never as MaybeElement} />
              </div>
            </Tooltip2>
            {menu?.submenu?.length! > 0 && menu.selected ? (
              <motion.div
                className="tools-navbar__tool__submenu"
                initial="hidden"
                animate="visible"
                transition={{
                  type: "tween",
                }}
                variants={{
                  hidden: { opacity: 0, width: 0 },
                  visible: {
                    opacity: 1,
                    width: "fit-content",
                  },
                }}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  style={{
                    width: "max-content",
                  }}
                  transition={{
                    type: "tween",
                    delay: 0.2,
                  }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                    },
                  }}
                >
                  {menu?.submenu?.map((submenu, index, array) => (
                    <>
                      <Tooltip2
                        key={index}
                        content={
                          submenu?.tooltip?.slider!
                            ? slider()
                            : submenu.tooltip?.content!
                        }
                        placement="top"
                        hoverOpenDelay={100}
                        disabled={submenu?.tooltip ? false : true}
                        hoverCloseDelay={300}
                        interactionKind={Popover2InteractionKind.HOVER}
                      >
                        <span
                          className="tools-navbar__tool__submenu__link"
                          onClick={() => handleToolChange(menu.id, submenu.id)}
                        >
                          {submenu.title}
                        </span>
                      </Tooltip2>
                      {array.length - 1 === index ? null : <> | </>}
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ) : null}
          </div>
        </>
      ))}
    </div>
  );
};

export default Toolbar;
