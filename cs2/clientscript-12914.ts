//
function script12914(int0: obj): int {
    var int1 = script19(int0);
    if (((item_getparam(int0, 2195) == 34) || (OC_CATEGORY(int0) == 820 as category))) {
        int1 = INV_TOTAL(93 as inv, int0);
        if ((int0 == varplayer_4824)) {
            int1 = (int1 + varbitplayer_25412);
        };
    };
    return int1;
}