import React from 'react';
import {
  Container
} from 'shards-react';

const MasterLayout = ({ children }) => (
  <Container fluid>
    {children}
  </Container>
)

export default MasterLayout;
