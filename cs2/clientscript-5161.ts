//
function script5161(int0: component, int1: component, int2: component, int3: int, int4: int): void {
    var int5 = IF_GETHEIGHT(int1);
    var int6 = (((int5 - int4) * 64) / int5);
    IF_SETCOLOUR(int6, int0);
    varbitplayer_3020 = MODULO(int6, 64);
    script5168(int4);
    IF_SETCOLOUR(HSVTORGB(varplayer_1111), int2);
    return;
}