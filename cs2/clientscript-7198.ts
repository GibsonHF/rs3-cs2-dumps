//
function script7198(): void {
    script7997();
    IF_SETHIDE(true, comp(475, 10));
    IF_SETHIDE(true, comp(475, 11));
    IF_SETHIDE(true, comp(475, 12));
    IF_SETHIDE(false, comp(475, 13));
    IF_SETHIDE(false, comp(475, 8));
    IF_SETHIDE(false, comp(475, 25));
    IF_SETONTIMER(callback(script2870, -2147483645, (CLIENTCLOCK() + 150)), comp(475, 25));
    script3455();
    IF_SETONTIMER(callback(script7940, -2147483645), 96796710);
    script12446();
    if ((varbitplayer_27169 == 1)) {
        IF_SETHIDE(true, comp(1477, 92));
        IF_SETHIDE(true, comp(1477, 67));
        IF_SETHIDE(true, comp(1477, 61));
        IF_SETHIDE(true, comp(1477, 638));
    };
    if ((varclient_4667 < 64)) {
        varclient_4667 = (64 + ((1024 - 64) / 2));
    };
    if ((varclient_4668 < 1)) {
        varclient_4668 = (1 + ((50 - 1) / 2));
    };
    script8776();
    script8836(7693 as cs2enum);
    IF_SETONVARCTRANSMIT(callback(script3008, COORD(), 4718, 1), comp(1477, 38));
    return;
}