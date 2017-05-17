// Generated by CoffeeScript 1.12.5
var express, expressApp, fs, ini, sha1;

express = require("express");

expressApp = express();

ini = require("ini");

fs = require("fs");

sha1 = require("sha1");

expressApp.listen(3000);

expressApp.use(express["static"]('public'));

expressApp.get("/GET/data/config/", function(req, res) {
  return res.send(ini.parse(fs.readFileSync("./data/config.ini", 'utf-8')));
});

expressApp.get("/GET/data/lang/", function(req, res) {
  var iniFile;
  iniFile = ini.parse(fs.readFileSync("./data/config.ini", 'utf-8'));
  return res.send(ini.parse(fs.readFileSync("./data/lang/" + iniFile.OPTION.lang + ".ini", 'utf-8')));
});

expressApp.get("/GET/data/event/", function(req, res) {
  return res.send(ini.parse(fs.readFileSync("./data/command/event.ini", 'utf-8')));
});

expressApp.get("/GET/data/command/", function(req, res) {
  return res.send(ini.parse(fs.readFileSync("./data/command/command.ini", 'utf-8')));
});

expressApp.get("/GET/data/follower/", function(req, res) {
  return res.send(ini.parse(fs.readFileSync("./data/stats/follower.ini", 'utf-8')));
});

expressApp.get("/GET/data/viewer/", function(req, res) {
  return res.send(ini.parse(fs.readFileSync("./data/stats/viewer.ini", 'utf-8')));
});

expressApp.get("/GET/data/message/", function(req, res) {
  return res.send(ini.parse(fs.readFileSync("./data/stats/message.ini", 'utf-8')));
});

expressApp.get("/PUT/data/config/", function(req, res) {
  var iniFile;
  if (req.query["config.option.instalx"]) {
    iniFile = ini.parse(fs.readFileSync("./data/config.ini", 'utf-8'));
    iniFile.OPTION.instalX = req.query["config.option.instalx"];
    fs.writeFileSync("./data/config.ini", ini.stringify(iniFile));
  }
  if (req.query["config.user.chanel"]) {
    iniFile = ini.parse(fs.readFileSync("./data/config.ini", 'utf-8'));
    iniFile.USER.chanel = req.query["config.user.chanel"];
    fs.writeFileSync("./data/config.ini", ini.stringify(iniFile));
  }
  if (req.query["config.user.username"]) {
    iniFile = ini.parse(fs.readFileSync("./data/config.ini", 'utf-8'));
    iniFile.USER.username = req.query["config.user.username"];
    fs.writeFileSync("./data/config.ini", ini.stringify(iniFile));
  }
  if (req.query["config.user.password"]) {
    iniFile = ini.parse(fs.readFileSync("./data/config.ini", 'utf-8'));
    iniFile.USER.password = req.query["config.user.password"];
    fs.writeFileSync("./data/config.ini", ini.stringify(iniFile));
  }
  if (req.query["config.bot.color"]) {
    iniFile = ini.parse(fs.readFileSync("./data/config.ini", 'utf-8'));
    iniFile.BOT.color = req.query["config.bot.color"];
    fs.writeFileSync("./data/config.ini", ini.stringify(iniFile));
  }
  return res.send("ok");
});

expressApp.get("/SET/data/config/", function(req, res) {
  var iniFile;
  if (req.query["config.bot.start"]) {
    iniFile = ini.parse(fs.readFileSync("./data/config.ini", 'utf-8'));
    iniFile.BOT.start = req.query["config.bot.start"];
    fs.writeFileSync("./data/config.ini", ini.stringify(iniFile));
  }
  return res.send("ok");
});

expressApp.get("/SET/data/event/", function(req, res) {
  var iniFile, newEvent, obj;
  if (req.query["command.event.event"]) {
    iniFile = ini.parse(fs.readFileSync("./data/command/event.ini", 'utf-8'));
    newEvent = (
      obj = {},
      obj["" + (sha1(Math.random(0, 10000000000).toString().substring(2)))] = {
        event: req.query["command.event.event"],
        method: req.query["command.event.method"],
        message: req.query["command.event.message"]
      },
      obj
    );
    fs.appendFileSync("./data/command/event.ini", ini.stringify(newEvent));
  }
  return res.send("ok");
});

expressApp.get("/SET/data/command", function(req, res) {
  var iniFile, newCommand, obj;
  if (req.query["command.command.command"]) {
    iniFile = ini.parse(fs.readFileSync("./data/command/command.ini", "utf-8"));
    newCommand = (
      obj = {},
      obj["" + (sha1(Math.random(0, 10000000000).toString().substring(2)))] = {
        command: req.query["command.command.command"],
        method: req.query["command.command.method"],
        message: req.query["command.command.message"],
        user_stramer: req.query["command.command.perm.streamer"],
        user_moderat: req.query["command.command.perm.moderato"],
        user_user: req.query["command.command.perm.user"]
      },
      obj
    );
    fs.appendFileSync("./data/command/command.ini", ini.stringify(newCommand));
  }
  return res.send("ok");
});
