//
function script2743(): void {
    IF_SETDRAGGABLE(comp(66, 1), -1, comp(66, 0));
    IF_SETONDRAG(callback(script2744, -2147483647, -2147483646, 4325377, -2147483645), 4325376);
    IF_SETONDRAGCOMPLETE(callback(script2744, -2147483647, -2147483646, 4325377, -2147483645), 4325376);
    IF_SETDRAGRENDERBEHAVIOUR(1, 4325376);
    var int0 = MAX(1, IF_GETWIDTH(4325377));
    var int1 = MAX(1, IF_GETHEIGHT(4325377));
    var int2 = MAX(1, (int0 - IF_GETWIDTH(4325376)));
    var int3 = MAX(1, (int1 - IF_GETHEIGHT(4325376)));
    if (((((varclient_3704 <= 0) || (varclient_3705 <= 0)) || (varclient_3704 > int2)) || (varclient_3705 > int3))) {
        varclient_3704 = 1;
        varclient_3705 = 1;
    };
    IF_SETPOSITION(SCALE(varclient_3704, int0, 16384), SCALE(varclient_3705, int1, 16384), 3, 3, comp(66, 0));
    return;
}