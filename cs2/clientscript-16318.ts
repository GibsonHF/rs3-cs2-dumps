//
function script16318(int0: int, int1: int): struct {
    if (((int1 == 0) || (int0 == 0))) {
        return -1 as struct;
    };
    var int2 = enum_getvalue(0, 26, 17112 as cs2enum, int0);
    if ((int2 != -1 as cs2enum)) {
        return enum_getvalue(0, 73, int2, int1);
    };
    return -1 as struct;
}