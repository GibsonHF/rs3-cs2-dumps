//
function script7947(): void {
    IF_SETONTIMER(callback(), comp(1477, 801));  // toplevel_v2:tutsys_box_window
    if ((WORLDMAP_3DVIEW_ACTIVE() == 0)) {
        return;
    };
    WORLDMAP_3DVIEW_DISABLE();
    script8764(96796713, 96796714);
    CAM2_RESETSNAPDISTANCES();
    CAM2_SETPOSITIONENTITY_PLAYER(0, 0, script8769(varclient_3528), varclient_3528, varclient_3529, 0, 0, 100);
    script8768(0, 0);
    stack(callback());
    stack(96797473);
    IF_SETONHOLD();
    IF_SETONCLICK(callback(), comp(1477, 801));  // toplevel_v2:tutsys_box_window
    IF_SETONTIMER(callback(), comp(1477, 801));  // toplevel_v2:tutsys_box_window
    script13878();
    return;
}