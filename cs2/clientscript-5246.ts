//
function script5246(int0: number, int1: number, int2: number, int3: number): void {
    if ((CLIENTCLOCK() > int2)) {
        IF_SETHIDE(int1, int0);
        if ((CC_FIND(106496004, int3) == 1)) {
            CC_SETONTIMER(callback());
            CC_DELETE();
        };
    };
    return;
}