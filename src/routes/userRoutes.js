import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Listar usuários
// router.get('/:id', userController.show);// Lista usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*

-=-=-=- Metodos -=-=-=-
index -> listar todos os usuarios       | -> GET
store ou create -> cria um novo usuario | -> POST
delete -> apaga um usuario              | -> DELETE
show -> mostra um usuario               | -> GET
update -> atualizar um usuario          | -> PATCH(altera somente um valor) ou PUT(subtitui o objeto todo por outro)
-=-=-=- -=-=-=- -=-=-=-

*/