const models = require('./models.js');

// TODO: remove the sample data

// force: true will drop the table if it already exists
models.User.sync({force: true}).then(() => {
  // Table created
  return models.User.create({
    name: 'John Hancock',
    email: 'fake@fake.com',
    img_url: 'fake img',
    goog_id: 'fake id'
  });
});

// force: true will drop the table if it already exists
models.Movie.sync({force: true}).then(() => {
  // Table created
  return models.Movie.create({
    title: 'Fake Movie',
    year: '2017'
  });
});
