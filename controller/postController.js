const postModel = require('../model/postModel');

exports.addPost = async function (req,res) {
  const createPost = new postModel(req.body);
  console.log(res.locals.id, ".......")
  createPost.userid = req.id;
  try {
    const ans = await createPost.save();
    res.send(ans);
  } catch (err) {
    res.status(500).end(err);
  }
}
