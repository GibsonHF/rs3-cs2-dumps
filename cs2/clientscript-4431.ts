//
function script4431(int0: number): void {
    var int1 = script411(int0);
    var int2 = struct_getparam(int1, 7289);
    var int3 = struct_getparam(int1, 7306);
    var string0 = "";
    var int4 = struct_getparam(int1, 7297);
    if ((unk10993(0) == 1)) {
        IF_SETONTIMER(callback(), int2);
        script4434(int0);
        IF_SETONCLANSETTINGSTRANSMIT(callback(script4433, int0), int0);
        IF_SETONCLANCHANNELTRANSMIT(callback(script4433, int0), int0);
        stack(callback(script4449, int0, int4));
        stack(int2);
        IF_SETONPLAYERGROUPTRANSMIT();
        IF_SETONCLANCHANNELTRANSMIT(callback(script4449, int0, int4), int2);
        IF_SETONFRIENDTRANSMIT(callback(script4449, int0, int4), int2);
        IF_SETONCLANTRANSMIT(callback(script4449, int0, int4), int2);
        IF_SETGRAPHIC(6255 as graphic, int3);
    } else {
        script4437(int0);
        string0 = "Join Clan Chat channel.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1110, 130));
        IF_SETONMOUSELEAVE(callback(script8805), comp(1110, 130));
        IF_SETOP(1, "Join Clan Chat channel", comp(1110, 130));
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1440, 100));
        IF_SETONMOUSELEAVE(callback(script8805), comp(1440, 100));
        IF_SETOP(1, "Join Clan Chat channel", comp(1440, 100));
        script4589(int0);
    };
    return;
}