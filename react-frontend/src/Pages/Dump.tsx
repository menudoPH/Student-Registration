import React, { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";

const Dump = () => {
  const [alertDetector, setAlertDetector] = useState(false);
  return (
    <>
      <div>Dump</div>
      {alertDetector && (
        <Alert
          header="info"
          infoHeader="Info!"
          closeAlert={() => {
            setAlertDetector(false);
          }}
        >
          We re now open
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertDetector(true);
        }}
        color="blue"
      >
        Show Alert
      </Button>
    </>
  );
};

export default Dump;
