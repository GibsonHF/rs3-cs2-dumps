//
function script15372(int0: component, int1: int, int2: int, int3: component): void {
    var int4 = (int2 - CLIENTCLOCK());
    var int5 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int4 <= 0)) {
            CC_SETTRANS(255);
            CC_SETONTIMER(callback());
            if ((int3 != -1)) {
                IF_SETHIDE(false, int3);
            };
            return;
        };
        int5 = (255 - CC_GETTRANS());
        CC_SETTRANS(MIN((CC_GETTRANS() + (int5 / int4)), 254));
    };
    return;
}