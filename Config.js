const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RnaWlyU0szSEVhYWptVGFodjcrcyt5NmNHY3Vva0J5S3JtaUNha1cxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjUzdTZBNFFaTWo3WFp5cG51UUJzOGUwT0VSZ3BFbkRBbjhiU3ZIUmpCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSERwUTdNcHEvQkRCZlNPR3kvSDJRaDk2Mnp3SDhibWJqcDR0aldkR1VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYek9nek1UUytXY1FDT0hJT2YxdHJ6eGxYa2RVQUdyVEdFNmhiL0R1VDJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKWFBLdXU3QitSQ3FhNnFoUVEyeFRVYWJZdlRybnowOWE1NmtNM0RpM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUrcEtoekNHYjRFSkgwWVVlcy8xZCsvUjViMjVRUlhlQ3ZDemErRHM5bDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Rvb0J1OTZZVFY0bDlydkJoTUczNnpTdFEvby9sS1haclAzaWdVcU5HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTG14N09zbFJJRjluZ2R1V0IzclFKTUFDSW5qSW9IQmVmckVueGcxWkRCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik14WEVSdVhoMjBNUHlxcHhXdVdhK1NwdGFqcTJvVmpTek45Q1FUcVRPdTdPQXVtdHJ4QS9HWGJYcjJNandBZDRDSURMbEp1L1VpYmhCdGhXU2pKRkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJIczdiUWlnYm5ySkcyVWtCWkhrVGw2OHN4dHY3MFJ1RDFMRk4yMmJIY1VFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQX09BdldRblF3R0wzbUVqYkJHNVlBIiwicGhvbmVJZCI6ImJjZTA4ZGUxLTM4YWEtNGUwNi05NDliLTM0YjA2YTRjMjRmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZE5DcTMzbUFlWVZ2aThYZndHVGdDdjFXQWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmw4dW1OVkRrRFlBenZkMkd4b3Q3TzBldnBRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxMSjFLQzc5IiwibWUiOnsiaWQiOiIyMjUwNTAwNTI1NDgwOjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozMG1Ma0VFTTJZM3IwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFIMVlQQWFZZWVmTDB3ZHF6ZFV4Y1BIU1BTK04zMDJ5eU1UYjdlU1FxRm89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRGMDU4WTRzK21EV2V5V25ZNDhub2NCM1RCTmU0cU83Mnk4K3liZ3N1Rjl2ZlZvcTB1RnMrVVlZc2VPMUx0SWw2NjU1VVRDdWxpSmxtZXN4VmNXYkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1Vkd4ZTNQRVNGcXFqYUZWM1BYS3lxT2pmNlVFR3RUeHM4VmhIZXp6S09SS1FBcGNHWjA1UGkyKzg1S01uLy9OL3hqMmpxaEN0U2JKOGtDZ3QwVWhEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTA1MDA1MjU0ODA6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVQjlXRHdHbUhubnk5TUhhczNWTVhEeDBqMHZqZDlOc3NqRTIrM2trS2hhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwMDgyMjY4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUl1YiJ9",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Qp22bZ1/IMG-jordan-dunck.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "2250500525480",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"

