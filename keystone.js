var keystone = require('keystone');

keystone.init({
  'cookie secret': 'keyboard cat',
  'name': 'keystone-template',
  'user model': 'User',
  'auto update': true,
  'auth': true,
});

keystone.import('models');

keystone.start();