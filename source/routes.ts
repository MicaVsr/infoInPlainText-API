const express = require("express");
const HourController = require("./hourController");
const TimezonesController = require("./timezonesController");

const router = express.Router();

router.get('/hour', HourController.getHour);
router.get('/hour/:timeZone', HourController.getHour);

router.get('/timezones', TimezonesController.getTimezones);

export default router;