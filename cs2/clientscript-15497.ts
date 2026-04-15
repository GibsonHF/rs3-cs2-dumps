//
function script15497(int0: unknown_int): void {
    var int1 = script15460();
    var int2 = 1;
    if ((int0 == 1)) {
        CC_DELETEALL(comp(1253, 556));
        CC_CREATE(comp(1253, 556), 5, 0);
    };
    var int3 = comp(-1, 65535);
    while ((int2 <= int1)) {
        if ((int0 == 1)) {
            CC_CREATE(comp(1253, 556), 5, int2);
        };
        int3 = enum_getvalue(0, 9, 16177 as cs2enum, int2);
        if ((int3 != comp(-1, 65535))) {
            script15505(int3);
        };
        int2 = (int2 + 1);
    };
    return;
}