//
function script9943(): void {
    var int0 = -1;
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    var int4 = false;
    var int5 = 0;
    var int6 = 0;
    var int7 = script20117(-1);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = IF_GETHIDE(struct_getparam(37398 as struct, 3503));
    if ((IF_GETWIDTH(comp(1477, 26)) <= (552 + script19630(0)))) {
        int8 = 1;
    };
    if ((IF_GETWIDTH(comp(1477, 26)) <= ((552 * 2) + script19630(0)))) {
        int9 = 1;
    };
    [int11, int12] = script9950();
    if (((varclient_3692 == 1) || (varclient_3693 == 1))) {
        int10 = 1;
    };
    while ((int2 < int3)) {
        int0 = enum_getvalue(0, 0, 7717 as cs2enum, int2);
        int1 = script10405(int0);
        if ((int1 != -1 as struct)) {
            if (((enum_getreversecount(0, 9010 as cs2enum, int0) > 0) && ((int10 == 0) || (script9932(int0) == 0)))) {
                int4 = false;
            } else {
                int4 = true;
            };
            IF_SETHIDE(int4, struct_getparam(int1, 3503));
            if ((script20451(int1) != 3)) {
                [int5, int6] = script8724(1, int0);
                IF_SETSIZE(int5, int6, 0, 0, struct_getparam(int1, 3503));
            };
            if (((((struct_getparam(int1, 3534) != -1) || (int0 == 9)) || (int0 == 12)) || (int0 == 17))) {
                if ((((int7 != -1 as dbrow) && (int0 == 32)) && (varplayer_12314 > 0))) {
                    IF_SETHIDE(int14, struct_getparam(int1, 3503));
                    if ((int8 == 0)) {
                        IF_SETPOSITION((int11 + 210), int12, 2, 2, struct_getparam(int1, 3503));
                        IF_SETSIZE((script19630(int8) - 210), 315, 0, 0, struct_getparam(int1, 3503));
                    } else {
                        int6 = (((IF_GETHEIGHT(comp(1477, 26)) - 275) - 315) - int12);
                        if ((int6 >= 315)) {
                            IF_SETPOSITION(int11, ((int12 + 315) + ((int6 - 315) / 2)), 2, 2, struct_getparam(int1, 3503));
                            IF_SETSIZE(script19630(int8), 315, 0, 0, struct_getparam(int1, 3503));
                        } else {
                            IF_SETPOSITION(0, 0, 0, 0, struct_getparam(int1, 3503));
                            IF_SETSIZE(350, 315, 0, 0, struct_getparam(int1, 3503));
                        };
                    };
                } else if ((struct_getparam(int1, 9398) == true)) {
                    if (((varbitclient_22877 == 0) || (varbitclient_22877 == varbitclient_60444))) {
                        IF_SETPOSITION(int11, int12, 2, 2, struct_getparam(int1, 3503));
                        IF_SETSIZE(210, 315, 0, 0, struct_getparam(int1, 3503));
                    } else if ((int8 == 0)) {
                        IF_SETPOSITION((int11 + 210), int12, 2, 2, struct_getparam(int1, 3503));
                        IF_SETSIZE(210, 315, 0, 0, struct_getparam(int1, 3503));
                    } else {
                        IF_SETPOSITION(int11, int12, 2, 2, struct_getparam(int1, 3503));
                        IF_SETSIZE(210, 315, 0, 0, struct_getparam(int1, 3503));
                    };
                } else if (((int8 == 0) && (varbitclient_60444 != 0))) {
                    IF_SETPOSITION((int11 + 210), int12, 2, 2, struct_getparam(int1, 3503));
                    IF_SETSIZE(210, 315, 0, 0, struct_getparam(int1, 3503));
                } else {
                    IF_SETPOSITION(int11, int12, 2, 2, struct_getparam(int1, 3503));
                    IF_SETSIZE(210, 315, 0, 0, struct_getparam(int1, 3503));
                };
            };
            if ((struct_getparam(int1, 3533) == true)) {
                script8393(int0, 0);
            };
            if ((struct_getparam(int1, 3521) == true)) {
                script8361(int0);
            };
            script12615(int0, 0);
            IF_SETONRESIZE(callback(script9933, int0, -2147483645), struct_getparam(int1, 3503));
            IF_CALLONRESIZE(struct_getparam(int1, 3503));
        };
        int2 = (int2 + 1);
    };
    if (((varbitclient_22877 - 1) == 28)) {
        varbitclient_22877 = (2 + 1);
    };
    if (((varbitclient_22877 != 0) && (int10 == 0))) {
        script10535((varbitclient_22877 - 1));
    };
    if ((int8 == 0)) {
        varbitclient_60445 = 1;
    } else {
        varbitclient_60445 = 0;
    };
    if (((varbitclient_60444 != 0) && (int10 == 0))) {
        if ((int8 == 0)) {
            script10535((varbitclient_60444 - 1));
        } else if ((varbitclient_22877 == 0)) {
            script10535((varbitclient_60444 - 1));
        } else {
            script8323((varbitclient_60444 - 1), 1);
        };
    };
    if ((IF_HASSUB(comp(1448, 3)) == 0)) {
        script8290(0);
    } else {
        script8288(varbitplayer_18994);
    };
    int1 = script10405(1003);
    script8135(1003);
    int1 = script10405(1032);
    IF_SETSIZE(552, 38, 0, 0, struct_getparam(int1, 3503));
    if ((varbitplayer_27168 == 1)) {
        IF_SETHIDE(true, struct_getparam(int1, 3503));
    } else if ((varbitplayer_29138 > 0)) {
        script8135(1032);
    } else {
        IF_SETHIDE(true, struct_getparam(int1, 3503));
    };
    int1 = script10405(1033);
    IF_SETSIZE(552, 38, 0, 0, struct_getparam(int1, 3503));
    if ((varbitplayer_27168 == 1)) {
        IF_SETHIDE(true, struct_getparam(int1, 3503));
    } else if ((varbitplayer_29139 > 0)) {
        script8135(1033);
    } else {
        IF_SETHIDE(true, struct_getparam(int1, 3503));
    };
    script9946();
    int1 = script10405(1006);
    IF_SETPOSITION(0, 28, 0, 2, struct_getparam(int1, 3503));
    IF_SETSIZE(552, (189 - 28), 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1004);
    IF_SETPOSITION(0, 0, 2, 0, struct_getparam(script10405(1004), 3503));
    IF_SETSIZE(275, 275, 0, 0, struct_getparam(int1, 3503));
    if ((varbitplayer_223 == 1)) {
        IF_SETHIDE(true, comp(745, 7));
    };
    int1 = script10405(1015);
    IF_SETPOSITION(275, 0, 2, 0, struct_getparam(int1, 3503));
    int1 = script10405(1029);
    IF_SETPOSITION((275 + 150), 0, 2, 0, struct_getparam(int1, 3503));
    int1 = script10405(1016);
    IF_SETPOSITION(0, 0, 0, 0, struct_getparam(int1, 3503));
    if ((MAP_MEMBERS() == 0)) {
        int13 = IF_GETHEIGHT(struct_getparam(int1, 3503));
    } else {
        int13 = 0;
    };
    int1 = script10405(1024);
    IF_SETPOSITION(0, int13, 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1001);
    IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1017);
    IF_SETPOSITION(0, 0, 0, 0, struct_getparam(int1, 3503));
    script12615(28, 1);
    script20499();
    int1 = script10405(1037);
    IF_SETPOSITION(0, (275 + 20), 0, 0, struct_getparam(script10405(1037), 3503));
    IF_SETSIZE(275, 189, 1, 1, struct_getparam(int1, 3503));
    script9951();
    IF_SENDTOFRONT(struct_getparam(int1, 3503));
    int1 = script10405(1009);
    IF_SETPOSITION(0, (275 + 8), 2, 0, struct_getparam(int1, 3503));
    if ((int9 == 1)) {
        IF_SETSIZE(250, 84, 0, 0, struct_getparam(int1, 3503));
    } else {
        IF_SETSIZE(250, (3 * (38 + 1)), 0, 0, struct_getparam(int1, 3503));
    };
    int1 = script10405(1038);
    IF_SETPOSITION(0, (275 + 98), 2, 0, struct_getparam(int1, 3503));
    if ((int9 == 1)) {
        IF_SETSIZE(250, 84, 0, 0, struct_getparam(int1, 3503));
    } else {
        IF_SETSIZE(250, (3 * (38 + 1)), 0, 0, struct_getparam(int1, 3503));
    };
    script6731(1, 0);
    int1 = script10405(1025);
    IF_SETPOSITION(150, 200, 2, 0, struct_getparam(int1, 3503));
    int1 = script10405(1028);
    IF_SETPOSITION(0, 0, 0, 0, struct_getparam(int1, 3503));
    IF_SETSIZE(struct_getparam(30827 as struct, 3484), struct_getparam(30827 as struct, 3485), 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1030);
    IF_SETPOSITION(0, 0, 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1031);
    if ((varbitplayer_60446 == 1)) {
        IF_SETPOSITION((275 - 30), 2, 2, 0, struct_getparam(int1, 3503));
    } else {
        IF_SETPOSITION(5, 252, 2, 0, struct_getparam(int1, 3503));
    };
    int1 = script10405(1000);
    IF_SETPOSITION(0, 0, 0, 0, struct_getparam(int1, 3503));
    IF_SETSIZE(0, 0, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1002);
    IF_SETPOSITION(0, 0, 2, 2, struct_getparam(int1, 3503));
    IF_SETSIZE(script19631(int8), 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1010);
    if ((varbitplayer_60446 == 1)) {
        IF_SETPOSITION(73, 246, 2, 0, struct_getparam(int1, 3503));
    } else {
        IF_SETPOSITION(73, 249, 2, 0, struct_getparam(int1, 3503));
    };
    int1 = script10405(1012);
    IF_SETPOSITION(0, 96, 1, 0, struct_getparam(int1, 3503));
    int1 = script10405(1013);
    IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1052);
    IF_SETPOSITION(0, -100, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1018);
    IF_SETPOSITION(0, 96, 1, 0, struct_getparam(int1, 3503));
    int1 = script10405(1007);
    IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1047);
    IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1021);
    IF_SETPOSITION(0, 180, 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1050);
    IF_SETPOSITION(0, 140, 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1023);
    IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1026);
    IF_SETPOSITION(0, 0, 1, 0, struct_getparam(int1, 3503));
    int1 = script10405(1040);
    IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int1, 3503));
    int1 = script10405(1041);
    IF_SETPOSITION(100, 0, 0, 0, struct_getparam(int1, 3503));
    int1 = script10405(1051);
    IF_SETPOSITION(0, 0, 1, 0, struct_getparam(int1, 3503));
    int1 = script10405(1053);
    IF_SETPOSITION(0, 192, 1, 1, struct_getparam(int1, 3503));
    if ((int10 == 1)) {
        script9944();
    };
    return;
}