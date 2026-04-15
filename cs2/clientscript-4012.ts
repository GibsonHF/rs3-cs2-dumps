//
function script4012(): unknown_int {
    var int0 = 0;
    var int1 = INV_GETOBJ(94 as inv, 1);
    if ((script2193(43 as quest) == 2)) {
        if ((script2193(343 as quest) == 2)) {
            int0 = 3;
        } else if ((STAT_BASE(4 as stat) >= 50)) {
            int0 = 2;
        } else {
            int0 = 1;
        };
    };
    switch (int1) {
        case 10498: {
            if ((int0 < 1)) {
                int0 = 1;
            };
            break;
        }
        case 10499: {
            if ((int0 < 2)) {
                int0 = 2;
            };
            break;
        }
        case 20068: {
            if ((int0 < 3)) {
                int0 = 3;
            };
            break;
        }
    };
    return int0;
}