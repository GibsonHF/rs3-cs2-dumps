//
function script5164(int0: component, int1: unknown_int, int2: component, int3: int, int4: int): void {
    var int5 = IF_GETHEIGHT(int0);
    var int6 = (((int5 - int4) * 8) / int5);
    var int7 = ((int3 * 128) / IF_GETWIDTH(int0));
    varbitplayer_3021 = MAX(0, MODULO(int6, 8));
    varbitplayer_3022 = MODULO(int7, 128);
    script5167(int3, int4);
    IF_SETCOLOUR(HSVTORGB(varplayer_1111), int2);
    return;
}