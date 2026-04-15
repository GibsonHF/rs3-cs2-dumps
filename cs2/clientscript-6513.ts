//
function script6513(): string {
    var string0 = "Last Chance";
    var string1 = inttostring((varclient_6567 / 60), 10);
    var string2 = inttostring(MODULO(varclient_6567, 60), 10);
    var string3 = inttostring((59 - varclient_6568), 10);
    if (((varclient_6567 + 1) > 0)) {
        if ((STRING_LENGTH(string1) == 1)) {
            string1 = strconcat("0", string1);
        };
        if ((STRING_LENGTH(string2) == 1)) {
            string2 = strconcat("0", string2);
        };
        if ((STRING_LENGTH(string3) == 1)) {
            string3 = strconcat("0", string3);
        };
        string0 = `<col=CDE1FF>${string1} : ${string2} : ${string3}`;
    };
    return string0;
}