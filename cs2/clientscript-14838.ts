//
function script14838(): void {
    IF_SETONTIMER(callback(), comp(685, 73));
    if ((strcmp(varclient_2250, "") == 0)) {
        script14839();
    } else {
        IF_SETTEXT(ESCAPE(varclient_2250), comp(685, 99));
        IF_SETHIDE(false, comp(685, 102));
        IF_SETHIDE(false, comp(685, 101));
        IF_SETONCLICK(callback(script14837), comp(685, 102));
        script14829(varclient_2250);
        script13965(44892255, -1, 28549);
    };
    return;
}