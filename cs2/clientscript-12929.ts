//
function script12929(): void {
    var int0 = script14441();
    IF_SETTEXT(struct_getparam(int0, 6187), 118554644);
    IF_SETTEXT(struct_getparam(int0, 6188), 118554645);
    if ((struct_getparam(int0, 6193) == -1 as overlayinterface)) {
        IF_SETHIDE(1, 118554625);
        IF_SETHIDE(1, 118554630);
    } else {
        IF_SETTEXT(struct_getparam(int0, 6189), 118554640);
        IF_SETTEXT(struct_getparam(int0, 6190), 118554648);
        if ((struct_getparam(int0, 6191) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6191), 118554639);
        };
    };
    if ((struct_getparam(int0, 6197) == -1 as overlayinterface)) {
        IF_SETHIDE(1, 118554626);
        IF_SETHIDE(1, 118554631);
    } else {
        IF_SETTEXT(struct_getparam(int0, 6194), 118554633);
        IF_SETTEXT(struct_getparam(int0, 6195), 118554634);
        if ((struct_getparam(int0, 6196) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6196), 118554632);
        };
        script12934(int0);
    };
    if ((struct_getparam(int0, 6201) == -1 as overlayinterface)) {
        IF_SETHIDE(1, 118554627);
        IF_SETHIDE(1, 118554636);
    } else {
        IF_SETTEXT(struct_getparam(int0, 6198), 118554638);
        IF_SETTEXT(struct_getparam(int0, 6199), 118554646);
        if ((struct_getparam(int0, 6200) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6200), 118554637);
        };
        script12935(int0);
    };
    if ((struct_getparam(int0, 6205) == -1 as overlayinterface)) {
        IF_SETHIDE(1, 118554628);
        IF_SETHIDE(1, 118554641);
    } else {
        IF_SETTEXT(struct_getparam(int0, 6202), 118554643);
        IF_SETTEXT(struct_getparam(int0, 6203), 118554650);
        if ((struct_getparam(int0, 6204) != -1 as graphic)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6204), 118554642);
        };
        script12936(int0);
    };
    return;
}