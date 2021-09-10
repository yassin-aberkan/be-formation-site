import React from "react";

function GoogleMaps() {
  return (
    <div>
      <iframe
        className="display"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/search?q=Rue+Josaphat+99,+1030+Schaerbeek,+Belgique&key=AIzaSyB01u6Zgb0r_X647UpE4P2W0yAjQeQO_Xo"
      ></iframe>
      <style jsx>{`
        .display {
          width: 100%;
          height: 450px;
        }
      `}</style>
    </div>
  );
}

export default GoogleMaps;
