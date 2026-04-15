//
function script14479(int0: obj, int1: unknown_int): unknown_int {
    var int2 = 93;
    switch (int1) {
        case 1:
        case 0: {
            if (((((item_getparam(int0, 59) == 1) || (item_getparam(int0, 4920) == 1)) || (item_getparam(int0, 4735) == 2)) || (item_getparam(int0, 8752) == script16161()))) {
                int2 = 93;
            } else {
                int2 = 95;
            };
            break;
        }
        case 2: {
            int2 = 93;
            break;
        }
        default: {
            script12478("Invalid claim destination in trh_validate_claim_destin, defaulting to inv.");
            break;
        }
    };
    return int2;
}