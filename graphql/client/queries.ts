import { gql } from "@apollo/client";

export const QueryUserMapsGQL = gql`
  query Folders {
    me {
      mapsCreated {
        id
        name
        color
        icon
        rootFolder {
          id
        }
      }
    }
  }
`;

export const QueryFoldersGQL = gql`
  fragment EntitiesFields on Entity {
    id
    type
    name
    description
    image
    color
    icon
    position
    createdAt
    updatedAt
    createdBy {
      username
    }
    updatedBy {
      username
    }
  }
  fragment FoldersFields on Folder {
    id
    name
    description
    color
    icon
    parentId
    mapId
    entities {
      ...EntitiesFields
    }
  }

  query Folders($mapId: String!) {
    map(id: $mapId) {
      rootFolder {
        ...FoldersFields
        childs {
          ...FoldersFields
          childs {
            ...FoldersFields
            childs {
              ...FoldersFields
              entities {
                ...EntitiesFields
              }
            }
          }
        }
      }
    }
  }
`;
