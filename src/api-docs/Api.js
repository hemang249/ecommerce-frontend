import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import { API } from "../config";

export default function Api() {
  return <SwaggerUI url={`${API}/api-docs`} />;
}
