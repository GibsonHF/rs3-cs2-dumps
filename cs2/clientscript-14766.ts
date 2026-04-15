//
function script14766(int0: component, int1: component, int2: dbrow, int3: int, int4: int, int5: int, int6: int, int7: int): int {
    var int8 = (((((int5 - (2 * 8)) - 26) - (4 * 8)) - int6) - int7);
    var int9 = int4;
    var int10 = 8;
    var int11 = script14502(int2);
    script6203(int1, int8, 30, ((int3 + 8) + int6), ((int9 + int10) - 2), 55 as fontmetrics, dbrow_getfield(int2, 344128, 0), 0);
    CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8584 as cs2enum, CC_GETFONTMETRICS()));
    var int12 = MAX(30, ((2 * int10) + script7593(CC_GETTEXT(), int8, CC_GETFONTMETRICS(), enum_getvalue(25, 0, 8584 as cs2enum, CC_GETFONTMETRICS()))));
    CC_SETSIZE(int8, (int12 + 2), 0, 0);
    if ((int11 == 2)) {
        script7924(int1, IF_GETNEXTSUBID(int1), 26, 26, ((((int3 + int5) - 26) - 8) - int7), (int9 + 2), 28293 as graphic, false, false, false, 0);
        script3537(`${inttostring(script14504(int2), 10)}/${inttostring(DB_GETFIELDCOUNT(int2, 344272), 10)}`);
    } else {
        script152(int1, (26 + (3 * 8)), int12, ((((int3 + int5) - 26) - (4 * 8)) - int7), (int9 + int10), 26 as fontmetrics, `${inttostring(script14504(int2), 10)}/${inttostring(DB_GETFIELDCOUNT(int2, 344272), 10)}`, 16777215);
        CC_SETTEXTALIGN(2, 0, 0);
    };
    script10410(int0, comp(-1, 65535), 2830 as struct, int3, int9, int5, int12, -1, false, "");
    int9 = (int9 + int12);
    return int9;
}