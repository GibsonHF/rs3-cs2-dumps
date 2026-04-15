//
function script948(int0: component, int1: int, int2: int, string0: string): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = script15709(1);
    [int3, int4] = script7775(1, string0, int2, -1n, -1, -1, -1, -1);
    if (((IF_FIND(int7) == 1) && (CC_FIND(int0, int1) == 1))) {
        int5 = CC_GETX();
        int6 = CC_GETY();
        script1222(int3, int4, int5, int6);
    };
    return;
}