//
function script3766(int0: number, int1: number): [number, number] {
    var int2 = IF_GETX(int0);
    var int3 = IF_GETY(int0);
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        [int2, int3] = script3767();
    };
    return [int2, int3];
}