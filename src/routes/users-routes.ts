import { Router } from "express";
import multer from "multer";

import { upload } from "../config/upload";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";
import { CreateUserController } from "../modules/accounts/use-cases/create-user/create-user-controller";
import { UpdateUserAvatarController } from "../modules/accounts/use-cases/update-user-avatar/update-user-avatar-controller";

export const routes = Router();
const uploadAvatar = multer(upload("./tmp/avatar"));
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

routes.post("/", createUserController.handle);
routes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);
