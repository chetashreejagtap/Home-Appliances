// src/pages/Dashboard.js

import React from 'react';
import ApplianceControl from '../components/ApplianceControl';
import { FaFan, FaLightbulb, FaTv, FaThermometerHalf } from 'react-icons/fa';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <ApplianceControl appliance="Fan" Icon={FaFan} />
      <ApplianceControl appliance="Air Conditioner" Icon={FaThermometerHalf} />
      <ApplianceControl appliance="TV" Icon={FaTv} />
      <ApplianceControl appliance="Lights" Icon={FaLightbulb} />
      <ApplianceControl appliance="Lights with Brightness" Icon={FaLightbulb} />
    </DashboardWrapper>
  );
};

export default Dashboard;
