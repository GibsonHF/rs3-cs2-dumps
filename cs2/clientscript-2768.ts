//
function script2768(int0: number, int1: number): void {
    if ((CC_FIND(int1, 0) == 1)) {
        CC_SETFILL(1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETTRANS(0);
        CC_SETONTIMER(callback(script2769, (CLIENTCLOCK() + int0), int1));
    };
    return;
}