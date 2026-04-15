//
function script7909(int0: boolean, int1: cs2enum, int2: int, int3: int): void {
    CC_SETENABLED(int0);
    if ((int1 == -1 as cs2enum)) {
        return;
    };
    if ((int2 == -1)) {
        CC_LIST_SETENTRIES(int1);
        if (((int3 >= 0) && (int3 < ENUM_GETOUTPUTCOUNT(int1)))) {
            CC_LIST_SETISSELECTED(int3, 1, 0);
        };
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    while ((int4 <= int2)) {
        string0 = enum_getvalue(0, 36, int1, int4);
        if ((STRING_LENGTH(string0) > 0)) {
            CC_LIST_ADDENTRY(int4, string0, -1);
            if ((int4 == int3)) {
                CC_LIST_SETISSELECTED(int5, 1, 0);
            } else {
                int5 = (int5 + 1);
            };
        };
        int4 = (int4 + 1);
    };
    return;
}