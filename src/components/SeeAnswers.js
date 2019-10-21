import React from "react";

export default function SeeAnswers() {

    
  return      <div id="seeAnswers" style="display:none;" data-bind="visible: showAnswerSection">
  <h2 class="orange">Productivity and Efficiency Evaluation</h2>
  <a href="#" data-bind="click: enableResultSection">< Back to All Results</a>
  <table>
      <thead>
          <tr>
              <th colspan="2"><h3 class="orange">Results: <span data-bind="text: displaySelectedResultDate"></span></h3></th>
              <th><h4 class="orange">You answered</h4></th>
          </tr>
      </thead>
      <tbody data-bind="foreach: displayAnswerList">
          <tr>
              <td data-bind="text: QuestionId"></td>
              <td data-bind="text: QuestionName"></td>
              <td data-bind="text: AnswerName"></td>
          </tr>
      </tbody>
  </table>
</div>;
}
