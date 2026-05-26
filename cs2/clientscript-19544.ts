//
function script19544(int0: number): void {
    var int1 = IF_GETHEIGHT(86048842);
    IF_SETSCROLLSIZE(0, MAX(int0, int1), 86048842);
    IF_SETSCROLLPOS(0, varclient_8168, 86048842);
    if ((int0 > int1)) {
        IF_SETHIDE(0, 86048838);
        script72(86048838, 86048842, IF_GETSCROLLY(86048842));
    } else {
        IF_SETHIDE(1, 86048838);
    };
    script157(86048838, 86048842, IF_GETSCROLLY(86048842), 1);
    varclient_8167 = int0;
    return;
}