import React from 'react';
import { Button, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';

const DashBoard = ({ onSignOut }) => {
  const { profile } = useProfile();

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>DashBoard</Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h3>Hey {profile.name}</h3>
        {/* <h4>{profile.email}</h4> */}
      </Drawer.Body>

      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          SignOut
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default DashBoard;
