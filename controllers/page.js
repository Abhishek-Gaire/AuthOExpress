exports.getHomePage = async (req, res) => {
  const isAuthenticated = false;
  return res.render("home", {
    isAuthenticated,
  });
};

exports.getLoginPage = async (req, res, next) => {
  return res.render("login");
};

exports.getRegisterPage = async (req, res, next) => {
  return res.render("register");
};

exports.getProfile = async (req, res, next) => {
  return res.render("profile", {
    user: req.oidc.user,
  });
};
