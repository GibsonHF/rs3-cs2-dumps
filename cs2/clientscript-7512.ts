//
function script7512(int0: int, int1: int): void {
    var int2 = 144;
    var int3 = IF_GETHEIGHT(comp(1389, 23));
    if ((CLIENTCLOCK() > int1)) {
        if ((int0 > 0)) {
            int2 = SCALE(int0, 15, 144);
            IF_SETSIZE(int2, int3, 0, 0, comp(1389, 23));
            IF_SETTEXT(inttostring(int0, 10), comp(1389, 24));
            varclient_2710 = --int0;
            var int1 = (CLIENTCLOCK() + 50);
            IF_SETONTIMER(callback(script7512, int0, int1), comp(1389, 23));
        } else {
            int2 = SCALE(int0, 15, 144);
            IF_SETSIZE(int2, int3, 0, 0, comp(1389, 23));
            IF_SETONTIMER(callback(), comp(1389, 23));
        };
    };
    return;
}