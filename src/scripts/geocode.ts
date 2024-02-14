import NodeGeocoder from "node-geocoder";
import * as fs from "fs";

const apiKey = fs.readFileSync("auth/geocoderApiKey.txt", "utf8");

const options: NodeGeocoder.GoogleOptions = {
  provider: "google",
  apiKey: apiKey,
};

const geocoder = NodeGeocoder(options);

// Using callback
const res = await geocoder.geocode("29 champs elysée paris");

console.log(res);
