// Get references to page elements
const $jabberDescription = $('#description');
const $place = $('#place');
const $state = $('#state');
const $submitBtn = $('#submit');
const $editJabber = $('.edit-jabber');
const $deleteJabber = $('.delete-jabber');
const $updateJabber = $('#update-jabber');

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
  updateJabber: function (jabberData) {
    return $.ajax({
      url: 'api/jabbers/' + jabberData.id,
      type: 'PUT',
      data: jabberData
    });
  },
  getJabber: function (id) {
    return $.ajax({
      url: 'api/jabbers/' + id,
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

const handleJabberEdit = function (event) {
  event.preventDefault();
  const jabberId = $(event.currentTarget.parentElement.parentElement).attr('id');
  window.location.href = '/jabber/' + jabberId;
  API.getJabber(jabberId).then((result) => {
    console.log('0000000000000000');
    console.log(result.description);
    console.log(result);
    console.log('0000000000000000');
    API.updateJabber(result).then(function () {
      window.location.href = '/dashboard';
    });
  });
};

const handlejabberUpdate = function (event) {
  event.preventDefault();
  console.log('#################');
  console.log(event.currentTarget.parentElement.parentElement);
  // const newData = {
  //   id: 1
  // };
  // API.updateJabber(newData).then(function () {
  //   window.location.href = '/dashboard';
  // });
};

const handleJabberDelete = function (event) {
  const jabberId = $(event.currentTarget.parentElement.parentElement).attr('id');
  // console.log('deleeeeeeete');
  // console.log(jabberId);
  API.deleteJabber(jabberId);
  window.location.href = '/dashboard';
};

// Add event listeners to the submit and delete buttons
$submitBtn.on('click', handleFormSubmit);

// Add event listeners to the edit icon
$editJabber.on('click', handleJabberEdit);

// Add event listener to delete the jabber
$deleteJabber.on('click', handleJabberDelete);

// Add event listener to update the jabber
$updateJabber.on('click', handlejabberUpdate);
