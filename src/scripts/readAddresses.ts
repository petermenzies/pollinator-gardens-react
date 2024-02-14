import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "auth/keys.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth: auth });

const spreadsheetId = "18kMrQr3CWWrZ_i7YJ13YPayODebB9XURLNUECp3sfA8";

const response = await sheets.spreadsheets.values.get({
  spreadsheetId,
  range: "A:D",
});

console.log(response.data.values);
