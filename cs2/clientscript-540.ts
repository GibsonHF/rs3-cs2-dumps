//[clientscript,xbows_level]
function script540(int0: component, int1: int): void {
    if (((STAT(6 as stat) >= int1) || ((varbitplayer_3043 == 1) && (varplayer_1185 >= int1)))) {
        IF_SETCOLOUR(52224, int0);
    } else {
        IF_SETCOLOUR(16750623, int0);
    };
    return;
}