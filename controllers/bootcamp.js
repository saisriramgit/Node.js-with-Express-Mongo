const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({
      success: true,
      count: bootcamp.length,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc     Create new bootcamp
//@route    Post /api/v1/bootcamps
//@access   Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
      );
    }
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));
  }
};

//@desc     Update a bootcamp
//@route    Put /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc     Delete a bootcamp
//@route    Delete /api/v1/bootcamps/:id
//@access   Public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
