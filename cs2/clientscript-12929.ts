//
function script12929(): void {
    var int0 = script14441();
    IF_SETTEXT(struct_getparam(int0, 6187), comp(1809, 20));
    IF_SETTEXT(struct_getparam(int0, 6188), comp(1809, 21));
    if ((struct_getparam(int0, 6193) == -1 as overlayinterface)) {
        IF_SETHIDE(true, comp(1809, 1));
        IF_SETHIDE(true, comp(1809, 6));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6189), comp(1809, 16));
        IF_SETTEXT(struct_getparam(int0, 6190), comp(1809, 24));
        if ((struct_getparam(int0, 6191) != -1 as graphic)) {
            stack(struct_getparam(int0, 6191));
            stack(118554639);
            IF_SETGRAPHIC();
        };
    };
    if ((struct_getparam(int0, 6197) == -1 as overlayinterface)) {
        IF_SETHIDE(true, comp(1809, 2));
        IF_SETHIDE(true, comp(1809, 7));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6194), comp(1809, 9));
        IF_SETTEXT(struct_getparam(int0, 6195), comp(1809, 10));
        if ((struct_getparam(int0, 6196) != -1 as graphic)) {
            stack(struct_getparam(int0, 6196));
            stack(118554632);
            IF_SETGRAPHIC();
        };
        script12934(int0);
    };
    if ((struct_getparam(int0, 6201) == -1 as overlayinterface)) {
        IF_SETHIDE(true, comp(1809, 3));
        IF_SETHIDE(true, comp(1809, 12));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6198), comp(1809, 14));
        IF_SETTEXT(struct_getparam(int0, 6199), comp(1809, 22));
        if ((struct_getparam(int0, 6200) != -1 as graphic)) {
            stack(struct_getparam(int0, 6200));
            stack(118554637);
            IF_SETGRAPHIC();
        };
        script12935(int0);
    };
    if ((struct_getparam(int0, 6205) == -1 as overlayinterface)) {
        IF_SETHIDE(true, comp(1809, 4));
        IF_SETHIDE(true, comp(1809, 17));
    } else {
        IF_SETTEXT(struct_getparam(int0, 6202), comp(1809, 19));
        IF_SETTEXT(struct_getparam(int0, 6203), comp(1809, 26));
        if ((struct_getparam(int0, 6204) != -1 as graphic)) {
            stack(struct_getparam(int0, 6204));
            stack(118554642);
            IF_SETGRAPHIC();
        };
        script12936(int0);
    };
    return;
}