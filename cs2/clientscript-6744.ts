//
function script6744(): void {
    var int0 = -1 as cs2enum;
    var int1 = 1;
    var int2 = 0;
    switch (varbitplayer_20794) {
        case 0: {
            int0 = 6452 as cs2enum;
            break;
        }
        case 1: {
            int0 = 6452 as cs2enum;
            int2 = 1;
            break;
        }
        case 2: {
            int0 = 8014 as cs2enum;
            break;
        }
        case 3: {
            int0 = 8015 as cs2enum;
            break;
        }
        case 4: {
            int0 = 8016 as cs2enum;
            break;
        }
        case 5: {
            int0 = 8017 as cs2enum;
            break;
        }
    };
    CC_DELETEALL(comp(1344, 21));
    CC_DELETEALL(comp(1344, 22));
    CC_DELETEALL(comp(1344, 24));
    CC_DELETEALL(comp(1344, 25));
    CC_DELETEALL(comp(1344, 23));
    CC_DELETEALL(comp(1344, 28));
    CC_DELETEALL(comp(1344, 26));
    CC_DELETEALL(comp(1344, 27));
    IF_SETHIDE(true, comp(1344, 18));
    var int3 = 0;
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(int0);
    var int6 = -1 as struct;
    var int7 = script9952(28937 as struct);
    var int8 = 0;
    var int9 = enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5420);
    if ((int9 != -1 as struct)) {
        int8 = struct_getparam(int9, 1268);
    };
    var int10 = 0;
    int9 = enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5421);
    if ((int9 != -1 as struct)) {
        int10 = struct_getparam(int9, 1268);
    };
    var int11 = 0;
    int9 = enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5422);
    if ((int9 != -1 as struct)) {
        int11 = struct_getparam(int9, 1268);
    };
    var int12 = 0;
    int9 = enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5423);
    if ((int9 != -1 as struct)) {
        int12 = struct_getparam(int9, 1268);
    };
    var int13 = 0;
    var string0 = "";
    while ((int3 < int5)) {
        int6 = enum_getvalue(0, 73, int0, (1 + int3));
        if ((int6 != -1 as struct)) {
            if ((((int2 == 1) && (script9178(struct_getparam(int6, 1268)) == 0)) || ((struct_getparam(int6, 3812) == 1) && (script3224(struct_getparam(int6, 1268)) == 0)))) {
                CC_CREATE(comp(1344, 21), 5, int3);
                CC_SETHIDE(true);
                CC_CREATE(comp(1344, 22), 3, int3);
                CC_SETHIDE(true);
                CC_CREATE(comp(1344, 24), 5, int3);
                CC_SETHIDE(true);
                CC_CREATE(comp(1344, 25), 4, int3);
                CC_SETHIDE(true);
                CC_CREATE(comp(1344, 23), 3, int3);
                CC_SETHIDE(true);
            } else {
                CC_CREATE(comp(1344, 21), 5, int3);
                cc_setparam(4545, int7);
                if (((varplayer_3233 - 1) == int3)) {
                    CC_SETGRAPHIC(struct_getparam(int7, 3913));
                } else {
                    CC_SETGRAPHIC(struct_getparam(int7, 3910));
                    CC_SETONMOUSEREPEAT(callback(script6729, 88080405, -1, -2147483643));
                    CC_SETONMOUSELEAVE(callback(script6730, 88080405, -1, -2147483643));
                };
                CC_SETSIZE(254, 43, 0, 0);
                CC_SETPOSITION(1, (0 + ((43 + 3) * int4)), 0, 2);
                int13 = struct_getparam(int6, 1268);
                if (((((int8 == int13) || (int10 == int13)) || (int11 == int13)) || (int12 == int13))) {
                    CC_CREATE(comp(1344, 22), 3, int3);
                    CC_SETFILL(1);
                    if ((int8 == int13)) {
                        CC_SETCOLOUR(script693(0, 255, 0));
                    } else {
                        CC_SETCOLOUR(script693(0, 0, 255));
                    };
                    CC_SETTRANS(128);
                    CC_SETSIZE(244, 33, 0, 0);
                    CC_SETPOSITION(6, (5 + ((33 + 3) * int4)), 0, 2);
                } else {
                    CC_CREATE(comp(1344, 22), 3, int3);
                    CC_SETHIDE(true);
                };
                CC_CREATE(comp(1344, 23), 3, int3);
                CC_SETSIZE(254, 43, 0, 0);
                CC_SETPOSITION(1, (0 + ((43 + 3) * int4)), 0, 2);
                CC_SETCOLOUR(6710886);
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script18246, 88080405, -1, -2147483643));
                if ((script3224(struct_getparam(int6, 1268)) == 0)) {
                    CC_SETTRANS(130);
                    CC_SETFILL(1);
                } else {
                    CC_SETTRANS(255);
                };
                CC_CREATE(comp(1344, 25), 4, int3);
                cc_setparam(4545, int7);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETCOLOUR(16763656);
                CC_SETTEXT(struct_getparam(int6, 1266));
                CC_SETTEXTALIGN(0, 1, 13);
                CC_SETSIZE(130, 43, 0, 0);
                CC_SETPOSITION(40, (0 + ((43 + 3) * int4)), 0, 2);
                CC_CREATE(comp(1344, 24), 5, int3);
                if ((struct_getparam(int6, 3629) == 0)) {
                    if ((int8 == int13)) {
                        CC_SETGRAPHIC(7918 as graphic);
                    } else if ((int10 == int13)) {
                        CC_SETGRAPHIC(7919 as graphic);
                    } else if ((int11 == int13)) {
                        CC_SETGRAPHIC(16279 as graphic);
                    } else if ((int12 == int13)) {
                        CC_SETGRAPHIC(16280 as graphic);
                    } else {
                        CC_SETGRAPHIC(21099 as graphic);
                    };
                } else {
                    CC_SETGRAPHIC(21100 as graphic);
                };
                if (((((int8 == int13) || (int10 == int13)) || (int11 == int13)) || (int12 == int13))) {
                    if ((int8 == int13)) {
                        string0 = "This minigame is currently in the Spotlight and will give thaler at 500% of the normal rate.<br>Find Stanley Limelight near the minigame to learn about thaler.";
                    } else if ((int10 == int13)) {
                        if ((varplayer_5419 != 1)) {
                            string0 = `This minigame will enter the Spotlight in ${inttostring(varplayer_5419, 10)} days.`;
                        } else {
                            string0 = `This minigame will enter the Spotlight in ${inttostring(varplayer_5419, 10)} day.`;
                        };
                    } else if ((int11 == int13)) {
                        string0 = `This minigame will enter the Spotlight in ${inttostring((varplayer_5419 + 3), 10)} days.`;
                    } else if ((int12 == int13)) {
                        string0 = `This minigame will enter the Spotlight in ${inttostring((varplayer_5419 + (3 * 2)), 10)} days.`;
                    };
                    CC_SETONMOUSEREPEAT(callback(script8799, string0, 88080408, int3));
                };
                CC_SETSIZE(40, 40, 0, 0);
                CC_SETPOSITION(1, (1 + ((43 + 3) * int4)), 0, 2);
                int4 = (int4 + 1);
            };
        };
        int3 = (int3 + 1);
    };
    script10428(comp(1344, 30), comp(1344, 31), 6156 as cs2enum, -1, "Filter the minigames shown.", varbitplayer_20794, 0);
    if ((int4 == 0)) {
        IF_SETHIDE(false, comp(1344, 18));
    };
    script9175();
    IF_SETSCROLLSIZE(0, (int4 * (3 + 43)), comp(1344, 20));
    IF_SETSCROLLPOS(0, 0, comp(1344, 20));
    if ((IF_GETSCROLLHEIGHT(comp(1344, 20)) > IF_GETHEIGHT(comp(1344, 19)))) {
        script31(comp(1344, 28), comp(1344, 20), 4343 as graphic, 4340 as graphic, 4341 as graphic, 4342 as graphic, 4337 as graphic, 4336 as graphic);
    } else {
        script31(comp(1344, 28), comp(1344, 19), 4343 as graphic, 4340 as graphic, 4341 as graphic, 4342 as graphic, 4337 as graphic, 4336 as graphic);
    };
    return;
}