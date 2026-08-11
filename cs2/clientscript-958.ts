//
function script958(int0: number, int1: number, int2: number, string0: string): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 12;
    if ((int2 == 1)) {
        [int3, int4] = IF_GETCHARPOSATINDEX(varclient_2749, int0);
        if (((int4 - int5) > 60)) {
            IF_SETSCROLLPOS(0, ((int4 - int5) - 60), comp(1405, 1));  // bugreport_interface:input_text_layer
            script31(92078093, 92078081, 5666, 5663, 5664, 5665, 5686, 5685);
        } else {
            IF_SETSCROLLPOS(0, 0, comp(1405, 1));  // bugreport_interface:input_text_layer
            script31(92078093, 92078081, 5666, 5663, 5664, 5665, 5686, 5685);
        };
    } else if ((int2 == 2)) {
        [int3, int4] = IF_GETCHARPOSATINDEX(varclient_2750, int0);
        if (((int4 - int5) > 60)) {
            IF_SETSCROLLPOS(0, ((int4 - int5) - 60), comp(1405, 25));  // bugreport_interface:repro_text_layer
            script31(92078108, 92078105, 5666, 5663, 5664, 5665, 5686, 5685);
        } else {
            IF_SETSCROLLPOS(0, 0, comp(1405, 25));  // bugreport_interface:repro_text_layer
            script31(92078108, 92078105, 5666, 5663, 5664, 5665, 5686, 5685);
        };
    };
    IF_SETPOSITION((int3 + 4), ((int4 - int5) + 4), 0, 0, int1);
    if ((APPLET_HASFOCUS() == 1)) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    IF_SETONTIMER(callback(script7672, CLIENTCLOCK(), int1), int0);
    return;
}