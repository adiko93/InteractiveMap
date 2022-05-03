import { gql } from "@apollo/client";

export const creteAccountGQL = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
    }
  }
`;

export const createEntityGQL = gql`
  mutation CreateEntity(
    $folder: ID!
    $type: EntityType!
    $name: String!
    $color: String!
    $icon: String!
    $position: Json!
    $description: String
    $image: String
  ) {
    createEntity(
      folder: $folder
      type: $type
      name: $name
      color: $color
      icon: $icon
      position: $position
      description: $description
      image: $image
    ) {
      id
    }
  }
`;

export const createFolderGQL = gql`
  mutation CreateFolder(
    $parentFolder: ID!
    $color: String!
    $icon: String!
    $name: String!
  ) {
    createFolder(
      parentFolder: $parentFolder
      color: $color
      icon: $icon
      name: $name
    ) {
      id
    }
  }
`;

export const deleteFolderGQL = gql`
  mutation DeleteFolder($folderId: ID!) {
    deleteFolder(folderId: $folderId) {
      id
    }
  }
`;

export const deleteEnitityGQL = gql`
  mutation DeleteEntity($deleteEntityId: ID!) {
    deleteEntity(id: $deleteEntityId) {
      id
    }
  }
`;
