//
function script2890(): void {
    var int0 = -1 as npc;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 1;
    var int9 = 0;
    var int10 = comp(476, 0);
    while ((int8 <= ENUM_GETOUTPUTCOUNT(929 as cs2enum))) {
        if ((((((((int8 != varclient_1080) && (int8 != varclient_1081)) && (int8 != varclient_1082)) && (int8 != varclient_1083)) && (int8 != varclient_1084)) && (int8 != varclient_1085)) && (TESTBIT(varplayer_1709, int8) == 1))) {
            int0 = enum_getvalue(0, 32, 929 as cs2enum, int8);
            if (((int0 != -1 as npc) && (int1 < 6))) {
                int1 = (int1 + 1);
                if ((varclient_1080 == -1)) {
                    varclient_1080 = int8;
                } else if ((varclient_1081 == -1)) {
                    varclient_1081 = int8;
                } else if ((varclient_1082 == -1)) {
                    varclient_1082 = int8;
                } else if ((varclient_1083 == -1)) {
                    varclient_1083 = int8;
                } else if ((varclient_1084 == -1)) {
                    varclient_1084 = int8;
                } else if ((varclient_1085 == -1)) {
                    varclient_1085 = int8;
                };
                int0 = -1 as npc;
            };
        };
        int8 = (int8 + 1);
    };
    int8 = 1;
    var int11 = 0;
    while ((int8 <= 6)) {
        int10 = enum_getvalue(0, 9, 925 as cs2enum, int8);
        if (((int10 != comp(476, 0)) && (IF_GETGRAPHIC(int10) == -1 as graphic))) {
            switch (int8) {
                case 1: {
                    int0 = enum_getvalue(0, 32, 929 as cs2enum, varclient_1080);
                    break;
                }
                case 2: {
                    int0 = enum_getvalue(0, 32, 929 as cs2enum, varclient_1081);
                    break;
                }
                case 3: {
                    int0 = enum_getvalue(0, 32, 929 as cs2enum, varclient_1082);
                    break;
                }
                case 4: {
                    int0 = enum_getvalue(0, 32, 929 as cs2enum, varclient_1083);
                    break;
                }
                case 5: {
                    int0 = enum_getvalue(0, 32, 929 as cs2enum, varclient_1084);
                    break;
                }
                case 6: {
                    int0 = enum_getvalue(0, 32, 929 as cs2enum, varclient_1085);
                    break;
                }
            };
            if ((int0 != -1 as npc)) {
                stack(enum_getvalue(32, 23, 932 as cs2enum, int0));
                stack(int10);
                IF_SETGRAPHIC();
                stack(32);
                stack(36);
                stack(930);
                stack(int0);
                enum_getvalue();
                stack(9);
                stack(9);
                stack(926);
                stack(int10);
                enum_getvalue();
                IF_SETTEXT(stack());
                stack(8799);
                stack(32);
                stack(36);
                stack(930);
                stack(int0);
                enum_getvalue();
                IF_SETONMOUSEREPEAT(callback(script-1, -2147483645, -2147483643), int10);
                if (((int10 != 31195149) && (int10 != comp(476, 14)))) {
                    IF_SETHIDE(false, comp(476, 17));
                    IF_SETPOSITION(IF_GETX(int10), IF_GETY(int10), 0, 0, comp(476, 17));
                    script1725(comp(476, 17));
                    int11 = (CLIENTCLOCK() + 150);
                    IF_SETONTIMER(callback(script2891, int11, int10), int10);
                };
            };
        };
        int8 = (int8 + 1);
    };
    return;
}