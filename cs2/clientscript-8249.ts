//
function script8249(): unknown_int {
    var int0 = 0;
    var int1 = -1 as obj;
    while ((int0 < 28)) {
        int1 = INV_GETOBJ(93 as inv, int0);
        if (((int1 != -1 as obj) && ((((script7246(int1) > 0) || (OC_CATEGORY(int1) == 1119 as category)) && (item_getparam(int1, 3744) == 0)) && (script11780(int1, int0) == 1)))) {
            return 1;
        };
        int0 = (int0 + 1);
    };
    return 0;
}