//
function script3756(int0: number, int1: number): [number, number] {
    var int2 = 0;
    var int3 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        [int2, int3] = script3757();
    } else if (((int1 == -1) && (IF_FIND(int0) == 1))) {
        [int2, int3] = script3757();
    };
    return [int2, int3];
}