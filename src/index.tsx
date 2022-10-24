import React, { ReactNode } from 'react';

import './global-styles.css';
import { createRoot } from 'react-dom/client';

const Container = ({
  textColor = 'green',
  children,
}: {
  textColor?: string;
  children?: ReactNode;
}) => {
  return <div css={{ color: textColor }}>mooo</div>;
};

const root = createRoot(document.getElementById('app'));
// root.render(<FlexLayout flexDirection="column">mooo</FlexLayout>);
root.render(<Container textColor="red">moooo cow</Container>);
