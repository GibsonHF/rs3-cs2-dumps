//
function script12591(int0: int, int1: struct): void {
    if ((int0 != -1)) {
        CC_SETPARAM_INT(3540, int0);
        CC_SETPARAM_INT(8099, CC_GETTRANS());
    };
    if ((((int1 == -1 as struct) || (struct_getparam(int1, 3539) == 0)) || (int0 == 0))) {
        return;
    };
    script8258(int1, varplayer_7624);
    CC_SETONVARTRANSMIT(callback(script12593, -2147483645, -2147483643, int1, 7624, 1));
    return;
}