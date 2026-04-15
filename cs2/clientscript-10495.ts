//
function script10495(int0: int): int {
    var int1 = -1 as cs2enum;
    var int2 = enum_getvalue(0, 0, 9183 as cs2enum, int0);
    var int3 = int2;
    var int4 = script15721();
    if ((int4 != 0)) {
        int1 = enum_getvalue(0, 26, 9182 as cs2enum, int4);
        if ((int1 != -1 as cs2enum)) {
            int3 = enum_getvalue(0, 0, int1, int0);
            if ((int3 == -1)) {
                int3 = int2;
            };
        };
    };
    return int3;
}