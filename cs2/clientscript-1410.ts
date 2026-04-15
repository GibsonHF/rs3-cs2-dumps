//
function script1410(int0: component): void {
    var int1 = 255;
    var int2 = 0;
    if ((varclient_814 < 256)) {
        int1 = (255 - varclient_814);
    } else if ((varclient_814 < 510)) {
        int1 = MODULO(varclient_814, 255);
    } else {
        int1 = 255;
    };
    if ((varclient_119 == 4)) {
        int2 = 8;
    } else if ((varclient_119 == 3)) {
        int2 = 4;
    } else {
        int1 = 255;
    };
    IF_SETTRANS(int1, int0);
    varclient_814 = (varclient_814 + int2);
    if ((varclient_814 > 510)) {
        varclient_814 = 0;
    };
    return;
}