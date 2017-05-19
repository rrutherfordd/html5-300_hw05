/*global $*/

$(document).ready(function () {
  //jQuery loaded?
  'use strict';
  //alert("Assignment 5");
});

/* Helper functions */

/* http://stackoverflow.com/questions/4813219/testing-if-a-checkbox-is-checked-with-jquery */
$.fn.realVal = function () {
  'use strict';
  var $obj = $(this), val = $obj.val(), type = $obj.attr('type'), un_val = $obj.attr('data-unchecked');
  if (type && type === 'checkbox') {
    if (typeof un_val === 'undefined') {
      un_val = '';
      return $obj.prop('checked') ? val : un_val;
    }
  } else {
    return val;
  }
};
/* http://stackoverflow.com/questions/4813219/testing-if-a-checkbox-is-checked-with-jquery */

/* Variables */

var i, n, trow, tbodyElement, objectList = [
  ['Able',   1],
  ['Brian',  2],
  ['Calvin', 3],
  ['Dan',    4]
];
window.console.log(objectList);


/* Main functions */

function createTableRowForObjects(arrayIndex) {
  'use strict';
  var tr = $('<tr>'), td = $('<td>').text(objectList[arrayIndex][0]);
  tr.append(td);
  td = $('<td>').text(objectList[arrayIndex][1]);
  tr.append(td);
  td = "<td> <input type='button' value='Edit'> <input type='button' value='Delete'> </td>";
  tr.append(td);
  return tr;
}

tbodyElement  = $('#tbodyStart');
for (i = 0; i < objectList.length; i = i + 1) {
  trow = createTableRowForObjects(i);
  tbodyElement.append(trow);
}


function addNewItemClicked() {
  'use strict';
  //window.alert("add new Item?");
  $('#listSection').hide();
  $('#inputSection').show();
}

function submitClicked() {
  'use strict';
  var name, range, newRow;
  name = $('#nameInput').val();
  range = parseInt($('#rangeInput').val(), 0);
  if ((name.length > 0 && typeof name === 'string') && (!isNaN(range) && typeof range === 'number')) {
    newRow = [name, range, ''];
    //window.alert("submit?");
    objectList.push(newRow);
  } else {
    window.alert("Input has to be a non-empty string and a number");
  }

  
  $('#tbodyStart tr').remove();
  tbodyElement  = $('#tbodyStart');
  for (i = 0; i < objectList.length; i = i + 1) {
    trow = createTableRowForObjects(i);
    tbodyElement.append(trow);
  }
  $('#listSection').show();
  $('#inputSection').hide();
  event.preventDefault();
}

function cancelClicked() {
  'use strict';
  //window.alert("cancel?");
}

/* Event listeners */
$('#addNewItemButton').on('click', addNewItemClicked);

$('#submitButton').on('click', submitClicked);

$('#cancelButton').on('click', cancelClicked);

/* Actions */
