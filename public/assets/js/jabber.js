// Get references to page elements
const $jabberDescription = $('#description');
const $place = $('#place');
const $state = $('#state');
const $submitBtn = $('#submit');

// The API object contains methods for each kind of request we'll make
const API = {
  saveJabber: function (jabber) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: 'api/jabbers',
      data: JSON.stringify(jabber)
    });
  },
  getJabbers: function () {
    return $.ajax({
      url: 'api/jabbers',
      type: 'GET'
    });
  },
  updateJabber: function(id) {
    return $.ajax({
      url: 'api/jabbers' + id,
      type: 'PUT'
    });
  },
  getJabber: function (id) {
    return $.ajax({
      url: 'api/jabber/' + id,
      type: 'GET'
    });
  },
  deleteJabber: function (id) {
    return $.ajax({
      url: 'api/jabbers/' + id,
      type: 'DELETE'
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
const handleFormSubmit = function (event) {
  console.log('In handleFormSubmit');
  event.preventDefault();

  const jabber = {
    description: $jabberDescription.val().trim(),
    place: $place.val().trim(),
    state: $state.val().trim(),
    UserId: window.userId
  };
  if (!(jabber.description)) {
    alert('You must enter description!');
    return;
  }

  API.saveJabber(jabber).then(function () {
    window.location.href = '/dashboard';
  });

  $place.val('');
  $state.val('');
  $jabberDescription.val('');
};

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);
