//
function script6961(int0: int, int1: obj, int2: unknown_int): void {
    if ((int2 == 1)) {
        return;
    };
    if (((script10906() == 0) || (script14337() > script3999(int1)))) {
        script14354();
        return;
    };
    if (((varplayer_8970 == -1) || (script14344(varplayer_8970) != -1 as obj))) {
        varplayer_8970 = int0;
    } else {
        varplayer_8970 = MIN(varplayer_8970, int0);
    };
    return;
}