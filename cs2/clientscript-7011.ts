//
function script7011(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = struct_getparam(script10405(1003), 3503);
    var int4 = IF_GETX(int3);
    var int5 = IF_GETY(int3);
    var int6 = IF_GETWIDTH(int3);
    var int7 = IF_GETHEIGHT(int3);
    var int8 = int4;
    var int9 = int5;
    var int10 = int6;
    var int11 = int7;
    var int12 = varbitclient_34074;
    if ((int0 == 1)) {
        varbitclient_34074 = 1;
        [int1, int2] = script8138(1003);
        if (((int1 == -1) || (int2 == -1))) {
            return;
        };
        [int10, int11] = script8140(1003, int1, int2);
        if ((int2 == 0)) {
            int9 = (int5 + (int7 - int11));
        } else {
            int8 = (int4 + (int6 - int10));
        };
        IF_SETPOSITION(int8, int9, 0, 0, int3);
        if ((script8142(1003, int10, int11) == 1)) {
            script8705(1003);
            script8390(1003);
            script8841(1003, 0);
        } else {
            script15930("Your main action bar couldn't be resized since there is not enough room for it.");
            varbitclient_34074 = 0;
            IF_SETPOSITION(int4, int5, 0, 0, int3);
            script8142(1003, int6, int7);
        };
        if ((varbitplayer_27170 == 2)) {
            script9946();
        };
    };
    if (((int12 == 0) && (varbitclient_34074 == 1))) {
        script8731();
    };
    return;
}