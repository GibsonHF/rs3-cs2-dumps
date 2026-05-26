//
function script15007(): void {
    IF_SETONTIMER(callback(), comp(1311, 135));
    if ((strcmp(varclient_2250, "") == 0)) {
        script15002();
    } else {
        varclient_6786 = varclient_2250;
        IF_SETTEXT(ESCAPE(varclient_2250), comp(1311, 140));
        IF_SETHIDE(false, comp(1311, 143));
        IF_SETHIDE(false, comp(1311, 142));
        IF_SETONCLICK(callback(script15005), comp(1311, 143));
        script7494();
        script7491(varclient_2699, varbitplayer_678, 0, varclient_2250);
        script13965(85917832, -1, 28549);
    };
    return;
}