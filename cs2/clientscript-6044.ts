//
function script6044(): void {
    if (((IF_GETHIDE(comp(1263, 5)) == false) && (varbitplayer_43349 == 2))) {
        printmessage("You must choose an xp type first.");
    } else {
        printmessage("You must choose a skill first.");
    };
    SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
    return;
}