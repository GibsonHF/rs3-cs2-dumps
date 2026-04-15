//
function script14302(int0: cs2enum): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = 0;
    var int3 = (IF_GETWIDTH(comp(813, 16)) - 10);
    var int4 = 5;
    var int5 = ((IF_GETHEIGHT(comp(813, 16)) - 10) / int1);
    var int6 = 0;
    CC_DELETEALL(comp(813, 17));
    CC_DELETEALL(comp(813, 18));
    while ((int2 < int1)) {
        int6 = enum_getvalue(0, 0, int0, int2);
        script10410(comp(813, 17), comp(813, 18), 28556 as struct, 5, int4, int3, 20, int2, false, enum_getvalue(0, 36, 14133 as cs2enum, int6));
        if ((CC_FIND(comp(813, 18), int2) == 1)) {
            CC_SETOP(1, "Make 1");
            CC_SETOP(2, "Make 5");
            CC_SETOP(3, "Make X");
            CC_SETOP(4, "Make All");
        };
        int4 = (int4 + int5);
        int2 = (int2 + 1);
    };
    return;
}