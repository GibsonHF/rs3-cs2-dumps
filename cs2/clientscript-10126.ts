//
function script10126(): void {
    if ((varbitclient_23079 == 1)) {
        IF_SETGRAPHIC(23644 as graphic, comp(231, 15));
    } else {
        IF_SETHIDE(true, comp(231, 5));
        IF_SETGRAPHIC(23641 as graphic, comp(231, 15));
    };
    var int0 = IF_GETWIDTH(comp(231, 4));
    if ((PARAWIDTH(CHAT_PLAYERNAME(), 2000, 28 as fontmetrics) > (int0 - (95 + PARAWIDTH(IF_GETTEXT(comp(231, 13)), 2000, 28 as fontmetrics))))) {
        if (((IF_GETHIDE(comp(231, 11)) == false) && (varbitclient_23071 == 0))) {
            IF_SETTRANS(0, comp(231, 11));
            IF_SETONTIMER(callback(script10127, 15138827, 1), comp(231, 11));
        };
    } else if ((IF_GETHIDE(comp(231, 11)) == true)) {
        IF_SETTRANS(255, comp(231, 11));
        IF_SETHIDE(false, comp(231, 11));
        IF_SETONTIMER(callback(script10127, 15138827, 0), comp(231, 11));
    };
    return;
}