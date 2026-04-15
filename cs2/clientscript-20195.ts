//
function script20195(int0: unknown_int): void {
    var int1 = script20117(varplayer_12314);
    if (((int1 == -1 as dbrow) || (script20129() == false))) {
        script20207();
        return;
    };
    var int2 = dbrow_getfield(int1, 1335600, 0);
    script20206();
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(9053 as cs2enum);
    var int5 = -1;
    var int6 = 0;
    var int7 = false;
    var int8 = -1 as graphic;
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    var string0 = "";
    var int11 = -1 as dbrow;
    var int12 = 0;
    while ((int3 < int4)) {
        int5 = enum_getvalue(0, 0, 9053 as cs2enum, int3);
        int9 = enum_getvalue(0, 9, 9080 as cs2enum, int5);
        int10 = enum_getvalue(0, 9, 9081 as cs2enum, int5);
        string0 = enum_getvalue(0, 36, 9057 as cs2enum, int5);
        int6 = script20133(int2, int5);
        int7 = script6428(int5, varbitplayer_58391);
        if ((int6 == 1)) {
            int11 = 17062 as dbrow;
        } else {
            int11 = 4476 as dbrow;
        };
        if (((int9 != comp(-1, 65535)) && (int10 != comp(-1, 65535)))) {
            if ((IF_FIND[1](int10) == 1)) {
                int8 = CC_GETGRAPHIC[1]();
            };
            script15938(comp(1409, 25), int5, 0, 0, 0, 0, 0, 0, 40, 1, 0);
            script7862(int5, 1, 0, 0, 0, 0, 0, 0, 1, 1, int11, string0, true, 1, true, int7);
            CC_SETONMOUSEREPEAT(callback(script20198, -2147483645, -2147483643));
            stack(0);
            stack(40);
            stack(4);
            stack(4);
            stack(4);
            unk11098();
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETOP(1, "Select");
            script7918(int5, 2, 0, 0, 0, 1, 40, 40, 0, 0, int8);
            if ((int6 == 1)) {
                IF_SETHIDE(false, int9);
                IF_SETCOLOUR(16777215, int9);
            };
        };
        int12 = (int12 + 44);
        int3 = (int3 + 1);
    };
    if ((int0 == 1)) {
        IF_SETSCROLLPOS(0, (MAX(0, (varbitplayer_58391 - 2)) * 44), comp(1409, 25));
    };
    script19620(comp(1409, 26), comp(1409, 25), int12, comp(-1, 65535), -1, 0, 0, 40);
    if ((varbitplayer_58390 == 0)) {
        IF_SETHIDE(false, comp(1409, 7));
        IF_SETHIDE(true, comp(1409, 23));
    } else {
        IF_SETHIDE(true, comp(1409, 7));
        IF_SETHIDE(false, comp(1409, 23));
        script20205();
    };
    return;
}