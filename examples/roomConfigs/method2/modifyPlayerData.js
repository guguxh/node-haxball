module.exports = function({ OperationType, VariableType, ConnectionState, AllowFlags, Callback, Utils, Room, Replay, RoomConfig, Plugin, Renderer, Impl }){

  Object.setPrototypeOf(this, RoomConfig.prototype);
  RoomConfig.call(this, { // Every roomConfig should have a unique name.
    name: "modifyPlayerData",
    version: "0.1",
    author: "abc",
    description: `This roomConfig changes people's nick and flag while they enter the room.`,
    allowFlags: AllowFlags.CreateRoom // We allow this roomConfig to be activated on CreateRoom only.
  });

  this.modifyPlayerData = function(playerId, name, flag, avatar, conn, auth, customData){
    if (name=="abc")
      return null;  // block anyone trying to join the room with name "abc", before he can join the room.
    return [
      "[" + playerId + "] " + name, // prefix everyone's name with [playerId]
      "tr", // set everyone's flag to tr
      avatar // do not change avatars
    ];
  };

};