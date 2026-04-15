//
function script6918(): void {
    if ((varclient_1002 == -1 as coordgrid)) {
        return;
    };
    var int0 = (COORDX(varclient_1002) - COORDX(COORD()));
    if (((int0 > 15) || (int0 < -15))) {
        return;
    };
    var int1 = (COORDZ(varclient_1002) - COORDZ(COORD()));
    if (((int1 > 15) || (int1 < -15))) {
        return;
    };
    CAM_FOLLOWCOORD(varclient_1002);
    return;
}