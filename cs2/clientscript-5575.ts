//
function script5575(): void {
    if ((varclient_1728 == 1)) {
        varclient_1729 = (varclient_1729 + 1);
        if ((varclient_1729 >= 80)) {
            varclient_1728 = 0;
        };
    } else {
        varclient_1729 = (varclient_1729 - 1);
        if ((varclient_1729 <= 0)) {
            varclient_1728 = 1;
        };
    };
    var int0 = ((255 * varclient_1729) / 80);
    if (((int0 < 230) && (int0 >= 123))) {
        int0 = (int0 - (int0 / 20));
    };
    if (((int0 > 25) && (int0 <= 122))) {
        int0 = (int0 + (int0 / 20));
    };
    IF_SETTRANS(int0, 77463599);
    IF_SETTRANS(int0, 77463598);
    int0 = (255 - int0);
    IF_SETTRANS(int0, 77463601);
    IF_SETTRANS(int0, 77463602);
    return;
}