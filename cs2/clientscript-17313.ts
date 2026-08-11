//
function script17313(int0: number): void {
    var int1 = script444();
    switch (int0) {
        case 0: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(21207 as vorbis, 1, 0, 200);
            };
            if ((varbitplayer_52884 == 1)) {
                if ((int1 == 1)) {
                    SOUND_VORBIS_VOLUME(6663 as vorbis, 1, 0, 240);
                };
                IF_SETHIDE(false, comp(1152, 24));  // trh192_overlay:target_bullseye_arrow_trueshot
            } else {
                IF_SETHIDE(false, comp(1152, 23));  // trh192_overlay:target_bullseye_arrow
            };
            break;
        }
        case 1: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6622 as vorbis, 1, 0, 220);
            };
            IF_SETHIDE(false, comp(1152, 25));  // trh192_overlay:target_inner_ring_arrow
            break;
        }
        case 2: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6579 as vorbis, 1, 0, 200);
            };
            IF_SETHIDE(false, comp(1152, 26));  // trh192_overlay:target_middle_ring_arrow
            break;
        }
        case 3: {
            if ((int1 == 1)) {
                SOUND_VORBIS_VOLUME(6586 as vorbis, 1, 0, 180);
            };
            IF_SETHIDE(false, comp(1152, 27));  // trh192_overlay:target_outer_ring_arrow
            break;
        }
        default: {
            IF_SETHIDE(true, comp(1152, 23));  // trh192_overlay:target_bullseye_arrow
            IF_SETHIDE(true, comp(1152, 25));  // trh192_overlay:target_inner_ring_arrow
            IF_SETHIDE(true, comp(1152, 26));  // trh192_overlay:target_middle_ring_arrow
            IF_SETHIDE(true, comp(1152, 27));  // trh192_overlay:target_outer_ring_arrow
            IF_SETHIDE(true, comp(1152, 24));  // trh192_overlay:target_bullseye_arrow_trueshot
            break;
        }
    };
    return;
}