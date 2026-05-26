//
function script10126(): void {
    if ((varbitclient_23079 == 1)) {
        stack(23644);
        stack(15138831);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(1, 15138821);
        stack(23641);
        stack(15138831);
        IF_SETGRAPHIC();
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