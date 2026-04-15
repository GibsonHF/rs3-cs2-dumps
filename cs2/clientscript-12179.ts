//
function script12179(int0: component, int1: int, int2: int): void {
    if ((((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, int2) == 1)) && (CC_GETHIDE[1]() == false))) {
        CC_SETHIDE[1](true);
        CC_SETONTIMER(callback(script12180, int0, int1, int2));
    };
    return;
}