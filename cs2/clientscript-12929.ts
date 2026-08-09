//
function script12929(): void {
    var int0 = script14441();
    IF_SETTEXT(struct_getparam(int0, 6187), comp(1809, 20));
    IF_SETTEXT(struct_getparam(int0, 6188), 118554645);
    if ((struct_getparam(int0, 6193) == -1)) {
        IF_SETHIDE(true, comp(1809, 1));
        IF_SETHIDE(true, comp(1809, 6));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6189), 118554640);
        IF_SETTEXT(struct_getparam(int0, 6190), 118554648);
        if ((struct_getparam(int0, 6191) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6191), comp(1809, 15));
        };
    };
    if ((struct_getparam(int0, 6197) == -1)) {
        IF_SETHIDE(true, comp(1809, 2));
        IF_SETHIDE(true, comp(1809, 7));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6194), 118554633);
        IF_SETTEXT(struct_getparam(int0, 6195), 118554634);
        if ((struct_getparam(int0, 6196) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6196), comp(1809, 8));
        };
        script12934(int0);
    };
    if ((struct_getparam(int0, 6201) == -1)) {
        IF_SETHIDE(true, comp(1809, 3));
        IF_SETHIDE(true, comp(1809, 12));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6198), 118554638);
        IF_SETTEXT(struct_getparam(int0, 6199), 118554646);
        if ((struct_getparam(int0, 6200) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6200), comp(1809, 13));
        };
        script12935(int0);
    };
    if ((struct_getparam(int0, 6205) == -1)) {
        IF_SETHIDE(true, comp(1809, 4));
        IF_SETHIDE(true, comp(1809, 17));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6202), 118554643);
        IF_SETTEXT(struct_getparam(int0, 6203), 118554650);
        if ((struct_getparam(int0, 6204) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6204), comp(1809, 18));
        };
        script12936(int0);
    };
    return;
}