//
function script303(int0: coordgrid, int1: unknown_int): void {
    SOUND_SYNTH(31334, 1, 0);
    if ((HAS_HTML5() == 1)) {
        if ((int1 == 0)) {
            script7954(int0);
        } else {
            script7955(int0);
        };
    } else if ((int1 == 0)) {
        WORLDMAP_JUMPTOSOURCECOORD(int0);
    } else {
        WORLDMAP_JUMPTODISPLAYCOORD(int0);
    };
    return;
}