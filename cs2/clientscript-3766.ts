//
function script3766(int0: component, int1: int): [int, int] {
    var int2 = IF_GETX(int0);
    var int3 = IF_GETY(int0);
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        [int2, int3] = script3767();
    };
    return [int2, int3];
}