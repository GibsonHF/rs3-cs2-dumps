//[proc,graphics_options_init]
function script2595(int0: number): void {
    var int1 = script13749();
    IF_SETCOLOUR(script10495(0), comp(1513, 7));
    IF_SETCOLOUR(script10495(0), comp(1513, 13));
    IF_SETCOLOUR(script10495(0), comp(1513, 4));
    IF_SETCOLOUR(script10495(0), comp(1513, 38));
    IF_SETCOLOUR(script10495(3), comp(1513, 39));
    IF_SETCOLOUR(script10495(3), comp(1513, 5));
    IF_SETCOLOUR(script10495(3), comp(1513, 16));
    IF_SETCOLOUR(script10495(3), comp(1513, 9));
    switch (int0) {
        case 0:
        case 4: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(comp(882, 0), 1513);
            } else {
                IF_OPENSUBCLIENT(comp(882, 0), 324);
                script10410(21233667, -1, 2830, 0, 0, 280, 160, 0, 0, "");
                script9525(21233668, 1, -1);
                IF_SETCOLOUR(script10495(0), comp(324, 5));
            };
            if ((int0 == 4)) {
                IF_SETONCLICK(callback(script7926), comp(882, 12));
            } else {
                IF_SETONRESIZE(callback(script2919, 1, int0), comp(744, 196));
            };
            script8421(57802761, 57802763, 57802762, 57802764, "Graphics Options", 21218, -1, 1, -1, -1);
            if ((int0 == 4)) {
                IF_SETHIDE(false, comp(1420, 183));
            };
            break;
        }
        case 1: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(comp(742, 0), 1513);
            } else {
                IF_OPENSUBCLIENT(comp(742, 0), 324);
                script10410(21233667, -1, 2830, 0, 0, 280, 160, 0, 0, "");
                script9525(21233668, 1, -1);
                IF_SETCOLOUR(script10495(0), comp(324, 5));
            };
            break;
        }
        case 2: {
            if ((int1 == 0)) {
                IF_OPENSUBCLIENT(comp(911, 5), 1513);
                IF_SETHIDE(true, comp(911, 2));
                IF_SETPOSITION(0, 0, 1, 0, comp(911, 3));
                IF_SETSIZE(0, IF_GETHEIGHT(comp(911, 3)), 1, 1, comp(911, 5));
                IF_SETSIZE(0, 0, 1, 1, comp(1513, 10));
            } else {
                IF_OPENSUBCLIENT(comp(911, 5), 324);
                IF_SETHIDE(false, comp(911, 2));
                IF_SETSIZE(0, (IF_GETY(comp(911, 3)) + IF_GETHEIGHT(comp(911, 3))), 1, 1, comp(911, 5));
            };
            script4041();
            break;
        }
    };
    script15590(int0);
    return;
}