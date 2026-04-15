//
function script3650(int0: component, int1: component, int2: int): void {
    var int3 = script3602(int2);
    var int4 = script3610(int3, 0);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    var int9 = -1 as npc;
    var int10 = -1 as loc;
    var int11 = false;
    var string0 = "";
    var int12 = DB_GETFIELDCOUNT(int3, 303344);
    var int13 = (IF_GETWIDTH(int1) - 5);
    if ((IF_GETHIDE(comp(634, 54)) == true)) {
        int13 = (int13 - 16);
    };
    int13 = (int13 - 30);
    var int14 = dbrow_getfield(int3, 303360, 0);
    var int15 = script3604(int2);
    CC_DELETEALL(int1);
    switch (int2) {
        case 0: {
            string0 = "A";
            break;
        }
        case 1: {
            string0 = "B";
            break;
        }
    };
    IF_SETTEXT(`Task ${string0}`, int0);
    var int16 = 0;
    var int17 = script3606(int2, 0);
    var int18 = script3606(int2, 1);
    var int19 = dbrow_getfield(int3, 303216, 0);
    var int20 = 0;
    var int21 = dbrow_getfield(int3, 303392, 0);
    var int22 = -1 as stat;
    var string1 = "";
    var string2 = "";
    [string1, string2] = dbrow_getfield(int3, 303200, 0);
    var int23 = 0;
    var int24 = 0;
    if ((STRING_LENGTH(string1) > 0)) {
        script8758(int1, int16, string1, int24);
    } else {
        int22 = dbrow_getfield(int3, 303136, 0);
        if ((int22 != -1 as stat)) {
            script8758(int1, int16, enum_getvalue(17, 36, 680 as cs2enum, int22), int24);
        } else {
            script8758(int1, int16, dbrow_getfield(int3, 303104, 0), int24);
        };
    };
    int24 = (int24 + 1);
    int16 = (int16 + 34);
    while ((int17 < int12)) {
        stack(dbrow_getfield(int3, 303344, int17));
        [int6, int5, int7, int8, int9, int10, int11, string0] = stack();
        if ((int21 == true)) {
        } else if ((((int6 <= int4) && (int6 >= int20)) && (int17 != int19))) {
            if (((int11 == true) && (AND(int5, varplayer_9062) != 0))) {
                if (((STRING_LENGTH(string0) == 0) && (int8 != -1 as obj))) {
                    string0 = OC_NAME(int8);
                };
                int23 = (16 + MAX(24, script7593(string0, int13, 28 as fontmetrics, -1)));
                if ((MODULO(int24, 2) == 0)) {
                    CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
                    CC_SETGRAPHIC(11438 as graphic);
                    CC_SETPOSITION(0, int16, 0, 0);
                    CC_SETSIZE(286, int23, 0, 0);
                };
                CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
                CC_SETCOLOUR(9353660);
                CC_SETTEXT(string0);
                CC_SETTEXTFONT(28 as fontmetrics);
                CC_SETPOSITION(5, int16, 0, 0);
                CC_SETSIZE(int13, int23, 0, 0);
                CC_SETTEXTALIGN(0, 1, 0);
                if ((int14 == true)) {
                    CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
                    CC_SETPOSITION(258, (int16 + ((int23 - 24) / 2)), 0, 0);
                    CC_SETSIZE(24, 24, 0, 0);
                    CC_SETGRAPHIC(11436 as graphic);
                    if ((TESTBIT(int15, int7) == 1)) {
                        CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
                        CC_SETPOSITION(262, (int16 + ((int23 - 24) / 2)), 0, 0);
                        CC_SETSIZE(24, 24, 0, 0);
                        CC_SETGRAPHIC(11437 as graphic);
                    };
                };
                int20 = int6;
                int16 = (int16 + int23);
                int24 = (int24 + 1);
            };
            int17 = (int17 + 1);
        } else if ((int18 > 0)) {
            int17 = int18;
            int4 = script3610(int3, 1);
            int21 = dbrow_getfield(int3, 303408, 0);
            int18 = 0;
            int19 = 0;
            int20 = 0;
            if ((STRING_LENGTH(string2) > 0)) {
                script8758(int1, int16, string2, int24);
            } else {
                int22 = dbrow_getfield(int3, 303152, 0);
                if ((int22 != -1 as stat)) {
                    script8758(int1, int16, enum_getvalue(17, 36, 680 as cs2enum, int22), int24);
                };
            };
            int24 = (int24 + 1);
            int16 = (int16 + 34);
        } else {
            int17 = int12;
        };
    };
    IF_SETSCROLLSIZE(0, int16, comp(634, 58));
    if ((IF_GETSCROLLY(comp(634, 58)) > IF_GETSCROLLHEIGHT(comp(634, 58)))) {
        IF_SETSCROLLPOS(0, IF_GETSCROLLHEIGHT(comp(634, 58)), comp(634, 58));
    };
    if ((int16 < IF_GETHEIGHT(comp(634, 58)))) {
        IF_SETHIDE(true, comp(634, 54));
        IF_SETSIZE(0, 0, 1, 1, comp(634, 58));
    } else {
        IF_SETHIDE(false, comp(634, 54));
        IF_SETSIZE(16, 0, 1, 1, comp(634, 58));
    };
    script3784(comp(634, 56), comp(634, 54), comp(634, 58));
    return;
}