//
function script10444(): void {
    var int0 = comp(1477, 892);  // toplevel_v2:no_displayname_layer
    var int1 = comp(1477, 897);  // toplevel_v2:optext_bubble
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(906, 159);  // lobbyscreen:dropdown_panel
            int1 = comp(906, 164);  // lobbyscreen:dropdown_list
            break;
        }
        case 744: {
            int0 = comp(744, 350);  // loginscreen:dropdown_panel
            int1 = comp(744, 355);  // loginscreen:dropdown_list
            break;
        }
        default: {
            int0 = comp(1477, 892);  // toplevel_v2:no_displayname_layer
            int1 = comp(1477, 897);  // toplevel_v2:optext_bubble
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