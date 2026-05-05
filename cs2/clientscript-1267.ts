//
function script1267(int0: unknown_int, string0: string): void {
    var int1 = comp(1234, 11);
    if (((varbitplayer_26696 == 1) || (varbitplayer_27169 == 1))) {
        int1 = comp(1465, 35);
    };
    if ((strcmp(string0, IF_GETTEXT(int1)) == 0)) {
        return;
    };
    IF_SETTEXT(string0, comp(1234, 11));
    IF_SETTEXT(string0, comp(1465, 35));
    IF_SETHIDE(false, comp(1234, 4));
    IF_SETHIDE(false, comp(1465, 29));
    IF_SETONTIMER(callback(), comp(1234, 4));
    IF_SETONTIMER(callback(), 96010269);
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), 80871428);
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), 96010269);
    return;
}