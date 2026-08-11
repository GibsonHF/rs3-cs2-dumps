//
function script8287(int0: number, int1: number): void {
    if (((script8292(int0, int1) == 1) || (script8293(int0, int1) == 1))) {
        script8290(1);
        return;
    };
    if ((varbitplayer_19004 == 1)) {
        return;
    };
    varbitplayer_18994 = int0;
    if ((int1 >= 0)) {
        script445(int0, int1);
    } else if (((varbitplayer_33661 == 1) && (int0 == 4))) {
        script445(int0, 6);
    };
    script8288(int0);
    script8193();
    var int2 = script13415(int0);
    var int3 = script13416(int2, script441(int0));
    if ((((varbitplayer_38842 == 1) && (int3 != -1 as struct)) && (struct_getparam(int3, 7130) != -1 as struct))) {
        int3 = struct_getparam(int3, 7130);
    };
    script8282(int3);
    IF_SETHIDE(false, comp(1448, 1));  // toplevel_v2_parent:loading_layer
    return;
}