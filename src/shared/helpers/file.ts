import fs from "fs/promises";

export async function deleteFile(filename: string) {
  try {
    await fs.stat(filename);
    await fs.unlink(filename);
  } catch (error) {
    // Failed because file doesn't exist
  }
}
