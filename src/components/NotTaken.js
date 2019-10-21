import React from "react";

export default function NotTaken() {
  return (
    <div id="notTaken" class="message">
      <div class="orange">
        <p>
          It doesn't look like you have taken the efficiency evaluation yet.
        </p>
      </div>
      <p>Click Ok to access the survey.</p>
      <br />
      <br />
      <a href="#">Go back to COMMunity Link</a>
      <button>Ok</button>
    </div>
  );
}
