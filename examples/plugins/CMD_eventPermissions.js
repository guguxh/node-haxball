module.exports = function(API){
  const { OperationType, VariableType, ConnectionState, AllowFlags, Direction, CollisionFlags, CameraFollow, BackgroundType, GamePlayState, Callback, Utils, Room, Replay, Query, Library, RoomConfig, Plugin, Renderer, Errors, Language, Impl } = API;

  Object.setPrototypeOf(this, Plugin.prototype);
  Plugin.call(this, "CMD_eventPermissions", true, { // "CMD_eventPermissions" is plugin's name, "true" means "activated just after initialization". Every plugin should have a unique name.
    version: "0.1",
    author: "abc",
    description: `This plugin applies permission mechanism shallowly for all operations.`,
    allowFlags: AllowFlags.CreateRoom // We allow this plugin to be activated on CreateRoom only.
  });

  var room, permissionCtx, permissionIds;

  this.initialize = function(_room){
    room = _room;
    permissionCtx = room.librariesMap.permissions?.createContext("eventPermissions");
    if (permissionCtx)
      permissionIds = {
        SetAvatar: permissionCtx.addPermission("SetAvatar", true),
        SendChat: permissionCtx.addPermission("SendChat", true),
        SendChatIndicator: permissionCtx.addPermission("SendChatIndicator", true),
        SendInput: permissionCtx.addPermission("SendInput", true),
        SetPlayerSync: permissionCtx.addPermission("SetPlayerSync", true),
        SetStadium: permissionCtx.addPermission("SetStadium"),
        StartGame: permissionCtx.addPermission("StartGame"),
        StopGame: permissionCtx.addPermission("StopGame"),
        PauseResumeGame: permissionCtx.addPermission("PauseResumeGame"),
        SetScoreLimit: permissionCtx.addPermission("SetScoreLimit"),
        SetTimeLimit: permissionCtx.addPermission("SetTimeLimit"),
        AutoTeams: permissionCtx.addPermission("AutoTeams"),
        SetTeamsLock: permissionCtx.addPermission("SetTeamsLock"),
        SetPlayerTeam: permissionCtx.addPermission("SetPlayerTeam"),
        SetKickRateLimit: permissionCtx.addPermission("SetKickRateLimit"),
        SetTeamColors: permissionCtx.addPermission("SetTeamColors"),
        SetPlayerAdmin: permissionCtx.addPermission("SetPlayerAdmin"),
        KickBanPlayer: permissionCtx.addPermission("KickBanPlayer"),
        //SetHeadlessAvatar: permissionCtx.addPermission("SetHeadlessAvatar"),
        //SendAnnouncement: permissionCtx.addPermission("SendAnnouncement"),
        //Ping: permissionCtx.addPermission("Ping"),
        //SetDiscProperties: permissionCtx.addPermission("SetDiscProperties"),
        //JoinRoom: permissionCtx.addPermission("JoinRoom"),
        //ReorderPlayers: permissionCtx.addPermission("ReorderPlayers"),
        //CustomEvent: permissionCtx.addPermission("CustomEvent")
      };
  };

  this.finalize = function(){
    room.librariesMap?.permissions?.removeContext(permissionCtx);
    room = null;
    permissionCtx = null;
    permissionIds = null;
  };

  this.onOperationReceived = function(type, msg, globalFrameNo, clientFrameNo, customData){ // this is host-only
    var { byId } = msg;
    switch(type){
      case OperationType.SetAvatar:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetAvatar)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SendChat:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SendChat)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SendChatIndicator:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SendChatIndicator)){
          //room.librariesMap.commands?.announcePermissionDenied(byId); // automatic event, do not need to inform.
          return false;
        }
        break;
      case OperationType.SendInput:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SendInput)){
          //room.librariesMap.commands?.announcePermissionDenied(byId); // automatic event, do not need to inform.
          return false;
        }
        break;
      case OperationType.SetStadium:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetStadium)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.StartGame:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.StartGame)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.StopGame:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.StopGame)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.PauseResumeGame:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.PauseResumeGame)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetScoreLimit:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetScoreLimit)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetTimeLimit:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetTimeLimit)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.AutoTeams:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.AutoTeams)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetTeamsLock:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetTeamsLock)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetPlayerTeam:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetPlayerTeam)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetKickRateLimit:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetKickRateLimit)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetTeamColors:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetTeamColors)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetPlayerAdmin:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetPlayerAdmin)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.KickBanPlayer:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.KickBanPlayer)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetPlayerSync:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetPlayerSync)){
          //room.librariesMap.commands?.announcePermissionDenied(byId); // automatic event, do not need to inform.
          return false;
        }
        break;
      /*
      // We can have our special permissions for custom events, so this check is unnecessary.
      case OperationType.CustomEvent:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.CustomEvent)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;

      // These events are host-only, so they don't need permission checking.
      case OperationType.Ping:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.Ping)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetDiscProperties:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetDiscProperties)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.JoinRoom:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.JoinRoom)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.ReorderPlayers:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.ReorderPlayers)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      case OperationType.SetHeadlessAvatar:
        if (byId!=0 && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SetHeadlessAvatar)){
          room.librariesMap.commands?.announcePermissionDenied(byId);
          return false;
        }
        break;
      // Ignore command is disabled because it's complicating the permission and operationReceived codes too much for each plugin that uses chat messages. Ignoring chat should be done in custom client codes.
      // Announcement event is also host-only, BUT we had to send chat messages as announcements for ignore to work correctly.
      // Therefore, we need permission checking for this special case only.
      case OperationType.SendAnnouncement:{
        if (!room.pluginsMap.CMD_messaging?.ignoreActive)
          return true;
        var result = announcementNickRegex.exec(msg.msg);
        if (result?.length==3){
          byId = parseInt(result[1]);
          if (byId==0)
            return true;
          var p = room.players.find((x)=>x.id==byId);
          if (p.name==result[2] && !permissionCtx?.checkPlayerPermission(byId, permissionIds.SendAnnouncement)){
            //room.librariesMap.commands?.announcePermissionDenied(byId);
            return false;
          }
        }
        break;
      }
      */
    }
    return true;
  };
};