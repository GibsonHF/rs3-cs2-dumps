//
function script1551(int0: int, int1: fontmetrics, int2: int, string0: string): int {
    var string0 = script1602(string0);
    var int0 = MIN(STRING_LENGTH(string0), int0);
    if ((int0 <= 0)) {
        return int2;
    };
    return (STRINGWIDTH(SUBSTRING(string0, 0, int0), int1) + int2);
}