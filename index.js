// Your code here
function createEmployeeRecord(info) {
  return {
    firstName: info[0],
    familyName: info[1],
    title: info[2],
    payPerHour: info[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(records) {
  return records.map(
    function(object) {
      return createEmployeeRecord(object);
    }
  );
}

function createTimeInEvent(employeeRecord, dateStamp) {
  let dateObject = new Date(dateStamp);
    return Object.assign(
      {}, employeeRecord, {
        timeInEvents: [
          {
            type: 'TimeIn',
            hour:, dateObject.getHour();
            date: dateObject.getDate();
          }
        ]
      }
    );
}


function createTimeOutEvent(employeeRecord, dateStamp) {
  let dateObject = new Date(dateStamp);
    return Object.assign(
      {}, employeeRecord, {
        timeOutEvents: [
          {
            type: 'TimeOut',
            hour: dateObject.getHour(),
            date: dateObject.getDate()
          }
        ]
      }
    );
}


function hoursWorkedOnDate(employeeRecord, dateStamp) {
    let timeIn = employeeRecord.timeInEvents[0][hour];
    let timeOut = employeeRecord.timeOutEvents[0][hour];
    return timeOut - timeIn;
}

function wagesEarnedOnDate(employeeRecord, dateStamp) {
    return employeeRecord.payPerHour * hoursWorkedOnDate(employeeRecord, dateStamp);
}

function allWagesFor(employeeRecord) {

}

function findEmployeeByFirstName(records, firstName) {
  return records.find(
    function(reocrd) {
      return record['firstName'] === firstName;
    }
  );
}

function calculatePayroll(records) {
  return records.reduce(
    function(sum , record) {
      return sum + wagesEarnedOnDate(record, dateStamp);
    }, 0
  );
}
