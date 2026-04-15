//
function script2748(): void {
    IF_SETDRAGGABLE(comp(69, 23), -1, comp(69, 22));
    IF_SETONDRAG(callback(script2749, -2147483647, -2147483646, 4522007, -2147483645), 4522006);
    IF_SETONDRAGCOMPLETE(callback(script2749, -2147483647, -2147483646, 4522007, -2147483645), 4522006);
    IF_SETDRAGRENDERBEHAVIOUR(1, 4522006);
    var int0 = MAX(1, IF_GETWIDTH(4522007));
    var int1 = MAX(1, IF_GETHEIGHT(4522007));
    var int2 = MAX(1, (int0 - IF_GETWIDTH(4522006)));
    var int3 = MAX(1, (int1 - IF_GETHEIGHT(4522006)));
    if (((((varclient_3704 <= 0) || (varclient_3705 <= 0)) || (varclient_3704 > int2)) || (varclient_3705 > int3))) {
        varclient_3704 = 1;
        varclient_3705 = 19;
    };
    IF_SETPOSITION(SCALE(varclient_3704, int0, 16384), SCALE(varclient_3705, int1, 16384), 3, 3, comp(69, 22));
    script2751();
    return;
}