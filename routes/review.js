const express = require("express");
const router = express.Router({ mergeParams: true }); // important so we can read :id from parent route
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");
const review = require("../controllers/review.js");


// -------------------- Routes --------------------

//Reviews
// (only Post Route and Delete Route for Reviews as we can only add reviews and delete reviews in a listing)
// (coz of one(Listing) to many(Review) relationship)


// POST Review
router.post(
"/",
isLoggedIn, 
validateReview,
wrapAsync(reviewController.createReview)
);

// DELETE Review
router.delete("/:reviewId", isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
