//
function script17261(int0: int, int1: int, int2: int): string {
    var string0 = "";
    if ((int0 == 0)) {
        string0 = strconcat(string0, "<br>- blocked XP");
    };
    if ((int1 == 0)) {
        string0 = strconcat(string0, "<br>- blocked reward XP");
    };
    if ((int2 == 0)) {
        string0 = strconcat(string0, "<br>- reset a specific skill");
    };
    if ((STRING_LENGTH(string0) != 0)) {
        string0 = strconcat("<br><br>This player has never:", string0);
    };
    return string0;
}