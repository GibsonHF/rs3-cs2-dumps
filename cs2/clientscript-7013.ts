//
function script7013(int0: unknown_int, int1: unknown_int): void {
    if ((script15532(0) == 1)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = struct_getparam(script10405(1003), 3503);
    var int5 = IF_GETX(int4);
    var int6 = IF_GETY(int4);
    var int7 = IF_GETWIDTH(int4);
    var int8 = IF_GETHEIGHT(int4);
    var int9 = int5;
    var int10 = int6;
    var int11 = int7;
    var int12 = int8;
    var int13 = -1;
    var int14 = varbitclient_34074;
    if ((int0 == 1)) {
        varbitclient_34074 = 0;
        [int2, int3] = script8138(1003);
        if (((int2 == -1) || (int3 == -1))) {
            return;
        };
        [int11, int12] = script8140(1003, int2, int3);
        if ((int3 == 0)) {
            int10 = (int6 + (int8 - int12));
        } else {
            int9 = (int5 + (int7 - int11));
        };
        IF_SETPOSITION(int9, int10, 0, 0, int4);
        if ((script8142(1003, int11, int12) == 1)) {
            script8705(1003);
            script8390(1003);
            script8838(5);
        } else {
            script15930("Your main action bar couldn't be resized since there is not enough room for it.");
            varbitclient_34074 = 1;
            IF_SETPOSITION(int5, int6, 0, 0, int4);
            script8142(1003, int7, int8);
        };
        if ((varbitplayer_27170 == 2)) {
            script9946();
        };
    };
    if (((int14 == 1) && (varbitclient_34074 == 0))) {
        script8731();
    };
    return;
}