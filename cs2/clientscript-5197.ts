//
function script5197(int0: number, int1: number, int2: number, int3: number): void {
    if ((int1 == -1)) {
        var int1 = (ENUM_GETOUTPUTCOUNT(int0) - 1);
    };
    var int4 = 0;
    var string0 = "";
    var int5 = 0;
    while ((int4 <= int1)) {
        string0 = enum_getvalue(0, 36, int0, int4);
        if (((STRING_LENGTH(string0) > 0) && (script8035(UI_GETDYNID(CC_GETID()), int4) == 0))) {
            if (((int4 < 2) || (int0 != 15424))) {
                CC_LIST_ADDENTRY(int4, string0, -1);
                if ((int4 == int3)) {
                    CC_LIST_SETISSELECTED(int5, 1, 0);
                };
                int5 = (int5 + 1);
            };
        };
        int4 = (int4 + 1);
    };
    CC_SETENABLED(script12585(int2));
    return;
}