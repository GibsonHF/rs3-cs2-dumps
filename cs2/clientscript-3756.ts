//
function script3756(int0: component, int1: int): [int, int] {
    var int2 = 0;
    var int3 = 0;
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        [int2, int3] = script3757();
    };
    return [int2, int3];
}