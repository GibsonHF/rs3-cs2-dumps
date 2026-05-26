//
function script8868(): void {
    var int0 = -1 as struct;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as struct;
    var int9 = comp(-1, 65535);
    script8361(18);
    script8361(19);
    script8361(20);
    script8361(21);
    script8361(22);
    script8361(23);
    script8361(25);
    script8361(46);
    script8361(9);
    script8356(18, 19, 1, 0, 0);
    script8356(18, 20, 2, 0, 0);
    script8356(18, 21, 3, 0, 0);
    script8356(18, 22, 4, 0, 0);
    script8356(18, 23, 5, 0, 0);
    script8356(18, 25, 6, 0, 0);
    script8356(18, 46, 7, 0, 0);
    script8356(18, 9, 8, 0, 0);
    script8705(18);
    script8705(19);
    script8705(20);
    script8705(21);
    script8705(22);
    script8705(23);
    script8705(25);
    script8705(46);
    script8705(9);
    if ((varbitplayer_42128 == 1)) {
        int8 = enum_getvalue(0, 73, 7716 as cs2enum, 18);
        if ((int8 != -1 as struct)) {
            int9 = struct_getparam(int8, 3503);
            if ((int9 != comp(-1, 65535))) {
                IF_SETHIDE(true, int9);
            };
        };
    } else {
        [int1, int2, int3, int4, int5, int6] = script8725(2, 18);
        int0 = script10405(18);
        int1 = script8711(int1, int3, int5, IF_GETWIDTH(IF_GETLAYER(struct_getparam(int0, 3503))));
        int2 = script8711(int2, int4, int6, IF_GETHEIGHT(IF_GETLAYER(struct_getparam(int0, 3503))));
        [int1, int2, int5, int6, int7] = script8382(int1, int2, int5, int6, 18, 0, 0);
        script8387(int1, int2, int5, int6, 18);
    };
    return;
}