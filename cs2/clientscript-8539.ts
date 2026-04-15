//
function script8539(): void {
    if ((varbitplayer_27169 == 0)) {
        if ((varclient_44 > 0)) {
            script8540(18, (varclient_44 - 1));
        };
        if ((varclient_46 > 0)) {
            script8540(19, (varclient_46 - 1));
        };
        if ((varclient_1511 > 0)) {
            script8540(20, (varclient_1511 - 1));
        };
        if ((varclient_47 > 0)) {
            script8540(21, (varclient_47 - 1));
        };
        if ((varclient_45 > 0)) {
            script8540(22, (varclient_45 - 1));
        };
        if ((varclient_4303 > 0)) {
            script8540(24, (varclient_4303 - 1));
        };
        if ((varclient_4509 > 0)) {
            script8540(25, (varclient_4509 - 1));
        };
        if ((varclient_8180 > 0)) {
            script8540(46, (varclient_8180 - 1));
        };
        if (((((((((varclient_44 == 0) && (varclient_46 == 0)) && (varclient_1511 == 0)) && (varclient_47 == 0)) && (varclient_45 == 0)) && (varclient_4303 == 0)) && (varclient_4509 == 0)) && (varclient_8180 == 0))) {
            IF_SETONTIMER(callback(), comp(1477, 7));
        };
    } else {
        if ((varclient_44 >= 0)) {
            script9920(0, (varclient_44 - 1));
        };
        if ((varclient_45 >= 0)) {
            script9920(1, (varclient_45 - 1));
        };
        if ((varclient_46 >= 0)) {
            script9920(2, (varclient_46 - 1));
        };
        if ((varclient_1511 >= 0)) {
            script9920(3, (varclient_1511 - 1));
        };
        if ((varclient_47 >= 0)) {
            script9920(4, (varclient_47 - 1));
        };
        if ((varclient_4493 >= 0)) {
            script9920(5, (varclient_4493 - 1));
        };
        if ((varclient_48 >= 0)) {
            script9920(6, (varclient_48 - 1));
        };
        if ((varclient_4303 >= 0)) {
            script9920(24, (varclient_4303 - 1));
        };
        if ((varclient_4509 >= 0)) {
            script9920(15, (varclient_4509 - 1));
        };
        if ((varclient_8180 >= 0)) {
            script9920(16, (varclient_8180 - 1));
        };
        if (((((((((((varclient_44 == -1) && (varclient_45 == -1)) && (varclient_46 == -1)) && (varclient_1511 == -1)) && (varclient_47 == -1)) && (varclient_4493 == -1)) && (varclient_48 == -1)) && (varclient_4303 == -1)) && (varclient_4509 == -1)) && (varclient_8180 == -1))) {
            IF_SETONTIMER(callback(), comp(1477, 7));
        };
    };
    return;
}