//
function script7788(int0: inv, int1: obj, int2: int): void {
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = script9249(int0);
    if ((int0 == 93 as inv)) {
        int3 = comp(107, 7);
    } else {
        int4 = enum_getreverseindex(39, 0, 1079 as cs2enum, int0, 0);
        if ((int4 != -1)) {
            int3 = enum_getvalue(0, 9, 1080 as cs2enum, int4);
        };
    };
    if ((IF_FIND(int3) == 1)) {
        if (((CC_GETINVCOUNT() - int2) > 0)) {
            CC_SETOBJECT(CC_GETINVOBJECT(), (CC_GETINVCOUNT() - int2));
        } else {
            CC_SETOBJECT(-1 as obj, 0);
        };
    };
    return;
}