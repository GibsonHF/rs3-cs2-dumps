//
function script363(int0: component, int1: unknown_int): void {
    if (((int1 == 1) && (varplayer_8069 == -1 as struct))) {
        return;
    };
    if (((int1 == 2) && (varplayer_8070 == -1 as struct))) {
        return;
    };
    if (((int1 == 3) && (varplayer_8071 == -1 as struct))) {
        return;
    };
    if ((varplayer_8069 == -1 as struct)) {
        script13994(comp(90, 142), comp(-1, 65535), 28556 as struct, "", true);
    } else {
        script13993(comp(90, 142), comp(-1, 65535), 28556 as struct, "");
    };
    if ((varplayer_8070 == -1 as struct)) {
        script13994(comp(90, 138), comp(-1, 65535), 28556 as struct, "", true);
    } else {
        script13993(comp(90, 138), comp(-1, 65535), 28556 as struct, "");
    };
    if ((varplayer_8071 == -1 as struct)) {
        script13994(comp(90, 145), comp(-1, 65535), 28556 as struct, "", true);
    } else {
        script13993(comp(90, 145), comp(-1, 65535), 28556 as struct, "");
    };
    var int2 = 0;
    if (((int1 == 1) && (varclient_6489 == 0))) {
        int2 = 1;
        varclient_6489 = 1;
    } else if ((int1 == 1)) {
        varclient_6489 = 0;
    } else if (((int1 == 2) && (varclient_6490 == 0))) {
        int2 = 1;
        varclient_6490 = 1;
    } else if ((int1 == 2)) {
        varclient_6490 = 0;
    } else if (((int1 == 3) && (varclient_6491 == 0))) {
        int2 = 1;
        varclient_6491 = 1;
    } else {
        varclient_6491 = 0;
    };
    if ((int2 == 1)) {
        script13992(int0, comp(-1, 65535), 28556 as struct, 1);
    } else {
        script13993(int0, comp(-1, 65535), 28556 as struct, "");
    };
    return;
}