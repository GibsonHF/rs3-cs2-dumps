//
function script12485(int0: number, int1: number): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((script12477() < dbrow_getfield(int0, 37008, 0))) {
        return;
    };
    if ((script12473(int1) == 0)) {
        return;
    };
    IF_SETTEXT(dbrow_getfield(int0, 36896, 0), 115146757);
    var string0 = dbrow_getfield(int0, 36912, 0);
    IF_SETTEXT(string0, 115146752);
    if ((script12475(int1) == 1)) {
        IF_SETTEXT("Current status: Solved", 115146758);
        IF_SETHIDE(1, 115146760);
        IF_SETHIDE(1, 115146761);
    } else {
        if ((int1 == varbitplayer_31220)) {
            IF_SETTEXT("Current status: Under investigation", 115146758);
            IF_SETTEXT("View tracker", 115146800);
        } else {
            IF_SETTEXT("Current status: Unsolved", 115146758);
            IF_SETTEXT("Start case", 115146800);
        };
        IF_SETHIDE(0, 115146760);
        IF_SETHIDE(0, 115146761);
    };
    IF_SETHIDE(0, 115146778);
    IF_SETONVARCSTRTRANSMIT(callback(script12486, string0, 5191, 1), 115146752);
    return;
}