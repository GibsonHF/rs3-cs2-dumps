//
function script10126(): void {
    if ((varbitclient_23079 == 1)) {
        IF_SETGRAPHIC(23644, 15138831);
    } else {
        IF_SETHIDE(1, 15138821);
        IF_SETGRAPHIC(23641, 15138831);
    };
    var int0 = IF_GETWIDTH(15138820);
    if ((PARAWIDTH(CHAT_PLAYERNAME(), 2000, 28) > (int0 - (95 + PARAWIDTH(IF_GETTEXT(15138829), 2000, 28))))) {
        if (((IF_GETHIDE(15138827) == 0) && (varbitclient_23071 == 0))) {
            IF_SETTRANS(0, 15138827);
            IF_SETONTIMER(callback(script10127, 15138827, 1), 15138827);
        };
    } else if ((IF_GETHIDE(15138827) == 1)) {
        IF_SETTRANS(255, 15138827);
        IF_SETHIDE(0, 15138827);
        IF_SETONTIMER(callback(script10127, 15138827, 0), 15138827);
    };
    return;
}