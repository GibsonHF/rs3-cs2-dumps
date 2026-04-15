//
function script4556(int0: unknown_int): void {
    var int1 = comp(589, 37);
    var int2 = comp(589, 39);
    var int3 = 38600744;
    var int4 = script13749();
    if ((int4 == true)) {
        int1 = comp(1044, 10);
        int2 = comp(1044, 52);
        int3 = 68419637;
    };
    if (((int0 == 1) && (USERDETAIL_QUICKCHAT() == 0))) {
        IF_SETONKEY(callback(script4555, int2, int3, -2147483640, -2147483639), int1);
        IF_SETONTIMER(callback(script4572, CLIENTCLOCK(), int2, int3), int2);
    } else {
        IF_SETONKEY(callback(), int1);
        IF_SETONTIMER(callback(), int2);
        if (((STRING_LENGTH(varclient_2480) == 0) && (int4 == true))) {
            IF_SETTEXT("Tap here to chat", int2);
        } else {
            IF_SETTEXT(ESCAPE(varclient_2480), int2);
        };
    };
    return;
}