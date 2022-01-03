const passport = require("passport");

module.exports = (app) => {
  //handling the oauth redirect to google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  //handling the callback after google auth redirects to providede URL
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
