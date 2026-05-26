//
function script6960(): void {
    if ((varbitplayer_27703 == 0)) {
        IF_SETHIDE(0, 105775246);
    };
    if ((varbitplayer_27703 != 1)) {
        IF_SETTEXT(`You have ${inttostring(varbitplayer_27703, 10)} Chits`, 105775111);
    } else {
        IF_SETTEXT("You have 1 Chit", 105775111);
    };
    return;
}