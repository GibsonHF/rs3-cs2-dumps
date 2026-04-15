//
function script19226(int0: component): void {
    stack(1208320);
    stack(varbitplayer_56126);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    var string0 = "";
    if ((int1 != -1)) {
        string0 = dbrow_getfield(int1, 1208336, 0);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, int0);
    };
    return;
}