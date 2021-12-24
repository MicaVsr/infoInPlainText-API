import express from 'express';
// import RoutesController from './controllers/posts';
import HourController from './controllers/hour';
import TimezonesController from './controllers/timezones';
const router = express.Router();

/*router.get('/posts', RoutesController.getPosts);
router.get('/posts/:id', RoutesController.getPost);
router.put('/posts/:id', RoutesController.updatePost);
router.delete('/posts/:id', RoutesController.deletePost);
router.post('/posts', RoutesController.addPost);*/

router.get('/hour', HourController.getHour);
router.get('/hour/:timeZone', HourController.getHour);

router.get('/timezones', TimezonesController.getTimezones);

export = router;