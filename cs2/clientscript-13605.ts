//
function script13605(int0: int): void {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(13037 as cs2enum);
    var int3 = comp(-1, 65535);
    while ((int1 < int2)) {
        IF_SETHIDE(true, enum_getvalue(0, 9, 13037 as cs2enum, int1));
        int3 = enum_getvalue(0, 9, 13039 as cs2enum, (int1 + 1));
        if (((int3 != comp(-1, 65535)) && (CC_FIND(int3, 0) == 1))) {
            CC_SETVFLIP(false);
        };
        int1 = (int1 + 1);
    };
    IF_SETHIDE(false, enum_getvalue(0, 9, 13037 as cs2enum, int0));
    int3 = enum_getvalue(0, 9, 13039 as cs2enum, (int0 + 1));
    if (((int3 != comp(-1, 65535)) && (CC_FIND(int3, 0) == 1))) {
        CC_SETVFLIP(true);
    };
    var int4 = 0;
    var int5 = 0;
    CC_DELETEALL(comp(1896, 56));
    IF_SETHIDE(true, comp(1896, 57));
    IF_SETHIDE(true, comp(1896, 56));
    var int6 = enum_getvalue(0, 73, 11155 as cs2enum, (int0 + 1));
    if ((int6 == -1 as struct)) {
        return;
    };
    var int7 = struct_getparam(int6, 6420);
    var int8 = -1 as struct;
    var string0 = "";
    var int9 = 0;
    if ((int7 != -1 as cs2enum)) {
        IF_SETHIDE(false, comp(1896, 56));
        int4 = ENUM_GETOUTPUTCOUNT(int7);
        IF_SETSIZE((5 * 2), (2 + (int4 * (32 + 2))), 1, 0, comp(1896, 56));
        IF_SETPOSITION(5, (2 + ((45 + 2) * (int0 + 1))), 1, 0, comp(1896, 56));
        while ((int5 < int4)) {
            int8 = enum_getvalue(0, 73, int7, int5);
            CC_CREATE(comp(1896, 56), 3, (int5 * 2));
            CC_SETPOSITION(1, ((int5 * (32 + 2)) + 2), 0, 0);
            CC_SETSIZE(5, 32, 1, 0);
            CC_SETFILL(1);
            if ((MODULO(int5, 2) == 0)) {
                CC_SETCOLOUR(script10495(12));
                CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID(), script10495(13)));
                CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID(), script10495(12)));
            } else {
                CC_SETCOLOUR(script10495(9));
                CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID(), script10495(10)));
                CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID(), script10495(9)));
            };
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script13607, -2147483643));
            CC_CREATE(124256312, 4, ((int5 * 2) + 1));
            CC_SETPOSITION(5, ((int5 * (32 + 2)) + 2), 0, 0);
            CC_SETSIZE((5 * 2), 32, 1, 0);
            CC_SETCOLOUR(16711422);
            CC_SETTEXTSHADOW(1);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXTFONT(26);
            string0 = struct_getparam(int8, 6421);
            if ((PARAHEIGHT(string0, CC_GETWIDTH(), CC_GETFONTMETRICS()) > 1)) {
                CC_SETONMOUSEREPEAT(callback(script8799, string0, 124256312, CC_GETID()));
                if ((strcmp(struct_getparam(int8, 6756), "") != 0)) {
                    string0 = struct_getparam(int8, 6756);
                };
            };
            CC_SETTEXT(string0);
            int5 = (int5 + 1);
        };
    };
    script13606(0, int0, int4);
    return;
}