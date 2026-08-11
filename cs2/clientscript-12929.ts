//
function script12929(): void {
    var int0 = script14441();
    IF_SETTEXT(struct_getparam(int0, 6187), comp(1809, 20));  // event_overview:event_title
    IF_SETTEXT(struct_getparam(int0, 6188), 118554645);
    if ((struct_getparam(int0, 6193) == -1)) {
        IF_SETHIDE(true, comp(1809, 1));  // event_overview:event_tab_2
        IF_SETHIDE(true, comp(1809, 6));  // event_overview:event_tab_2_button
    } else {
        IF_SETTEXT(struct_getparam(int0, 6189), 118554640);
        IF_SETTEXT(struct_getparam(int0, 6190), 118554648);
        if ((struct_getparam(int0, 6191) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6191), comp(1809, 15));  // event_overview:event_tab_2_graphic
        };
    };
    if ((struct_getparam(int0, 6197) == -1)) {
        IF_SETHIDE(true, comp(1809, 2));  // event_overview:event_tab_3
        IF_SETHIDE(true, comp(1809, 7));  // event_overview:event_tab_3_button
    } else {
        IF_SETTEXT(struct_getparam(int0, 6194), 118554633);
        IF_SETTEXT(struct_getparam(int0, 6195), 118554634);
        if ((struct_getparam(int0, 6196) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6196), comp(1809, 8));  // event_overview:event_tab_3_graphic
        };
        script12934(int0);
    };
    if ((struct_getparam(int0, 6201) == -1)) {
        IF_SETHIDE(true, comp(1809, 3));  // event_overview:event_tab_4
        IF_SETHIDE(true, comp(1809, 12));  // event_overview:event_tab_4_button
    } else {
        IF_SETTEXT(struct_getparam(int0, 6198), 118554638);
        IF_SETTEXT(struct_getparam(int0, 6199), 118554646);
        if ((struct_getparam(int0, 6200) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6200), comp(1809, 13));  // event_overview:event_tab_4_graphic
        };
        script12935(int0);
    };
    if ((struct_getparam(int0, 6205) == -1)) {
        IF_SETHIDE(true, comp(1809, 4));  // event_overview:event_tab_5
        IF_SETHIDE(true, comp(1809, 17));  // event_overview:event_tab_5_button
    } else {
        IF_SETTEXT(struct_getparam(int0, 6202), 118554643);
        IF_SETTEXT(struct_getparam(int0, 6203), 118554650);
        if ((struct_getparam(int0, 6204) != -1)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6204), comp(1809, 18));  // event_overview:event_tab_5_graphic
        };
        script12936(int0);
    };
    return;
}