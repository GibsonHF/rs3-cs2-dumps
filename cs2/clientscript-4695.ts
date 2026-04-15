//
function script4695(): int {
    if ((varplayer_1784 == -1 as npc)) {
        return 0;
    };
    var int0 = script5507(npc_getparam(varplayer_1784, 5051));
    if ((int0 == 24000)) {
        return 3;
    };
    if ((int0 >= 9000)) {
        return 2;
    };
    return 1;
}