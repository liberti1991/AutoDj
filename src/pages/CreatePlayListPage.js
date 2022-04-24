import { React } from "react";
import { Container } from "react-bootstrap";

import { NewPlayList } from "../components/newPlayList/NewPlayList";
import HomePage from "./HomePage";

export const CreatePlayListPage = () => {
  return (
    <Container>
      <HomePage />
      <NewPlayList />
    </Container>
  );
};

