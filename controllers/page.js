exports.getHomePage = async (req, res) => {
  console.log(req.oidc.isAuthenticated());
  return res.render("home");
};
