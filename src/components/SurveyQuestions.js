import React from "react";
import { useStateValue } from "../GlobalState/globalState";

export default function SurveyQuestions() {
  const [{ surveyQuestions }, dispatch] = useStateValue();
  const surveyAnswers = [null, null];

  function getData() {
    fetch(
      "https://dev.commonwealth.com/Applications/PracticeManagementSurvey/Home/Getquestionlist"
    )
      .then(response => response.json())
      .then(json => console.log(json));
  }

  getData();

  const surveyRows = surveyQuestions.map((item, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>{item}</td>
      <td>
        <input type="radio" value="1" />
      </td>
      <td>
        <input type="radio" value="2" />
      </td>
      <td>
        <input type="radio" value="3" />
      </td>
      <td>
        <input type="radio" value="4" />
      </td>
      <td>
        <input type="radio" value="5" />
      </td>
    </tr>
  ));
  return (
    <div id="surveyQuestions">
      <h2 class="orange">Productivity and Efficiency Evaluation</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Strongly Disagree</th>
            <th>Slightly Disagree</th>
            <th>Neither Agree Or Disagree</th>
            <th>Slightly Agree</th>
            <th>Strongly Agree</th>
          </tr>
        </thead>
        <tbody>{surveyRows}</tbody>
      </table>
      <button id="btnSubmit" disabled class="inactive">
        Submit
      </button>
      <a href="#">Cancel</a>
    </div>
  );
}
