//[clientscript,macro_pinball_score]
function script87(int0: component): void {
    IF_SETTEXTANTIMACRO(1, int0);
    IF_SETTEXT(`Score: ${inttostring(varbitplayer_14127, 10)}`, int0);
    if ((varbitplayer_14127 == 0)) {
        IF_SETCOLOUR(16711680, int0);
    } else {
        IF_SETCOLOUR(16776960, int0);
    };
    return;
}