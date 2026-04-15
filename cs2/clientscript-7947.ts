//
function script7947(): void {
    IF_SETONTIMER(callback(), comp(1477, 800));
    if ((WORLDMAP_3DVIEW_ACTIVE() == 0)) {
        return;
    };
    WORLDMAP_3DVIEW_DISABLE();
    script8764(96796712, 96796713);
    CAM2_RESETSNAPDISTANCES();
    CAM2_SETPOSITIONENTITY_PLAYER(0, 0, script8769(varclient_3528), varclient_3528, varclient_3529, 0, 0, 100);
    script8768(0, 0);
    stack(-1);
    stack("");
    stack(96797472);
    IF_SETONHOLD();
    IF_SETONCLICK(callback(), 96797472);
    IF_SETONTIMER(callback(), 96797472);
    script13878();
    return;
}