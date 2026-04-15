//
function script13612(int0: category, int1: unknown_int, int2: component): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = -1 as achievement;
    int4 = ACHIEVEMENT_FINDCATEGORY(int0);
    int5 = ACHIEVEMENT_FINDNEXT();
    while ((int5 != -1 as achievement)) {
        if ((ACHIEVEMENT_REQSTATE(int5) == -2)) {
            int3 = (int3 + 1);
        };
        int5 = ACHIEVEMENT_FINDNEXT();
    };
    var string0 = enum_getvalue(41, 36, 16073 as cs2enum, int0);
    string0 = `${string0}<br>[${TOSTRING_LOCALISED(int3, 1)} / ${TOSTRING_LOCALISED(int4, 1)}]`;
    var int6 = enum_getvalue(41, 73, 16075 as cs2enum, int0);
    script13576(int2, int6);
    IF_SETTEXT(string0, int2);
    stack(struct_getparam(int6, 3910));
    stack(int1);
    IF_SETGRAPHIC();
    var int7 = IF_GETPARENTLAYER(int2);
    CC_DELETEALL(int7);
    stack(41);
    stack(26);
    stack(16076);
    stack(int0);
    enum_getvalue();
    if ((stack() != -1)) {
        CC_CREATE(int7, 5, 0);
        CC_SETPOSITION(2, 0, 2, 1);
        CC_SETSIZE(13, 13, 0, 0);
        CC_SETGRAPHIC(30205 as graphic);
    };
    return;
}