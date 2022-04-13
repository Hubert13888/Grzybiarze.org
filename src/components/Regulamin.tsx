import React from "react";

import "/style/Regulamin.scss";

const Regulamin = (props: any) => {
  return (
    <>
      <div className="ceiling"></div>
      <div id="regulaminBlock">
        <h1>Regulamin</h1>
        <p>1. Nie będziesz miał bogów cudzych przede mną.</p>
        <p>2. Nie będziesz wzywał imienia Boga twego nadaremno.</p>
        <p>3. Pamiętaj, abyś dzień święty święcił.</p>
        <p>4. Czcij ojca swego i matkę swoją.</p>
        <p>5. Nie zabijaj.</p>
        <p>6. Nie cudzołóż.</p>
        <p>7. Nie kradnij.</p>
        <p>8. Nie mów fałszywego świadectwa przeciw bliźniemu swemu.</p>
        <p>9. Nie pożądaj żony bliźniego swego.</p>
        <p>10. Ani żadnej rzeczy, która jego jest.</p>
      </div>
    </>
  );
};

export default Regulamin;
