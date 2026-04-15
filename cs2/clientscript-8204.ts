//
function script8204(int0: int, int1: int): string {
    var int2 = -1 as cs2enum;
    var string0 = "";
    if ((int0 == 21)) {
        string0 = struct_getparam(script10405(int1), 3493);
    } else if ((int0 == 2)) {
        if ((int1 == 6)) {
            string0 = "RS3 Helper";
        } else {
            string0 = struct_getparam(enum_getvalue(0, 73, 7699 as cs2enum, int1), 3493);
        };
    } else {
        int2 = enum_getvalue(0, 26, 7695 as cs2enum, int0);
        string0 = enum_getvalue(0, 36, int2, int1);
    };
    return string0;
}