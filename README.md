# Meteor Ramen

A package to use [Ramen.is](http://ramen.is) easily with Meteor.

## Installation

Ramen can be installed with Meteor's package manager:

``` sh
$ meteor add ramen-dev:meteor-ramen
```

## API

Ensure you have `Meteor.settings.ramen.secret` and `Meteor.settings.public.ramen.organization_id` defined to the values provided to you by Ramen.

By default, the package will send up the user's id, creation date, and hash (if defined, see below). To send custom data, set:

```js
RamenSettings.userInfo = function(user, info) {
  // add properties to the info object, for instance:
  if (user.services.google) {
    info.email = user.services.google.email;
    info['Name'] = user.services.google.given_name + ' ' + user.services.google.family_name;
  }
}
```

If you need to wait on a user subscription for e.g. the hash to come down, you can return `false` in your `userInfo` function to tell the package to wait.

## Notes

This package will automatically subscribe the current user to the `currentUserRamenHash` publication which will add an `ramenHash`
and `ts` property to your user documents enabling the use of Ramen's secure mode. 

## License 

MIT. (c) Ramen, Inc., maintained by Ryan Angilly (@angilly)

Meteor Ramen was developed by [Ryan Angilly](http://twitter.com/angilly) from [Ramen](https://ramen.is)
and [Aiko]() from [MentorMatter](http://www.mentormatter.co)
