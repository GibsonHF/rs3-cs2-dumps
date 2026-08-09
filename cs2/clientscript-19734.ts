//
function script19734(int0: number): void {
    stack(1101824);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    var int2 = dbrow_getfield(int1, 1101888, 0);
    if ((script19694(int0) == 1)) {
        IF_SETHIDE(true, int2);
    };
    var string0 = script985(varbitplayer_57133, "You have claimed all available prizes.", "You can claim 1 more free prize!", `You can claim ${inttostring(varbitplayer_57133, 10)} more free prizes!`);
    IF_SETTEXT(string0, comp(1278, 14));
    if ((varbitplayer_57133 == 0)) {
        script19737();
    };
    return;
}