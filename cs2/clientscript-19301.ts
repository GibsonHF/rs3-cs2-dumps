//
function script19301(int0: unknown_int): void {
    IF_SETHIDE(true, comp(1290, 1));
    IF_SETHIDE(true, comp(1290, 2));
    unk10997(comp(1290, 151));
    switch (int0) {
        case 2: {
            SOUND_VORBIS_VOLUME(56696 as vorbis, 1, 0, 180);
            script16198(true, 82117067);
            IF_SETHIDE(false, comp(1290, 1));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1290, 2));
            script19304(1);
            break;
        }
    };
    script19267();
    script19996();
    return;
}