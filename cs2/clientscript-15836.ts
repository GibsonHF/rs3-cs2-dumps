//
function script15836(): void {
    var int0 = SCALE(IF_GETHEIGHT(comp(976, 2)), 9, 16);  // options_firstrun:base
    IF_SETSIZE(int0, 0, 0, 1, comp(976, 1));  // options_firstrun:bg_layer
    IF_SETPOSITION(0, 0, 1, 0, comp(976, 1));  // options_firstrun:bg_layer
    IF_SETPOSITION(0, 0, 0, 0, comp(976, 12));  // options_firstrun:bg_0
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 12) /*options_firstrun:bg_0*/), 0, 0, 0, comp(976, 13) /*options_firstrun:bg_1*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 12) /*options_firstrun:bg_0*/) + IF_GETWIDTH(comp(976, 13) /*options_firstrun:bg_1*/)), 0, 0, 0, comp(976, 14) /*options_firstrun:bg_2*/);
    var int1 = IF_GETHEIGHT(comp(976, 12));  // options_firstrun:bg_0
    IF_SETPOSITION(0, int1, 0, 0, comp(976, 15));  // options_firstrun:bg_3
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 15) /*options_firstrun:bg_3*/), int1, 0, 0, comp(976, 16) /*options_firstrun:bg_4*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 15) /*options_firstrun:bg_3*/) + IF_GETWIDTH(comp(976, 16) /*options_firstrun:bg_4*/)), int1, 0, 0, comp(976, 17) /*options_firstrun:bg_5*/);
    int1 = (IF_GETY(comp(976, 15)) + IF_GETHEIGHT(comp(976, 15)));  // options_firstrun:bg_3
    IF_SETPOSITION(0, int1, 0, 0, comp(976, 18));  // options_firstrun:bg_6
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 18) /*options_firstrun:bg_6*/), int1, 0, 0, comp(976, 19) /*options_firstrun:bg_7*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 18) /*options_firstrun:bg_6*/) + IF_GETWIDTH(comp(976, 19) /*options_firstrun:bg_7*/)), int1, 0, 0, comp(976, 20) /*options_firstrun:bg_8*/);
    IF_SETPOSITION(0, 0, 0, 0, comp(976, 9));  // options_firstrun:progress_fg_l
    IF_SETPOSITION(IF_GETWIDTH(comp(976, 9) /*options_firstrun:progress_fg_l*/), 0, 0, 0, comp(976, 10) /*options_firstrun:progress_fg_m*/);
    IF_SETPOSITION((IF_GETWIDTH(comp(976, 9) /*options_firstrun:progress_fg_l*/) + IF_GETWIDTH(comp(976, 10) /*options_firstrun:progress_fg_m*/)), 0, 0, 0, comp(976, 11) /*options_firstrun:progress_fg_r*/);
    return;
}