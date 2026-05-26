//
function script11880(): void {
    if ((varbitplayer_29696 >= 20)) {
        IF_SETTEXT("<col=00FF00>Escort souls up the bridge.", 110493699);
    } else {
        IF_SETTEXT(`<col=FFFFFF>Souls Remaining: ${inttostring(MAX(0, (20 - varbitplayer_29696)), 10)}`, 110493699);
    };
    return;
}