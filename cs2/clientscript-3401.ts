//
function script3401(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = (int3 - CLIENTCLOCK());
    var int5 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int4 <= 0)) {
            CC_SETTRANS(255);
            CC_SETONTIMER(callback(script3402, int0, int1, int2, (CLIENTCLOCK() + int2)));
            CC_SETTEXT(script15798());
            return;
        };
        int5 = (255 - CC_GETTRANS());
        CC_SETTRANS(MIN((CC_GETTRANS() + (int5 / int4)), 254));
    };
    return;
}