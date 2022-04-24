import { Container, Tabs, Tab } from "react-bootstrap";
import { useState } from "react";

import HomePage from "./HomePage";
import { DownloadMusic } from "../components/download/DownloadMusic";

export const DownloadPlaylistPage = () => {
  const [key, setKey] = useState();
  
  return(
    <Container>
      <HomePage />
      <Container>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mt-3 ps-2 rounded-top pt-1 bg-warning" >
          <Tab eventKey="music" title="Músicas"><DownloadMusic /></Tab>
          <Tab eventKey="comercial" title="Comercial"><DownloadMusic /></Tab>
          <Tab eventKey="vinhetas" title="Vinhetas"><DownloadMusic /></Tab>
        </Tabs>
      </Container>
      </Container>
    );
};
