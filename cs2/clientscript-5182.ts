//
function script5182(int0: struct, int1: cs2enum, int2: int, int3: boolean, int4: int): void {
    if ((int2 == -1)) {
        var int2 = (ENUM_GETOUTPUTCOUNT(int1) - 1);
    };
    var int5 = 0;
    var string0 = "";
    var int6 = 0;
    var int7 = 0;
    while ((int5 <= int2)) {
        string0 = script16005(int1, int5);
        if ((((STRING_LENGTH(string0) > 0) && (script11805(int5) == 0)) && (((int1 == 10322 as cs2enum) && (script11806(int0, int5) == 0)) || ((int1 == 15425 as cs2enum) && (script8035(UI_GETDYNID(CC_GETID()), int5) == 0))))) {
            CC_LIST_ADDENTRY(int5, string0, -1);
            if ((int5 == int4)) {
                CC_LIST_SETISSELECTED(int6, 1, 0);
            };
            int6 = (int6 + 1);
        };
        int5 = (int5 + 1);
    };
    CC_SETENABLED(script12585(int3));
    return;
}