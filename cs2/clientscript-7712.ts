//
function script7712(int0: component, int1: component, int2: component, int3: int): void {
    var int4 = 0;
    if ((CC_FIND(int2, int3) == 1)) {
        CC_SETONVARCTRANSMIT(callback(script7711, 92471355, 92471356, 92471357, -2147483643, 92471352, 2235, 2236, 2));
    };
    if ((IF_GETHIDE(int1) == true)) {
        IF_SETHIDE(false, int0);
        int4 = (CLIENTCLOCK() + 30);
        IF_SETONTIMER(callback(script7713, int0, int1, int4), int0);
    };
    return;
}