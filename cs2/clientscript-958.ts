//
function script958(int0: component, int1: component, int2: int, string0: string): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 12;
    if ((int2 == 1)) {
        [int3, int4] = IF_GETCHARPOSATINDEX(varclient_2749, int0);
        if (((int4 - int5) > 60)) {
            IF_SETSCROLLPOS(0, ((int4 - int5) - 60), comp(1405, 1));
            script31(comp(1405, 13), comp(1405, 1), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
        } else {
            IF_SETSCROLLPOS(0, 0, comp(1405, 1));
            script31(comp(1405, 13), comp(1405, 1), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
        };
    } else if ((int2 == 2)) {
        [int3, int4] = IF_GETCHARPOSATINDEX(varclient_2750, int0);
        if (((int4 - int5) > 60)) {
            IF_SETSCROLLPOS(0, ((int4 - int5) - 60), comp(1405, 25));
            script31(comp(1405, 28), comp(1405, 25), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
        } else {
            IF_SETSCROLLPOS(0, 0, comp(1405, 25));
            script31(comp(1405, 28), comp(1405, 25), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
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