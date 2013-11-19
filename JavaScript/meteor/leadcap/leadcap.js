if (Meteor.isClient) {
  Template.main.showAdmin = function() {
    return Session.get("showAdmin");
  };
   Template.signup.events({
    'submit form' : function (evt, tmpl) {

      var email = tmpl.find('input').value
      , doc = {email: email, referrer: document.referrer, timestamp: new Date()}

      if (EMAIL_REGEX.test(email)){
        Session.set("showBadEmail", false);
        Emails.insert(doc);
        Session.set("emailSubmitted", true);
      } else {
        Session.set("showBadEmail", true);
      }
      return false;
    }
  });

   // Github account usernames of admin users
  var ADMIN_USERS = ['niallo', 'peterbraden'];
 
 
  // Is the current user an admin
  function isAdmin() {
    try {
      return ADMIN_USERS.indexOf(Meteor.user().services.github.username) !== -1
    } catch(e) {
      return false;
    }
  }

  Template.footer.events({
    // ...
 
    'click .admin' : function(evt, tmpl){
    Session.set("showAdmin", !Session.get("showAdmin"));
    }
  })
}

if (Meteor.isServer) {
  Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
      {fields: {'services.github.username': 1, 'username':1}});
  });
 
  Meteor.publish("emails", function() {
    if (isAdmin) {
      return Emails.find();
    }
  });
}