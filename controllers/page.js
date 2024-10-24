exports.getHomePage = async (req, res) => {
  return res.render("home", {
    isAuthenticated: req.oidc.isAuthenticated(),
  });
};

exports.getProfile = async (req, res, next) => {
  console.log(req.oidc.user);

  return res.render("profile", {
    user: req.oidc.user,
  });
};
