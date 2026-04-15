//
function script3379(int0: int, int1: unknown_int, int2: unknown_int): void {
    if (((int2 == 1) && (script8785() == 1))) {
        return;
    };
    if (((varbitplayer_38842 == 1) && (enum_getreversecount(0, 13330 as cs2enum, int0) > 0))) {
        return;
    };
    if (((varbitplayer_27169 == 1) && (enum_getreversecount(0, 9011 as cs2enum, int0) > 0))) {
        return;
    };
    if ((varbitplayer_38842 == 1)) {
        switch (int0) {
            case 32: {
                if ((varbitclient_41275 == 1)) {
                    return;
                };
                if ((IF_HASSUB(script8875(4)) == 1)) {
                    return;
                };
                if ((varbitclient_44897 == 1)) {
                    script8732(varbitclient_44897);
                };
                break;
            }
            case 5: {
                var int0 = varbitclient_52490;
                break;
            }
        };
        if ((script15851(int0) == 1)) {
            return;
        };
    };
    var int3 = -1 as struct;
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var int6 = -1 as struct;
    var int7 = comp(-1, 65535);
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = ENUM_GETOUTPUTCOUNT(7718 as cs2enum);
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = -1 as dbrow;
    script8306();
    if ((((script8314(int0) == -1) || (varbitplayer_38842 == 1)) || (varbitplayer_27169 == 1))) {
        int3 = script10405(int0);
        if ((int3 == -1 as struct)) {
            return;
        };
        [int20, int21] = script20539(struct_getparam(int3, 3494));
        int4 = struct_getparam(int3, 3503);
        if ((int4 == comp(-1, 65535))) {
            return;
        };
        IF_SETHIDE(false, int4);
        if ((varbitplayer_38842 == 1)) {
            script16576(int3, int0);
            script2638();
            script8390(int0);
        } else if ((varbitplayer_27169 == 0)) {
            [int13, int14, int15, int16, int17, int18] = script8725(varclient_4108, int0);
            if ((varclient_4108 == 8)) {
                int13 = script8711(int13, int15, int17, IF_GETWIDTH(comp(1477, 27)));
                int14 = script8711(int14, int16, int18, IF_GETHEIGHT(comp(1477, 27)));
            };
            if ((script12612(int3) == true)) {
                IF_SETPOSITION(int13, int14, 0, 0, int4);
                IF_SETSIZE(int17, int18, 0, 0, int4);
                script8361(int0);
                while ((int12 < int11)) {
                    int5 = enum_getvalue(0, 0, 7718 as cs2enum, int12);
                    if (((int5 != -1) && (int5 != int0))) {
                        int6 = script10405(int5);
                        if ((script12612(int6) == true)) {
                            int7 = struct_getparam(int6, 3503);
                            if (((int7 != comp(-1, 65535)) && (IF_GETHIDE(int7) == false))) {
                                int9 = script8396(int4, int7);
                                if ((((int9 > int10) && (IF_GETWIDTH(int7) >= int20)) && (IF_GETHEIGHT(int7) >= int21))) {
                                    int10 = int9;
                                    int8 = int5;
                                };
                            };
                        };
                    };
                    int12 = (int12 + 1);
                };
            };
            if (((int8 != -1) && (int10 >= ((int17 * int18) / 3)))) {
                script8356(int8, int0, 1000, int1, 1);
                if ((int1 == 0)) {
                    script8390(int8);
                };
            } else {
                [int13, int14, int17, int18, int19] = script8382(int13, int14, int17, int18, int0, 0, 1);
                if ((int19 == 1)) {
                    script8387(int13, int14, int17, int18, int0);
                    script173(int0);
                } else if ((script12612(int3) == false)) {
                    [int13, int14, int15, int16, int17, int18] = script8725(1, int0);
                    if ((varclient_4108 == 8)) {
                        int13 = script8711(int13, int15, int17, IF_GETWIDTH(comp(1477, 27)));
                        int14 = script8711(int14, int16, int18, IF_GETHEIGHT(comp(1477, 27)));
                    };
                    [int13, int14, int17, int18, int19] = script8382(int13, int14, int17, int18, int0, 0, 1);
                    script8387(int13, int14, int17, int18, int0);
                    script173(int0);
                } else if ((int8 != -1)) {
                    script8356(int8, int0, 1000, 0, 1);
                    script8390(int8);
                } else {
                    script8786(int0, 1);
                };
            };
        } else {
            if (((((struct_getparam(int3, 3534) != -1) || (int0 == 9)) || (int0 == 12)) || (int0 == 17))) {
                int22 = script20117(-1);
                if (((struct_getparam(int3, 9398) == true) && (int22 == -1 as dbrow))) {
                    if ((varbitclient_60445 == 1)) {
                        if ((varbitclient_60444 == varbitclient_22877)) {
                            varbitclient_22877 = 0;
                        };
                        if (((varbitclient_60444 != 0) && (varbitclient_60444 != (int0 + 1)))) {
                            script8323((varbitclient_60444 - 1), 1);
                        };
                        varbitclient_60444 = (int0 + 1);
                        [int13, int14] = script9950();
                        IF_SETPOSITION(int13, int14, 2, 2, struct_getparam(int3, 3503));
                        if ((varbitclient_22877 != 0)) {
                            script10535((varbitclient_22877 - 1));
                        };
                    } else {
                        if (((varbitclient_22877 != 0) && (varbitclient_22877 != (int0 + 1)))) {
                            script8323((varbitclient_22877 - 1), 1);
                        };
                        varbitclient_22877 = (int0 + 1);
                        [int13, int14] = script9950();
                        IF_SETPOSITION(int13, int14, 2, 2, struct_getparam(int3, 3503));
                    };
                } else {
                    [int13, int14] = script9950();
                    if ((varbitclient_60445 == 1)) {
                        if ((varbitclient_60444 > 0)) {
                            int13 = (int13 + 210);
                        };
                        IF_SETPOSITION(int13, int14, 2, 2, struct_getparam(int3, 3503));
                    };
                    if ((((varbitclient_22877 != 0) && (varbitclient_22877 != (int0 + 1))) && (script1423(int0, int22) == 0))) {
                        script8323((varbitclient_22877 - 1), 1);
                    };
                    if ((script1423(int0, int22) == 0)) {
                        varbitclient_22877 = (int0 + 1);
                    };
                };
            };
            script8390(int0);
            if ((int0 == 17)) {
                script8144();
            };
        };
        script8705(int0);
        script8157(int0);
        script10161(int0);
    } else if ((int1 == 1)) {
        script8313(int0);
    };
    return;
}