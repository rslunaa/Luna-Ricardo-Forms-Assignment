exports.form_post = function(req, res) {
  let birds = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status,
  };

  // Add your code to save the bird data to the database or perform other operations
  // ...

  console.log(birds); // log the form data

  res.render('confirmation', birds); 
}
