//
function script982(int0: struct, int1: int): void {
    var int2 = -1;
    var string0 = "";
    string0 = "Completing a daily challenge each day will award an extra ticket.";
    if ((varbitplayer_41538 == 0)) {
        int2 = 18695;
        string0 = `${string0}<br>You have yet to receive your extra ticket for today.`;
    } else {
        int2 = 21747;
        string0 = `${string0}<br>You have received your extra ticket for today.`;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, 13369403, -1), 13369403);
    stack(int2);
    stack(13369405);
    IF_SETGRAPHIC();
    IF_SETTEXT(TOSTRING_LOCALISED(script16027(int1), 1), 13369408);
    return;
}