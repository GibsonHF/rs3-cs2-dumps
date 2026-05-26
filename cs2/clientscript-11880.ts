//
function script11880(): void {
    if ((varbitplayer_29696 >= 20)) {
        IF_SETTEXT("<col=00FF00>Escort souls up the bridge.", comp(1686, 3));
    } else {
        IF_SETTEXT(`<col=FFFFFF>Souls Remaining: ${inttostring(MAX(0, (20 - varbitplayer_29696)), 10)}`, comp(1686, 3));
    };
    return;
}