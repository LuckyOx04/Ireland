import logger from 'jet-logger';
import server from './server';
import { PrismaClient } from "@prisma/client";
const bodyParser = require("body-parser");


const prisma = new PrismaClient();


// Constants
const serverStartMsg = 'Express server started on port: ',
        port = (process.env.PORT || 3000);

// Start server
server.listen(port, () => {
    logger.info(serverStartMsg + port);
});
