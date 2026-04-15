//
function script16394(): void {
    if (((varplayer_8745 == -1 as dbrow) || (varplayer_8746 == -1 as dbrow))) {
        return;
    };
    var string0 = script16444(varplayer_8746);
    if ((STRING_LENGTH(string0) == 0)) {
        IF_SETHIDE(true, comp(955, 8));
        return;
    };
    var string1 = dbrow_getfield(varplayer_8745, 290816, 0);
    var string2 = "";
    var int0 = 0;
    var int1 = dbrow_getfield(varplayer_8746, 295248, 0);
    var int2 = dbrow_getfield(varplayer_8746, 295184, 0);
    var int3 = dbrow_getfield(varplayer_8746, 295200, 0);
    var int4 = dbrow_getfield(varplayer_8746, 295216, 0);
    var int5 = dbrow_getfield(varplayer_8746, 295040, 0);
    var int6 = script18932(varplayer_8746);
    var int7 = 1;
    var int8 = 1;
    var int9 = varplayer_8752;
    var int10 = varplayer_8753;
    var int11 = dbrow_getfield(varplayer_8746, 295072, 0);
    if ((int9 == comp(-1, 65535))) {
        int9 = dbrow_getfield(varplayer_8746, 295008, 0);
        int10 = script18931(varplayer_8746);
    };
    if ((dbrow_getfield(varplayer_8745, 291024, 0) == true)) {
        int7 = script16380(varplayer_8745);
        int8 = script16382(varplayer_8745, varplayer_8747);
    };
    stack(dbrow_getfield(varplayer_8746, 294992, 0));
    [string2, int0] = stack();
    script9554(comp(955, 10), comp(955, 18), comp(955, 11), string1, 21217 as struct);
    var int12 = struct_getparam(21217, 3823);
    switch (int11) {
        case 1: {
            IF_SETHIDE(true, comp(955, 20));
            IF_SETHIDE(true, comp(955, 17));
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(955, 20));
            IF_SETHIDE(false, comp(955, 17));
            break;
        }
        default: {
            if ((int8 <= 1)) {
                IF_SETHIDE(false, comp(955, 20));
                IF_SETHIDE(false, comp(955, 17));
            } else {
                IF_SETHIDE(false, comp(955, 20));
                IF_SETHIDE(true, comp(955, 17));
            };
            break;
        }
    };
    script16395(int7, int8);
    if (((varbitplayer_22874 == 1) && (script6431() == false))) {
        int2 = script16413(int2);
        int3 = script16413(int3);
        int4 = script16413(int4);
    };
    int2 = script16414(int2);
    int3 = script16414(int3);
    int4 = script16414(int4);
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    [int13, int14, int15, int16] = script14244();
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = dbrow_getfield(varplayer_8746, 294976, 0);
    var int29 = (MIN(575, (int15 - int13)) - int24);
    var int30 = -1 as fontmetrics;
    var int31 = 0;
    var int32 = ENUM_GETOUTPUTCOUNT(8488 as cs2enum);
    var int33 = 0;
    if ((script6431() == false)) {
        int33 = 2;
    };
    if ((varclient_6403 != 0)) {
        int29 = (MIN(375, (int15 - int13)) - int24);
        int33 = (int33 + 2);
    };
    if (((int2 != -1 as graphic) || (int1 != -1 as obj))) {
        int27 = 10;
        int29 = (int29 - 10);
        [int18, int19] = script16415(int2, int1);
        if ((int3 != -1 as graphic)) {
            [int20, int21] = script16415(int3, -1 as obj);
            if ((int4 != -1 as graphic)) {
                int17 = 3;
                [int22, int23] = script16415(int4, -1 as obj);
                int24 = MAX(MAX(int18, int20), int22);
                int25 = ((int19 + int21) + int23);
                int26 = 10;
            } else {
                int17 = 2;
                int24 = MAX(int18, int20);
                int25 = (int19 + int21);
                int26 = 5;
            };
        } else {
            int17 = 1;
            int24 = int18;
            int25 = int19;
        };
        int29 = (int29 - int24);
    };
    while ((int33 < int32)) {
        int30 = enum_getvalue(0, 25, 8488 as cs2enum, int33);
        int31 = STRINGWIDTH(string2, int30);
        if ((int31 < int29)) {
            int33 = int32;
        };
        int33 = (int33 + 1);
    };
    if ((script6431() == true)) {
        if ((varclient_6403 != 0)) {
            int33 = 2;
        } else {
            int33 = 0;
        };
    } else {
        int33 = 2;
    };
    var int34 = 26 as fontmetrics;
    var int35 = (300 - (MIN(1, int31) * 20));
    var int36 = 0;
    var int37 = 0;
    var int38 = 0;
    while ((int33 < int32)) {
        int34 = enum_getvalue(0, 25, 8488 as cs2enum, int33);
        int36 = script11432(int34);
        int37 = PARAWIDTH(string0, int29, int34);
        int38 = script7593(string0, int29, int34, int36);
        if ((int38 < int35)) {
            int33 = int32;
        };
        int33 = (int33 + 1);
    };
    var int39 = 0;
    var int40 = MAX((int25 + int26), (int38 + (MIN(1, int31) * 20)));
    if ((int37 < int29)) {
        int39 = ((int24 + 10) + MAX(int37, int31));
    } else {
        int39 = ((int24 + 10) + int29);
    };
    if ((IF_GETHIDE(comp(955, 16)) == false)) {
        if ((int39 < IF_GETWIDTH(comp(955, 16)))) {
            int39 = (IF_GETWIDTH(comp(955, 16)) + 30);
        };
        int39 = (int39 + 50);
        int40 = (int40 + 123);
    } else if ((IF_GETHIDE(comp(955, 17)) == false)) {
        if ((int39 < IF_GETWIDTH(comp(955, 17)))) {
            int39 = (IF_GETWIDTH(comp(955, 17)) + 30);
        };
        int39 = (int39 + 50);
        int40 = (int40 + 123);
    } else {
        int39 = (int39 + 50);
        int40 = (int40 + 78);
    };
    IF_SETSIZE(int39, int40, 0, 0, comp(955, 8));
    IF_SETPOSITION(0, (int14 + 33), 1, 0, comp(955, 8));
    script19682(comp(955, 8));
    IF_SETHIDE(false, comp(955, 8));
    if (((STRINGWIDTH(string1, int12) + IF_GETWIDTH(comp(955, 19))) > IF_GETWIDTH(comp(955, 15)))) {
        IF_SETHIDE(true, comp(955, 19));
    } else {
        IF_SETHIDE(false, comp(955, 19));
    };
    CC_DELETEALL(comp(955, 15));
    CC_DELETEALL(comp(955, 9));
    var int41 = 0;
    if ((int31 > 0)) {
        CC_CREATE(comp(955, 15), 4, int41++);
        CC_SETSIZE((int24 + int27), 20, 1, 0);
        CC_SETPOSITION(0, 0, 2, 0);
        CC_SETTEXT(string2);
        CC_SETMAXLINES(1);
        CC_SETCOLOUR(int0);
        CC_SETTEXTFONT(int30);
        CC_SETTEXTALIGN(int28, 1, 0);
    };
    CC_CREATE(comp(955, 15), 4, int41++);
    CC_SETSIZE((int24 + int27), (MIN(int31, 1) * 20), 1, 1);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(int34);
    CC_SETTEXTALIGN(int28, 1, int36);
    if ((int17 > 0)) {
        CC_CREATE(comp(955, 15), 5, int41++);
        CC_SETSIZE(int18, int19, 0, 0);
        CC_SETPOSITION(0, 0, 0, 1);
        if ((int2 != -1 as graphic)) {
            CC_SETGRAPHIC(int2);
            CC_SETONTIMER(callback(script16417, -2147483643, -2147483645));
        } else if ((int1 != -1 as obj)) {
            CC_SETOBJECT(int1, -1);
            CC_SETONTIMER(callback(script16418, -2147483643, int1, -2147483645));
        };
        if ((int17 >= 2)) {
            CC_SETPOSITION(MAX(0, ((int24 / 2) - (int18 / 2))), 0, 0, 0);
            CC_CREATE(comp(955, 15), 5, int41++);
            CC_SETSIZE(int20, int21, 0, 0);
            CC_SETPOSITION(MAX(0, ((int24 / 2) - (int20 / 2))), 0, 0, 2);
            CC_SETGRAPHIC(int3);
            CC_SETONTIMER(callback(script16417, -2147483643, -2147483645));
            if ((int17 >= 3)) {
                CC_SETPOSITION(CC_GETX(), 0, 0, 1);
                CC_CREATE(comp(955, 15), 5, int41++);
                CC_SETSIZE(int22, int23, 0, 0);
                CC_SETPOSITION(MAX(0, ((int24 / 2) - (int22 / 2))), 0, 0, 2);
                CC_SETGRAPHIC(int4);
                CC_SETONTIMER(callback(script16417, -2147483643, -2147483645));
            };
        };
    };
    script16416(255);
    IF_SETONTIMER(callback(script16408), comp(955, 6));
    if ((int9 != -1)) {
        IF_SETONTIMER(callback(script16400, int39, int40, int5, int6, int9, int10), 62586885);
    } else if ((script6431() == true)) {
        IF_SETONTIMER(callback(script16402, int39, int40), comp(955, 5));
    };
    return;
}