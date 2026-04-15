//
function script8278(int0: component, int1: component): void {
    IF_SETTEXT(`${inttostring(varbitplayer_5161, 10)} / ${inttostring(varbitplayer_5162, 10)}`, int0);
    if ((varbitplayer_5161 > 0)) {
        IF_SETSIZE(SCALE(varbitplayer_5161, varbitplayer_5162, 16384), 0, 2, 1, int1);
    } else {
        IF_SETSIZE(0, 0, 2, 1, int1);
    };
    return;
}