//
function script14924(): number {
    var int0 = 0;
    var int1 = INV_GETOBJ(94 as inv, 3);
    if ((varbitplayer_51564 >= 4)) {
        if (((int1 == -1 as obj) || (item_getparam(int1, 2825) == 1))) {
            int0 = (int0 + 200);
        };
    };
    if ((varbitplayer_46759 > 0)) {
        int0 = (int0 + varbitplayer_46759);
    };
    if ((varplayer_12314 == 2)) {
        int0 = (int0 + varbitplayer_61626);
        int0 = (int0 + varbitplayer_61637);
    };
    return (1000 + int0);
}