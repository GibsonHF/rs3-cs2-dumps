//
function script12179(int0: number, int1: number, int2: number): void {
    if ((((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, int2) == 1)) && (CC_GETHIDE[1]() == 0))) {
        CC_SETHIDE[1](1);
        CC_SETONTIMER(callback(script12180, int0, int1, int2));
    };
    return;
}