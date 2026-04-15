//
function script4886(int0: int): unknown_int {
    switch (int0) {
        case 21:
        case 22:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 41:
        case 42: {
            return 1;
        }
    };
    var int1 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = varbitclan_6507;
        if ((int1 >= 2)) {
            switch (int0) {
                case 23:
                case 24: {
                    return 1;
                }
            };
        };
        if ((int1 >= 4)) {
            switch (int0) {
                case 25:
                case 26:
                case 43:
                case 44: {
                    return 1;
                }
            };
        };
        if ((int1 >= 6)) {
            return 1;
        };
    };
    return 0;
}