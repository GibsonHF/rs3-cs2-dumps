//
function script14696(): boolean {
    var int0 = 15904 as cs2enum;
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = -1 as obj;
    var int3 = -1;
    while ((++int3 < int1)) {
        int2 = enum_getvalue(0, 33, int0, int3);
        if ((script7163(item_getparam(int2, 2646)) == true)) {
            return true;
        };
    };
    return false;
}