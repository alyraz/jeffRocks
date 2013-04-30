
/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function (req, res, next) {

  if (!req.isAuthenticated()) {
    return res.redirect('/login')
  }
  next()
};


/*
 *  User authorizations routing middleware
 * this appears to be useless code (legs on a snake)
 */

// exports.user = {
//     hasAuthorization : function (req, res, next) {
//       if (req.profile.id != req.user.id) {
//         return res.redirect('/users/'+req.profile.id)
//       }
//       next()
//     }
// }


/*
 *  Article authorizations routing middleware
 */

exports.article = {

    hasAuthorization : function (req, res, next) {
              console.log(req.user)

      if (req.article.user.id != req.user.id) {
        return res.redirect('/articles/'+req.article.id)
      }
      next()
    }
}
