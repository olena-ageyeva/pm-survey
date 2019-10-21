import React from "react";
import "./App.css";
import NotTaken from "./components/NotTaken";
import SurveyQuestions from "./components/SurveyQuestions";
import { GlobalState } from "./GlobalState/globalState";

function App() {
  const initialState = {
    user: {},
    surveyQuestions: [
      "Our firm (advisors & staff) effectively use CRM workflows and checklists to assign tasks and reduce processing time.",
      "Our firm's client base is segmented into specific categories.",
      "We consistently measure the profitability of each client segment and address any client that is not profitable.",
      "Our client segments are directly aligned with our firm's written service models.",
      "We have defined asset or fee minimum and consistently apply that minimum to accept all new clients.",
      "We charge fees for special projects that fall outside of our documented client service process.",
      "All of our firm's core business and client service processes are documented within our office.",
      "Our firm uses fewer than 10 model portfolios for all clients.",
      "We outsource our investment management (ie. PPS Select, TAMPs, etc.) or have dedicated internal personnel.",
      "We have fully implemented a paperless business processing system in our firm.",
      "Our firm employs a technology platform that sends out emails and/or social media updates to consistently and easily communicate with clients and prospects.",
      "The technology systems in our firm are integrated and share information seamlessly.",
      "I understand my hourly value and focus my time on activities commensurate with that value.",
      "We employ an outside 'bookkeeper' or have dedicated internal personnel.",
      "I manage my time well and use disciplined time management techniques.",
      "All our employees are responsible for specific tasks in their roles with our firm.",
      "Our firm has a well-defined, written strategic vision that is applied across the firm.",
      "We a specific tiered service model that is consistently applied to all clients of the firm.",
      "All members of the firm assist in delivering a consistent and uniform client experience.",
      "Brand question or market or niche or something like that  -- throughout the year our firm stays focused on our most critical goals."
    ],
    surveyAnswers: [],
    surveyResults: [],
    categoryTips: {
      focus: [
        "Articulate a clear business vision so that your firm is focused on the activities most fruitful for you.",
        "Creating scale in your firm begins with having a clear strategic focus that is aligned across all members of the organization.",
        "Companies that have more closely aligned goals across their organization enjoy much higher levels of financial success. ",
        "Clearly defined goals that are shared with the company can allow individual employees to align their efforts with the overall goals of the firm."
      ],
      organize: [
        "Not only can segmentation benefit your business, but more importantly, it can deliver an exceptional and differentiated client experience",
        "You have roughly 2,000 working hours at your disposal each year. That’s it! One of the best ways to spend that time is by delivering advice to your current clients, as well as developing new client relationships.",
        "Segment your clients and implement a tiered service model that is profitable.",
        "Create and document operational processes to systematize your firm's core activities."
      ],
      automate: [
        "The right automation solutions will reduce the amount of labor time used to achieve a specific goal or task.",
        "Automated processes also provide a level of stability in how your business operates on a day to day basis, significantly decreasing the risk of steps being missed or tasks being dropped. ",
        ".  In addition, automating tasks can significantly improve employee efficiency and provide cost savings for the business."
      ],
      delegate: [
        "Advisors who outsourced 20% to 49% of assets reported that doing saved an average of 5.8 hours per week.  (according to assetmark study)",
        "You must understand that there are very few things in your business that it makes sense for you actually to do",
        "The first thing you must do is take a look at all of the tasks you currently do in your business. ",
        "Define a staffing model that allows you to fulfill the vision you have for your firm."
      ]
    },
    resultAnalysis: {
      focus: {
        20: "Now is the time to concentrate on higher-level efficiency initiatives, including a review of your pricing model and fee structure.  Top performing firms tend to generate at least 75% of revenue from fees (advisory & planning), and set higher client minimums. In addition, they have more advisors relative to support staff and spend more on systems than hardware.  Start with a clearly articulated vision statement and build a defined service model from there.",
        40: "Now is the time to concentrate on higher-level efficiency initiatives, including a review of your pricing model and fee structure.  Top performing firms tend to generate at least 75% of revenue from fees (advisory & planning), and set higher client minimums. In addition, they have more advisors relative to support staff and spend more on systems than hardware.  Start with a clearly articulated vision statement and build a defined service model from there.",
        60: "Almost there!  Look closer and see where you can reduce some friction.  Consistency among your people, clients and deliverables can open the business up for more scale and capacity.  Watch out for exceptions in your system and strive for uniformity.  Like a telescope, if focus and alignment are carefully dialed in, you will be able to see ahead for miles.",
        80: "Almost there!  Look closer and see where you can reduce some friction.  Consistency among your people, clients and deliverables can open the business up for more scale and capacity.  Watch out for exceptions in your system and strive for uniformity.  Like a telescope, if focus and alignment are carefully dialed in, you will be able to see ahead for miles.",
        100: "Almost there!  Look closer and see where you can reduce some friction.  Consistency among your people, clients and deliverables can open the business up for more scale and capacity.  Watch out for exceptions in your system and strive for uniformity.  Like a telescope, if focus and alignment are carefully dialed in, you will be able to see ahead for miles."
      },
      organize: {
        20: "More focus needs to be placed on the operations of your firm.  You can start the process to improve operational efficiency by documenting all core office processes into a procedure manual.  Further working operational routines into workflows and checklists, or process maps, will help ensure the right people are doing the right things at the right times.  Clients should be segmented and organized into a standardized service model so that resources are being allocated appropriately.",
        40: "More focus needs to be placed on the operations of your firm.  You can start the process to improve operational efficiency by documenting all core office processes into a procedure manual.  Further working operational routines into workflows and checklists, or process maps, will help ensure the right people are doing the right things at the right times.  Clients should be segmented and organized into a standardized service model so that resources are being allocated appropriately.",
        60: "Look closely at how you answered these questions.  Where are there opportunities to get more organized?  What makes sense to work on first?  Compensation is the largest expense of a financial advisory practice, so make sure people can easily learn each step in the operational process.",
        80: "You are a maven of organization!  But, make sure not to rest on your laurels.  Over time, things change, and processes will need to be updated.  As your company grows, positions tend to become more specialized.  When that happens, those workflows and checklists may need to be altered.  Likewise, be sure to update your client segments and service deliverables every year or two.",
        100: "You are a maven of organization!  But, make sure not to rest on your laurels.  Over time, things change, and processes will need to be updated.  As your company grows, positions tend to become more specialized.  When that happens, those workflows and checklists may need to be altered.  Likewise, be sure to update your client segments and service deliverables every year or two."
      },
      automate: {
        20: "Efficiency can be measured in a number of ways - from accuracy when completing a task to responding to client needs in a timely manner. Your firm has an opportunity to assess your use of technology to find areas of significant improvement related to automation.  Reviewing areas such as CRM workflows and model management will give you a good idea of the types of goals you want to meet in your business process automation initiatives.",
        40: "Efficiency can be measured in a number of ways - from accuracy when completing a task to responding to client needs in a timely manner. Your firm has an opportunity to assess your use of technology to find areas of significant improvement related to automation.  Reviewing areas such as CRM workflows and model management will give you a good idea of the types of goals you want to meet in your business process automation initiatives.",
        60: "Your firm has done well finding areas of the business where automation is appropriate.  However, there is additional opportunity to continue to utilize the technology tools around you.  Integration is an iterative process and getting disparate systems to talk can significantly reduce the number of operations processes. Fully utilizing your technology can improve efficiency and provide additional cost savings for your firm – so take advantage of those lesser known features!",
        80: "Your office is an automated machine, capable of handling client needs in an efficient manner. Your ability to rein in overhead, dedicate capital more to systems than hardware, and create a limited number of model portfolios all leads to more time for revenue-generating activities.  Make sure everyone, including yourself, keeps using the tools to their fullest capabilities.  ",
        100: "Your office is an automated machine, capable of handling client needs in an efficient manner. Your ability to rein in overhead, dedicate capital more to systems than hardware, and create a limited number of model portfolios all leads to more time for revenue-generating activities.  Make sure everyone, including yourself, keeps using the tools to their fullest capabilities.  "
      },
      delegate: {
        20: "Figure out how much you make per hour when you are in front of clients and prospects.  The idea is to maximize your time in those situations and delegate other tasks in an economical way.  Don’t allow yourself to be bogged down by trying to do everything.  Build your team and get out of the way.  Do what you do best!",
        40: "Figure out how much you make per hour when you are in front of clients and prospects.  The idea is to maximize your time in those situations and delegate other tasks in an economical way.  Don’t allow yourself to be bogged down by trying to do everything.  Build your team and get out of the way.  Do what you do best!",
        60: "You have loosened your grip on the wheel, but you have an opportunity get even better.  The right people are probably on the bus, but make sure they are in the right seats.  You’re the driver so put them to work.  See where else you can delegate.  It will set you free.",
        80: "You are laser-focused on high payoff activities!  As organizations grow, roles become more specialized.  Be cognizant that some cross-training and variety can drive innovation and spur new ideas.  Keep delegating where you can but be on the lookout for connections and collaboration.  You never know where the next big thing will come from.",
        100: "You are laser-focused on high payoff activities!  As organizations grow, roles become more specialized.  Be cognizant that some cross-training and variety can drive innovation and spur new ideas.  Keep delegating where you can but be on the lookout for connections and collaboration.  You never know where the next big thing will come from."
      }
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "fetchData":
        return { ...state };
      default:
        return state;
    }
  };

  return (
    <GlobalState initialState={initialState} reducer={reducer}>
      <SurveyQuestions />
    </GlobalState>
  );
}

export default App;
