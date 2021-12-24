import express from 'express';
import HourController from './hourController';
import TimezonesController from './timezonesController';
const router = express.Router();

router.get('/hour', HourController.getHour);
router.get('/hour/:timeZone', HourController.getHour);

router.get('/timezones', TimezonesController.getTimezones);

export default router;