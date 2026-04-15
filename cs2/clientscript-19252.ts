//
function script19252(int0: int, int1: component, int2: int): void {
    var int3 = 50;
    var int4 = UI_GETCATEGORY(int2);
    var int5 = 0;
    if ((CC_FIND(int1, int2) == 1)) {
        if ((CLIENTCLOCK() >= (int0 + int3))) {
            CC_DELETEALLNESTED();
            CC_DELETE();
            return;
        };
        if ((MODULO(((int0 + int3) - CLIENTCLOCK()), 5) == 0)) {
            CC_SETPOSITION(CC_GETX(), (CC_GETY() - 1), 0, 0);
        };
        while ((++int5 < 5)) {
            if (((CC_FINDBYCATEGORY[1](int1, int4, int5) == 1) && (CLIENTCLOCK() >= ((int0 + int3) - 10)))) {
                CC_SETTRANS[1]((255 - (25 * ((int0 + int3) - CLIENTCLOCK()))));
            };
        };
    };
    return;
}