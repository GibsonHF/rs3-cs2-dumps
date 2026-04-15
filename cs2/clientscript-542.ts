//[clientscript,crafting_level_hide]
function script542(int0: component, int1: int): void {
    if (((STAT(12 as stat) >= int1) || ((varbitplayer_3043 == 1) && (varplayer_1186 >= int1)))) {
        IF_SETHIDE(false, int0);
    } else {
        IF_SETHIDE(true, int0);
    };
    return;
}