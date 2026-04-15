//
function script10862(): void {
    var string0 = `You can teleport to the Death Altar ${inttostring(varbitplayer_26598, 10)} more times today.`;
    if ((varbitplayer_26598 == 1)) {
        string0 = "You can teleport to the Death Altar 1 more time today.";
    };
    IF_SETTEXT(string0, comp(1572, 1));
    return;
}