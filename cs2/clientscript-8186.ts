//
function script8186(int0: component): void {
    var int1 = script13415(varbitplayer_18994);
    if ((int1 == -1 as struct)) {
        return;
    };
    var int2 = script8418(21301 as struct, 0);
    var int3 = 28 as fontmetrics;
    var int4 = 18;
    var int5 = 18;
    var int6 = 0;
    var int7 = 6;
    var int8 = -1 as struct;
    var string0 = "";
    var int9 = struct_getparam(int2, 3578);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 16777215;
    var int20 = -1;
    var int21 = -1;
    var int22 = -1;
    var int23 = -1;
    var int24 = -1;
    var int25 = -1;
    var int26 = -1 as graphic;
    var int27 = -1 as graphic;
    var int28 = -1 as graphic;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var string1 = "";
    var int33 = struct_getparam(int2, 3579);
    var int34 = struct_getparam(int2, 3580);
    var int35 = struct_getparam(int2, 3577);
    var int36 = 1;
    var int37 = script441(varbitplayer_18994);
    var int38 = -1 as struct;
    while ((int6 < int7)) {
        switch (int6) {
            case 0: {
                int8 = struct_getparam(int1, 3448);
                break;
            }
            case 1: {
                int8 = struct_getparam(int1, 3449);
                break;
            }
            case 2: {
                int8 = struct_getparam(int1, 3450);
                break;
            }
            case 3: {
                int8 = struct_getparam(int1, 3451);
                break;
            }
            case 4: {
                int8 = struct_getparam(int1, 3452);
                break;
            }
            case 5: {
                int8 = struct_getparam(int1, 3453);
                break;
            }
        };
        if ((((varbitplayer_38842 == 1) && (int8 != -1 as struct)) && (struct_getparam(int8, 7130) != -1 as struct))) {
            int8 = struct_getparam(int8, 7130);
        };
        [int20, int21, int22, int23, int24, int25] = script8190(int6);
        int36 = script8284(varbitplayer_18994, (int6 + 1));
        if ((((int36 == 1) && (varbitplayer_1899 == 1)) && (script12423(varbitplayer_18994, (int6 + 1)) == false))) {
            int36 = 0;
        };
        if ((int8 == 19073 as struct)) {
            int36 = 0;
        };
        if (((int8 != -1 as struct) && ((struct_getparam(int8, 5327) == false) || (int36 == 1)))) {
            if ((varbitplayer_38842 == 0)) {
                if (((varbitplayer_27169 == 0) || ((varbitplayer_27169 == 1) && (struct_getparam(int8, 8266) == false)))) {
                    if (((1 + int6) == int37)) {
                        int38 = int8;
                    };
                    int26 = struct_getparam(int2, 3612);
                    int28 = struct_getparam(int2, 3614);
                    int27 = struct_getparam(int2, 3613);
                    int19 = script10495(25);
                    int4 = 20;
                    string0 = struct_getparam(int8, 3455);
                    string1 = "";
                    if ((int36 == 0)) {
                        int26 = struct_getparam(int2, 6117);
                        int28 = struct_getparam(int2, 6119);
                        int27 = struct_getparam(int2, 6118);
                        int19 = script10495(26);
                        int4 = 36;
                        string1 = "This tab is currently unavailable.";
                    };
                    int10 = STRINGWIDTH(string0, int3);
                    int11 = MAX(int9, ((int10 + int4) + int5));
                    int13 = (int29 + int33);
                    int14 = (int11 - (int33 + int34));
                    int15 = (int29 + (int11 - int34));
                    int16 = ((int29 + int4) - 10);
                    int17 = (int30 + 14);
                    int18 = 20;
                    if ((CC_FIND(int0, int20) == 1)) {
                        CC_SETPOSITION(int29, int30, 0, 0);
                        CC_SETSIZE(int33, int35, 0, 0);
                        CC_SETGRAPHIC(int26);
                        CC_SETHIDE(false);
                    };
                    if ((CC_FIND(int0, int21) == 1)) {
                        CC_SETPOSITION(int13, int30, 0, 0);
                        CC_SETSIZE(int14, int35, 0, 0);
                        CC_SETGRAPHIC(int27);
                        CC_SETHIDE(false);
                    };
                    if ((CC_FIND(int0, int22) == 1)) {
                        CC_SETPOSITION(int15, int30, 0, 0);
                        CC_SETSIZE(int34, int35, 0, 0);
                        CC_SETGRAPHIC(int28);
                        CC_SETHIDE(false);
                    };
                    if ((CC_FIND(int0, int23) == 1)) {
                        CC_SETPOSITION(int16, int17, 0, 0);
                        CC_SETSIZE((((int11 - int4) - int5) + 20), int18, 0, 0);
                        CC_SETTEXT(string0);
                        CC_SETTEXTALIGN(1, 0, 0);
                        if ((int36 == 1)) {
                            CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
                            CC_SETOP(1, string0);
                            CC_SETONOP(callback(script8191, -2147483645, -2147483643));
                        } else {
                            CC_SETONMOUSEOVER(callback());
                            CC_SETOP(1, "");
                            CC_SETONOP(callback());
                        };
                        if ((STRING_LENGTH(string1) > 0)) {
                            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                            CC_SETONMOUSELEAVE(callback(script8807, -2147483645, -2147483643, int19));
                        } else {
                            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, int19));
                        };
                        CC_SETCOLOUR(int19);
                        CC_SETHIDE(false);
                    };
                    script17046(0, int24, int0, int6, int15, int35);
                    script17046(1, int25, int0, int6, int15, int35);
                    int29 = (int29 + int11);
                } else {
                    string0 = "";
                    int10 = 0;
                    int11 = 0;
                    int13 = int29;
                    int14 = 0;
                    int15 = int29;
                    int16 = int29;
                    if ((CC_FIND(int0, int20) == 1)) {
                        CC_SETHIDE(true);
                    };
                    if ((CC_FIND(int0, int21) == 1)) {
                        CC_SETHIDE(true);
                    };
                    if ((CC_FIND(int0, int22) == 1)) {
                        CC_SETHIDE(true);
                    };
                    if ((CC_FIND(int0, int23) == 1)) {
                        CC_SETHIDE(true);
                        CC_CLEAROPS();
                        CC_SETONOP(callback());
                    };
                };
            } else if ((((varbitplayer_38842 == 1) && (struct_getparam(int8, 8265) == false)) && ((varbitplayer_27169 == 0) || ((varbitplayer_27169 == 1) && (struct_getparam(int8, 8266) == false))))) {
                if (((1 + int6) == int37)) {
                    int38 = int8;
                };
                int26 = struct_getparam(int2, 3612);
                int28 = struct_getparam(int2, 3614);
                int27 = struct_getparam(int2, 3613);
                int19 = script10495(25);
                int4 = 20;
                string0 = struct_getparam(int8, 3455);
                string1 = "";
                if ((int36 == 0)) {
                    int26 = struct_getparam(int2, 6117);
                    int28 = struct_getparam(int2, 6119);
                    int27 = struct_getparam(int2, 6118);
                    int19 = script10495(26);
                    int4 = 36;
                    string1 = "This tab is currently unavailable.";
                };
                int10 = STRINGWIDTH(string0, int3);
                int11 = MAX(int9, ((int10 + int4) + int5));
                int13 = (int29 + int33);
                int14 = (int11 - (int33 + int34));
                int15 = (int29 + (int11 - int34));
                int16 = ((int29 + int4) - 10);
                int17 = (int30 + 14);
                int18 = 20;
                if ((CC_FIND(int0, int20) == 1)) {
                    CC_SETPOSITION(int29, int30, 0, 0);
                    CC_SETSIZE(int33, int35, 0, 0);
                    CC_SETGRAPHIC(int26);
                    CC_SETHIDE(false);
                };
                if ((CC_FIND(int0, int21) == 1)) {
                    CC_SETPOSITION(int13, int30, 0, 0);
                    CC_SETSIZE(int14, int35, 0, 0);
                    CC_SETGRAPHIC(int27);
                    CC_SETHIDE(false);
                };
                if ((CC_FIND(int0, int22) == 1)) {
                    CC_SETPOSITION(int15, int30, 0, 0);
                    CC_SETSIZE(int34, int35, 0, 0);
                    CC_SETGRAPHIC(int28);
                    CC_SETHIDE(false);
                };
                if ((CC_FIND(int0, int23) == 1)) {
                    CC_SETPOSITION(int16, int17, 0, 0);
                    CC_SETSIZE((((int11 - int4) - int5) + 20), int18, 0, 0);
                    CC_SETTEXT(string0);
                    CC_SETTEXTALIGN(1, 0, 0);
                    if ((int36 == 1)) {
                        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
                        CC_SETOP(1, string0);
                        CC_SETONOP(callback(script8191, -2147483645, -2147483643));
                    } else {
                        CC_SETONMOUSEOVER(callback());
                        CC_SETOP(1, "");
                        CC_SETONOP(callback());
                    };
                    if ((STRING_LENGTH(string1) > 0)) {
                        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                        CC_SETONMOUSELEAVE(callback(script8807, -2147483645, -2147483643, int19));
                    } else {
                        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, int19));
                    };
                    CC_SETCOLOUR(int19);
                    CC_SETHIDE(false);
                };
                script17046(0, int24, int0, int6, int15, int35);
                script17046(1, int25, int0, int6, int15, int35);
                int29 = (int29 + int11);
            } else {
                string0 = "";
                int10 = 0;
                int11 = 0;
                int13 = int29;
                int14 = 0;
                int15 = int29;
                int16 = int29;
                if ((CC_FIND(int0, int20) == 1)) {
                    CC_SETHIDE(true);
                };
                if ((CC_FIND(int0, int21) == 1)) {
                    CC_SETHIDE(true);
                };
                if ((CC_FIND(int0, int22) == 1)) {
                    CC_SETHIDE(true);
                };
                if ((CC_FIND(int0, int23) == 1)) {
                    CC_SETHIDE(true);
                    CC_CLEAROPS();
                    CC_SETONOP(callback());
                };
            };
        } else {
            string0 = "";
            int10 = 0;
            int11 = 0;
            int13 = int29;
            int14 = 0;
            int15 = int29;
            int16 = int29;
            if ((CC_FIND(int0, int20) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int0, int21) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int0, int22) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int0, int23) == 1)) {
                CC_SETHIDE(true);
                CC_CLEAROPS();
                CC_SETONOP(callback());
            };
        };
        int6 = (int6 + 1);
    };
    script8282(int38);
    if ((script8284(varbitplayer_18994, int37) == 0)) {
        script8187(int0, (6 + 1));
    } else {
        script8187(int0, int37);
    };
    return;
}