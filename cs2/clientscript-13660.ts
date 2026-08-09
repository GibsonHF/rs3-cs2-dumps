//
function script13660(): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    var int0 = dbrow_findnext();
    var string0 = dbrow_getfield(int0, 90128, 0);
    var string1 = dbrow_getfield(int0, 90144, 0);
    script8421(124649474, 124649476, 124649475, 124649477, string0, 21218, -1, 1, -1, -1);
    IF_SETTEXT(string1, comp(1902, 0));
    script13662();
    script13671(124649486);
    return;
}