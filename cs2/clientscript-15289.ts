//
function script15289(int0: component, int1: int, int2: unknown_int, int3: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if (((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1)) && (cc_getparam(5946) < CLIENTCLOCK()))) {
        cc_setparam(5946, (CLIENTCLOCK() + 150));
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        script15232(int2, int3);
    };
    return;
}