//
function script2756(): void {
    if ((script13749() == 0)) {
        IF_SETDRAGGABLE(101580819, -1, 101580800);
        IF_SETONDRAG(callback(script9691, -2147483647, -2147483646, 101580819, -2147483645), 101580800);
        IF_SETONDRAGCOMPLETE(callback(script9691, -2147483647, -2147483646, 101580819, -2147483645), 101580800);
        IF_SETDRAGRENDERBEHAVIOUR(1, 101580800);
    };
    var int0 = MAX(1, IF_GETWIDTH(101580819));
    var int1 = MAX(1, IF_GETHEIGHT(101580819));
    var int2 = MAX(1, (int0 - IF_GETWIDTH(101580800)));
    var int3 = MAX(1, (int1 - IF_GETHEIGHT(101580800)));
    var int4 = -1;
    var int5 = -1;
    if ((((((script13749() == 1) || (varclient_4682 <= 0)) || (varclient_4683 <= 0)) || (varclient_4682 > int2)) || (varclient_4683 > int3))) {
        varclient_4682 = (int0 / 2);
        varclient_4683 = 51;
        if ((script13749() == 1)) {
            varclient_4683 = 27;
        };
    };
    IF_SETPOSITION(SCALE(varclient_4682, int0, 16384), SCALE(varclient_4683, int1, 16384), 3, 3, 101580800);
    script10753();
    script5905();
    return;
}