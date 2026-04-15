//
function script13660(): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    stack(int0);
    stack(90128);
    stack(0);
    dbrow_getfield();
    var string0 = stack();
    stack(int0);
    stack(90144);
    stack(0);
    dbrow_getfield();
    var string1 = stack();
    script8421(124649474, 124649476, 124649475, 124649477, string0, 21218, -1, 1, -1, -1);
    IF_SETTEXT(string1, 124649472);
    script13662();
    script13671(124649486);
    return;
}