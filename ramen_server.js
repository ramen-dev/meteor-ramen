RamenMeteor = {};

var crypto = Npm.require('crypto');

// returns undefined if there is no secret
RamenMeteor.calcHash =  function(user, ts) {
  var secret = Meteor.settings && 
      Meteor.settings.ramen && Meteor.settings.ramen.secret;

  if (secret) {
    return crypto.createHmac('sha256', new Buffer(secret, 'utf8'))
      .update(user).digest('hex');
  }
}

Meteor.publish('currentUserRamenHash', function() {
  if (this.userId) {
    var ts = Math.round((new Date) / 1000);
    var ramenHash = RamenMeteor.calcHash(this.user(), ts);
  
    if (ramenHash)
      this.added("users", this.userId, {ts: ts, auth_hash: ramenHash});
  }

  this.ready();
});
