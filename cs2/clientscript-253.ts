//
function script253(): void {
    IF_SETONVARCTRANSMIT(callback(script260, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 7), comp(923, 78));  // fishcomp_side:main_layer
    IF_SETOBJECT_NONUM(15658 as obj, 0, comp(923, 38));  // fishcomp_side:bait_model_1
    IF_SETOBJECT_NONUM(15659 as obj, 0, comp(923, 37));  // fishcomp_side:bait_model_2
    IF_SETOBJECT_NONUM(15663 as obj, 0, comp(923, 36));  // fishcomp_side:bait_model_3
    IF_SETOBJECT_NONUM(15662 as obj, 0, comp(923, 35));  // fishcomp_side:bait_model_4
    IF_SETOBJECT_NONUM(15661 as obj, 0, comp(923, 34));  // fishcomp_side:bait_model_5
    IF_SETOBJECT_NONUM(15660 as obj, 0, comp(923, 33));  // fishcomp_side:bait_model_6
    IF_SETOBJECT_NONUM(15664 as obj, 0, comp(923, 32));  // fishcomp_side:bait_model_7
    IF_SETOBJECT_NONUM(15665 as obj, 0, comp(923, 31));  // fishcomp_side:bait_model_8
    IF_SETONVARCTRANSMIT(callback(script256, 1111, 1113, 1112, 1114, 1115, 1116, 1117, 1927, 8), comp(919, 87));  // fishcomp_overlay:main_layer
    varclient_1111 = -1;
    varclient_1112 = -1;
    varclient_1113 = -1;
    varclient_1114 = -1;
    varclient_1115 = -1;
    varclient_1116 = -1;
    varclient_1117 = -1;
    varclient_1927 = -1;
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(919, 34)), IF_GETHEIGHT(comp(919, 34)), comp(919, 34));  // fishcomp_overlay:history_scrolllayer
    return;
}