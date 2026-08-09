//
function script13662(): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var string0 = "";
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    var int0 = dbrow_findnext();
    var int1 = dbrow_getfield(int0, 90288, 0);
    if ((IF_FIND(comp(1902, 37)) == 1)) {
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