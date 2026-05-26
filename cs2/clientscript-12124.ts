//
function script12124(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = int3;
    if ((CLIENTCLOCK() > int1)) {
        CC_DELETEALL(int0);
        if ((IF_FIND(int0) == 1)) {
            cc_setparam(5530, -1);
            CC_SETONTIMER(callback());
        };
        while ((int5 < int4)) {
            if ((CC_FIND(int2, int5) == 1)) {
                CC_SETHIDE(0);
            };
            int5 = (int5 + 1);
        };
    };
    return;
}