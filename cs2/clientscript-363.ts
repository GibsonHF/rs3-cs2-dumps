//
function script363(int0: number, int1: number): void {
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
        script13994(5898382, -1, 28556, "", 1);
    } else {
        script13993(5898382, -1, 28556, "");
    };
    if ((varplayer_8070 == -1 as struct)) {
        script13994(5898378, -1, 28556, "", 1);
    } else {
        script13993(5898378, -1, 28556, "");
    };
    if ((varplayer_8071 == -1 as struct)) {
        script13994(5898385, -1, 28556, "", 1);
    } else {
        script13993(5898385, -1, 28556, "");
    };
    var int2 = 0;
    if ((int1 == 1)) {
        if ((varclient_6489 == 0)) {
            int2 = 1;
            varclient_6489 = 1;
        } else if ((int1 == 1)) {
            varclient_6489 = 0;
        } else if ((int1 == 2)) {
            if ((varclient_6490 == 0)) {
                int2 = 1;
                varclient_6490 = 1;
            } else if ((int1 == 2)) {
                varclient_6490 = 0;
            } else if ((int1 == 3)) {
                if ((varclient_6491 == 0)) {
                    int2 = 1;
                    varclient_6491 = 1;
                } else {
                    varclient_6491 = 0;
                };
            } else {
                varclient_6491 = 0;
            };
        } else if ((int1 == 2)) {
            varclient_6490 = 0;
        } else if ((int1 == 3)) {
            if ((varclient_6491 == 0)) {
                int2 = 1;
                varclient_6491 = 1;
            } else {
                varclient_6491 = 0;
            };
        } else {
            varclient_6491 = 0;
        };
    } else if ((int1 == 1)) {
        varclient_6489 = 0;
    } else if ((int1 == 2)) {
        if ((varclient_6490 == 0)) {
            int2 = 1;
            varclient_6490 = 1;
        } else if ((int1 == 2)) {
            varclient_6490 = 0;
        } else if ((int1 == 3)) {
            if ((varclient_6491 == 0)) {
                int2 = 1;
                varclient_6491 = 1;
            } else {
                varclient_6491 = 0;
            };
        } else {
            varclient_6491 = 0;
        };
    } else if ((int1 == 2)) {
        varclient_6490 = 0;
    } else if ((int1 == 3)) {
        if ((varclient_6491 == 0)) {
            int2 = 1;
            varclient_6491 = 1;
        } else {
            varclient_6491 = 0;
        };
    } else {
        varclient_6491 = 0;
    };
    if ((int2 == 1)) {
        script13992(int0, -1, 28556, 1);
    } else {
        script13993(int0, -1, 28556, "");
    };
    return;
}