//
function script11125(int0: number): void {
    if ((int0 == 34494)) {
        IF_SETGRAPHIC(25103 as graphic, comp(1600, 2));  // easter15_hatching:egg_graphic
        IF_SETHIDE(true, comp(1600, 3));  // easter15_hatching:egg_spots_graphic_1
        IF_SETHIDE(true, comp(1600, 4));  // easter15_hatching:egg_spots_graphic_2
        IF_SETHIDE(true, comp(1600, 5));  // easter15_hatching:egg_graphic_bottom
        IF_SETMODEL(103294 as model, comp(1600, 23));  // easter15_hatching:complete_jadinko_model
    } else {
        IF_SETHIDE(false, comp(1600, 3));  // easter15_hatching:egg_spots_graphic_1
        IF_SETHIDE(false, comp(1600, 4));  // easter15_hatching:egg_spots_graphic_2
        IF_SETHIDE(false, comp(1600, 5));  // easter15_hatching:egg_graphic_bottom
        IF_SETMODEL(103295 as model, comp(1600, 23));  // easter15_hatching:complete_jadinko_model
    };
    IF_SETCOLOUR(item_getparam(int0, 4885), comp(1600, 2));  // easter15_hatching:egg_graphic
    IF_SETCOLOUR(item_getparam(int0, 4886), comp(1600, 3));  // easter15_hatching:egg_spots_graphic_1
    IF_SETCOLOUR(item_getparam(int0, 4886), comp(1600, 4));  // easter15_hatching:egg_spots_graphic_2
    IF_SETCOLOUR(item_getparam(int0, 4886), comp(1600, 5));  // easter15_hatching:egg_graphic_bottom
    IF_SETRECOL(1, 36840, item_getparam(int0, 4887), comp(1600, 24));  // easter15_hatching:complete_egg_model
    IF_SETRECOL(2, 17384, item_getparam(int0, 4888), comp(1600, 24));  // easter15_hatching:complete_egg_model
    IF_SETRECOL(3, 55232, item_getparam(int0, 4889), comp(1600, 24));  // easter15_hatching:complete_egg_model
    IF_SETRECOL(4, 6798, item_getparam(int0, 4890), comp(1600, 24));  // easter15_hatching:complete_egg_model
    return;
}