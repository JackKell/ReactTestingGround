import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <>
        <Typography variant="h1" component="h2">
          Hello
        </Typography>
        <Button variant="contained">this a material UI button</Button>
      </>
    );
  }
}

export default hot(App);
