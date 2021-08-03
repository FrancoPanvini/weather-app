import React from "react";
import { connect } from "react-redux";

import { cityRemove, citiesOrder } from "../store/actionsGenerators";
import { Button } from "./styles/CloseButton.SC";

function handleAction(type, id, cityRemove, citiesOrder) {
  switch (type) {
    case "close": {
      cityRemove(id);
      break;
    }
    case "main": {
      citiesOrder(id);
      break;
    }
    default:
      return;
  }
}

function CardButton(props) {
  return (
    <Button
      onClick={() => handleAction(props.type, props.id, props.cityRemove, props.citiesOrder)}
    >
      {props.children}
    </Button>
  );
}

export default connect(null, { cityRemove, citiesOrder })(CardButton);
