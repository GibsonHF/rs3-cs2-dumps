//
function script408(int0: int): void {
    if ((varclient_1363 == int0)) {
        return;
    };
    IF_SETONVARCTRANSMIT(callback(script408, varclient_1363, 1363, 1), comp(1013, 1));
    varclient_1389 = 0;
    if ((varclient_1363 == varbitplayer_5386)) {
        IF_SETHIDE(false, comp(1010, 26));
        IF_SETHIDE(true, comp(1010, 25));
        IF_SETHIDE(true, comp(1010, 22));
        IF_SETTEXT("Your Turn", comp(1013, 26));
        SOUND_VORBIS_VOLUME(3439 as vorbis, 1, 0, 255);
    } else {
        IF_SETHIDE(true, comp(1010, 26));
        IF_SETHIDE(true, comp(1010, 22));
        IF_SETTEXT("Opponent's Turn", comp(1013, 26));
        if ((IF_GETHIDE(comp(1010, 7)) == true)) {
            IF_SETHIDE(false, comp(1010, 25));
        };
    };
    return;
}