//
function script10127(int0: number, int1: number): void {
    var int2 = IF_GETTRANS(int0);
    if ((int1 == 1)) {
        varbitclient_23071 = 1;
        if ((int2 < 251)) {
            IF_SETTRANS((int2 + 5), int0);
        } else {
            IF_SETHIDE(1, 15138827);
            IF_SETONTIMER(callback(), 15138827);
            varbitclient_23071 = 0;
        };
    } else if ((int2 > 4)) {
        IF_SETTRANS((int2 - 5), int0);
    } else {
        IF_SETONTIMER(callback(), 15138827);
    };
    return;
}