import React from "react";
import Prof_1 from "../faculties/Prof_1";
import Prof_2 from "../faculties/Prof_2";
import Prof_3 from "../faculties/Prof_3";
import Prof_4 from "../faculties/Prof_4";
import Prof_5 from "../faculties/Prof_5";
import Prof_6 from "../faculties/Prof_6";
import Prof_7 from "../faculties/Prof_7";
import Prof_8 from "../faculties/Prof_8";
import Prof_9 from "../faculties/Prof_9";

function Faculties() {
  return (
    <div className="content">
      <div className="row-1">
        <div className="card-1">
          <Prof_1 />
        </div>
        <div className="card-2">
          <Prof_2 />
        </div>
        <div className="card-3">
          <Prof_3 />
        </div>
      </div>

      <div className="card-1 row-2">
        <Prof_4 />
      </div>
      <div className="card-2 row-2">
        <Prof_5 />
      </div>
      <div className="card-3 row-2">
        <Prof_6 />
      </div>

      <div className="card-1 row-3">
        <Prof_7 />
      </div>
      <div className="card-2 row-3">
        <Prof_8 />
      </div>
      <div className="card-3 row-3">
        <Prof_9 />
      </div>
    </div>
  );
}

export default Faculties;
