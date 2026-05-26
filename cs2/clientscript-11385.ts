//
function script11385(): void {
    if ((varbitclient_27911 < 100)) {
        varbitclient_27911 = (varbitclient_27911 + 1);
        return;
    };
    varbitclient_27911 = 0;
    IF_SETHIDE(true, comp(1620, 5));
    IF_SETHIDE(true, comp(1620, 7));
    IF_SETHIDE(true, comp(1620, 12));
    IF_SETONTIMER(callback(), comp(1620, 20));
    return;
}