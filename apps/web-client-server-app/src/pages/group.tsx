import { Friends, Map } from '@festibuddy/uikit-lib';
import React from 'react';
import { useBattery, useGeolocation } from 'react-use';
import { BatteryState } from 'react-use/lib/useBattery';
import styled from 'styled-components';

import { PageLayout } from '../components/PageLayout';

const Group = () => {
  const geo = useGeolocation();
  const batt = useBattery();
  console.log('geo', geo);
  console.log('batt', batt);

  const friends = [
    {
      id: '123',
      name: 'You',
      avatar: '🐙',
      battStatus: batt as BatteryState,
    },
  ];

  return (
    <PageLayout>
      <MapContainer>
        <Map lat={51.05} long={-0.09} />
      </MapContainer>
      <Friends friends={friends} />
    </PageLayout>
  );
};

export default Group;

const MapContainer = styled.div`
  display: flex;

  > .leaflet-container {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;
