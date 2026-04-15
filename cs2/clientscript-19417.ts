//
function script19417(int0: unknown_int): void {
    var string0 = "Regular";
    if (((int0 == 1) || (MODULO(CLIENTCLOCK(), 50) == 0))) {
        if (((varbitplayer_56572 == 1) || (varbitplayer_56573 == 1))) {
            IF_SETHIDE(true, comp(1300, 1));
            IF_SETHIDE(false, comp(1300, 2));
            IF_SETTEXT(varclient_8166, comp(1300, 6));
            IF_SETMAXLINES(1, comp(1300, 6));
            script3536(varclient_8166, comp(1300, 6), -1);
            string0 = script19324(varclient_8158, varclient_8159);
            IF_SETTEXT(string0, comp(1300, 8));
            script19418();
            if ((varbitplayer_56572 == 1)) {
                IF_SETHIDE(false, comp(1300, 9));
                IF_SETHIDE(false, comp(1300, 12));
                IF_SETHIDE(false, comp(1300, 15));
                IF_SETPOSITION(0, 35, 1, 0, comp(1300, 16));
            } else {
                IF_SETHIDE(true, comp(1300, 9));
                IF_SETHIDE(true, comp(1300, 12));
                IF_SETHIDE(true, comp(1300, 15));
                IF_SETPOSITION(0, 0, 1, 0, comp(1300, 16));
            };
        } else {
            IF_SETHIDE(false, comp(1300, 1));
            IF_SETHIDE(true, comp(1300, 2));
        };
    };
    return;
}