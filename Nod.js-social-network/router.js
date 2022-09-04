let exp = require("express")
let router = exp.Router()

var RegController = require("./controller/RegController")
var UserController = require("./controller/UserController")
var CommentController = require("./controller/CommentController")



router.route("/").get(RegController.index)
router.route("/regform").post(RegController.signup)
router.route("/login").get(RegController.login)
router.route("/logform").post(RegController.check)
router.route("/profile").get(RegController.profile)

router.route("/updateimage").post(UserController.image)

router.route("/updateajax").post(UserController.updateajax)
router.route("/search").post(UserController.search)
router.route("/add").post(UserController.add)
router.route("/cansel").post(UserController.cansel)
router.route("/delete").post(UserController.delete)
router.route("/yes").post(UserController.yes)
router.route("/no").post(UserController.no)

router.route("/freands").get(UserController.freands)
router.route("/hayteriqanak").post(UserController.hayteriqanak)
router.route("/myfreands").post(UserController.haytericuchadrum)
router.route("/status").post(UserController.status)
router.route("/frendstatus").post(UserController.frendstatus)
router.route("/mystatus").get(UserController.mystatus)
router.route("/myprofile").get(UserController.myprofile)
router.route("/friend/:id").get(UserController.myfreands)

router.route("/frendfreands/:id").get(UserController.frendfreands)


router.route("/mycomment").post(CommentController.comment)
router.route("/mycommenttesq").post(CommentController.commenttesq)

router.route("/comlike").post(CommentController.like)
router.route("/comdislike").post(CommentController.dislike)

router.route("/photo").get(UserController.photo)








module.exports = router