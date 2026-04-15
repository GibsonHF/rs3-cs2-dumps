//
function script2963(int0: component, int1: component, int2: int): void {
    if ((FRIEND_COUNT() < 0)) {
        return;
    };
    var int3 = script3211(int0);
    var int4 = script3099(int0);
    var int5 = script3210(int0);
    var int6 = script10589(int0);
    var int7 = script11297(int0);
    var int8 = script12016(int0);
    var int9 = script12025(int1);
    var int10 = script12019(int0);
    var int11 = script3524(int0);
    var int12 = script3518(int0);
    var int13 = script14977(int1);
    var int14 = script14978(int1);
    var int15 = IF_GETWIDTH(int3);
    var int16 = IF_GETWIDTH(int5);
    var int17 = script6431();
    var int18 = enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics);
    var int19 = 26 as fontmetrics;
    if ((int17 == true)) {
        var int2 = SCALE(IF_GETWIDTH(int5), 4, 3);
        int19 = 32 as fontmetrics;
        int18 = enum_getvalue(25, 0, 8549 as cs2enum, 32 as fontmetrics);
    };
    var int20 = (int2 + (script3365(int5) - script3365(int4)));
    var int21 = (IF_GETWIDTH(int4) - (int20 + int15));
    int18 = (int18 + 4);
    IF_SETPOSITION(int2, 0, 0, 1, int3);
    IF_SETSIZE(int21, 0, 0, 1, int6);
    IF_SETSIZE(int21, 0, 0, 1, int7);
    var int22 = 155;
    var int23 = 185;
    if ((IF_GETWIDTH(int0) < int23)) {
        IF_SETHIDE(true, int8);
    } else {
        IF_SETHIDE(false, int8);
    };
    if ((IF_GETWIDTH(int0) < int22)) {
        IF_SETHIDE(true, int10);
        if ((int12 != comp(-1, 65535))) {
            IF_SETHIDE(false, int12);
        };
    } else {
        IF_SETHIDE(false, int10);
        if ((int12 != comp(-1, 65535))) {
            IF_SETHIDE(true, int12);
        };
    };
    if ((IF_GETWIDTH(int1) < 155)) {
        IF_SETHIDE(true, int9);
    } else {
        IF_SETHIDE(false, int9);
    };
    if ((IF_GETWIDTH(int1) < 125)) {
        IF_SETHIDE(true, int13);
        if ((int14 != comp(-1, 65535))) {
            IF_SETHIDE(false, int14);
        };
    } else {
        IF_SETHIDE(false, int13);
        if ((int14 != comp(-1, 65535))) {
            IF_SETHIDE(true, int14);
        };
    };
    if ((int2 <= 0)) {
        int2 = IF_GETX(int3);
    };
    int2 = MAX(MIN(int2, (int16 - int15)), 0);
    if ((int16 > 0)) {
        varclient_1036 = int2;
    };
    var string0 = "";
    var string1 = "";
    var int24 = 0;
    var int25 = 0;
    var int26 = FRIEND_COUNT();
    var int27 = (5 + (int18 * int26));
    while ((int24 < int26)) {
        if ((CC_FIND(int4, int24) == 1)) {
            [string0, string1] = FRIEND_GETNAME(int24);
            if ((STRINGWIDTH(string0, int19) > int20)) {
                while ((STRINGWIDTH(`${string0}...`, int19) > int20)) {
                    string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 1));
                };
                string0 = `${string0}...`;
                CC_SETTEXT(string0);
            };
        };
        int25 = FRIEND_GETWORLD(int24);
        if (((CC_FIND(int7, int24) == 1) && (CC_FIND[1](int6, int24) == 1))) {
            if (((int25 > 0) && (((STRING_INDEXOF_STRING(unk11120(int24), "RuneScape", 0) != -1) || (TESTBIT(unk11119(int24), 16) == 1)) || (TESTBIT(unk11119(int24), 20) == 1)))) {
                if ((int21 >= (((STRINGWIDTH(inttostring(int25, 10), int19) + 2) + 24) + 2))) {
                    CC_SETPOSITION[1](((2 + 24) + 2), CC_GETY[1](), 0, 0);
                    CC_SETHIDE(false);
                } else {
                    CC_SETPOSITION[1](2, CC_GETY[1](), 0, 0);
                    CC_SETHIDE(true);
                };
            } else {
                CC_SETPOSITION[1](2, CC_GETY[1](), 0, 0);
                CC_SETHIDE(true);
            };
        };
        int24 = (int24 + 1);
    };
    script3516(int27, script2968(int0), script3098(int0));
    script3516(int27, script12021(int1), script12022(int1));
    return;
}