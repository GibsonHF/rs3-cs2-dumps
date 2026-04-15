//
function script10921(): void {
    var int0 = 0;
    var int1 = 0;
    var string0 = "";
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        varclient_7416 = MIN((varclient_7416 + 1), (3600 - 1));
        int1 = (varclient_7416 / 60);
        int0 = (varclient_7416 - (int1 * 60));
        if ((int1 < 10)) {
            string0 = `0${inttostring(int1, 10)}m:`;
        } else {
            string0 = `${inttostring(int1, 10)}m:`;
        };
        if ((int0 < 10)) {
            string0 = strconcat(string0, `0${inttostring(int0, 10)}s`);
        } else {
            string0 = strconcat(string0, `${inttostring(int0, 10)}s`);
        };
        IF_SETTEXT(string0, comp(1550, 4));
    } else if ((varclient_7416 <= 0)) {
        IF_SETTEXT("--m:--s", comp(1550, 4));
    };
    return;
}