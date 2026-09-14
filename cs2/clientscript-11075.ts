//
function script11075(int0: number): void {
    if ((int0 == 3)) {
        varclient_6864 = CLIENTCLOCK();
        return;
    };
    if ((((varclient_6864 + 100) > CLIENTCLOCK()) || (IF_HASSUBMODAL(comp(1477, 39), 475) == 1))) {  // toplevel_v2:camera_controls
        return;
    };
    var int1 = 8139;
    if ((int0 == 2)) {
        int1 = 16284;
    };
    script13868(int1);
    return;
}