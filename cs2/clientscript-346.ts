//
function script346(int0: int): void {
    if ((MODULO(CLIENTCLOCK(), 29) != 0)) {
        return;
    };
    var int1 = comp(1226, 18);
    var int2 = 31884 as graphic;
    var int3 = 31889 as graphic;
    var int4 = 31890 as graphic;
    var int5 = 32067 as graphic;
    var int6 = 2;
    var int7 = 50;
    var int8 = IF_GETHEIGHT(int1);
    var int9 = IF_GETWIDTH(int1);
    script1637(int1, int2, int3, int4, int5, int6, int7, int8, int9, int0, 100, 1);
    var int0 = (int0 - 1);
    if ((IF_FIND(int1) == 1)) {
        if ((int0 == 0)) {
            CC_SETONTIMER(callback());
        } else {
            CC_SETONTIMER(callback(script346, int0));
        };
    };
    return;
}