//
function script8781(int0: int): void {
    if ((int0 == -1)) {
        var int0 = 8;
    };
    if (((script8699(int0) != 1) && (int0 == 8))) {
        script193(1);
        return;
    };
    IF_SETHIDE(true, comp(276, 16));
    script8306();
    script8792();
    if ((varbitplayer_38842 == 1)) {
        varbitclient_32705 = 0;
        IF_SETCOLOUR(0, comp(1477, 26));
        script8352();
        script13892();
        script8784();
        return;
    };
    if ((varbitplayer_27169 == 1)) {
        varbitclient_32705 = 0;
        IF_SETCOLOUR(0, comp(1477, 26));
        script9943();
        script8784();
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as struct;
    var int15 = comp(-1, 65535);
    var int16 = comp(-1, 65535);
    varclient_3474 = 0;
    IF_SETCOLOUR(0, comp(1477, 26));
    script8352();
    int12 = (ENUM_GETOUTPUTCOUNT(7717 as cs2enum) - 1);
    var int17 = int0;
    if ((((int0 == 8) && (varclient_3477 == false)) && (script20475() == 0))) {
        switch (varclient_8372) {
            case 15:
            case 16:
            case 17: {
                int0 = script16635(15, 0);
                int17 = 8;
                break;
            }
        };
    };
    while ((int12 >= 0)) {
        int13 = enum_getvalue(0, 0, 7717 as cs2enum, int12);
        int14 = script10405(int13);
        if ((int14 != -1 as struct)) {
            int15 = struct_getparam(int14, 3503);
            if ((int15 != comp(-1, 65535))) {
                [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11] = script8701(int0, int13);
                int9 = script20525(int13, int0, int17, int9);
                if (((struct_getparam(int14, 3526) == true) || (script20451(int14) != 0))) {
                    int16 = script1886(int13);
                    script16000(int0, int13);
                    switch (int13) {
                        case 1032: {
                            if ((((varbitplayer_27170 != 0) || (varbitplayer_29138 == 0)) || (varbitplayer_29138 > script11803()))) {
                                int9 = 0;
                            };
                            break;
                        }
                        case 1033: {
                            if ((((varbitplayer_27170 != 0) || (varbitplayer_29139 == 0)) || (varbitplayer_29139 > script11803()))) {
                                int9 = 0;
                            };
                            break;
                        }
                        case 1034: {
                            if ((((varbitplayer_27170 != 0) || (varbitplayer_29140 == 0)) || (varbitplayer_29140 > script11803()))) {
                                int9 = 0;
                            };
                            break;
                        }
                        case 1035: {
                            if ((((varbitplayer_27170 != 0) || (varbitplayer_29141 == 0)) || (varbitplayer_29141 > script11803()))) {
                                int9 = 0;
                            };
                            break;
                        }
                        case 1042:
                        case 1043:
                        case 1044:
                        case 1048: {
                            int9 = 0;
                            break;
                        }
                    };
                    if (((int9 == 0) || (int13 == 1008))) {
                        IF_SETHIDE(true, int15);
                    } else {
                        IF_SETHIDE(false, int15);
                        varclient_3474 = (varclient_3474 + 1);
                    };
                    if ((script8137(int13) == 0)) {
                        int5 = MIN(int5, IF_GETWIDTH(int16));
                        int6 = MIN(int6, IF_GETHEIGHT(int16));
                    } else {
                        [int5, int6] = script8140(int13, int7, int8);
                    };
                    int1 = script8711(int1, int3, int5, IF_GETWIDTH(int16));
                    int2 = script8711(int2, int4, int6, IF_GETHEIGHT(int16));
                    IF_SETPOSITION(int1, int2, 0, 0, int15);
                    IF_SETSIZE(int5, int6, 0, 0, int15);
                    if ((IF_GETTRANS(int15) != int10)) {
                        IF_SETTRANS(int10, int15);
                        script8411(int13, 0);
                    };
                    if ((int9 == 1)) {
                        if ((struct_getparam(int14, 3521) == true)) {
                            if ((int10 == 1)) {
                                script8361(int13);
                            } else {
                                script8350(int17, int13, 1);
                            };
                        };
                        if ((int13 != 1008)) {
                            IF_SETONRESIZE(callback(script8782, int13, (int12 - 1), -2147483645, IF_GETX(int15), IF_GETY(int15), IF_GETWIDTH(int15), IF_GETHEIGHT(int15), 0), int15);
                            IF_CALLONRESIZE(int15);
                        };
                    } else if ((struct_getparam(int14, 3521) == true)) {
                        script8361(int13);
                    };
                } else {
                    switch (int13) {
                        case 1042:
                        case 1043:
                        case 1044: {
                            int9 = 0;
                            break;
                        }
                    };
                    if ((int9 == 1)) {
                        IF_SETHIDE(false, int15);
                    } else {
                        IF_SETHIDE(true, int15);
                    };
                };
                if ((struct_getparam(int14, 3533) == true)) {
                    script8393(int13, 0);
                };
            };
        };
        int12 = (int12 - 1);
    };
    if ((script8785() == 1)) {
        varbitclient_19931 = 3;
        varbitclient_19932 = 1;
        varbitclient_19933 = 0;
        script8753();
    } else {
        varbitclient_19931 = 3;
        varbitclient_19932 = 1;
        varbitclient_19933 = 3;
        script13875();
    };
    return;
}