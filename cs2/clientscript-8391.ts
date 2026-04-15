//
function script8391(int0: int, int1: unknown_int): void {
    if ((varbitplayer_60053 == 1)) {
        script20393(0, 2);
    };
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = -1 as struct;
    if ((int0 == 1007)) {
        int3 = enum_getvalue(0, 73, 7720 as cs2enum, varclient_3678);
        if ((int3 != -1 as struct)) {
            IF_SETSIZE(struct_getparam(int3, 3638), struct_getparam(int3, 3639), 0, 0, struct_getparam(int2, 3505));
        } else {
            IF_SETSIZE(512, 334, 0, 0, struct_getparam(int2, 3505));
        };
        IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int2, 3505));
        return;
    };
    if ((int0 == 1001)) {
        return;
    };
    var int4 = script8418(int2, int1);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    struct_getparam(int2, 3508);
    var int10 = comp(-1, 65535);
    if ((int1 == 0)) {
        int5 = struct_getparam(int2, 3503);
        int6 = struct_getparam(int2, 3505);
        int7 = struct_getparam(int2, 3506);
        int8 = struct_getparam(int2, 3509);
        int9 = struct_getparam(int2, 3508);
        int10 = struct_getparam(int2, 3511);
    } else {
        int5 = struct_getparam(int2, 3514);
        int6 = struct_getparam(int2, 3516);
        int7 = struct_getparam(int2, 3517);
    };
    if ((((int5 == comp(-1, 65535)) || (int6 == comp(-1, 65535))) || (int7 == comp(-1, 65535)))) {
        return;
    };
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    [int11, int12, int13, int14] = script20543(int2, int1);
    if (((((int8 != comp(-1, 65535)) && (IF_GETHIDE(int8) == false)) && (struct_getparam(int4, 8296) == 2)) && (varclient_3467 != int0))) {
        script8378(0, int0);
    };
    if ((int10 != comp(-1, 65535))) {
        IF_SETPOSITION(int11, int12, 0, 0, int10);
        IF_SETSIZE(int13, int14, 1, 1, int10);
        script8332(int0);
    };
    if ((int6 != comp(-1, 65535))) {
        if ((script8341(int6, 1) == 1)) {
            int14 = (int14 + 10);
        };
        if ((script8341(int6, 2) == 1)) {
            int13 = (int13 + 10);
        };
        IF_SETSIZE(int13, int14, 1, 1, int6);
        if ((((int1 == 0) && (varclient_3477 == true)) && (struct_getparam(int2, 3533) == true))) {
            IF_SETPOSITION(0, 0, 0, 0, int6);
            IF_SETSIZE(0, 0, 1, 1, int6);
        } else if (((int2 == 21279 as struct) && (script20503(int2) == 1))) {
            script20504(21279 as struct);
        } else {
            IF_SETPOSITION(int11, int12, 0, 0, int6);
        };
        if ((int10 != comp(-1, 65535))) {
            script8332(int0);
        };
        script8392(int0);
    } else {
        script8392(int0);
        return;
    };
    if ((varbitplayer_60053 == 1)) {
        if ((int0 == 1001)) {
            script20393(1, 2);
        };
        if ((int0 == 1007)) {
            script20393(1, 3);
        };
    };
    IF_SETONRESIZE(callback(script2141, int0, int1, -2147483645, IF_GETWIDTH(int6), IF_GETHEIGHT(int6)), int6);
    IF_CALLONRESIZE(int6);
    return;
}