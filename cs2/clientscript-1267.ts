//
function script1267(int0: number, string0: string): void {
    var int1 = 80871435;
    if (((varbitplayer_26696 == 1) || (varbitplayer_27169 == 1))) {
        int1 = 96010275;
    };
    if ((strcmp(string0, IF_GETTEXT(int1)) == 0)) {
        return;
    };
    IF_SETTEXT(string0, 80871435);
    IF_SETTEXT(string0, 96010275);
    IF_SETHIDE(0, 80871428);
    IF_SETHIDE(0, 96010269);
    IF_SETONTIMER(callback(), 80871428);
    IF_SETONTIMER(callback(), 96010269);
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), 80871428);
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), 96010269);
    return;
}