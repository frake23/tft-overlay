const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000, 
        height: 500, 
        frame: false, 
        transparent: true,
        alwaysOnTop: true,
        webPreferences:{
            nodeIntegration:true,
        }
    });
    mainWindow.loadURL(isDev ? 'http://127.0.0.1:3000/': `file://${path.join(__dirname, '../build/index.html')}`);
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
})