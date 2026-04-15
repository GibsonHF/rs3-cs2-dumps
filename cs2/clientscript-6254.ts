//
function script6254(int0: component, int1: component, int2: int): void {
    CC_DELETEALL(int0);
    var int3 = -1;
    var int4 = -1 as obj;
    var int5 = 1;
    var int6 = 1;
    var int7 = -1;
    var int8 = ENUM_GETOUTPUTCOUNT(15103 as cs2enum);
    var int9 = 5;
    var int10 = IF_GETWIDTH(int0);
    if ((varbitplayer_34815 == 1)) {
        int9 = 4;
    };
    var int11 = 26;
    while ((++int3 < int8)) {
        int4 = enum_getvalue(0, 33, 15103 as cs2enum, int3);
        CC_CREATE(int0, int9, int3);
        CC_SETHIDE(true);
        CC_SETONMOUSELEAVE(callback(script8805));
        CC_SETDRAGDEADTIME(5);
        CC_SETDRAGDEADZONE(5);
        CC_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642));
    };
    script6255(int0, int1, int2);
    return;
}