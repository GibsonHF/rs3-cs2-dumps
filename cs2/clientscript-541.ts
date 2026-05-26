//[clientscript,crafting_level]
function script541(int0: number, int1: number): void {
    if (((STAT(12) >= int1) || ((varbitplayer_3043 == 1) && (varplayer_1186 >= int1)))) {
        IF_SETCOLOUR(52224, int0);
    } else {
        IF_SETCOLOUR(16750623, int0);
    };
    return;
}