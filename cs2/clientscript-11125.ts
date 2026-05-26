//
function script11125(int0: number): void {
    if ((int0 == 34494)) {
        IF_SETGRAPHIC(25103 as graphic, comp(1600, 2));
        IF_SETHIDE(true, comp(1600, 3));
        IF_SETHIDE(true, comp(1600, 4));
        IF_SETHIDE(true, comp(1600, 5));
        IF_SETMODEL(103294 as model, comp(1600, 23));
    } else {
        IF_SETHIDE(false, comp(1600, 3));
        IF_SETHIDE(false, comp(1600, 4));
        IF_SETHIDE(false, comp(1600, 5));
        IF_SETMODEL(103295 as model, comp(1600, 23));
    };
    IF_SETCOLOUR(item_getparam(int0, 4885), comp(1600, 2));
    IF_SETCOLOUR(item_getparam(int0, 4886), comp(1600, 3));
    IF_SETCOLOUR(item_getparam(int0, 4886), comp(1600, 4));
    IF_SETCOLOUR(item_getparam(int0, 4886), comp(1600, 5));
    IF_SETRECOL(1, 36840, item_getparam(int0, 4887), comp(1600, 24));
    IF_SETRECOL(2, 17384, item_getparam(int0, 4888), comp(1600, 24));
    IF_SETRECOL(3, 55232, item_getparam(int0, 4889), comp(1600, 24));
    IF_SETRECOL(4, 6798, item_getparam(int0, 4890), comp(1600, 24));
    return;
}