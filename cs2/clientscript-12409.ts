//
function script12409(int0: component): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = -1;
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    [int1, int2, int3, int4, int5] = script12406(int0);
    var int6 = script3510();
    script14980(int1, int6);
    IF_SETSIZE(16, 84, 1, 0, int0);
    IF_SETSIZE(0, 16, 1, 1, int4);
    if ((varbitplayer_22875 != 1)) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    var int7 = IF_GETWIDTH(int0);
    var int8 = IF_GETHEIGHT(int0);
    var int9 = (2 + 2);
    var int10 = (36 + 2);
    var int11 = ((32 + 2) + 2);
    var int12 = (int8 - (2 + 2));
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    [int16, int15, int13, int14] = script14981(int6, (int7 - 2), int10, int9, 2);
    if (((int16 * int11) > int12)) {
        IF_SETSIZE(16, 84, 1, 0, int0);
        IF_SETPOSITION(0, 0, 2, 2, int4);
        IF_SETSIZE(16, (IF_GETHEIGHT(int0) - 16), 0, 0, int4);
        int7 = IF_GETWIDTH(int0);
        int8 = IF_GETHEIGHT(int0);
        [int16, int15, int13, int14] = script14981(int6, (int7 - 2), int10, int9, 2);
    };
    IF_SETSCROLLSIZE(0, MAX((IF_GETHEIGHT(int0) + 10), (((int16 * int11) + (2 + 2)) - int8)), int0);
    var int17 = 0;
    var int18 = 0;
    var int19 = -1 as obj;
    var int20 = 0;
    var int21 = -1 as dbrow;
    var int22 = 0;
    define_array(int15);
    var int23 = 0;
    while ((int23 < int15)) {
        pop_array(int23, script9857(int13, 2, int14, int23));
        int23 = (int23 + 1);
    };
    var int24 = 0;
    var int25 = 0;
    var string0 = "";
    var string1 = "";
    var int26 = -1 as obj;
    var int27 = -1 as graphic;
    while ((int17 < int6)) {
        if (((CC_FIND[1](int1, int17) == 1) && (CC_FIND(int2, int17) == 1))) {
            if ((int17 == 0)) {
                int19 = 29492 as obj;
                int20 = varbitplayer_23015;
            } else if ((int17 == 1)) {
                int19 = 29494 as obj;
                int20 = varbitplayer_23016;
            } else if ((int17 < (8 + 2))) {
                int19 = -1 as obj;
                while (((int19 == -1 as obj) && (int25 < 8))) {
                    int19 = INV_GETOBJ(795 as inv, int25);
                    int20 = INV_GETNUM(795 as inv, int25);
                    int25 = (int25 + 1);
                };
            } else {
                int19 = -1 as obj;
                int21 = -1 as dbrow;
                while (((int21 == -1 as dbrow) && (int22 < 8))) {
                    int21 = script14968((int22 + 1));
                    int22 = (int22 + 1);
                };
            };
            if ((int21 != -1 as dbrow)) {
                int26 = dbrow_getfield(int21, 270400, 0);
                int27 = dbrow_getfield(int21, 270384, 0);
                int20 = script14965(int21);
                if ((int21 == 2274 as dbrow)) {
                    int20 = (int20 * 10);
                };
                if ((int26 != -1 as obj)) {
                    CC_SETSIZE(36, 32, 0, 0);
                    int27 = -1 as graphic;
                } else {
                    int26 = 41028 as obj;
                };
                script14982(int26, int20, push_array(MODULO(int18, int15)), ((int18 / int15) * int11));
                CC_SETONMOUSEOVER(callback(script3519, int21, -2147483645, -2147483643));
                if ((CC_FIND[1](int5, int17) == 1)) {
                    CC_SETGRAPHIC[1](int27);
                    if ((int27 != -1 as graphic)) {
                        CC_SETPOSITION[1]((push_array(MODULO(int18, int15)) + 3), ((((int18 / int15) * int11) + 2) + 1), 0, 0);
                        CC_SETSIZE[1](32, 32, 0, 0);
                    };
                };
                string0 = dbrow_getfield(int21, 270464, 0);
                string1 = dbrow_getfield(int21, 270480, 0);
                if (((int26 != -1 as obj) && (int26 != 41028 as obj))) {
                    CC_SETOPBASE(`${script4033(int26)}${OC_NAME(int26)}`);
                };
                if (((STRING_LENGTH(string0) != 0) || (STRING_LENGTH(string1) != 0))) {
                    if ((STRING_LENGTH(string0) != 0)) {
                        CC_SETOP(1, string0);
                    };
                    if ((STRING_LENGTH(string1) != 0)) {
                        CC_SETOP(2, string1);
                    };
                    script10407();
                };
                if ((dbrow_getfield(int21, 270352, 0) == 1)) {
                    CC_SETOP(3, "Withdraw");
                    CC_SETOP(10, "Examine");
                    script10407();
                };
                int18 = (int18 + 1);
            } else if ((int19 != -1 as obj)) {
                script14982(int19, int20, push_array(MODULO(int18, int15)), ((int18 / int15) * int11));
                script12410(int19);
                CC_SETONMOUSEREPEAT(callback(script12093, int19, 795, int17));
                if ((CC_FIND[1](int5, int17) == 1)) {
                    CC_SETGRAPHIC[1](-1 as graphic);
                };
                int18 = (int18 + 1);
            } else {
                CC_SETGRAPHIC[1](-1 as graphic);
                CC_CLEAROPS();
                CC_SETOBJECT_NONUM(-1 as obj, 0);
                CC_SETGRAPHIC(-1 as graphic);
                CC_SETONMOUSEREPEAT(callback());
                CC_SETONMOUSEOVER(callback());
                if ((CC_FIND[1](int1, int17) == 1)) {
                    CC_SETGRAPHIC[1](-1 as graphic);
                };
                if ((CC_FIND[1](int5, int17) == 1)) {
                    CC_SETGRAPHIC[1](-1 as graphic);
                };
            };
        };
        int17 = (int17 + 1);
    };
    if ((int18 > 0)) {
        [int16, int15, int13, int14] = script14981(int18, (int7 - 2), int10, int9, 2);
        script14983(int0, int16);
    };
    var int28 = MAX(IF_GETHEIGHT(int0), (((int16 * int11) + 2) + 2));
    CC_DELETEALL(int4);
    IF_SETSCROLLSIZE(0, int28, int0);
    if ((int28 > IF_GETHEIGHT(int0))) {
        script7791(int4, int0);
    };
    return;
}