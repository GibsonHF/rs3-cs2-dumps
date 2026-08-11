//
function script5152(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    varclient_1563 = MAX((varclient_1563 - 1), 0);
    if ((MODULO(varclient_1563, 50) == 0)) {
        int2 = (varclient_1563 / 50);
        int1 = MODULO(int2, 60);
        int0 = (int2 / 60);
        string0 = `${inttostring(int0, 10)}:`;
        if ((int1 < 10)) {
            string0 = strconcat(string0, `0${inttostring(int1, 10)}`);
        } else {
            string0 = strconcat(string0, inttostring(int1, 10));
        };
        IF_SETTEXT(string0, comp(800, 6));  // clan_kickout_overlay:clan_kickout_timer
    };
    if ((varclient_1563 <= 0)) {
        IF_SETONTIMER(callback(), comp(800, 6));  // clan_kickout_overlay:clan_kickout_timer
        IF_CLOSE();
    };
    return;
}