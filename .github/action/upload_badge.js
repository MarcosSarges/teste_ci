const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "teste-ci-386310",
  keyFilename: "./teste-ci-key.json",
});

const bucketName = "badges-ci-mobile";
const filePath = "badge.svg";

async function uploadFile() {
  await storage.bucket(bucketName).upload("badge.svg", {
    destination: "badge.svg",
    predefinedAcl: "publicRead",
  });
  console.log(`${filePath} uploaded to ${bucketName}`);
}

uploadFile().catch(console.error);
