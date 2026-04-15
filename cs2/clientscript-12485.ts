//
function script12485(int0: dbrow, int1: int): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((script12477() < dbrow_getfield(int0, 37008, 0))) {
        return;
    };
    if ((script12473(int1) == 0)) {
        return;
    };
    IF_SETTEXT(dbrow_getfield(int0, 36896, 0), comp(1757, 5));
    var string0 = dbrow_getfield(int0, 36912, 0);
    IF_SETTEXT(string0, comp(1757, 0));
    if ((script12475(int1) == 1)) {
        IF_SETTEXT("Current status: Solved", comp(1757, 6));
        IF_SETHIDE(true, comp(1757, 8));
        IF_SETHIDE(true, comp(1757, 9));
    } else {
        if ((int1 == varbitplayer_31220)) {
            IF_SETTEXT("Current status: Under investigation", comp(1757, 6));
            IF_SETTEXT("View tracker", comp(1757, 48));
        } else {
            IF_SETTEXT("Current status: Unsolved", comp(1757, 6));
            IF_SETTEXT("Start case", comp(1757, 48));
        };
        IF_SETHIDE(false, comp(1757, 8));
        IF_SETHIDE(false, comp(1757, 9));
    };
    IF_SETHIDE(false, comp(1757, 26));
    IF_SETONVARCSTRTRANSMIT(callback(script12486, string0, 5191, 1), comp(1757, 0));
    return;
}