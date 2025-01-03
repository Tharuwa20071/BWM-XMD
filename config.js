const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXY+yVhD+K5tzK1tBQcVkkyIIIuAnKtq8aY5wQL4RDihuTHrXpm2afdOm6c3+x/0JDbp296Lv2y0Xk5M5w3OemXlmHkEUuxlSUAm6jyBJ3QJiVB1xmSDQBb3ctlEKCGBBDEEXrCRyu9TaJ0RRhhSaMtrxsyNnMktDko04O/mbBSWzWYuN5AdwJkCSbwPX/Argnm2dkKUgpTEJaRkZB2W/qolzahb2je2gPlehS9Z3sI8aiwdwrhChm7qR0092KEQpDBRUTqCbfpC+sG+LckGTtL9fnryasC/4dBJD+bjRxII3mVbg7Vp02iM/SL+zqftMx9IkD9b6Q7JoKoGfdtKwviyldhLvSRpt9eMiTqaHK/3MdSJkyRaKsIvLD9e9VEVK3umHvTedUUmxQcliYk+MNipk35H79fFsRo/IBdmTtI8RnwSCTrN6riuOMsL0gWrV+/vCzCehtR3WF8O9EIkzGsUDwX9PfJLetOL/n7qbI3foWeRYOqblEQ4WzMHxeBL79hEbgjXSNzvFQawmy8vDx+jXvLBsW/zWiiSDn2jKCOrWidkIBupZKl6wvjPXxTjsHVbkG32I8/RrLGvqOlC3jhwoqba2mGImibZSJHVBcnOezkR+1VRX1lYfDlr0qeSyZc9oJ1bKq5ZWM0kno491nslGzTFNNkLkztbhyuOmD5eMfFTKFuhSZwKkyHEznELsxlHla7QJAK1ijswU4Ut1QaLX5jF9ck7hUGwKh1YoDaA4mvSLGZ8POs2iiUcdny9zP+w8AAIkaWyiLEPWwM1wnJYayjLooAx0v/tEgAgd8bVv1WtNigC2m2Z4EeVJEEPr1tTbJTTNOI/wvIxMvjqgFHTJNzfC2I2crCpjHsHU3LkF4ncQZ6BrwyBDZwJYqHBNVOEB3cAbLl21pkqr8f1qaEur9eI0rSjv4ugaQpusybQa1j1kTeaehpR9DxHduW83bIalG2SnQW8BAdzXkan++WIH5Y3nKx003JzcydRq1/ModELWpzvR9NKFa+lRiizQxWmOCLCFpp8neuyj6Cu4tEGK7Yg1CnHPJDa77a3qLLeXSjFcvMO9thR0H9/WFB9bFd5MMwb6asYBAoQXBbpV5izdZuhmp8WyjS7V+Db75lDVESbJNxHCgAARrILBy/PTT3cvz0+/Vua3u8p+vrs5/6rMD5X55e5qL0Evz08/V+aPi/P3yvz4T+Tn683L89OfF1+VwWt7K24WwtANMtAF/MTIaCaT+rIiNNuZJHF9h+OdKo2bHG5jddVtlBwWbjkUArRZD9NFpxi2m+qkIZn79ZgOlE3OOEeG5pc93nz4FxDQBYXKLY/FRA9IzdN47UCJfc0Y46VFG55jTXtO2QzaM7irK5phUUPZoMaoqHn9ZDTjVnzgBnun5FxKPXaCcbjUjjDpk0I1gzdZvn/M1ccq00oxNVXJqcCpcMnm2FuORopPyx1tJNZ71rLeXNN24Lm2WfjS6ZgynsRvitpCL1VBaFDLmlGOZLVMvX46T+0Ff7gO/GXhBK+L3r3M4uOriG0XXfbma3//SwZv40SeiXcQr4v4C5LtbVqmKGfulDHCFQ+piVoitjyxu0gJhXw4D7f5WkOIC6bTCJzPnwiQBBDbcRqCLsjCLQQECGCGubd1oLshyjAME9Cl2k2GJSmm0yRAWHJJMscQ37YI4KpPsQxw/huqWiLOYAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "KING THARUWA",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "+94754386992",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

