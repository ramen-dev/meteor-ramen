var loadJS = function() {
  var ramenJsUrl = 'https://cdn.ramen.is/assets/ramen.js';
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = ramenJsUrl;
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s,x);
};

//Meteor.subscribe('currentUserRamenHash');

var tracker_callback = function() {
  var user = Meteor.user();
  if (!user) {
    delete(window.ramenSettings);
    if (window.Ramen && window.Ramen.abort) {
      window.Ramen.abort.die();
    }

    return;
  }

  var name = user.name || user.emails[0].address;
  window.ramenSettings = {
    organization_id: Meteor.settings.public.ramen.organization_id,
    user: {
      id: user._id,
      email: user.emails[0].address,
      name: name
    }
  };

  if (window.Ramen && typeof window.Ramen.go === 'function') {
    window.Ramen.go();
  } else {
    loadJS();
  }
};

Meteor.startup(function() {
  Tracker.autorun(tracker_callback);
});
