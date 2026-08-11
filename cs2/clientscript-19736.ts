//
function script19736(): void {
    unk10997(83755021);
    if ((varbitplayer_57133 >= 4)) {
        switch (RANDOM(2)) {
            case 0: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(57865 as vorbis, 1, 0, 240, 10, 10));
                break;
            }
            case 1: {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(57866 as vorbis, 1, 0, 240, 10, 10));
                break;
            }
        };
        IF_SETHIDE(true, comp(1278, 14));  // trh204_overlay:treasure_room_desc
        stack(55);
        stack(2330);
        unk11010(83755022, "i", 83755021);
        unk11009();
    } else {
        IF_SETHIDE(false, comp(1278, 14));  // trh204_overlay:treasure_room_desc
    };
    return;
}