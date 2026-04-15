//
function script8471(int0: component, int1: inv): void {
    var int2 = -1 as inv;
    IF_SETONRESIZE(callback(script8470, -2147483645, int1), int0);
    if ((int1 == 743)) {
        int2 = 742 as inv;
    } else if ((int1 == 818 as inv)) {
        int2 = 816 as inv;
    } else {
        int2 = int1;
        var int1 = -1 as inv;
    };
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    var int11 = comp(-1, 65535);
    var int12 = comp(-1, 65535);
    var int13 = comp(-1, 65535);
    var int14 = comp(-1, 65535);
    [int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14] = script8472(int0);
    if ((int11 != comp(-1, 65535))) {
        CC_DELETEALL(int11);
    };
    if ((int13 != comp(-1, 65535))) {
        CC_DELETEALL(int13);
    };
    if ((int14 != comp(-1, 65535))) {
        CC_DELETEALL(int14);
    };
    if (((((int7 == comp(-1, 65535)) || (int8 == comp(-1, 65535))) || (int9 == comp(-1, 65535))) || (int4 == comp(-1, 65535)))) {
        return;
    };
    if ((CC_FIND(int7, 0) == 0)) {
        script8469(int0, int2);
    };
    var int15 = 0;
    var int16 = script6431();
    if ((int6 != comp(-1, 65535))) {
        if ((int16 == true)) {
            int15 = 42;
        } else {
            int15 = 33;
        };
        IF_SETPOSITION(0, 0, 1, 2, int6);
        IF_SETSIZE(0, int15, 1, 0, int6);
    };
    var int17 = IF_GETWIDTH(int0);
    var int18 = MAX((IF_GETHEIGHT(int0) - int15), 0);
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    if (((int16 == true) && ((int0 == comp(1464, 0)) || (int0 == comp(1462, 3))))) {
        int21 = 1;
    };
    var int22 = 0;
    if (((int1 == 818 as inv) && (varbitclient_35134 == 1))) {
        int22 = 2;
        IF_SETSIZE(0, 0, 1, 1, int0);
        if ((int3 != comp(-1, 65535))) {
            IF_SETHIDE(false, int3);
            IF_SETPOSITION(0, 0, 0, 0, int3);
            IF_SETSIZE(220, 0, 1, 1, int3);
        };
        if ((int5 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 2, 0, int5);
            IF_SETSIZE(0, 0, 0, 1, int5);
        };
        IF_SETPOSITION(((2 + 4) - 2), (((IF_GETHEIGHT(comp(1843, 296)) + 4) + 2) + 8), 2, 2, int4);
        IF_SETSIZE((220 - (2 * ((2 + 4) - 2))), 200, 0, 0, int4);
        int19 = ((IF_GETWIDTH(int4) - 140) / 2);
        if ((int10 != comp(-1, 65535))) {
            IF_SETHIDE(false, int10);
            IF_SETPOSITION(0, 0, 1, 1, int10);
            IF_SETSIZE(140, 200, 0, 0, int10);
            script13376(int10, 0, int21);
        };
        IF_SETPOSITION(0, 0, 1, 1, int7);
        IF_SETSIZE(0, 0, 1, 1, int7);
        IF_SETPOSITION(0, 0, 1, 1, int9);
        IF_SETSIZE(0, 0, 1, 1, int9);
        IF_SETPOSITION(0, 0, 1, 1, int8);
        IF_SETSIZE(0, 0, 1, 1, int8);
        if ((int11 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 1, 1, int11);
            IF_SETSIZE(0, 0, 1, 1, int11);
        };
        if ((int12 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 1, 1, int12);
            IF_SETSIZE(0, 0, 1, 1, int12);
        };
    } else if (((int21 == 0) && ((int1 != -1 as inv) || (((int3 != comp(-1, 65535)) && (int17 >= 200)) && (int18 >= 320))))) {
        int22 = 3;
        int19 = (int17 - 200);
        int20 = (int18 - 320);
        IF_SETSIZE(0, 0, 1, 1, int0);
        if ((int3 != comp(-1, 65535))) {
            IF_SETHIDE(false, int3);
            IF_SETPOSITION(0, 0, 0, 0, int3);
            IF_SETSIZE(0, int15, 1, 1, int3);
        };
        if ((int5 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 2, 0, int5);
            IF_SETSIZE(0, 0, 0, 1, int5);
        };
        IF_SETPOSITION(0, 0, 0, 0, int4);
        IF_SETSIZE(0, int15, 1, 1, int4);
        if ((int10 != comp(-1, 65535))) {
            IF_SETHIDE(true, int10);
        };
        IF_SETPOSITION(0, 0, 1, 1, int7);
        IF_SETSIZE((int19 + 200), (int20 + 320), 0, 0, int7);
        IF_SETPOSITION(0, 0, 1, 1, int9);
        IF_SETSIZE((int19 + 200), (int20 + 320), 0, 0, int9);
        IF_SETPOSITION(0, 0, 1, 1, int8);
        IF_SETSIZE((int19 + 200), (int20 + 320), 0, 0, int8);
        if ((int11 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 1, 1, int11);
            IF_SETSIZE((int19 + 200), (int20 + 320), 0, 0, int11);
        };
        if ((int12 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 1, 1, int12);
            IF_SETSIZE((int19 + 200), (int20 + 320), 0, 0, int12);
        };
        int19 = 0;
    } else if (((((varbitplayer_51268 == 1) && (varplayer_7879 != 1)) && (int21 == 1)) || (((int10 != comp(-1, 65535)) && (int17 >= 140)) && (int18 >= 200)))) {
        int22 = 2;
        IF_SETSIZE(0, 0, 1, 1, int0);
        if ((int3 != comp(-1, 65535))) {
            IF_SETHIDE(true, int3);
        };
        int19 = ((200 - 140) / 2);
        IF_SETPOSITION(0, 0, 1, 0, int4);
        IF_SETSIZE(200, int15, 0, 1, int4);
        if ((int16 == true)) {
            IF_SETPOSITION(0, (0 - (int15 / 2)), 1, 1, int4);
            IF_SETSIZE(200, 240, 0, 0, int4);
            int20 = 240;
        } else {
            int20 = 200;
        };
        if ((int17 >= 160)) {
            IF_SETPOSITION(0, 0, 1, 1, int10);
            IF_SETSIZE(140, int20, 0, 0, int10);
        } else {
            IF_SETPOSITION(int19, 0, 0, 1, int10);
            IF_SETSIZE(((int17 + 140) - 160), int20, 0, 0, int10);
        };
        if (((int5 != comp(-1, 65535)) && (int16 == false))) {
            IF_SETPOSITION(0, 0, 2, 0, int5);
            IF_SETSIZE(0, int15, 0, 1, int5);
        };
        script13376(int10, 1, int21);
        IF_SETHIDE(false, int10);
        IF_SETPOSITION(0, 0, 1, 1, int7);
        IF_SETSIZE(0, int20, 1, 0, int7);
        IF_SETPOSITION(0, 0, 1, 1, int9);
        IF_SETSIZE(0, int20, 1, 0, int9);
        IF_SETPOSITION(0, 0, 1, 1, int8);
        IF_SETSIZE(0, int20, 1, 0, int8);
        if ((int11 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 1, 1, int11);
            IF_SETSIZE(0, int20, 1, 0, int11);
        };
        if ((int12 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 1, 1, int12);
            IF_SETSIZE(0, int20, 1, 0, int12);
        };
    } else {
        if ((int3 != comp(-1, 65535))) {
            IF_SETHIDE(true, int3);
        };
        if ((int10 != comp(-1, 65535))) {
            IF_SETHIDE(true, int10);
        };
        IF_SETSIZE(0, 0, 1, 1, int0);
        IF_SETPOSITION(0, 0, 0, 0, int4);
        IF_SETSIZE(0, 0, 1, 1, int4);
        IF_SETPOSITION(0, 0, 1, 1, int8);
        IF_SETSIZE(0, 0, 1, 1, int8);
        if ((int11 != comp(-1, 65535))) {
            IF_SETPOSITION(0, 0, 1, 1, int11);
            IF_SETSIZE(0, 0, 1, 1, int11);
        };
        IF_SETPOSITION(0, 0, 1, 1, int7);
        IF_SETSIZE(0, 0, 1, 1, int7);
        IF_SETPOSITION(0, 0, 1, 1, int9);
        IF_SETSIZE(0, 0, 1, 1, int9);
    };
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 36;
    var int28 = (36 + 2);
    if (((int16 == true) && (int22 == 0))) {
        int28 = (36 + 4);
    };
    var int29 = 0;
    var int30 = INV_SIZE(int2);
    var int31 = 0;
    var int32 = 0;
    while ((int31 < int30)) {
        if (((script8477(int31, int2) == 1) && (script13139(int1, int31) == 0))) {
            int32 = (int32 + 1);
        };
        int31 = (int31 + 1);
    };
    define_array(int32);
    var int33 = 0;
    switch (int22) {
        case 3: {
            script1463(int7, int9, int8, int1);
            break;
        }
        case 1: {
            script1464(int7, int9, int8, int1);
            break;
        }
        case 2: {
            script1465(int7, int9, int8, int1, int19, int17, int21);
            break;
        }
        default: {
            int17 = IF_GETWIDTH(int4);
            int18 = IF_GETHEIGHT(int4);
            int33 = (int18 - (2 + 2));
            [int23, int25, int26] = script8107(int17, int27);
            int23 = MIN(int23, int32);
            int24 = (int32 / int23);
            if ((MODULO(int32, int23) > 0)) {
                int24 = (int24 + 1);
            };
            if ((((int24 * int28) - 2) > int33)) {
                int29 = 1;
                IF_SETSIZE(16, int15, 1, 1, int4);
                if ((int5 != comp(-1, 65535))) {
                    IF_SETPOSITION(0, 0, 2, 0, int5);
                    IF_SETSIZE(16, int15, 0, 1, int5);
                };
            } else if ((int5 != comp(-1, 65535))) {
                IF_SETPOSITION(0, 0, 2, 0, int5);
                IF_SETSIZE(0, int15, 0, 1, int5);
            };
            int17 = IF_GETWIDTH(int4);
            int18 = IF_GETHEIGHT(int4);
            int33 = (int18 - (2 + 2));
            [int23, int25, int26] = script8107(int17, int27);
            int23 = MIN(int23, int32);
            int24 = (int32 / int23);
            if ((MODULO(int32, int23) > 0)) {
                int24 = (int24 + 1);
            };
            int31 = 0;
            while ((int31 < int23)) {
                pop_array(int31, script8108(int25, int26, int31));
                int31 = (int31 + 1);
            };
            break;
        }
    };
    if ((int6 != comp(-1, 65535))) {
        switch (int6) {
            case 95944721: {
                script16559(comp(1464, 19), 3);
                break;
            }
            case 95813665: {
                script16559(comp(1462, 35), 3);
                break;
            }
        };
    };
    int31 = -1;
    if ((int1 == 818 as inv)) {
        while ((CC_FIND(int8, ++int31) == 1)) {
            cc_setparam(8968, -1);
        };
    };
    int31 = 0;
    var int34 = 0;
    var int35 = -1 as obj;
    var int36 = 0;
    var int37 = -1 as obj;
    var int38 = -1 as struct;
    var string0 = "";
    var int39 = 1;
    var int40 = 0;
    var string1 = "";
    var string2 = "";
    var int41 = 2;
    while ((int31 < int30)) {
        int37 = -1 as obj;
        int38 = -1 as struct;
        if ((CC_FIND[1](int7, int31) == 1)) {
            if (((int8 == comp(517, 289)) && (TESTBIT(varplayer_6954, int31) == 1))) {
                CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                CC_SETGRAPHIC(29661 as graphic);
            };
            if ((CC_FIND(int8, int31) == 1)) {
                if ((script8477(int31, int2) == 0)) {
                    CC_SETPOSITION[1](0, 0, 0, 0);
                    CC_SETSIZE[1](0, 0, 0, 0);
                    CC_SETHIDE[1](true);
                    if ((CC_FIND[1](int9, int31) == 1)) {
                        CC_SETPOSITION[1](0, 0, 0, 0);
                        CC_SETSIZE[1](0, 0, 0, 0);
                        CC_SETHIDE[1](true);
                    };
                    CC_SETPOSITION(0, 0, 0, 0);
                    CC_SETSIZE(0, 0, 0, 0);
                    CC_SETHIDE(true);
                } else {
                    int35 = INV_GETOBJ(int2, int31);
                    int36 = INV_GETNUM(int2, int31);
                    if ((int1 != -1 as inv)) {
                        int37 = INV_GETOBJ(int1, int31);
                        if ((int37 != -1 as obj)) {
                            if ((item_getparam(int37, 4949) == 1)) {
                                int37 = enum_getreverseindex(33, 33, 9904 as cs2enum, int37, 0);
                            } else {
                                int37 = script13427(int37, int1);
                            };
                        };
                    };
                    if ((int22 == 0)) {
                        if ((script13139(int1, int31) == 0)) {
                            CC_SETPOSITION[1](push_array(MODULO(int34, int23)), (((int34 / int23) * int28) + 2), 0, 0);
                            if ((CC_FIND[1](int9, int31) == 1)) {
                                CC_SETPOSITION[1](push_array(MODULO(int34, int23)), (((int34 / int23) * int28) + 2), 0, 0);
                            };
                            if ((int16 == true)) {
                                CC_SETPOSITION(push_array(MODULO(int34, int23)), ((((int34 / int23) * int28) + 2) + 2), 0, 0);
                            } else {
                                CC_SETPOSITION((push_array(MODULO(int34, int23)) + 2), ((((int34 / int23) * int28) + 2) + 2), 0, 0);
                            };
                            int34 = (int34 + 1);
                        } else {
                            CC_SETPOSITION[1]((-2 * 36), (-2 * 36), 0, 0);
                            CC_SETPOSITION((CC_GETX[1]() + 2), (CC_GETY[1]() + 2), 0, 0);
                            if ((CC_FIND[1](int9, int31) == 1)) {
                                CC_SETPOSITION[1]((-2 * 36), (-2 * 36), 0, 0);
                            };
                        };
                    };
                    if ((int35 != -1 as obj)) {
                        script12112(int35, INV_GETNUM(int2, int31), int2, int31);
                        CC_SETTRANS(0);
                        switch (int8) {
                            case 33882140: {
                                if (((((((((((item_getparam(int35, 2091) == false) || (strcmp(item_getparam(int35, 528), "Remove") == 0)) || (strcmp(item_getparam(int35, 529), "Remove") == 0)) || (strcmp(item_getparam(int35, 530), "Remove") == 0)) || (strcmp(item_getparam(int35, 531), "Remove") == 0)) || (strcmp(item_getparam(int35, 1211), "Remove") == 0)) || (strcmp(item_getparam(int35, 6712), "Remove") == 0)) || (strcmp(item_getparam(int35, 6713), "Remove") == 0)) || (strcmp(item_getparam(int35, 6714), "Remove") == 0)) || (item_getparam(int35, 9058) == true))) {
                                    CC_SETOP(1, "Remove to bank");
                                    CC_SETOP(7, "Remove to inventory");
                                };
                                if ((item_getparam(int35, 4594) == 1)) {
                                    CC_SETOP(2, "Fill from bank");
                                    CC_SETOP(3, "Empty to bank");
                                };
                                CC_SETOP(10, "Examine");
                                break;
                            }
                            case 89587808:
                            case 89587798: {
                                CC_SETOPBASE("");
                                CC_SETONOP(callback());
                                CC_SETDRAGGABLE(-1, -1);
                                CC_SETONDRAG(callback());
                                CC_SETONDRAGCOMPLETE(callback());
                                CC_SETOP(10, "Examine");
                                script14994(int35, int2, int31, int37, int1, 0);
                                break;
                            }
                            case 33882401: {
                                CC_SETONMOUSEREPEAT(callback(script14392, int35, int2, -2147483645, -2147483643));
                                CC_SETONOP(callback(script14393, int2, -2147483645, -2147483643, -2147483644));
                                CC_SETDRAGGABLE(-1, -1);
                                CC_SETONDRAG(callback());
                                CC_SETONDRAGCOMPLETE(callback());
                                CC_SETOP(1, "Remove");
                                CC_SETOP(10, "Examine");
                                cc_setparam(7540, 0);
                                cc_setparam(7541, int35);
                                cc_setparam(7542, int31);
                                cc_setparam(7543, int2);
                                break;
                            }
                            default: {
                                if ((int1 != -1 as inv)) {
                                    script14994(int35, int2, int31, int37, int1, 0);
                                    CC_SETOPBASE("");
                                    CC_SETONOP(callback());
                                    CC_SETDRAGGABLE(-1, -1);
                                    CC_SETONDRAG(callback());
                                    CC_SETONDRAGCOMPLETE(callback());
                                } else {
                                    if ((item_getparam(int35, 2091) == false)) {
                                        CC_SETOP(1, "Remove");
                                    };
                                    while ((int39 <= 8)) {
                                        [int40, string1] = script3290(int35, int39, 0, -1);
                                        if ((int40 == 1)) {
                                            CC_SETOP((int39 + 1), string1);
                                        };
                                        int39 = (int39 + 1);
                                    };
                                    int39 = 1;
                                };
                                CC_SETOP(10, "Examine");
                                break;
                            }
                        };
                    } else {
                        script9222(-1 as obj, -1);
                        CC_SETGRAPHIC(script8478(int1, int31, 0));
                        CC_SETSIZE((36 - 4), (32 - 2), 0, 0);
                        if (((int16 == true) && ((CC_GETLAYER() == comp(1462, 31)) || (CC_GETLAYER() == comp(1464, 15))))) {
                            CC_SETSIZE(44, 39, 0, 0);
                        };
                        if ((script13139(int1, int31) == 1)) {
                            CC_SETTRANS(204);
                            if ((int1 == 818 as inv)) {
                                string2 = "No cosmetic appearance";
                                CC_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -2147483643));
                            };
                        } else if ((int1 != -1 as inv)) {
                            CC_SETTRANS(127);
                        } else {
                            CC_SETTRANS(0);
                        };
                        CC_SETNOCLICKTHROUGH(true);
                        if ((int37 != -1 as obj)) {
                            script14994(int35, int2, int31, int37, int1, 0);
                        };
                    };
                    if ((int1 != -1 as inv)) {
                        if ((int1 == 818 as inv)) {
                            if ((script13139(int1, int31) == 0)) {
                                string0 = "Filter";
                                CC_SETOP(1, string0);
                                CC_SETONOP(callback(script13194, -2147483645, -2147483643, -2147483644));
                                if (((enum_getvalue(0, 33, 8043, int31) != -1) && (int37 != enum_getvalue(0, 33, 8043 as cs2enum, int31)))) {
                                    CC_SETOP(4, "Hide slot");
                                };
                                CC_SETTRANS(127);
                                if ((int37 == -1 as obj)) {
                                    script14994(-1 as obj, -1 as inv, -1, 39753 as obj, int1, 0);
                                } else {
                                    int38 = item_getparam(int37, 4414);
                                };
                                int35 = INV_GETOBJ(94 as inv, int31);
                                if ((int35 != -1 as obj)) {
                                    if ((item_getparam(int35, 4949) == 1)) {
                                        int35 = enum_getreverseindex(33, 33, 9904 as cs2enum, int35, 0);
                                    } else {
                                        int35 = script13427(int35, int1);
                                    };
                                };
                                switch (int31) {
                                    case 18:
                                    case 14: {
                                        if ((int37 != -1 as obj)) {
                                            CC_SETGRAPHIC(script8478(int1, int31, 1));
                                            CC_SETTRANS(0);
                                            CC_SETOP(3, "Clear customisation");
                                            if ((((int38 != -1 as struct) && (item_getparam(int37, 2500) != -1 as struct)) && (item_getparam(int37, 2500) != 28387 as struct))) {
                                                if ((int16 == true)) {
                                                    CC_SETOP(5, "Recolour");
                                                } else {
                                                    CC_SETOP(5, "Recolour (SHIFT+Click)");
                                                };
                                                int41 = SETBIT(int41, 0);
                                                if ((int13 != comp(-1, 65535))) {
                                                    CC_CREATE[1](int13, 5, IF_GETNEXTSUBID(int13));
                                                    CC_SETSIZE[1](struct_getparam(35562, 3915), struct_getparam(35562, 3916), 0, 0);
                                                    CC_SETPOSITION[1](((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2)), ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2)), 0, 0);
                                                    CC_SETGRAPHIC[1](struct_getparam(35562, 3911));
                                                    CC_SETONMOUSEOVER[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                    CC_SETGRAPHIC[1](struct_getparam(35562, 3910));
                                                    CC_SETONMOUSELEAVE[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                };
                                            };
                                        };
                                        if (((int37 != INV_GETOBJ(817 as inv, int31)) || (script13103(int1, int31) != script13103(817 as inv, int31)))) {
                                            if ((int16 == true)) {
                                                CC_SETOP(2, "Undo change");
                                            } else {
                                                CC_SETOP(2, "Undo change (CTRL+Click)");
                                            };
                                            if ((int14 != comp(-1, 65535))) {
                                                CC_CREATE[1](int14, 5, IF_GETNEXTSUBID(int14));
                                                CC_SETSIZE[1](struct_getparam(35560, 3915), struct_getparam(35560, 3916), 0, 0);
                                                CC_SETPOSITION[1](((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2)), ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2)), 0, 0);
                                                CC_SETGRAPHIC[1](struct_getparam(35560, 3911));
                                                CC_SETONMOUSEOVER[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                CC_SETGRAPHIC[1](struct_getparam(35560, 3910));
                                                CC_SETONMOUSELEAVE[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                            };
                                            if (((int37 == -1 as obj) || ((int37 == INV_GETOBJ(817 as inv, int31)) && (script12779(int38, int37, script13103(int1, int31)) == 1)))) {
                                                if ((CC_FIND[1](int7, int31) == 1)) {
                                                    CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                    CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                    CC_SETGRAPHIC(24426 as graphic);
                                                    int41 = SETBIT(int41, 2);
                                                };
                                            } else if ((((int38 != -1 as struct) && (script6488(int38) == 1)) && (script12779(int38, int37, script13103(int1, int31)) == 1))) {
                                                if ((CC_FIND[1](int7, int31) == 1)) {
                                                    CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                    CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                    CC_SETGRAPHIC(24426 as graphic);
                                                    int41 = SETBIT(int41, 2);
                                                };
                                            } else if ((CC_FIND[1](int7, int31) == 1)) {
                                                int41 = CLEARBIT(int41, 1);
                                                cc_setparam(8968, script15769(int38));
                                                CC_SETGRAPHIC(script8478(int1, int31, 2));
                                                CC_SETTRANS(0);
                                                CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                CC_SETGRAPHIC(29661 as graphic);
                                                int41 = SETBIT(int41, 2);
                                            };
                                        };
                                        break;
                                    }
                                    case 3:
                                    case 5:
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 4:
                                    case 7:
                                    case 9:
                                    case 10: {
                                        if ((int37 == 39752 as obj)) {
                                            CC_SETGRAPHIC(script8478(int1, int31, 3));
                                            CC_SETTRANS(76);
                                        } else if (((int37 != int35) || ((int37 != -1 as obj) && (TESTBIT(varplayer_6870, int31) == 1)))) {
                                            CC_SETGRAPHIC(script8478(int1, int31, 1));
                                            CC_SETTRANS(0);
                                            CC_SETOP(3, "Clear customisation");
                                            if ((((int38 != -1 as struct) && (item_getparam(int37, 2500) != -1 as struct)) && (item_getparam(int37, 2500) != 28387 as struct))) {
                                                if ((int16 == true)) {
                                                    CC_SETOP(5, "Recolour");
                                                } else {
                                                    CC_SETOP(5, "Recolour (SHIFT+Click)");
                                                };
                                                int41 = SETBIT(int41, 0);
                                                if ((int13 != comp(-1, 65535))) {
                                                    CC_CREATE[1](int13, 5, IF_GETNEXTSUBID(int13));
                                                    CC_SETSIZE[1](struct_getparam(35562, 3915), struct_getparam(35562, 3916), 0, 0);
                                                    CC_SETPOSITION[1](((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2)), ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2)), 0, 0);
                                                    CC_SETGRAPHIC[1](struct_getparam(35562, 3911));
                                                    CC_SETONMOUSEOVER[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                    CC_SETGRAPHIC[1](struct_getparam(35562, 3910));
                                                    CC_SETONMOUSELEAVE[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                };
                                            } else if ((item_getparam(int37, 7896) != 0)) {
                                                CC_SETOP(5, script2519("Recolour", "Recolour (SHIFT+Click)"));
                                                if ((int13 != comp(-1, 65535))) {
                                                    CC_CREATE[1](int13, 5, IF_GETNEXTSUBID(int13));
                                                    CC_SETSIZE[1](struct_getparam(35562, 3915), struct_getparam(35562, 3916), 0, 0);
                                                    CC_SETPOSITION[1](((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2)), ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2)), 0, 0);
                                                    CC_SETGRAPHIC[1](struct_getparam(35562, 3911));
                                                    CC_SETONMOUSEOVER[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                    CC_SETGRAPHIC[1](struct_getparam(35562, 3910));
                                                    CC_SETONMOUSELEAVE[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                };
                                            };
                                        };
                                        if ((((int37 != INV_GETOBJ(817 as inv, int31)) || (TESTBIT(varplayer_6870, int31) != TESTBIT(varplayer_6869, int31))) || (script13103(int1, int31) != script13103(817 as inv, int31)))) {
                                            if ((int16 == true)) {
                                                CC_SETOP(2, "Undo change");
                                            } else {
                                                CC_SETOP(2, "Undo change (CTRL+Click)");
                                            };
                                            if ((int14 != comp(-1, 65535))) {
                                                CC_CREATE[1](int14, 5, IF_GETNEXTSUBID(int14));
                                                CC_SETSIZE[1](struct_getparam(35560, 3915), struct_getparam(35560, 3916), 0, 0);
                                                CC_SETPOSITION[1](((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2)), ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2)), 0, 0);
                                                CC_SETGRAPHIC[1](struct_getparam(35560, 3911));
                                                CC_SETONMOUSEOVER[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                                CC_SETGRAPHIC[1](struct_getparam(35560, 3910));
                                                CC_SETONMOUSELEAVE[1](callback(script688, -2147483645, -2147483643, CC_GETGRAPHIC[1]()));
                                            };
                                            if ((int37 == 39752 as obj)) {
                                                if ((CC_FIND[1](int7, int31) == 1)) {
                                                    CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                    CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                };
                                            } else if (((int37 == -1 as obj) || ((script12779(int38, int37, script13103(int1, int31)) == 1) && ((((int37 == int35) || (script13428(int35, int37) == 1)) && (TESTBIT(varplayer_6870, int31) == 0)) || ((int37 == INV_GETOBJ(817 as inv, int31)) && (TESTBIT(varplayer_6870, int31) == TESTBIT(varplayer_6869, int31))))))) {
                                                if ((CC_FIND[1](int7, int31) == 1)) {
                                                    CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                    CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                    CC_SETGRAPHIC(24426 as graphic);
                                                    int41 = SETBIT(int41, 2);
                                                };
                                            } else if ((int38 != -1 as struct)) {
                                                if (((script6488(int38) == 1) && (script12779(int38, int37, script13103(int1, int31)) == 1))) {
                                                    if ((CC_FIND[1](int7, int31) == 1)) {
                                                        CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                        CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                        CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                        CC_SETGRAPHIC(24426 as graphic);
                                                        int41 = SETBIT(int41, 2);
                                                    };
                                                } else if ((CC_FIND[1](int7, int31) == 1)) {
                                                    int41 = CLEARBIT(int41, 1);
                                                    cc_setparam(8968, script15769(int38));
                                                    CC_SETGRAPHIC(script8478(int1, int31, 2));
                                                    CC_SETTRANS(0);
                                                    CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                    CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                    CC_SETGRAPHIC(29661 as graphic);
                                                    int41 = SETBIT(int41, 2);
                                                };
                                            } else if ((INV_TOTAL(675 as inv, int37) > 0)) {
                                                if ((CC_FIND[1](int7, int31) == 1)) {
                                                    CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                    CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                    CC_SETGRAPHIC(24426 as graphic);
                                                    int41 = SETBIT(int41, 2);
                                                };
                                            } else if ((CC_FIND[1](int7, int31) == 1)) {
                                                int41 = CLEARBIT(int41, 1);
                                                cc_setparam(8968, 10640);
                                                CC_SETGRAPHIC(script8478(int1, int31, 2));
                                                CC_SETTRANS(0);
                                                CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                                CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                                CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                                CC_SETGRAPHIC(29661 as graphic);
                                                int41 = SETBIT(int41, 2);
                                            };
                                        };
                                        break;
                                    }
                                };
                            };
                        } else if (((int37 != -1 as obj) && (int37 != int35))) {
                            int38 = item_getparam(int37, 4414);
                            if (((int38 != -1 as struct) && (script6488(int38) == 1))) {
                                if ((CC_FIND[1](int7, int31) == 1)) {
                                    CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                    CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                    CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                    CC_SETGRAPHIC(24426 as graphic);
                                };
                            } else if ((CC_FIND[1](int7, int31) == 1)) {
                                CC_CREATE(int11, 5, IF_GETNEXTSUBID(int11));
                                CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
                                CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
                                CC_SETGRAPHIC(24427 as graphic);
                            };
                        };
                    };
                    if ((((int16 == true) && (int22 == 0)) && (CC_FIND[1](int7, int31) == 1))) {
                        CC_SETSIZE(39, 39, 0, 0);
                        CC_SETSIZE[1](39, 39, 0, 0);
                    };
                };
            };
        };
        int31 = (int31 + 1);
    };
    var int42 = 0;
    if (((int22 != 0) && (int21 == 0))) {
        IF_SETSCROLLSIZE(0, 0, int4);
        IF_SETSCROLLPOS(0, 0, int4);
    } else if ((int5 != comp(-1, 65535))) {
        CC_DELETEALL(int5);
        if ((int22 == 0)) {
            int42 = ((int24 * int28) + 2);
        } else if ((int21 == 1)) {
            int17 = 0;
            int42 = 0;
            int29 = 0;
        };
        IF_SETSCROLLSIZE(int17, int42, int4);
        if ((int29 == 1)) {
            script7791(int5, int4);
        };
    };
    if ((int1 == 818 as inv)) {
        if ((IF_FIND(comp(1843, 272)) == 1)) {
            if ((TESTBIT(int41, 0) == 1)) {
                CC_SETHIDE(true);
            } else {
                CC_SETHIDE(false);
            };
        };
        if ((IF_FIND(comp(1843, 312)) == 1)) {
            if ((TESTBIT(int41, 1) == 1)) {
                CC_SETTEXT("Apply");
            } else {
                CC_SETTEXT("Confirm");
            };
        };
        script13243(int8, int41);
    };
    if ((int0 == comp(1464, 0))) {
        script16556(comp(1464, 19), 3);
    } else if ((int0 == comp(1462, 3))) {
        script16556(comp(1462, 35), 3);
    };
    return;
}