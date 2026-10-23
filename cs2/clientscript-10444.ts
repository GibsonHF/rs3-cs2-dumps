//
function script10444(): void {
    var int0 = comp(1477, 905);  // toplevel_v2:dropdown_border
    var int1 = comp(1477, 910);  // toplevel_v2:dropdown_blocking
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(906, 159);  // lobbyscreen:dropdown_panel
            int1 = comp(906, 164);  // lobbyscreen:dropdown_list
            break;
        }
        case 744: {
            int0 = comp(744, 351);  // loginscreen:dropdown_panel
            int1 = comp(744, 356);  // loginscreen:dropdown_list
            break;
        }
        default: {
            int0 = comp(1477, 905);  // toplevel_v2:dropdown_border
            int1 = comp(1477, 910);  // toplevel_v2:dropdown_blocking
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETHIDE(true);
        CC_SETONTIMER(callback());
        cc_setparam(4514, 1);
        cc_setparam(4516, -1);
        cc_setparam(4518, -1);
        cc_setparam(4517, -1);
        cc_setparam(4515, 0);
    };
    CC_DELETEALL(int1);
    return;
}