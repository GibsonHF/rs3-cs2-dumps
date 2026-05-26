//
function script1620(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int4 = (int4 + CLIENTCLOCK());
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        CC_SETTRANS(int2);
        CC_SETONTIMER(callback(script1621, int0, int1, int3, int4));
    };
    return;
}