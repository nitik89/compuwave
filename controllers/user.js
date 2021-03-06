const User = require("../models/userSchema");


exports.getUserById = (req, res, next, id) => {
    User.findById(id).populate("events").exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "No user was found in DB"
        });
      }
      req.profile = user;
      next();
    });
  };
  
  exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.json(req.profile);
  };