//
function script5246(int0: component, int1: boolean, int2: int, int3: int): void {
    if ((CLIENTCLOCK() > int2)) {
        IF_SETHIDE(int1, int0);
        if ((CC_FIND(comp(1625, 4), int3) == 1)) {
            CC_SETONTIMER(callback());
            CC_DELETE();
        };
    };
    return;
}