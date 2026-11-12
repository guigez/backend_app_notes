import { Router } from 'express'

import * as controller from '../controller/nota.controller'

export const notasRoutes = Router()

notasRoutes.get('/', controller.listar);
notasRoutes.post('/', controller.criar);
