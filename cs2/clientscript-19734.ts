//
function script19734(int0: unknown_int): void {
    stack(1101824);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    stack(int1);
    stack(1101888);
    stack(0);
    dbrow_getfield();
    var int2 = stack();
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