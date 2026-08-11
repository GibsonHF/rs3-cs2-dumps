//
function script14842(int0: number): void {
    CC_DELETEALL(comp(685, 24));  // arch_journal:research_build_layer
    CC_DELETEALL(comp(685, 25));  // arch_journal:research_control_layer
    script14814(44892183, IF_GETSCROLLHEIGHT(comp(685, 23)), -1, 44892418, 44892419);  // arch_journal:research_scrolling_layer
    IF_SETSCROLLPOS(0, 0, comp(685, 23));  // arch_journal:research_scrolling_layer
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int1 = -1 as dbrow;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    var int4 = 55;
    if ((IF_GETHEIGHT(comp(685, 0)) >= 550)) {  // arch_journal:mainmodal_window
        int4 = 75;
    };
    var int5 = IF_GETHEIGHT(comp(685, 23));  // arch_journal:research_scrolling_layer
    var int6 = int5;
    var int7 = -1;
    int7 = (int7 + 1);
    while ((int7 < int2)) {
        int1 = enum_getvalue(0, 74, int0, int7);
        if (((int7 > 0) && (MODULO(int7, 2) == 0))) {
            if ((MODULO(int7, (2 * 2)) == 0)) {
                int3 = 0;
                int4 = ((int4 - ((180 + 20) * 2)) + int5);
                int6 = (int6 + int5);
            } else {
                int3 = (IF_GETWIDTH(comp(685, 24)) - 326);  // arch_journal:research_build_layer
                int4 = (int4 - ((180 + 20) * 2));
            };
        };
        script14843(44892184, 44892185, int1, int3, int4, 326, 180, IF_GETNEXTSUBID(comp(685, 25)));  // arch_journal:research_control_layer
        int4 = (int4 + (180 + 20));
    };
    IF_SETSCROLLSIZE(0, int6, comp(685, 23));  // arch_journal:research_scrolling_layer
    if ((int6 > int5)) {
        IF_SETHIDE(false, comp(685, 90));  // arch_journal:research_navigation_layer
        script14812(44892183, int5, 44892416, 44892418, 44892417, 44892419);
    } else {
        IF_SETHIDE(true, comp(685, 90));  // arch_journal:research_navigation_layer
    };
    return;
}