//
function script7665(int0: number): void {
    var int1 = 0;
    if ((int0 == 1)) {
        int1 = ((PARAHEIGHT(varclient_2758, IF_GETWIDTH(comp(1405, 12)), 26 as fontmetrics) * 12) + 12);  // bugreport_interface:input_text
        if ((int1 < IF_GETHEIGHT(comp(1405, 1)))) {  // bugreport_interface:input_text_layer
            IF_SETHIDE(true, comp(1405, 13));  // bugreport_interface:scrollbar_build_layer
        } else {
            IF_SETHIDE(false, comp(1405, 13));  // bugreport_interface:scrollbar_build_layer
        };
        IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(comp(1405, 1)), int1, comp(1405, 1));  // bugreport_interface:input_text_layer
        script31(92078093, 92078081, 7900, 7897, 7898, 7899, 7902, 7901);
        script958(92078092, 92078095, varclient_2758, int0);
    } else if ((int0 == 2)) {
        int1 = ((PARAHEIGHT(varclient_2759, IF_GETWIDTH(comp(1405, 26)), 26) * 12) + 12);  // bugreport_interface:input_repro
        if ((int1 < IF_GETHEIGHT(comp(1405, 25)))) {  // bugreport_interface:repro_text_layer
            IF_SETHIDE(true, comp(1405, 28));  // bugreport_interface:scrollbar_build_layer_repro
        } else {
            IF_SETHIDE(false, comp(1405, 28));  // bugreport_interface:scrollbar_build_layer_repro
        };
        IF_SETSCROLLSIZE(IF_GETSCROLLWIDTH(comp(1405, 25)), int1, comp(1405, 25));  // bugreport_interface:repro_text_layer
        script31(92078108, 92078105, 7900, 7897, 7898, 7899, 7902, 7901);
        script958(92078106, 92078107, varclient_2759, int0);
    };
    return;
}