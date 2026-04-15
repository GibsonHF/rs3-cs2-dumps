//
function script12488(): void {
    stack(36864);
    stack(varbitplayer_31220);
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    var string0 = "None.";
    var string1 = "";
    if ((int0 != -1)) {
        string0 = dbrow_getfield(int0, 36896, 0);
        string1 = varclient_5191;
    };
    IF_SETTEXT(string0, comp(1759, 2));
    IF_SETTEXT(string1, comp(1759, 9));
    script12489();
    return;
}