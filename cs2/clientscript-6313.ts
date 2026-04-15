//
function script6313(int0: obj, int1: int, string0: string): string {
    if (((int1 <= 0) || (int0 == -1 as obj))) {
        return string0;
    };
    if ((STRING_LENGTH(string0) > 0)) {
        var string0 = strconcat(string0, "<br>");
    };
    if ((int0 == 1539 as obj)) {
        return strconcat(string0, `Nails: ${inttostring(int1, 10)}`);
    };
    return strconcat(string0, `${OC_NAME(int0)}: ${inttostring(int1, 10)}`);
}