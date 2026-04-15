//
function script2731(int0: component, int1: int, int2: int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        CC_SETCOLOUR(script10495(int2));
        CC_SETONVARTRANSMIT(callback(script6719, int0, int1, int2, 3814, 1));
    };
    return;
}