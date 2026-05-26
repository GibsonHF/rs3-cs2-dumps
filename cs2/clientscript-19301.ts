//
function script19301(int0: number): void {
    IF_SETHIDE(1, 84541441);
    IF_SETHIDE(1, 84541442);
    unk10997(84541591);
    switch (int0) {
        case 2: {
            SOUND_VORBIS_VOLUME(56696, 1, 0, 180);
            script16198(1, 82117067);
            IF_SETHIDE(0, 84541441);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 84541442);
            script19304(1);
            break;
        }
    };
    script19267();
    script19996();
    return;
}