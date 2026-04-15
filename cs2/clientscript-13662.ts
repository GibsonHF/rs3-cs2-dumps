//
function script13662(): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var string0 = "";
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    stack(int0);
    stack(90288);
    stack(0);
    dbrow_getfield();
    var int1 = stack();
    if ((IF_FIND(124649509) == 1)) {
        string0 = `Capacity: ${TOSTRING_LOCALISED(varplayer_7270, 1)}`;
        if ((int1 != -1)) {
            string0 = `${string0}/${TOSTRING_LOCALISED(int1, 1)}`;
        } else {
            string0 = `${string0}/Lots!`;
        };
        CC_SETTEXT(string0);
    };
    script13664();
    return;
}