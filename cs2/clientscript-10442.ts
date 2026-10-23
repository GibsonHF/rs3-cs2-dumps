//
function script10442(): void {
    var int0 = comp(1477, 905);  // toplevel_v2:dropdown_border
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(906, 159);  // lobbyscreen:dropdown_panel
            break;
        }
        case 744: {
            int0 = comp(744, 351);  // loginscreen:dropdown_panel
            break;
        }
        default: {
            int0 = comp(1477, 905);  // toplevel_v2:dropdown_border
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