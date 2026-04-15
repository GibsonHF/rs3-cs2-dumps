//
function script17673(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var int3 = -1;
    var int4 = ENUM_GETOUTPUTCOUNT(7691 as cs2enum);
    var int5 = -1;
    while ((++int5 < int4)) {
        int2 = enum_getvalue(0, 0, 7691 as cs2enum, int5);
        int3 = script8824(int2, int0, int1);
        if ((int3 != -1)) {
            return [int2, int3];
        };
    };
    return [0, 0];
}