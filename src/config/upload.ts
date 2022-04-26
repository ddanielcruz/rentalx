import crypto from "crypto";
import { Options, diskStorage } from "multer";
import { resolve } from "path";

export function upload(folder: string): Options {
  return {
    storage: diskStorage({
      destination: resolve(__dirname, "..", "..", folder),
      filename: (_request, file, callback) => {
        const fileHash = crypto.randomBytes(16).toString("hex");
        const filename = `${fileHash}-${file.originalname}`;
        callback(null, filename);
      },
    }),
  };
}
