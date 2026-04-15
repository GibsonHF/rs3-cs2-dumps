//
function script7157(int0: component, int1: obj, int2: int): int {
    if ((int1 == -1 as obj)) {
        return 0;
    };
    var int3 = 0;
    var string0 = "";
    var int4 = item_getparam(int1, 2281);
    var int5 = -1 as struct;
    CC_DELETEALL(int0);
    if ((int4 != -1 as struct)) {
        int5 = struct_getparam(int4, 7601);
        if ((int5 != -1 as struct)) {
            string0 = script4744(int5, 0);
        };
    };
    int3 = script7132(int0, int3);
    var int6 = (3 + 5);
    script7134(int0, string0, 26, 1, int2, int6, (IF_GETWIDTH(int0) - int6), int3);
    var int2 = (int2 + CC_GETHEIGHT());
    script7133(0, 0, IF_GETWIDTH(int0), (MAX(0, (CC_GETY() + CC_GETHEIGHT())) + 3), int0, (int3 - 1));
    return int2;
}