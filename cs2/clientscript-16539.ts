//
function script16539(): void {
    if ((STAT_BASE(6 as stat) >= struct_getparam(14770, 2807))) {
        script16542(37814281, 37814280, 14379, true, 0);
    } else if ((STAT_BASE(6 as stat) >= struct_getparam(14751, 2807))) {
        script16542(37814281, 37814280, 14378, true, 0);
    } else {
        script16542(37814281, 37814280, 14378, false, 0);
    };
    var int0 = script734(varbitplayer_30224);
    script16542(37814285, 37814284, 26543, int0, 0);
    return;
}