//
function script835(): void {
    var int0 = -1 as struct;
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    if ((varbitplayer_27169 == 0)) {
        int0 = script10405(18);
        int1 = struct_getparam(int0, 3503);
        int0 = script10405(19);
        int2 = struct_getparam(int0, 3503);
        int0 = script10405(20);
        int3 = struct_getparam(int0, 3503);
        int0 = script10405(21);
        int4 = struct_getparam(int0, 3503);
        int0 = script10405(22);
        int5 = struct_getparam(int0, 3503);
        int0 = script10405(23);
        int6 = struct_getparam(int0, 3503);
        int0 = script10405(25);
        int7 = struct_getparam(int0, 3503);
        int0 = script10405(1005);
        int8 = struct_getparam(int0, 3503);
        int0 = script10405(46);
        int9 = struct_getparam(int0, 3503);
        if ((((((((((int1 == comp(-1, 65535)) || (int2 == comp(-1, 65535))) || (int3 == comp(-1, 65535))) || (int4 == comp(-1, 65535))) || (int5 == comp(-1, 65535))) || (int6 == comp(-1, 65535))) || (int7 == comp(-1, 65535))) || (int8 == comp(-1, 65535))) || (int9 == comp(-1, 65535)))) {
            return;
        };
        if ((((((((((IF_GETHIDE(int1) == false) || (IF_GETHIDE(int2) == false)) || (IF_GETHIDE(int3) == false)) || (IF_GETHIDE(int4) == false)) || (IF_GETHIDE(int5) == false)) || (IF_GETHIDE(int6) == false)) || (IF_GETHIDE(int7) == false)) || (IF_GETHIDE(int8) == false)) || (IF_GETHIDE(int9) == false))) {
            IF_SETHIDE(true, int1);
            IF_SETHIDE(true, int2);
            IF_SETHIDE(true, int3);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(true, int5);
            IF_SETHIDE(true, int6);
            IF_SETHIDE(true, int7);
            IF_SETHIDE(true, int8);
            IF_SETHIDE(true, int9);
        } else {
            IF_SETHIDE(false, int8);
            script8868();
        };
    } else {
        int0 = script10405(18);
        int1 = struct_getparam(int0, 3503);
        if ((int1 == comp(-1, 65535))) {
            return;
        };
        if ((IF_GETHIDE(int1) == false)) {
            IF_SETHIDE(true, int1);
        } else {
            IF_SETHIDE(false, int1);
        };
    };
    return;
}