//
function script2743(): void {
    IF_SETDRAGGABLE(comp(66, 1) /*owen1_suspicion_overlay:container*/, -1, comp(66, 0) /*owen1_suspicion_overlay:main_layer*/);
    IF_SETONDRAG(callback(script2744, -2147483647, -2147483646, 4325377, -2147483645), comp(66, 0));  // owen1_suspicion_overlay:main_layer
    IF_SETONDRAGCOMPLETE(callback(script2744, -2147483647, -2147483646, 4325377, -2147483645), comp(66, 0));  // owen1_suspicion_overlay:main_layer
    IF_SETDRAGRENDERBEHAVIOUR(1, 4325376);
    var int0 = MAX(1, IF_GETWIDTH(comp(66, 1)));  // owen1_suspicion_overlay:container
    var int1 = MAX(1, IF_GETHEIGHT(comp(66, 1)));  // owen1_suspicion_overlay:container
    var int2 = MAX(1, (int0 - IF_GETWIDTH(comp(66, 0))));  // owen1_suspicion_overlay:main_layer
    var int3 = MAX(1, (int1 - IF_GETHEIGHT(comp(66, 0))));  // owen1_suspicion_overlay:main_layer
    if (((((varclient_3704 <= 0) || (varclient_3705 <= 0)) || (varclient_3704 > int2)) || (varclient_3705 > int3))) {
        varclient_3704 = 1;
        varclient_3705 = 1;
    };
    IF_SETPOSITION(SCALE(varclient_3704, int0, 16384), SCALE(varclient_3705, int1, 16384), 3, 3, comp(66, 0));  // owen1_suspicion_overlay:main_layer
    return;
}