//
function script3751(int0: int): unknown_int {
    var int1 = 0;
    var int2 = -1 as struct;
    var int3 = 1;
    while (((enum_getvalue(0, 0, 8659 as cs2enum, int1) != -1) && (int3 == 1))) {
        int2 = enum_getvalue(0, 73, 8660 as cs2enum, int1);
        if ((((int2 != -1 as struct) && (struct_getparam(int2, 4187) == int0)) && (script3749(int1) == 0))) {
            int3 = 0;
        };
        int1 = (int1 + 1);
    };
    return int3;
}