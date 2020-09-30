module.exports = (db) => {
  db.User.create({
    firstName: 'Adam',
    lastName: 'Gates',
    gender: 'Male',
    email: 'adam@gates.com',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true,
    avatar: 'empty'
  }).then(() => {
    db.User.create({
      firstName: 'Uma',
      lastName: 'Pearson',
      gender: 'Female',
      email: 'uma@pearson.com',
      password: process.env.USER_PWD,
      isAdmin: false,
      avatar: 'empty'
    }).then(() => {
      db.Example.create({
        text: 'Sample item',
        description: 'Adam can\'t see this',
        UserId: 2
      });
    });
  });
};
