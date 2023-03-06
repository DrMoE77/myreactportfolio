import React, {Component} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { InlineWidget} from "react-calendly";
import { useRef, useState } from "react";
import { Button } from 'react-bootstrap';
function Bookings () {
    const [isDoneScheduling, setDoneScheduling] = useState(false);
  const [isTimeSelected, setTimeSelected] = useState(false);

  const prefill = {
    name: "Test Name",
    email: "Email@gmail.com"
  };

  const pageSettings = {
    primaryColor: "417658",
    textColor: "251e35",
    backgroundColor: "f7f5f4",
    hideLandingPageDetails: true,
    hideEventTypeDetails: true
  };


  function getCalendlyHeightToEnsureNoCrop() {
    if (!isTimeSelected) return { height: 600 };
    if (isDoneScheduling) return { height: 450 };
    return { height: 1060 };
  }

  function handleDateAndTimeSelected() {
    setTimeSelected(true);
  }

  function handleEventScheduled() {
    setDoneScheduling(true);
  }

  return (
   
      <InlineWidget
        url={"https://calendly.com/drmo-afifi/locum"}
        // pageSettings={pageSettings.current}
        // prefill={prefill.current}
        pageSettings={pageSettings}
        prefill={prefill}
        styles={getCalendlyHeightToEnsureNoCrop()}
      />

       );  
}

export default Bookings;
