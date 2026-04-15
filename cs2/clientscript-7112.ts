//
function script7112(int0: obj): unknown_int {
    if (((varplayer_1784 == -1 as npc) || (varbitplayer_28408 == 1))) {
        return 0;
    };
    if (((int0 != -1 as obj) && (item_getparam(int0, 7482) == true))) {
        return 0;
    };
    if ((script11682(varplayer_1784) > 0)) {
        return 1;
    };
    return 0;
}