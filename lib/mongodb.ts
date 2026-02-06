import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

/* NODE_ENV  = development
MONGODB_URI=mongodb+srv://eventManagementDB:ZxdTvLaoRWdfMRS5@cluster0.kpwp5y5.mongodb.net/?appName=Cluster0
ADMIN_USERNAME = admin 
ADMIN_EMAIL = admin@nextevent.com 
ADMIN_PASSWORD = admin
USER_USERNAME = user
USER_EMAIL = user@nextevent.com
USER_PASSWORD = user */
