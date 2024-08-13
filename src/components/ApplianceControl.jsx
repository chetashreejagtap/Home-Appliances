// src/components/ApplianceControl.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFan, FaLightbulb, FaTv, FaThermometerHalf } from 'react-icons/fa';
import { SketchPicker } from 'react-color';

const ApplianceControlWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  width: 200px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ApplianceIcon = styled.div`
  font-size: 50px;
  color: ${props => (props.on ? 'green' : 'black')};
`;

const ControlButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.on ? 'red' : 'green')};
  color: white;
  cursor: pointer;
`;

const Slider = styled.input`
  margin-top: 20px;
  width: 100%;
`;

const ApplianceControl = ({ appliance, Icon }) => {
  const [isOn, setIsOn] = useState(false);
  const [temperature, setTemperature] = useState(24); // Default temperature for AC
  const [speed, setSpeed] = useState(3); // Default speed for Fan
  const [brightness, setBrightness] = useState(50); // Default brightness
  const [color, setColor] = useState('#ffffff'); // Default color

  return (
    <ApplianceControlWrapper>
      <h3>{appliance}</h3>
      <ApplianceIcon on={isOn}>
        <Icon />
      </ApplianceIcon>
      <ControlButton on={isOn} onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </ControlButton>

      {appliance === 'Air Conditioner' && (
        <>
          <p>Temperature: {temperature}°C</p>
          <Slider
            type="range"
            min="16"
            max="30"
            value={temperature}
            onChange={e => setTemperature(e.target.value)}
          />
        </>
      )}

      {appliance === 'Fan' && (
        <>
          <p>Speed: {speed}</p>
          <Slider
            type="range"
            min="1"
            max="5"
            value={speed}
            onChange={e => setSpeed(e.target.value)}
          />
        </>
      )}

      {(appliance === 'Lights' || appliance === 'Lights with Brightness') && (
        <>
          <p>Brightness: {brightness}%</p>
          <Slider
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={e => setBrightness(e.target.value)}
          />
        </>
      )}

      {appliance === 'Lights with Brightness' && (
        <>
          <p>Color</p>
          <SketchPicker
            color={color}
            onChangeComplete={color => setColor(color.hex)}
          />
        </>
      )}
    </ApplianceControlWrapper>
  );
};

export default ApplianceControl;
