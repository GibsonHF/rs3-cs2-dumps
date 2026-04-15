//
function script12085(int0: component, int1: int, int2: int): void {
    if ((CLIENTCLOCK() < int2)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTRANS(0);
        CC_SETONTIMER(callback(script5657, -2147483645, CC_GETID(), 0));
    };
    return;
}