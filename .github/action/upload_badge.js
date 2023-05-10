const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "teste-ci-386310",
  keyFilename: "./teste-ci-key.json",
});

const bucketName = "badges-ci-mobile";
const filePath = "badge.svg";

async function deleteFile() {
  await storage.bucket(bucketName).file(filePath).delete();
  console.log(`gs://${bucketName}/${filePath} deleted`);
}

async function uploadFile() {
  await deleteFile();
  const file = await storage.bucket(bucketName).upload("badge.svg", {
    destination: "badge.svg",
    predefinedAcl: "publicRead",
  });
  console.log({ file });
  console.log(`${filePath} uploaded to ${bucketName}`);
}

uploadFile().catch(console.error);
