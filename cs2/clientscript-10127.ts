//
function script10127(int0: component, int1: unknown_int): void {
    var int2 = IF_GETTRANS(int0);
    if ((int1 == 1)) {
        varbitclient_23071 = 1;
        if ((int2 < 251)) {
            IF_SETTRANS((int2 + 5), int0);
        } else {
            IF_SETHIDE(true, comp(231, 11));
            IF_SETONTIMER(callback(), comp(231, 11));
            varbitclient_23071 = 0;
        };
    } else if ((int2 > 4)) {
        IF_SETTRANS((int2 - 5), int0);
    } else {
        IF_SETONTIMER(callback(), comp(231, 11));
    };
    return;
}