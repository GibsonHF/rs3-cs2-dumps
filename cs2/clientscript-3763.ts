//
function script3763(int0: component, int1: int): int {
    var int2 = 0;
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        int2 = script3765();
    };
    return int2;
}