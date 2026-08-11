//
function script8879(): void {
    if ((IF_FIND(comp(1488, 3)) == 1)) {  // toplevel_v2_targeting:hover_info
        CC_SETPARAM_INT(3433, 5);
    };
    var int0 = 0;
    var int1 = 0;
    if ((varclient_6363 == 0)) {
        int1 = MAX((IF_GETX(comp(1489, 15) /*toplevel_v2_hover_target:level_layer*/) + IF_GETWIDTH(comp(1489, 15) /*toplevel_v2_hover_target:level_layer*/)), IF_GETWIDTH(comp(1489, 16) /*toplevel_v2_hover_target:target_health_bar_layer*/));
        int0 = (IF_GETY(comp(1489, 16)) + IF_GETHEIGHT(comp(1489, 16)));  // toplevel_v2_hover_target:target_health_bar_layer
        IF_SETSIZE(int1, int0, 0, 0, comp(1488, 3));  // toplevel_v2_targeting:hover_info
    };
    return;
}