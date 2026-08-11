//
function script13500(): void {
    var int0 = comp(-1, 65535);
    var int1 = 1;
    while ((int1 < 5)) {
        switch (int1) {
            case 1: {
                int0 = comp(1876, 37);  // repoverlay:reputation_favourite_worker
                break;
            }
            case 2: {
                int0 = comp(1876, 31);  // repoverlay:reputation_favourite_imperial
                break;
            }
            case 3: {
                int0 = comp(1876, 26);  // repoverlay:reputation_favourite_merchants
                break;
            }
            case 4: {
                int0 = comp(1876, 19);  // repoverlay:reputation_favourite_port
                break;
            }
            default: {
                return;
            }
        };
        if ((varbitplayer_35973 == int1)) {
            IF_SETHIDE(false, int0);
        } else {
            IF_SETHIDE(true, int0);
        };
        int1 = (int1 + 1);
    };
    return;
}