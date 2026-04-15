//
function script3369(int0: int, int1: unknown_int, int2: int): void {
    var int2 = (int2 + 1);
    if ((CC_FIND(comp(1216, 1), int0) == 1)) {
        CC_SETONTIMER(callback(script3369, int0, int1, int2));
        if ((CLIENTCLOCK() > (int1 + 50))) {
            CC_SETPOSITION(CC_GETX(), MAX((CC_GETY() - 2), 0), 0, 0);
        };
        if (((int2 > 100) && (CC_GETY() < 20))) {
            CC_DELETE();
        };
    };
    return;
}