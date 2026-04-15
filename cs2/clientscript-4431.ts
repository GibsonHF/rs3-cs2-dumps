//
function script4431(int0: component): void {
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
        stack(4449);
        stack(int0);
        stack(int4);
        stack("ii");
        stack(int2);
        IF_SETONPLAYERGROUPTRANSMIT();
        IF_SETONCLANCHANNELTRANSMIT(callback(script4449, int0, int4), int2);
        IF_SETONFRIENDTRANSMIT(callback(script4449, int0, int4), int2);
        IF_SETONCLANTRANSMIT(callback(script4449, int0, int4), int2);
        stack(6255);
        stack(int3);
        IF_SETGRAPHIC();
    } else {
        script4437(int0);
        string0 = "Join Clan Chat channel.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 72745090);
        IF_SETONMOUSELEAVE(callback(script8805), 72745090);
        IF_SETOP(1, "Join Clan Chat channel", 72745090);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 94371940);
        IF_SETONMOUSELEAVE(callback(script8805), 94371940);
        IF_SETOP(1, "Join Clan Chat channel", 94371940);
        script4589(int0);
    };
    return;
}