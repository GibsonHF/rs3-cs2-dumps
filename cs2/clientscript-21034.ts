//
function script21034(): void {
    var int0 = script20134();
    stack(0);
    script20927();
    var int1 = [];
    script20926();
    var int2 = [];
    var string0 = "";
    if ((int0 > varbitplayer_58388)) {
        string0 = "You have a new region available to unlock!";
    } else {
        string0 = `You have unlocked ${inttostring((int0 + int2), 10)}/${inttostring(int1, 10)} regions.`;
    };
    IF_SETTEXT(string0, comp(1409, 13));
    var int3 = STRINGWIDTH(string0, IF_GETFONTMETRICS(comp(1409, 13)));
    stack(92340236);
    stack(92340237);
    script21033();
    return;
}