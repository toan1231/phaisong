$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/hrmOrangePositive.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login with correct Credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "HrmOrangeStepNegative.i_login_with_correct_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@minh"
    }
  ]
});
formatter.step({
  "name": "I click on leave and my leave",
  "keyword": "Then "
});
formatter.match({
  "location": "hrmOrangeStepPositive.iClickOnLeaveAndMyLeave()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see leave table record",
  "keyword": "Then "
});
formatter.match({
  "location": "hrmOrangeStepPositive.iAmAbleToSeeLeaveTableRecord()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});