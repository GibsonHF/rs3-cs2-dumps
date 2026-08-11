//
function script9165(): void {
    var int0 = 0;
    if ((IF_GETHIDE(comp(1489, 3)) == true)) {  // toplevel_v2_hover_target:universe
        return;
    };
    if ((IF_FIND(comp(1488, 3)) == 1)) {  // toplevel_v2_targeting:hover_info
        int0 = cc_getparam(3433);
        int0 = (int0 - 1);
        if ((int0 == 0)) {
            script8880();
        } else {
            CC_SETPARAM_INT(3433, int0);
        };
    };
    return;
}