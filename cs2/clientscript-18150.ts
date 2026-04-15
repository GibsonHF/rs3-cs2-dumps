//
function script18150(int0: int, int1: int): [int, obj] {
    var int2 = enum_getvalue(0, 39, 6153 as cs2enum, int1);
    var int3 = 0;
    var int4 = -1;
    if ((int2 != -1 as inv)) {
        return [INV_GETNUM(int2, int0), INV_GETOBJ(int2, int0)];
    };
    return [0, -1 as obj];
}