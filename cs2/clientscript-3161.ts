//
function script3161(int0: number): void {
    var int1 = 59768862;
    var int2 = 59768864;
    var int3 = 59768865;
    var int4 = script13749();
    if ((int4 == 1)) {
        int1 = 68419594;
        int2 = 68419636;
        int3 = 68419637;
    };
    if (((int0 == 1) && (USERDETAIL_QUICKCHAT() == 0))) {
        IF_SETONKEY(callback(script3160, -2147483640, -2147483639, int2, int3), int1);
        IF_SETONTIMER(callback(script1391, CLIENTCLOCK(), int2, int3), int2);
    } else {
        IF_SETONKEY(callback(), int1);
        IF_SETONTIMER(callback(), int2);
        if (((STRING_LENGTH(varclient_2479) == 0) && (int4 == 1))) {
            IF_SETTEXT("Tap here to chat", int2);
        } else {
            IF_SETTEXT(ESCAPE(varclient_2479), int2);
        };
    };
    return;
}