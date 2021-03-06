//----KONFIGURACIJA----//
require('dotenv').config();

//----KONSTANTE----//
const PORT = 3002 || process.env.PORT;      
const PASS = process.env.ATLAS_PASS;        

const DBNAME = process.env.NODE_ENV === 'test' ?
    'rn-chat-test-api' :
    'rn-chat-api';

const DB_URI = `mongodb+srv://pmfst-rn:${PASS}@chatcluster.pla1j.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

module.exports = {PORT, DB_URI};