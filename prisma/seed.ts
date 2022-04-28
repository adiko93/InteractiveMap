// @ts-nocheck
import { PBKDF2 } from "crypto-js";
import { map } from "leaflet";
import prisma from "../lib/prisma";

async function main() {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];
  const icons = [
    "people",
    "map",
    "clean",
    "paperclip",
    "search",
    "small-cross",
    "small-tick",
    "database",
  ];
  function getRandomIntInclusive(max) {
    return Math.floor(Math.random() * max);
  }

  const getRandomPosition = () => {
    const xBounds = [1.3046875, 8.671875];
    const yBounds = [-12.84375, -0.9296875];
    const x = Math.random() * xBounds[1] - xBounds[0];
    const y = Math.random() * yBounds[0] - yBounds[1];
    return [y, x];
  };

  const getRandomColor = () => {
    return colors[getRandomIntInclusive(colors.length)];
  };
  const getRandomIcon = () => {
    return icons[getRandomIntInclusive(icons.length)];
  };

  const randomDefaultFields = () => ({
    name: `Random ${getRandomIntInclusive(100)}`,
    color: getRandomColor(),
    icon: getRandomIcon(),
  });

  const user = await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      username: "adiko93",
      password: PBKDF2("qweqwe11", process.env.NEXTAUTH_SECRET!, {
        keySize: 256 / 32,
      }).toString(),
      image: "/uploads/avatar.png",
    },
  });

  const getRandomMarkers = (number) => {
    const array = [];
    for (let i = 1; i <= number; i++) {
      array.push({
        ...randomDefaultFields(),
        type: "MARKER",
        position: getRandomPosition(),
        createdBy: { connect: { id: user.id } },
      });
    }
    return array;
  };

  const map1 = await prisma.map.create({
    data: {
      ...randomDefaultFields(),
      rootFolder: {
        create: {
          ...randomDefaultFields(),
          createdBy: {
            connect: { id: user.id },
          },
          entities: {
            create: getRandomMarkers(5),
          },
        },
      },
      createdBy: {
        connect: { id: user.id },
      },
    },
  });
  const map2 = await prisma.map.create({
    data: {
      ...randomDefaultFields(),
      rootFolder: {
        create: {
          ...randomDefaultFields(),
          createdBy: {
            connect: { id: user.id },
          },
          entities: {
            create: getRandomMarkers(5),
          },
        },
      },
      createdBy: {
        connect: { id: user.id },
      },
    },
  });

  await prisma.folder.create({
    data: {
      ...randomDefaultFields(),
      parent: { connect: { id: map1.rootFolderId } },
      map: {
        connect: {
          id: map1.id,
        },
      },
      entities: {
        create: getRandomMarkers(5),
      },
      createdBy: {
        connect: { id: user.id },
      },
      childs: {
        create: [
          {
            ...randomDefaultFields(),
            map: {
              connect: {
                id: map1.id,
              },
            },
            createdBy: {
              connect: { id: user.id },
            },
            entities: {
              create: getRandomMarkers(3),
            },
            childs: {
              create: [
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map1.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(3),
                  },
                },
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map1.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(5),
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.folder.create({
    data: {
      ...randomDefaultFields(),
      map: {
        connect: {
          id: map1.id,
        },
      },
      parent: { connect: { id: map1.rootFolderId } },
      createdBy: {
        connect: { id: user.id },
      },
      entities: {
        create: getRandomMarkers(5),
      },
      childs: {
        create: [
          {
            ...randomDefaultFields(),
            map: {
              connect: {
                id: map1.id,
              },
            },
            createdBy: {
              connect: { id: user.id },
            },
            entities: {
              create: getRandomMarkers(3),
            },
            childs: {
              create: [
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map1.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(3),
                  },
                },
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map1.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(5),
                  },
                },
              ],
            },
          },
          {
            ...randomDefaultFields(),
            map: {
              connect: {
                id: map1.id,
              },
            },
            createdBy: {
              connect: { id: user.id },
            },
            entities: {
              create: getRandomMarkers(3),
            },
            childs: {
              create: [
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map1.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(3),
                  },
                },
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map1.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(5),
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.folder.create({
    data: {
      ...randomDefaultFields(),
      parent: { connect: { id: map2.rootFolderId } },
      map: {
        connect: {
          id: map2.id,
        },
      },
      entities: {
        create: getRandomMarkers(5),
      },
      createdBy: {
        connect: { id: user.id },
      },
      childs: {
        create: [
          {
            ...randomDefaultFields(),
            map: {
              connect: {
                id: map2.id,
              },
            },
            createdBy: {
              connect: { id: user.id },
            },
            entities: {
              create: getRandomMarkers(3),
            },
            childs: {
              create: [
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map2.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(3),
                  },
                },
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map2.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(5),
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.folder.create({
    data: {
      ...randomDefaultFields(),
      map: {
        connect: {
          id: map2.id,
        },
      },
      parent: { connect: { id: map2.rootFolderId } },
      createdBy: {
        connect: { id: user.id },
      },
      entities: {
        create: getRandomMarkers(5),
      },
      childs: {
        create: [
          {
            ...randomDefaultFields(),
            map: {
              connect: {
                id: map2.id,
              },
            },
            createdBy: {
              connect: { id: user.id },
            },
            entities: {
              create: getRandomMarkers(3),
            },
            childs: {
              create: [
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map2.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(3),
                  },
                },
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map2.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(5),
                  },
                },
              ],
            },
          },
          {
            ...randomDefaultFields(),
            map: {
              connect: {
                id: map2.id,
              },
            },
            createdBy: {
              connect: { id: user.id },
            },
            entities: {
              create: getRandomMarkers(3),
            },
            childs: {
              create: [
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map2.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(3),
                  },
                },
                {
                  ...randomDefaultFields(),
                  map: {
                    connect: {
                      id: map2.id,
                    },
                  },
                  createdBy: {
                    connect: { id: user.id },
                  },
                  entities: {
                    create: getRandomMarkers(5),
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
