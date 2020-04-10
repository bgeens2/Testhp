import React from "react";
import "./styles.css";
import QRCode from "react-qr-code";

export default function App() {
  return (
    <div className="App">
      <h1>Hotspot app</h1>
      <h2>Visitors, scan the following qr code</h2>
      <QRCode value="as;dfj;adsf" size="250" />
    </div>
  );
}
