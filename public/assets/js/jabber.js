// Get references to page elements
const $jabberDescription = $('#description');
const $place = $('#place');
const $state = $('#state');
const $submitBtn = $('#submit');
const $editJabber = $('.edit-jabber');
const $deleteJabber = $('.delete-jabber');
const $updateJabber = $('#update-jabber');
const $cancelUpdate = $('#cancel-update');

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
  getJabber: function (id) {
    return $.ajax({
      url: 'api/jabbers/' + id,
      type: 'GET'
    });
  },
  updateJabber: function (jabberData) {
    return $.ajax({
      url: '/api/jabbers/' + jabberData.id,
      type: 'PUT',
      data: jabberData
    });
  },
  deleteJabber: function (id) {
    return $.ajax({
      url: 'api/jabbers/' + id,
      type: 'DELETE'
    });
  }
};

// handleFormSubmit is called whenever we submit a new jabber
// Save the new jabber to the db and refresh the list
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

// Edit the jabber form with current info
const handleJabberEdit = function (event) {
  event.preventDefault();
  const jabberId = $(this).data('id');
  console.log(jabberId);
  window.location.href = '/jabber/' + jabberId;
};

// Update the jabber after user corrects the form
const handleJabberUpdate = function (event) {
  event.preventDefault();
  // console.log('#################');
  const jabberId = $(event.currentTarget).data('id');
  console.log(jabberId);
  // capture all changes
  const updatedJabber = {
    id: jabberId,
    description: $('#jabber-description').val().trim(),
    place: $('#jabber-place').val().trim(),
    state: $('#jabber-state').val().trim(),
    UserId: window.userId
  };

  API.updateJabber(updatedJabber).then(function () {
    window.location.href = '/dashboard';
  });
};

// Delete the jabber and refresh the screen
const handleJabberDelete = function (event) {
  const jabberId = $(this).data('id');
  API.deleteJabber(jabberId);
  // window.location.href = '/dashboard';
  location.reload();
};

const handleUpdateCancel = function (event) {
  event.preventDefault();
  window.location.href = '/dashboard';
};

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);

// Add event listeners to the edit icon
$editJabber.on('click', handleJabberEdit);

// Add event listener to delete the jabber
$deleteJabber.on('click', handleJabberDelete);

// Add event listener to update the jabber
$updateJabber.on('click', handleJabberUpdate);

// add event listener to cancel in jabber-form
$cancelUpdate.on('click', handleUpdateCancel);
