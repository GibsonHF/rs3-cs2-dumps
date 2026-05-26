//[clientscript,crafting_level_hide]
function script542(int0: number, int1: number): void {
    if (((STAT(12) >= int1) || ((varbitplayer_3043 == 1) && (varplayer_1186 >= int1)))) {
        IF_SETHIDE(0, int0);
    } else {
        IF_SETHIDE(1, int0);
    };
    return;
}