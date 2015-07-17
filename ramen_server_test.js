Tinytest.add("test hash", function() {
  var ts = 1234567890;
  var user = {
    email: 'ryan@ramen.is',
    name: 'Ryan Angilly',
    id: 'cookies'
  };

  var result = RamenMeteor.calcHash(user, ts);
  var expected = "3r34";
  test.equal(result, expected, "Hash did not match");
});
