//
function script13500(): void {
    var int0 = -1;
    var int1 = 1;
    while ((int1 < 5)) {
        switch (int1) {
            case 1: {
                int0 = 122945573;
                break;
            }
            case 2: {
                int0 = 122945567;
                break;
            }
            case 3: {
                int0 = 122945562;
                break;
            }
            case 4: {
                int0 = 122945555;
                break;
            }
            default: {
                return;
            }
        };
        if ((varbitplayer_35973 == int1)) {
            IF_SETHIDE(0, int0);
        } else {
            IF_SETHIDE(1, int0);
        };
        int1 = (int1 + 1);
    };
    return;
}