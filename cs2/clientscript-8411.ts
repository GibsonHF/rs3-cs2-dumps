//
function script8411(int0: int, int1: unknown_int): void {
    script12610();
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = script8418(int2, int1);
    if ((int3 == -1 as struct)) {
        return;
    };
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
    var int15 = comp(-1, 65535);
    var int16 = comp(-1, 65535);
    var int17 = 0;
    var int18 = false;
    var int19 = false;
    var int20 = 0;
    var int21 = false;
    var int22 = false;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var string0 = "";
    var int26 = struct_getparam(int3, 3547);
    var int27 = struct_getparam(int3, 3548);
    var int28 = struct_getparam(int3, 3553);
    var int29 = struct_getparam(int3, 3555);
    var int30 = struct_getparam(int3, 3566);
    var int31 = struct_getparam(int3, 4461);
    var int32 = script1186();
    if ((int1 == 0)) {
        int4 = struct_getparam(int2, 3503);
        int5 = struct_getparam(int2, 3504);
        int6 = struct_getparam(int2, 3505);
        int7 = struct_getparam(int2, 3506);
        int8 = struct_getparam(int2, 6320);
        int9 = struct_getparam(int2, 3507);
        int10 = struct_getparam(int2, 4470);
        int11 = struct_getparam(int2, 3512);
        int12 = struct_getparam(int2, 3508);
        int13 = struct_getparam(int2, 3509);
        int14 = struct_getparam(int2, 3510);
        int15 = struct_getparam(int2, 3511);
        int16 = struct_getparam(int2, 3513);
        int17 = script20451(int2);
        int18 = struct_getparam(int2, 3526);
        int20 = script6213(int0);
        int21 = struct_getparam(int2, 3523);
        int22 = struct_getparam(int2, 3521);
    } else {
        int6 = struct_getparam(int2, 3516);
        int4 = struct_getparam(int2, 3514);
        int5 = struct_getparam(int2, 3515);
        int7 = struct_getparam(int2, 3517);
    };
    int19 = struct_getparam(int3, 3545);
    int24 = struct_getparam(int3, 3546);
    if ((((int1 == 1) && (script8314(int0) != -1)) || (int32 == 1))) {
        int25 = 1;
    };
    if ((((int0 == 32) && (int1 == 1)) && (varplayer_12314 > 0))) {
        int25 = 1;
        int24 = 0;
    };
    var int33 = struct_getparam(int3, 3652);
    var int34 = struct_getparam(int3, 3550);
    var int35 = int26;
    var int36 = script12616(int2);
    var int37 = 1;
    var int38 = false;
    if (((struct_getparam(int2, 3734) == 0) || (((int0 == 1000) && (IF_HASSUBOVERLAY(comp(1477, 31), 1421 as overlayinterface) == 1)) || ((int0 == 1004) && (varbitplayer_60446 == 1))))) {
        int37 = 0;
    } else if ((((struct_getparam(int2, 3734) == 1) && (varbitplayer_20188 == 1)) || ((int1 == 0) && (int36 == 1)))) {
        int37 = 0;
        int38 = true;
    };
    if ((int4 != comp(-1, 65535))) {
        IF_SETNOCLICKTHROUGH(int37, int4);
        CC_DELETEALL(int4);
        if (((((int36 == 1) && (int7 != comp(-1, 65535))) && (int1 == 0)) && (int32 == 0))) {
            CC_CREATE(int4, 5, 0);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETONMOUSEREPEAT(callback(script12589, int7));
        };
    };
    var int39 = (int34 + struct_getparam(int3, 3551));
    var int40 = (int35 + struct_getparam(int3, 3549));
    if ((int0 != 1000)) {
        IF_SETONMOUSEREPEAT(callback(script8415, int0), int7);
    };
    if ((int5 != comp(-1, 65535))) {
        CC_DELETEALL(int5);
        if ((struct_getparam(int3, 8094) == 1)) {
            IF_SETPOSITION(0, 0, 0, 0, int5);
            IF_SETSIZE(0, 0, 1, 1, int5);
            CC_CREATE(int5, 3, 0);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETCOLOUR(199695);
            CC_SETFILL(1);
            CC_SETTRANS(130);
            script12591(0, int2);
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETNOCLICKTHROUGH(int38);
            CC_CREATE(int5, 5, 1);
            CC_SETSIZE(0, struct_getparam(int3, 3547), 1, 1);
            CC_SETGRAPHIC(2749 as graphic);
            CC_SETCOLOUR(863806);
            CC_SETTRANS(0);
            script12591(0, int2);
            CC_SETHFLIP(false);
            CC_SETPOSITION(0, 0, 0, 2);
            CC_CREATE(int5, 5, 2);
            CC_SETSIZE(4, (struct_getparam(int3, 3547) - 2), 1, 0);
            CC_SETGRAPHIC(2752 as graphic);
            CC_SETPOSITION(2, 2, 0, 0);
            if ((int18 == true)) {
                script8412(int0);
            } else if ((int1 == 1)) {
                script8413(int4, int0);
            };
        } else {
            IF_SETPOSITION(int34, int35, 0, 0, int5);
            IF_SETSIZE(int39, int40, 1, 1, int5);
            CC_CREATE(int5, 5, 0);
            if ((int1 == 0)) {
                script12591(1, int2);
            };
            CC_SETPOSITION(0, struct_getparam(int3, 3586), 0, 0);
            CC_SETSIZE(0, struct_getparam(int3, 3586), 1, 1);
            CC_SETGRAPHIC(struct_getparam(int3, 3619));
            CC_SETTILING(true);
            if ((int24 == 2)) {
                if ((int18 == true)) {
                    script8412(int0);
                } else if ((int1 == 1)) {
                    script8413(int4, int0);
                };
            };
            CC_CREATE(int5, 5, 1);
            if ((int1 == 0)) {
                script12591(6, int2);
            };
            CC_SETPOSITION(0, 0, 0, 2);
            CC_SETSIZE(struct_getparam(int3, 3588), struct_getparam(int3, 3589), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3622));
            CC_CREATE(int5, 5, 2);
            if ((int1 == 0)) {
                script12591(6, int2);
            };
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETSIZE(struct_getparam(int3, 3588), struct_getparam(int3, 3589), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3622));
            CC_SETHFLIP(true);
        };
    };
    if ((int7 != comp(-1, 65535))) {
        CC_DELETEALL(int7);
        IF_SETPOSITION(0, 0, 0, 0, int7);
        IF_SETSIZE(16384, 16384, 2, 2, int7);
        if ((struct_getparam(int3, 8094) == 1)) {
            CC_CREATE(int7, 5, 0);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3552), int28, 0, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if ((int17 == 3)) {
                script8414(int0, 0);
            } else if ((int17 == 1)) {
                script8414(int0, 3);
            } else if ((int17 == 2)) {
                script8414(int0, 1);
            } else if ((int18 == true)) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 1);
            CC_SETPOSITION(0, 0, 2, 0);
            CC_SETSIZE(struct_getparam(int3, 3554), int29, 0, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if ((int17 == 3)) {
                script8414(int0, 2);
            } else if ((int17 == 1)) {
                script8414(int0, 4);
            } else if ((int17 == 2)) {
                script8414(int0, 1);
            } else if ((int18 == true)) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 2);
            CC_SETPOSITION(struct_getparam(int3, 3552), 0, 0, 0);
            CC_SETSIZE((struct_getparam(int3, 3554) + struct_getparam(int3, 3552)), int27, 1, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if (((int17 == 3) || (int17 == 2))) {
                script8414(int0, 1);
            } else if ((int17 == 1)) {
                script8414(int0, -1);
            } else if ((int18 == true)) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 3);
            CC_SETPOSITION(0, (int28 + struct_getparam(int3, 3586)), 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3550), ((struct_getparam(int3, 3560) + int28) + struct_getparam(int3, 3586)), 0, 1);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if (((int17 == 3) || (int17 == 1))) {
                script8414(int0, 3);
            } else if ((int17 == 2)) {
                script8414(int0, -1);
            };
            CC_CREATE(int7, 5, 4);
            CC_SETPOSITION(0, (int29 + struct_getparam(int3, 3586)), 2, 0);
            CC_SETSIZE(struct_getparam(int3, 3551), ((struct_getparam(int3, 3562) + int29) + struct_getparam(int3, 3586)), 0, 1);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if (((int17 == 3) || (int17 == 1))) {
                script8414(int0, 4);
            } else if ((int17 == 2)) {
                script8414(int0, -1);
            };
            CC_CREATE(int7, 5, 5);
            CC_SETPOSITION(0, int26, 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3587), struct_getparam(int3, 3586), 0, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if ((int24 == 3)) {
                if ((int17 == 3)) {
                    script8414(int0, 0);
                } else if ((int17 == 1)) {
                    script8414(int0, 3);
                } else if ((int17 == 2)) {
                    script8414(int0, 1);
                } else if ((int18 == true)) {
                    script8412(int0);
                };
            };
            CC_CREATE(int7, 5, 6);
            CC_SETPOSITION(0, int26, 1, 0);
            CC_SETSIZE((2 * struct_getparam(int3, 3587)), struct_getparam(int3, 3586), 1, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if (((int24 == 3) && (int18 == true))) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 7);
            CC_SETPOSITION(0, int26, 2, 0);
            CC_SETSIZE(struct_getparam(int3, 3587), struct_getparam(int3, 3586), 0, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if ((int24 == 3)) {
                if ((int17 == 3)) {
                    script8414(int0, 2);
                } else if ((int17 == 1)) {
                    script8414(int0, 4);
                } else if ((int17 == 2)) {
                    script8414(int0, 1);
                } else if ((int18 == true)) {
                    script8412(int0);
                };
            };
            CC_CREATE(int7, 5, 8);
            CC_SETPOSITION(0, 0, 0, 2);
            CC_SETSIZE(struct_getparam(int3, 3559), struct_getparam(int3, 3560), 0, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if ((int17 == 3)) {
                script8414(int0, 5);
            } else if ((int17 == 1)) {
                script8414(int0, 3);
            } else if ((int17 == 2)) {
                script8414(int0, 6);
            };
            CC_CREATE(int7, 5, 9);
            CC_SETPOSITION(struct_getparam(int3, 3559), 0, 0, 2);
            CC_SETSIZE((struct_getparam(int3, 3561) + struct_getparam(int3, 3559)), struct_getparam(int3, 3549), 1, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if (((int17 == 3) || (int17 == 2))) {
                script8414(int0, 6);
            } else if ((int17 != 1)) {
                script8414(int0, -1);
            };
            CC_CREATE(int7, 5, 10);
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETSIZE(struct_getparam(int3, 3561), struct_getparam(int3, 3562), 0, 0);
            CC_SETNOCLICKTHROUGH(int38);
            CC_SETGRAPHIC(2752 as graphic);
            if ((int17 == 3)) {
                script8414(int0, 7);
            } else if ((int17 == 1)) {
                script8414(int0, 4);
            } else if ((int17 == 2)) {
                script8414(int0, 6);
            };
            CC_CREATE(int7, 3, 11);
            CC_SETSIZE(0, struct_getparam(int3, 3547), 1, 0);
            CC_SETCOLOUR(3414565);
            CC_SETFILL(1);
            CC_SETNOCLICKTHROUGH(int38);
            CC_CREATE(int7, 5, 12);
            CC_SETSIZE(0, struct_getparam(int3, 3547), 1, 0);
            CC_SETGRAPHIC(2750 as graphic);
            CC_SETCOLOUR(3874090);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETHFLIP(true);
            CC_CREATE(int7, 5, 13);
            CC_SETSIZE(1080, struct_getparam(int3, 3547), 0, 0);
            CC_SETGRAPHIC(2755 as graphic);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_CREATE(int7, 5, 14);
            CC_SETSIZE(0, 1, 1, 0);
            CC_SETGRAPHIC(2749 as graphic);
            CC_SETCOLOUR(4155768);
            CC_SETHFLIP(true);
            CC_SETPOSITION(0, (struct_getparam(int3, 3547) - 1), 0, 0);
            CC_CREATE(int7, 4, 15);
            if ((int19 == false)) {
                CC_SETHIDE(true);
            } else {
                CC_SETSIZE(0, struct_getparam(int3, 3547), 1, 0);
                if (((struct_getparam(int2, 3495) != -1 as graphic) && (struct_getparam(int3, 3567) > 0))) {
                    CC_SETPOSITION((28 + struct_getparam(int3, 3567)), 0, 0, 0);
                } else {
                    CC_SETPOSITION(20, 0, 0, 0);
                };
                CC_SETTEXT(struct_getparam(int2, 3493));
                CC_SETTEXTFONT(57 as fontmetrics);
                CC_SETCOLOUR(script10495(0));
                CC_SETTEXTSHADOW(true);
                CC_SETMAXLINES(2);
                CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, 57 as fontmetrics));
                if ((struct_getparam(int2, 3495) != -1 as graphic)) {
                    CC_CREATE(int7, 5, 16);
                    CC_SETPOSITION(5, 0, 0, 0);
                    CC_SETSIZE(32, 32, 0, 0);
                    if ((struct_getparam(int2, 8097) != -1 as graphic)) {
                        CC_SETGRAPHIC(struct_getparam(int2, 8097));
                    } else {
                        CC_SETGRAPHIC(struct_getparam(int2, 3495));
                    };
                };
            };
        } else {
            CC_CREATE(int7, 5, 0);
            if ((int1 == 0)) {
                script12591(struct_getparam(int3, 8657), int2);
            };
            if ((struct_getparam(int3, 8658) == 1)) {
                CC_SETPOSITION((struct_getparam(int3, 3550) + struct_getparam(int3, 3557)), int27, 0, 0);
                CC_SETSIZE((((struct_getparam(int3, 3550) + struct_getparam(int3, 3551)) + struct_getparam(int3, 3557)) + struct_getparam(int3, 3558)), (int26 - int27), 1, 0);
            } else {
                CC_SETPOSITION((struct_getparam(int3, 3552) + struct_getparam(int3, 3557)), int27, 0, 0);
                CC_SETSIZE((((struct_getparam(int3, 3552) + struct_getparam(int3, 3554)) + struct_getparam(int3, 3557)) + struct_getparam(int3, 3558)), (int26 - int27), 1, 0);
            };
            CC_SETGRAPHIC(script8419(int3, 0, int25));
            CC_SETTILING(true);
            CC_SETNOCLICKTHROUGH(int38);
            if ((int24 == 1)) {
                if ((int18 == true)) {
                    script8412(int0);
                } else if ((int1 == 1)) {
                    script8413(int4, int0);
                };
            };
            CC_CREATE(int7, 5, 1);
            if ((int1 == 0)) {
                script12591(struct_getparam(int3, 8657), int2);
            };
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3552), int28, 0, 0);
            CC_SETGRAPHIC(script8419(int3, 1, int25));
            CC_SETNOCLICKTHROUGH(int38);
            if ((int17 == 3)) {
                script8414(int0, 0);
            } else if ((int17 == 1)) {
                script8414(int0, 3);
            } else if ((int17 == 2)) {
                script8414(int0, 1);
            } else if ((int18 == true)) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 2);
            if ((int1 == 0)) {
                script12591(struct_getparam(int3, 8657), int2);
            };
            CC_SETPOSITION(0, 0, 2, 0);
            CC_SETSIZE(struct_getparam(int3, 3554), int29, 0, 0);
            CC_SETGRAPHIC(script8419(int3, 2, int25));
            CC_SETNOCLICKTHROUGH(int38);
            if ((struct_getparam(int3, 3591) == struct_getparam(int3, 3590))) {
                CC_SETHFLIP(true);
            };
            if ((int17 == 3)) {
                script8414(int0, 2);
            } else if ((int17 == 1)) {
                script8414(int0, 4);
            } else if ((int17 == 2)) {
                script8414(int0, 1);
            } else if ((int18 == true)) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 3);
            if ((int1 == 0)) {
                script12591(struct_getparam(int3, 8657), int2);
            };
            CC_SETPOSITION(struct_getparam(int3, 3552), struct_getparam(int3, 3556), 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3557), (int26 - struct_getparam(int3, 3556)), 0, 0);
            CC_SETGRAPHIC(script8419(int3, 3, int25));
            CC_SETTILING(true);
            CC_SETNOCLICKTHROUGH(int38);
            if ((int24 == 1)) {
                if ((int18 == true)) {
                    script8412(int0);
                } else if ((int1 == 1)) {
                    script8413(int4, int0);
                };
            };
            CC_CREATE(int7, 5, 4);
            if ((int1 == 0)) {
                script12591(struct_getparam(int3, 8657), int2);
            };
            CC_SETPOSITION(struct_getparam(int3, 3554), struct_getparam(int3, 3556), 2, 0);
            CC_SETSIZE(struct_getparam(int3, 3558), (int26 - struct_getparam(int3, 3556)), 0, 0);
            CC_SETGRAPHIC(script8419(int3, 4, int25));
            CC_SETTILING(true);
            if ((struct_getparam(int3, 3600) == struct_getparam(int3, 3599))) {
                CC_SETHFLIP(true);
            };
            CC_SETNOCLICKTHROUGH(int38);
            if ((int24 == 1)) {
                if ((int18 == true)) {
                    script8412(int0);
                } else if ((int1 == 1)) {
                    script8413(int4, int0);
                };
            };
            CC_CREATE(int7, 5, 5);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(struct_getparam(int3, 3552), 0, 0, 0);
            CC_SETSIZE((struct_getparam(int3, 3554) + struct_getparam(int3, 3552)), int27, 1, 0);
            CC_SETGRAPHIC(script8419(int3, 5, int25));
            CC_SETTILING(true);
            CC_SETNOCLICKTHROUGH(int38);
            if (((int17 == 3) || (int17 == 2))) {
                script8414(int0, 1);
            } else if ((int17 == 1)) {
                script8414(int0, -1);
            } else if ((int18 == true)) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 6);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(0, (int28 + struct_getparam(int3, 3586)), 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3550), ((struct_getparam(int3, 3560) + int28) + struct_getparam(int3, 3586)), 0, 1);
            CC_SETGRAPHIC(struct_getparam(int3, 3596));
            CC_SETTILING(true);
            CC_SETNOCLICKTHROUGH(int38);
            if (((int17 == 3) || (int17 == 1))) {
                script8414(int0, 3);
            } else if ((int17 == 2)) {
                script8414(int0, -1);
            };
            CC_CREATE(int7, 5, 7);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(0, (int29 + struct_getparam(int3, 3586)), 2, 0);
            CC_SETSIZE(struct_getparam(int3, 3551), ((struct_getparam(int3, 3562) + int29) + struct_getparam(int3, 3586)), 0, 1);
            CC_SETGRAPHIC(struct_getparam(int3, 3597));
            CC_SETTILING(true);
            if ((struct_getparam(int3, 3597) == struct_getparam(int3, 3596))) {
                CC_SETHFLIP(true);
            };
            CC_SETNOCLICKTHROUGH(int38);
            if (((int17 == 3) || (int17 == 1))) {
                script8414(int0, 4);
            } else if ((int17 == 2)) {
                script8414(int0, -1);
            };
            CC_CREATE(int7, 5, 8);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(0, int26, 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3587), struct_getparam(int3, 3586), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3621));
            CC_SETNOCLICKTHROUGH(int38);
            if ((int24 == 3)) {
                if ((int17 == 3)) {
                    script8414(int0, 0);
                } else if ((int17 == 1)) {
                    script8414(int0, 3);
                } else if ((int17 == 2)) {
                    script8414(int0, 1);
                } else if ((int18 == true)) {
                    script8412(int0);
                };
            };
            CC_CREATE(int7, 5, 9);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(0, int26, 1, 0);
            CC_SETSIZE((2 * struct_getparam(int3, 3587)), struct_getparam(int3, 3586), 1, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3620));
            CC_SETTILING(true);
            CC_SETNOCLICKTHROUGH(int38);
            if (((int24 == 3) && (int18 == true))) {
                script8412(int0);
            };
            CC_CREATE(int7, 5, 10);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(0, int26, 2, 0);
            CC_SETSIZE(struct_getparam(int3, 3587), struct_getparam(int3, 3586), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3621));
            CC_SETHFLIP(true);
            CC_SETNOCLICKTHROUGH(int38);
            if ((int24 == 3)) {
                if ((int17 == 3)) {
                    script8414(int0, 2);
                } else if ((int17 == 1)) {
                    script8414(int0, 4);
                } else if ((int17 == 2)) {
                    script8414(int0, 1);
                } else if ((int18 == true)) {
                    script8412(int0);
                };
            };
            CC_CREATE(int7, 5, 11);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(0, 0, 0, 2);
            CC_SETSIZE(struct_getparam(int3, 3559), struct_getparam(int3, 3560), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3592));
            CC_SETNOCLICKTHROUGH(int38);
            if ((int17 == 3)) {
                script8414(int0, 5);
            } else if ((int17 == 1)) {
                script8414(int0, 3);
            } else if ((int17 == 2)) {
                script8414(int0, 6);
            };
            CC_CREATE(int7, 5, 12);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(struct_getparam(int3, 3559), 0, 0, 2);
            CC_SETSIZE((struct_getparam(int3, 3561) + struct_getparam(int3, 3559)), struct_getparam(int3, 3549), 1, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3595));
            CC_SETTILING(true);
            CC_SETNOCLICKTHROUGH(int38);
            if (((int17 == 3) || (int17 == 2))) {
                script8414(int0, 6);
            } else if ((int17 != 1)) {
                script8414(int0, -1);
            };
            CC_CREATE(int7, 5, 13);
            if ((int1 == 0)) {
                script12591(-1, int2);
            };
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETSIZE(struct_getparam(int3, 3561), struct_getparam(int3, 3562), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int3, 3593));
            if ((struct_getparam(int3, 3593) == struct_getparam(int3, 3592))) {
                CC_SETHFLIP(true);
            };
            CC_SETNOCLICKTHROUGH(int38);
            if ((int17 == 3)) {
                script8414(int0, 7);
            } else if ((int17 == 1)) {
                script8414(int0, 4);
            } else if ((int17 == 2)) {
                script8414(int0, 6);
            };
            CC_CREATE(int7, 4, 14);
            if ((int1 == 0)) {
                script12591(0, int2);
            };
            if ((int19 == false)) {
                CC_SETHIDE(true);
            } else {
                if ((int3 != 29114 as struct)) {
                    int33 = 0;
                };
                if ((struct_getparam(int2, 3495) != -1 as graphic)) {
                    CC_SETPOSITION((5 + struct_getparam(int3, 3552)), int33, 0, 0);
                    CC_SETSIZE(((5 + struct_getparam(int3, 3554)) + struct_getparam(int3, 3552)), (int26 - int33), 1, 0);
                } else {
                    CC_SETPOSITION(8, int33, 0, 0);
                    CC_SETSIZE((struct_getparam(int3, 3554) + struct_getparam(int3, 3550)), (int26 - int33), 1, 0);
                };
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETCOLOUR(struct_getparam(int3, 3544));
                CC_SETTEXT(struct_getparam(int2, 3493));
                CC_SETTEXTFONT(struct_getparam(int3, 3823));
                CC_SETTEXTSHADOW(true);
            };
            CC_CREATE(int7, 5, 15);
            if ((int1 == 0)) {
                script12591(0, int2);
            };
            CC_SETPOSITION(struct_getparam(int3, 3571), struct_getparam(int3, 3572), 0, 0);
            CC_SETSIZE(struct_getparam(int3, 3567), struct_getparam(int3, 3568), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int2, 3495));
            if ((int8 != comp(-1, 65535))) {
                CC_CREATE(int8, 5, 0);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETSIZE(1, 1, 0, 0);
                CC_SETGRAPHIC(-1 as graphic);
                CC_CREATE(int8, 5, 1);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETSIZE(1, 1, 0, 0);
                CC_SETGRAPHIC(-1 as graphic);
                CC_CREATE(int8, 5, 2);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETSIZE(1, 1, 0, 0);
                CC_SETGRAPHIC(-1 as graphic);
                IF_SETHIDE(false, int8);
            };
            if (((varbitplayer_38842 == 0) || (struct_getparam(int2, 8659) == 0))) {
                CC_CREATE(int7, 10, 16);
                CC_CREATE(int7, 5, 17);
            } else {
                script2996(int7, 16, struct_getparam(int3, 8295), int27, 2, 0, 16, 32, 1, 0, 4127 as dbrow);
                CC_SENDTOBACK();
                if ((struct_getparam(int2, 8659) == 1)) {
                    CC_SETOP(1, "Open Menu");
                    CC_SETONOP(callback(script16551, -2147483645, -2147483643, int0));
                    if ((int1 == 0)) {
                        script12591(0, int2);
                    };
                    script2994(int7, 17, (struct_getparam(int3, 8295) + 4), (int27 + 4), 2, 0, 24, 24, 0, 0, 8122 as graphic);
                    if ((int1 == 0)) {
                        script12591(0, int2);
                    };
                } else {
                    CC_CREATE(int7, 5, 17);
                };
            };
        };
    };
    if ((int9 != comp(-1, 65535))) {
        CC_DELETEALL(int9);
        if ((struct_getparam(int3, 8094) == 1)) {
            if ((((((((int32 == 1) || (int36 == 1)) && (int20 == 1)) && (int0 != 1001)) && (int0 != 1008)) && (int0 != 17)) && (enum_getreversecount(0, 7717 as cs2enum, int0) != 0))) {
                IF_SETHIDE(true, int9);
            } else {
                if (((int0 == 17) && (varplayer_3871 == 0))) {
                    IF_SETHIDE(true, int9);
                } else {
                    IF_SETHIDE(false, int9);
                };
                IF_SETPOSITION(0, 0, 0, 0, int9);
                IF_SETSIZE(0, 0, 1, 1, int9);
                CC_CREATE(int9, 5, 0);
                CC_SETPOSITION(struct_getparam(int3, 3575), struct_getparam(int3, 3576), 2, 0);
                CC_SETSIZE(struct_getparam(int3, 3563), struct_getparam(int3, 3564), 0, 0);
                CC_SETOP(1, "Close Window");
                CC_SETONOP(callback(script8320, int0));
                CC_SETNOCLICKTHROUGH(1);
                CC_CREATE(int9, 5, 1);
                CC_SETNOCLICKTHROUGH(0);
                CC_SETPOSITION(struct_getparam(int3, 3573), struct_getparam(int3, 3574), 2, 0);
                CC_SETSIZE(struct_getparam(int3, 3565), int30, 0, 0);
                CC_SETGRAPHIC(struct_getparam(int3, 3602));
            };
        } else {
            IF_SETPOSITION(0, 0, 0, 0, int9);
            IF_SETSIZE(0, 0, 1, 1, int9);
            if ((((((((int32 == 1) || (int36 == 1)) && (int20 == 1)) && (int0 != 1001)) && (int0 != 1008)) && (int0 != 17)) && (enum_getreversecount(0, 7717 as cs2enum, int0) != 0))) {
                IF_SETHIDE(true, int9);
            } else {
                if (((int0 == 17) && (varplayer_3871 == 0))) {
                    IF_SETHIDE(true, int9);
                } else {
                    IF_SETHIDE(false, int9);
                };
                CC_CREATE(int9, 5, 0);
                CC_SETPOSITION(struct_getparam(int3, 3575), struct_getparam(int3, 3576), 2, 0);
                CC_SETSIZE(struct_getparam(int3, 3563), struct_getparam(int3, 3564), 0, 0);
                if ((int20 == 1)) {
                    CC_SETGRAPHIC(struct_getparam(int3, 3601));
                } else if ((int21 == true)) {
                    CC_SETGRAPHIC(struct_getparam(int3, 3604));
                };
                CC_CREATE(int9, 5, 1);
                CC_SETPOSITION(struct_getparam(int3, 3573), struct_getparam(int3, 3574), 2, 0);
                CC_SETSIZE(struct_getparam(int3, 3565), int30, 0, 0);
                if ((int20 == 1)) {
                    CC_SETGRAPHIC(struct_getparam(int3, 3602));
                    CC_SETONMOUSEOVER(callback(script5336, int9, 1, struct_getparam(int3, 3603)));
                    CC_SETOP(1, "Close Window");
                    CC_SETONOP(callback(script8320, int0));
                    string0 = "Close";
                    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                    CC_SETONMOUSELEAVE(callback(script8806, -2147483645, -2147483643, struct_getparam(int3, 3602)));
                    CC_SETMOUSEOVERCURSOR(36);
                    CC_SETNOCLICKTHROUGH(1);
                } else if ((int21 == true)) {
                    if ((struct_getparam(int2, 3524) == true)) {
                        script8319(int0);
                    } else {
                        CC_SETGRAPHIC(struct_getparam(int3, 3605));
                        CC_SETONMOUSEOVER(callback(script5336, int9, 1, struct_getparam(int3, 3606)));
                        CC_SETOP(1, "Options");
                        CC_SETONOP(callback(script8317, int0));
                        string0 = "Settings";
                        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                        CC_SETONMOUSELEAVE(callback(script8806, -2147483645, -2147483643, struct_getparam(int3, 3605)));
                        CC_SETMOUSEOVERCURSOR(36);
                        CC_SETNOCLICKTHROUGH(1);
                    };
                };
            };
        };
    };
    if ((int10 != comp(-1, 65535))) {
        IF_SETPOSITION(0, 0, 0, 0, int10);
        IF_SETSIZE(0, 0, 1, 1, int10);
        IF_SETHIDE(false, int10);
        CC_CREATE(int10, 5, 0);
        CC_SETPOSITION(struct_getparam(int3, 4464), struct_getparam(int3, 4465), 2, 0);
        CC_SETSIZE(struct_getparam(int3, 4458), struct_getparam(int3, 4459), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int3, 4466));
        CC_SETOP(1, "Help");
        CC_SETONOP(callback(script10189, int0, int13));
        string0 = "Help";
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8806, -2147483645, 1, struct_getparam(int3, 4467)));
        CC_SETMOUSEOVERCURSOR(36);
        CC_CREATE(int10, 5, 1);
        CC_SETPOSITION(struct_getparam(int3, 4462), struct_getparam(int3, 4463), 2, 0);
        CC_SETSIZE(struct_getparam(int3, 4460), int31, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int3, 4467));
        CC_SETONMOUSEOVER(callback(script5336, int10, 1, struct_getparam(int3, 4468)));
    };
    if ((int11 != comp(-1, 65535))) {
        IF_SETPOSITION(0, 0, 1, 1, int11);
        IF_SETSIZE(0, 0, 1, 1, int11);
        CC_CREATE(int11, 3, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETCOLOUR(16711680);
        CC_SETFILL(1);
        CC_SETTRANS(192);
        CC_CREATE(int11, 5, 1);
        CC_SETSIZE(8, 8, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETGRAPHIC(18200 as graphic);
        CC_SETTILING(true);
        CC_CREATE(int11, 5, 2);
        CC_SETSIZE(16, 8, 1, 0);
        CC_SETPOSITION(0, 0, 1, 0);
        CC_SETGRAPHIC(18201 as graphic);
        CC_SETTILING(true);
        CC_CREATE(int11, 5, 3);
        CC_SETSIZE(8, 8, 0, 0);
        CC_SETPOSITION(0, 0, 2, 0);
        CC_SETGRAPHIC(18200 as graphic);
        CC_SETTILING(true);
        CC_SETHFLIP(true);
        CC_CREATE(int11, 5, 4);
        CC_SETSIZE(8, 16, 0, 1);
        CC_SETPOSITION(0, 0, 0, 1);
        CC_SETGRAPHIC(18202 as graphic);
        CC_SETTILING(true);
        CC_CREATE(int11, 5, 5);
        CC_SETSIZE(8, 16, 0, 1);
        CC_SETPOSITION(-6, 0, 2, 1);
        CC_SETGRAPHIC(18202 as graphic);
        CC_SETTILING(true);
        CC_CREATE(int11, 5, 6);
        CC_SETSIZE(8, 8, 0, 0);
        CC_SETPOSITION(0, 0, 0, 2);
        CC_SETGRAPHIC(18204 as graphic);
        CC_SETTILING(true);
        CC_CREATE(int11, 5, 7);
        CC_SETSIZE(16, 8, 1, 0);
        CC_SETPOSITION(0, -6, 1, 2);
        CC_SETGRAPHIC(18201 as graphic);
        CC_SETTILING(true);
        CC_CREATE(int11, 5, 8);
        CC_SETSIZE(8, 8, 0, 0);
        CC_SETPOSITION(0, 0, 2, 2);
        CC_SETGRAPHIC(18204 as graphic);
        CC_SETTILING(true);
        CC_SETHFLIP(true);
        IF_SETHIDE(true, int11);
        CC_CREATE(int11, 5, 9);
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETGRAPHIC(18825 as graphic);
        CC_SETTILING(true);
    };
    if ((int13 != comp(-1, 65535))) {
        if ((struct_getparam(int3, 8094) == 1)) {
            CC_DELETEALL(int12);
            IF_SETPOSITION(0, (int26 + struct_getparam(int3, 3586)), 0, 0, int12);
            IF_SETSIZE(0, struct_getparam(int3, 3577), 1, 0, int12);
            IF_SETHIDE(true, int12);
            IF_SETPOSITION(struct_getparam(int3, 3583), (int26 + struct_getparam(int3, 3586)), 0, 0, int13);
            IF_SETSIZE((2 * struct_getparam(int3, 3583)), struct_getparam(int3, 3577), 1, 0, int13);
            IF_SETHIDE(true, int13);
        } else {
            IF_SETPOSITION(0, (int26 + struct_getparam(int3, 3586)), 0, 0, int12);
            IF_SETSIZE(0, struct_getparam(int3, 3577), 1, 0, int12);
            IF_SETHIDE(true, int12);
            script8363(int0);
            IF_SETPOSITION(struct_getparam(int3, 3583), (int26 + struct_getparam(int3, 3586)), 0, 0, int13);
            IF_SETSIZE((2 * struct_getparam(int3, 3583)), struct_getparam(int3, 3577), 1, 0, int13);
            IF_SETHIDE(true, int13);
        };
    };
    if ((int14 != comp(-1, 65535))) {
        IF_SETPOSITION(struct_getparam(int3, 3583), (int26 + struct_getparam(int3, 3586)), 0, 0, int14);
        IF_SETSIZE((2 * struct_getparam(int3, 3583)), struct_getparam(int3, 3577), 1, 0, int14);
        IF_SETHIDE(true, int14);
        CC_CREATE(int14, 5, 0);
        if ((int1 == 0)) {
            script12591(0, int2);
        };
        CC_SETPOSITION(1, 0, 0, 1);
        CC_SETSIZE(struct_getparam(int3, 3581), struct_getparam(int3, 3582), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int3, 3617));
        CC_SETONCLICK(callback(script8360, int0, -2147483645, -2147483643, int13, struct_getparam(int3, 3578), -1));
        CC_SETONMOUSEOVER(callback(script1845, int0));
        CC_SETONMOUSELEAVE(callback(script1845, int0));
        CC_CREATE(int14, 5, 1);
        if ((int1 == 0)) {
            script12591(0, int2);
        };
        CC_SETPOSITION(1, 0, 2, 1);
        CC_SETSIZE(struct_getparam(int3, 3581), struct_getparam(int3, 3582), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int3, 3617));
        CC_SETHFLIP(true);
        CC_SETONCLICK(callback(script8360, int0, -2147483645, -2147483643, int13, struct_getparam(int3, 3578), 1));
        CC_SETONMOUSEOVER(callback(script1845, int0));
        CC_SETONMOUSELEAVE(callback(script1845, int0));
    };
    var int41 = 0;
    if ((((int13 != comp(-1, 65535)) && (int22 == true)) && (script16577(int0) == 1))) {
        int41 = script8374(int13);
        if ((int41 < 1)) {
            if ((script8785() == 0)) {
                CC_DELETEALL(int13);
                script8362(int0, int0, 0);
                script8370(int0, 0);
                script8378(1, int0);
                script8359(int0, 1, 0);
            } else {
                script8378(1, int0);
            };
        } else if ((script8785() == 0)) {
            if ((int36 == 0)) {
                script8350(9, int0, 0);
            };
        } else if ((int41 > 1)) {
            script8378(0, int0);
            script8359(int0, script8374(int13), script8372(int13, int0));
            script1847(int0);
        };
    };
    if (((int16 != comp(-1, 65535)) && (CC_FIND(int16, 0) == 0))) {
        IF_SETNOCLICKTHROUGH(1, int16);
        IF_SETHIDE(true, int16);
        CC_CREATE(int16, 3, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETCOLOUR(1);
        CC_SETFILL(1);
        CC_SETTRANS(75);
    };
    if (((script8137(int0) == 1) && (int6 != comp(-1, 65535)))) {
        CC_CREATE(int6, 3, 0);
        CC_SETPOSITION(-1, -1, 0, 0);
        CC_SETSIZE(0, 0, 0, 0);
        CC_SETHIDE(true);
        CC_CREATE(int6, 3, 1);
        CC_SETPOSITION(-1, -1, 0, 0);
        CC_SETSIZE(0, 0, 0, 0);
        CC_SETHIDE(true);
    };
    if ((int15 != comp(-1, 65535))) {
        script8331(int0);
    };
    script8391(int0, int1);
    var int42 = 0;
    var int43 = 0;
    switch (int0) {
        case 1003:
        case 1032:
        case 1033:
        case 1034:
        case 1035: {
            [int42, int43] = script8721(int0);
            [int42, int43] = script8729(varclient_4108, int0);
            break;
        }
    };
    if ((script8137(int0) == 1)) {
        if (((((int0 == 1003) || (int0 == 1032)) || (int0 == 1033)) && (varbitplayer_27169 == 1))) {
            script8140(int0, 0, 0);
        } else {
            script8140(int0, script8721(int0));
        };
    };
    if ((((int0 == 18) && (varbitplayer_27169 == 1)) && (CC_FIND(int7, 9) == 1))) {
        CC_SETDRAGRENDERBEHAVIOUR(3);
        CC_SETMOUSEOVERCURSOR(190);
        CC_SETDRAGGABLE(comp(1477, 27), -1);
        CC_SETDRAGDEADTIME(1);
        CC_SETDRAGDEADZONE(1);
        CC_SETONDRAG(callback(script9948, int0, -2147483646, 0));
        CC_SETONDRAGCOMPLETE(callback(script9948, int0, -2147483646, 1));
    };
    return;
}