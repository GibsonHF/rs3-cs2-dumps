//
function script11133(): void {
    var int0 = SCALE((varbitplayer_27375 - 500), 500, 8096);
    if ((int0 < 0)) {
        int0 = (int0 + 65536);
    };
    IF_SET2DANGLE(int0, comp(1600, 2));  // easter15_hatching:egg_graphic
    IF_SET2DANGLE(int0, comp(1600, 3));  // easter15_hatching:egg_spots_graphic_1
    IF_SET2DANGLE(int0, comp(1600, 4));  // easter15_hatching:egg_spots_graphic_2
    IF_SET2DANGLE(int0, comp(1600, 5));  // easter15_hatching:egg_graphic_bottom
    IF_SET2DANGLE(int0, comp(1600, 6));  // easter15_hatching:egg_graphic_roots
    SOUND_VORBIS_RATE(10758 as vorbis, 1, 0, 80, 512);
    return;
}