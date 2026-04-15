//
function script7839(int0: unknown_int, string0: string): void {
    if ((script5864() == 0)) {
        script15222();
        return;
    };
    var string1 = "runescape.wiki";
    if ((CLIENTOPTION_GET(34) == 3)) {
        string1 = "pt.runescape.wiki";
    };
    if ((STRING_LENGTH(string0) > 0)) {
        script15223(int0, string0);
        var string0 = URLENCODE(string0);
        OPENURLRAW(`https://${string1}/w/Special:Search?utm_source=rsgame&utm_medium=rs3&utm_campaign=cmd&search=${string0}`, 0);
    } else {
        script15224(int0);
        OPENURLRAW(`https://${string1}/?utm_source=rsgame&utm_medium=rs3&utm_campaign=cmd`, 0);
    };
    return;
}