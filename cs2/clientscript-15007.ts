//
function script15007(): void {
    IF_SETONTIMER(callback(), 85917831);
    if ((strcmp(varclient_2250, "") == 0)) {
        script15002();
    } else {
        varclient_6786 = varclient_2250;
        IF_SETTEXT(ESCAPE(varclient_2250), 85917836);
        IF_SETHIDE(0, 85917839);
        IF_SETHIDE(0, 85917838);
        IF_SETONCLICK(callback(script15005), 85917839);
        script7494();
        script7491(varclient_2699, varbitplayer_678, 0, varclient_2250);
        script13965(85917832, -1, 28549);
    };
    return;
}