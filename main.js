/**
* This is the file handling the startup and lifetime of the game
* running in Electron Runtime.
*/
// Modules to control application life and create native browser window
const { app, BrowserWindow, shell, Menu } = require("electron");
// Menu.setApplicationMenu(false);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1980,
        height: 1080,
        useContentSize: true,
        title: "embTools",
        backgroundColor: '#ffffff',
        //     frame: false
    });



    // Open external link in the OS default browser
    //   mainWindow.webContents.on("new-window", function(e, url) {
    //     e.preventDefault();
    //     shell.openExternal(url);
    //   });

    // and load the index.html of the app.
    mainWindow.loadFile("embTools.html");


    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on("closed", function() {

        mainWindow = null;

    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu)

}

// Functions for Secondary Windows



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);



// Quit when all windows are closed.
app.on("window-all-closed", function() {
    app.quit();
});

// Menu Template

const menuTemplate = [
    {
      label: 'Menu',
      submenu: [
        {label: 'Notes', click(){notes()},
         accelerator: 'Ctrl+N'},
        {label: 'Unit Conversions', click(){conversions()},
         accelerator: 'Ctrl+U'},
        {label: 'Stitch Run Timer', click(){timer()},
         accelerator: 'Ctrl+R'},
        {label: 'Quote', click(){quote()},
         accelerator: 'Ctrl+Q'},
        {type: 'separator'},
        {label: 'Quit', click(){app.quit()},
         accelerator: 'Ctrl+X'}
      ]
    },
    {label: 'About',
     submenu: [
       {label: 'About embTools', click(){about()}}
     ]
  }
]

// Menu Functions
     // Notes Menu Function
function notes(){

mainWindow.loadFile("notes/notes.html");
mainWindow.on("closed", function() {
  mainWindow = null;
});
};

    // Unit Conversions Menu Function
function conversions(){
  mainWindow.loadFile("unitConversion/unitconversions.html");
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
};
    // Stitch Run Timer Menu Function

function timer(){
  mainWindow.loadFile("stitchTimer/stitchtimer.html");
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
};

    // Quote Menu Function

function quote(){
  mainWindow.loadFile("quickQuotes/quickQuote.html");
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
};

   // About embTools Program
function about(){
  aboutWindow = new BrowserWindow({
      width: 566,
      height: 725,
      useContentSize: true,
      title: "about embTools",
      backgroundColor: '#ffffff',
      frame: false,
      parent: mainWindow
  });

aboutWindow.loadFile("about/about.html");
aboutWindow.on("closed", function() {

    aboutWindow = null;

});
};
