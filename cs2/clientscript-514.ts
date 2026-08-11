//
function script514(): void {
    var int0 = 0;
    var int1 = 0;
    if ((GETWINDOWMODE() >= 2)) {
        int0 = IF_GETWIDTH(comp(1477, 824));  // toplevel_v2:full_client_fade
        int1 = IF_GETHEIGHT(comp(1477, 824));  // toplevel_v2:full_client_fade
        if ((varclient_51 < int0)) {
            varclient_51 = (varclient_51 + 15);
            IF_SETSIZE(varclient_51, int1, 0, 0, comp(610, 1));  // pog_door_hatch_close:shutter
        };
    } else if ((varclient_51 < 512)) {
        varclient_51 = (varclient_51 + 15);
        IF_SETSIZE(varclient_51, 334, 0, 0, comp(610, 1));  // pog_door_hatch_close:shutter
    };
    return;
}