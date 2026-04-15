//
function script10321(int0: component): void {
    var int1 = script10285(varplayergroup_16);
    var int2 = -1 as cs2enum;
    if ((int1 != -1 as struct)) {
        int2 = struct_getparam(int1, 4508);
    };
    var int3 = script10293(int0);
    var int4 = script10304(int0);
    var int5 = script10305(int0);
    var int6 = script10310(int0);
    var int7 = script10309(int0);
    var int8 = script10306(int0);
    var int9 = script4244(int0);
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    var int13 = -1 as graphic;
    var int14 = -1;
    var int15 = -1 as graphic;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int16 = 0;
    var int17 = PLAYER_GROUP_MEMBER_COUNT();
    var int18 = script10275();
    var int19 = IF_GETHEIGHT(int6);
    var int20 = IF_GETWIDTH(int6);
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 17;
    var int25 = 0;
    var int26 = 0;
    var int27 = script10495(12);
    var int28 = script10495(13);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int7);
    IF_SETHIDE(false, int4);
    IF_SETHIDE(true, int5);
    IF_SETHIDE(true, int9);
    script10629(int3, IF_GETNEXTSUBID(int3), int20, 15, 0, 0, PLAYER_GROUP_GET_DISPLAYNAME(), 15777401, 28 as fontmetrics, 1, 1, 13, true);
    CC_SETMAXLINES(1);
    if (((int24 + (int17 * 43)) < int19)) {
        IF_SETSIZE(0, 33, 1, 1, int6);
        int11 = 1;
        int20 = IF_GETWIDTH(int3);
    } else {
        IF_SETSIZE(20, 33, 1, 1, int6);
    };
    while ((int21 < int17)) {
        string4 = PLAYER_GROUP_MEMBER_GET_DISPLAYNAME(int21);
        if ((PLAYER_GROUP_MEMBER_IS_OWNER(int21) == 1)) {
            stack(25847 as graphic);
            stack("Group Leader");
            [int13, string1] = stack();
        } else {
            switch (PLAYER_GROUP_MEMBER_GET_RANK(int21)) {
                case 10: {
                    stack(25850 as graphic);
                    stack("Recruiter");
                    [int13, string1] = stack();
                    break;
                }
                case 20: {
                    stack(25849 as graphic);
                    stack("Organiser");
                    [int13, string1] = stack();
                    break;
                }
                case 50: {
                    stack(25848 as graphic);
                    stack("Admin");
                    [int13, string1] = stack();
                    break;
                }
                case 100: {
                    stack(25847 as graphic);
                    stack("Group Leader");
                    [int13, string1] = stack();
                    break;
                }
                default: {
                    stack(-1 as graphic);
                    stack("");
                    [int13, string1] = stack();
                    break;
                }
            };
        };
        int16 = PLAYER_GROUP_MEMBER_GET_STATUS(int21);
        switch (int16) {
            case 0: {
                stack(25853);
                stack("Not Ready");
                [int12, string0] = stack();
                break;
            }
            case 1: {
                stack(25852);
                stack("Ready");
                [int12, string0] = stack();
                break;
            }
            case 2: {
                stack(25854);
                stack("Waiting for Start");
                [int12, string0] = stack();
                break;
            }
            case 3: {
                stack(25855);
                stack("Teleported");
                [int12, string0] = stack();
                break;
            }
            default: {
                stack(-1);
                stack("");
                [int12, string0] = stack();
                break;
            }
        };
        if ((int18 == int21)) {
            script10335(int16);
            script10338();
            script5894();
            if (((int16 == 0) && (IF_GETHEIGHT(int0) >= 120))) {
                IF_SETHIDE(false, int8);
                if ((int11 == 1)) {
                    IF_SETSIZE(0, 63, 1, 1, int6);
                } else {
                    IF_SETSIZE(20, 63, 1, 1, int6);
                };
                IF_SETSIZE(IF_GETWIDTH(int7), 63, 0, 1, int7);
                int19 = IF_GETHEIGHT(int6);
            } else {
                IF_SETHIDE(true, int8);
                if ((int11 == 1)) {
                    IF_SETSIZE(0, 33, 1, 1, int6);
                } else {
                    IF_SETSIZE(20, 33, 1, 1, int6);
                };
                IF_SETSIZE(IF_GETWIDTH(int7), 33, 0, 1, int7);
                int19 = IF_GETHEIGHT(int6);
            };
        };
        stack(25867);
        stack(`${string4} is offline`);
        [int14, string2] = stack();
        if ((PLAYER_GROUP_MEMBER_IS_ONLINE(int21) == 1)) {
            [int23, int14] = [PLAYER_GROUP_MEMBER_GET_LAST_SEEN_NODE_ID(int21), 25866];
            string2 = `${string4} is on world: ${inttostring(int23, 10)}`;
            if ((int23 == MAP_WORLD())) {
                int26 = PLAYER_GROUP_MEMBER_GET_SAME_WORLD_VAR(int21, 0, 1668);
                int25 = MAX(1, PLAYER_GROUP_MEMBER_GET_SAME_WORLD_VAR(int21, 0, 24595));
                stack(25865);
                stack(`${string4} is on your world.`);
                [int14, string2] = stack();
                if ((int18 == int21)) {
                    string2 = `You are on world ${inttostring(int23, 10)}.`;
                };
            };
        } else {
            int23 = -1;
        };
        script10066(int4, int21, (int20 - 10), 38, 5, int24, int27, 1, 0);
        script10324(int18, int21, string4, int23);
        CC_SETONMOUSEOVER(callback(script10322, -2147483645, -2147483643, int3, IF_GETNEXTSUBID(int3), int28));
        CC_SETONMOUSELEAVE(callback(script10323, -2147483645, -2147483643, int3, IF_GETNEXTSUBID(int3), int27));
        CC_SETLINKPLAYERGROUP(int21, 1);
        script10629(int3, IF_GETNEXTSUBID(int3), (int20 - 79), 13, 79, (int24 + 2), string4, script10495(3), 26, 0, 1, 13, 1);
        CC_SETMAXLINES(1);
        script10456(int3, -1, int14, string2, 21, (int24 + 2), 34);
        script7924(int3, IF_GETNEXTSUBID(int3), 20, 20, 4, (int24 + 9), int12, 0, 0, 0, 0);
        if ((STRING_LENGTH(string0) > 0)) {
            CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
        };
        script7924(int3, IF_GETNEXTSUBID(int3), 20, 20, 54, (int24 + 9), int13, false, false, false, 0);
        if ((STRING_LENGTH(string1) > 0)) {
            CC_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643));
        };
        if (((int2 != -1 as cs2enum) && (int20 >= 170))) {
            int22 = PLAYER_GROUP_MEMBER_GET_TEAM(int21);
            int15 = script10274(int2, int22);
            if (((int22 > 0) && (int15 != -1 as graphic))) {
                string3 = script10273(int22);
                if ((int15 == 7652 as graphic)) {
                    script7924(int3, IF_GETNEXTSUBID(int3), 37, 36, (int20 - 40), (int24 - 4), int15, false, false, false, 0);
                    script10629(int3, IF_GETNEXTSUBID(int3), 37, 36, (int20 - 40), (int24 - 4), inttostring(int22, 10), script10495(1), 26 as fontmetrics, 1, 1, 11, true);
                } else {
                    script7924(int3, IF_GETNEXTSUBID(int3), 20, 20, (int20 - 25), (int24 + 2), int15, false, false, false, 0);
                };
                CC_SETONMOUSEREPEAT(callback(script3876, string3, -2147483645, -2147483643));
            };
        };
        if ((int23 == -1)) {
            script10629(int3, IF_GETNEXTSUBID(int3), (int20 - 74), 15, 74, (int24 + 15), `Offline. Last world: ${inttostring(PLAYER_GROUP_MEMBER_GET_LAST_SEEN_NODE_ID(int21), 10)}`, script10495(3), 26 as fontmetrics, 0, 1, 13, true);
            CC_SETMAXLINES(1);
        } else if ((int23 == MAP_WORLD())) {
            script10469(int3, IF_GETNEXTSUBID(int3), 74, (int24 + 15), (int20 - 84), 20, int26, int25, 16711680);
        } else {
            script10629(int3, IF_GETNEXTSUBID(int3), (int20 - 74), 15, 74, (int24 + 15), `On world: ${inttostring(int23, 10)}`, script10495(3), 26 as fontmetrics, 0, 1, 13, true);
            CC_SETMAXLINES(1);
        };
        int24 = (int24 + 43);
        int21 = (int21 + 1);
    };
    if ((int24 > int19)) {
        IF_SETSCROLLSIZE(0, int24, int6);
        script31(int7, int6, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSCROLLSIZE(0, 0, int6);
        IF_SETSCROLLPOS(0, 0, int6);
    };
    return;
}