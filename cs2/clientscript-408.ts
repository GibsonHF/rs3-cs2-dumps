//
function script408(int0: number): void {
    if ((varclient_1363 == int0)) {
        return;
    };
    IF_SETONVARCTRANSMIT(callback(script408, varclient_1363, 1363, 1), 66387969);
    varclient_1389 = 0;
    if ((varclient_1363 == varbitplayer_5386)) {
        IF_SETHIDE(0, 66191386);
        IF_SETHIDE(1, 66191385);
        IF_SETHIDE(1, 66191382);
        IF_SETTEXT("Your Turn", 66387994);
        SOUND_VORBIS_VOLUME(3439, 1, 0, 255);
    } else {
        IF_SETHIDE(1, 66191386);
        IF_SETHIDE(1, 66191382);
        IF_SETTEXT("Opponent's Turn", 66387994);
        if ((IF_GETHIDE(66191367) == 1)) {
            IF_SETHIDE(0, 66191385);
        };
    };
    return;
}