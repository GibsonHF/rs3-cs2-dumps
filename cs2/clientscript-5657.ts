//
function script5657(int0: component, int1: int, int2: int): void {
    var int3 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2 < 10)) {
            var int2 = (int2 + 1);
            CC_SETONTIMER(callback(script5657, int0, int1, int2));
            return;
        };
        int3 = CC_GETTRANS();
        if ((int3 < 255)) {
            int3 = MIN((CC_GETTRANS() + 2), 255);
            CC_SETTRANS(int3);
            CC_SETPOSITION(0, MAX((CC_GETY() - 4), 0), 1, 0);
        };
        if ((int3 >= 255)) {
            CC_DELETE();
        } else {
            CC_SETONTIMER(callback(script5657, int0, int1, int2));
        };
    };
    return;
}