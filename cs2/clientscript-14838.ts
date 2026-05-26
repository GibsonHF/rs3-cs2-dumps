//
function script14838(): void {
    IF_SETONTIMER(callback(), 44892233);
    if ((strcmp(varclient_2250, "") == 0)) {
        script14839();
    } else {
        IF_SETTEXT(ESCAPE(varclient_2250), 44892259);
        IF_SETHIDE(0, 44892262);
        IF_SETHIDE(0, 44892261);
        IF_SETONCLICK(callback(script14837), 44892262);
        script14829(varclient_2250);
        script13965(44892255, -1, 28549);
    };
    return;
}