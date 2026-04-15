//
function script15347(int0: component, int1: component, int2: category, int3: int, int4: int): unknown_int {
    if ((script2457(int2) == 1)) {
        return 0;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = ACHIEVEMENT_FINDNEXT();
    while ((int8 != -1 as achievement)) {
        int6 = ACHIEVEMENT_REQSTATE(int8);
        if ((int6 == -2)) {
            int5 = (int5 + 1);
        } else if (((int6 == -1) && (unk11111(int8) != 0))) {
            int7 = (int7 + 1);
        };
        int8 = ACHIEVEMENT_FINDNEXT();
    };
    var string0 = enum_getvalue(41, 36, 16073 as cs2enum, int2);
    var int9 = enum_getvalue(41, 23, 16074 as cs2enum, int2);
    var int10 = IF_GETWIDTH(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int10, 45, 0, 0);
    CC_SETPOSITION(0, int3, 0, 0);
    cc_setparam(7162, int3);
    CC_SETGRAPHIC(-1 as graphic);
    var int11 = ENUM_GETOUTPUTCOUNT(16072 as cs2enum);
    if ((int2 != -1 as category)) {
        int11 = enum_getreverseindex(41, 0, 16072 as cs2enum, int2, 0);
    };
    var int12 = 28556 as struct;
    script10410(int0, int1, int12, 3, int3, (int10 - 6), 45, int11, false, "");
    if ((CC_FIND(int0, (IF_GETNEXTSUBID(int0) - 1)) == 1)) {
        CC_SETONRELEASE(callback());
    };
    if ((CC_FIND(int1, int11) == 1)) {
        CC_SETONCLICK(callback(script15350, int0, int1, int12, CC_GETID()));
        CC_SETONVARTRANSMIT(callback(script15349, int0, int1, int12, CC_GETID(), 9607, 1));
        CC_SETONOP(callback(script15352, int0, int1, CC_GETID()));
        CC_SETOP(1, "Select");
        CC_SETOPBASE(string0);
        IF_SETPARAM_INT(9209, CC_GETID(), int1);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(28, 28, 0, 0);
    CC_SETPOSITION(8, (int3 + 8), 0, 0);
    CC_SETGRAPHIC(int9);
    string0 = strconcat(string0, `<br>[${TOSTRING_LOCALISED(int5, 1)} / ${TOSTRING_LOCALISED(int4, 1)}]`);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(36, 41, 1, 0);
    CC_SETPOSITION(40, (int3 + 2), 0, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(script10495(2));
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(10, (int3 + ((45 - 13) / 2)), 2, 0);
    CC_SETSIZE(13, 13, 0, 0);
    CC_SETONVARTRANSMIT(callback(script15348, int0, CC_GETID(), int2, 7120, 1));
    return 1;
}