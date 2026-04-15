//
function script4317(int0: component, int1: int, int2: component, int3: unknown_int): void {
    var int4 = script411(int2);
    var int5 = struct_getparam(int4, 7294);
    var int6 = struct_getparam(int4, 7295);
    var int7 = struct_getparam(int4, 7297);
    var int8 = struct_getparam(int4, 7307);
    var int9 = struct_getparam(int4, 7308);
    var int10 = 0;
    if ((unk10993(0) == 1)) {
        if (((int1 < 0) || (int1 >= ACTIVECLANCHANNEL_GETUSERCOUNT()))) {
            varclient_1518 = -1;
            varclient_2353 = "";
            printmessage("That person isn't in your clan channel.");
            return;
        };
        if ((CC_FIND(int0, int1) == 1)) {
            int10 = CC_GETY();
        };
        varclient_1518 = int1;
        varclient_2353 = ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int1);
        if ((IF_FIND(int9) == 1)) {
            if ((int3 == 0)) {
                CC_SETSIZE(1, 19, 0, 0);
            } else {
                CC_SETSIZE(1, 27, 0, 0);
            };
            CC_SETPOSITION(0, int10, 2, 0);
            CC_SETONTIMER(callback(script4629, 1, int9, int8, int3));
            IF_SETHIDE(0, int8);
            IF_SETPOSITION(0, int10, 2, 0, int8);
        };
        script5395(int5, int6);
    } else {
        printmessage("You must be in your clan channel to do that.");
    };
    return;
}