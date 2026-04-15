//
function script10863(): void {
    script10860(103022604, 0);
    script10860(103022605, 0);
    script10860(103022607, 0);
    script10860(103022608, 0);
    script10860(103022609, 0);
    script10860(103022610, 0);
    script10860(103022611, 0);
    script10860(103022606, 0);
    var string0 = `You can teleport to locations in the elven lands ${inttostring(varbitplayer_26598, 10)} more times today.`;
    if ((varbitplayer_26598 == 1)) {
        string0 = "You can teleport to locations in the elven lands 1 more time today.";
    };
    IF_SETTEXT(string0, comp(1572, 1));
    script8841(84, 1);
    return;
}