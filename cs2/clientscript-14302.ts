//
function script14302(int0: number): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = 0;
    var int3 = (IF_GETWIDTH(53280784) - 10);
    var int4 = 5;
    var int5 = ((IF_GETHEIGHT(53280784) - 10) / int1);
    var int6 = 0;
    CC_DELETEALL(53280785);
    CC_DELETEALL(53280786);
    while ((int2 < int1)) {
        int6 = enum_getvalue(0, 0, int0, int2);
        script10410(53280785, 53280786, 28556, 5, int4, int3, 20, int2, 0, enum_getvalue(0, 36, 14133 as cs2enum, int6));
        if ((CC_FIND(53280786, int2) == 1)) {
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