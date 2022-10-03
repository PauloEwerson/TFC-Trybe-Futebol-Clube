import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const routes = Router();

const teamsController = new TeamsController();
routes.get('/', teamsController.getTeams);
routes.get('/:id', teamsController.getById);

export default routes;
