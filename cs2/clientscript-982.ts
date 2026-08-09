//
function script982(int0: number, int1: number): void {
    var int2 = -1 as graphic;
    var string0 = "";
    string0 = "Completing a daily challenge each day will award an extra ticket.";
    if ((varbitplayer_41538 == 0)) {
        int2 = 18695 as graphic;
        string0 = `${string0}<br>You have yet to receive your extra ticket for today.`;
    } else {
        int2 = 21747 as graphic;
        string0 = `${string0}<br>You have received your extra ticket for today.`;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 13369403, -1), comp(204, 59));
    IF_SETGRAPHIC(int2, comp(204, 61));
    IF_SETTEXT(TOSTRING_LOCALISED(script16027(int1), 1), comp(204, 64));
    return;
}