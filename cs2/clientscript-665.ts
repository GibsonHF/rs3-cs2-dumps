//
function script665(int0: int, int1: int, int2: component, int3: int): void {
    CC_CREATE(int2, 3, int3);
    CC_SETTRANS(255);
    CC_SETFILL(1);
    CC_SETCOLOUR(int0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    var int1 = MIN(int1, 250);
    CC_SETONTIMER(callback(script666, (CLIENTCLOCK() + int1), int2, int3));
    return;
}