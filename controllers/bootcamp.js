//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show bootcamp ${req.params.id}` });
};

//@desc     Create new bootcamp
//@route    Post /api/v1/bootcamps
//@access   Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};

//@desc     Update a bootcamp
//@route    Put /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

//@desc     Delete a bootcamp
//@route    Delete /api/v1/bootcamps/:id
//@access   Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
