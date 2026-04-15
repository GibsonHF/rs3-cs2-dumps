//
function script9335(int0: component, int1: int, int2: int): void {
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, int2) == 1))) {
        CC_SETTRANS(255);
        CC_SETTRANS[1](0);
    };
    return;
}