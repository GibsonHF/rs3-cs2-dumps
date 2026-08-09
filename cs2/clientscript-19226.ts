//
function script19226(int0: number): void {
    stack(1208320);
    stack(varbitplayer_56126);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    var string0 = "";
    if ((int1 != -1)) {
        string0 = dbrow_getfield(int1, 1208336, 0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, int0);
    };
    return;
}