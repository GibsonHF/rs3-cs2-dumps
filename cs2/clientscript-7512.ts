//
function script7512(int0: number, int1: number): void {
    var int2 = 144;
    var int3 = IF_GETHEIGHT(91029527);
    if ((CLIENTCLOCK() > int1)) {
        if ((int0 > 0)) {
            int2 = SCALE(int0, 15, 144);
            IF_SETSIZE(int2, int3, 0, 0, 91029527);
            IF_SETTEXT(inttostring(int0, 10), 91029528);
            varclient_2710 = --int0;
            var int1 = (CLIENTCLOCK() + 50);
            IF_SETONTIMER(callback(script7512, int0, int1), 91029527);
        } else {
            int2 = SCALE(int0, 15, 144);
            IF_SETSIZE(int2, int3, 0, 0, 91029527);
            IF_SETONTIMER(callback(), 91029527);
        };
    };
    return;
}