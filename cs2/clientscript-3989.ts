//
function script3989(int0: component, int1: obj): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int2 = -1 as obj;
    var int3 = -1 as inv;
    if ((IF_FIND(int0) == 1)) {
        var [int1, int2, int3] = script13265(int1);
        if (((int2 != -1 as obj) && (int2 != int1))) {
            script14994(int1, -1 as inv, -1, int2, int3, 1);
        } else if (((int2 != -1 as obj) || (int1 != -1 as obj))) {
            script14994(int1, -1 as inv, -1, int2, int3, 0);
        } else {
            script14994(-1 as obj, -1 as inv, -1, -1 as obj, -1 as inv, 0);
            CC_SETONMOUSEREPEAT(callback());
        };
    };
    return;
}