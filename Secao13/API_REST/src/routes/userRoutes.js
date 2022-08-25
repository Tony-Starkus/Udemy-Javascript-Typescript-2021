import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const route = new Router();

/**
 * index -> lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH ou PUT
 */

route.post("/", userController.store);
route.get("/", loginRequired, userController.index);
route.get("/:id", userController.show);
route.put("/", loginRequired, userController.update);
route.delete("/:id", loginRequired, userController.delete);

export default route;
