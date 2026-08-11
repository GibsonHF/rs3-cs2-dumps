//
function script10442(): void {
    var int0 = comp(1477, 891);  // toplevel_v2:dropdown_panel
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(906, 159);  // lobbyscreen:dropdown_panel
            break;
        }
        case 744: {
            int0 = comp(744, 361);  // loginscreen:minimenu_layer
            break;
        }
        default: {
            int0 = comp(1477, 891);  // toplevel_v2:dropdown_panel
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        if ((script13128(cc_getparam(4516), varplayer_4735) == 1)) {
            script10444();
        } else if ((cc_getparam(4517) != varplayer_4734)) {
            script10444();
        };
    };
    return;
}