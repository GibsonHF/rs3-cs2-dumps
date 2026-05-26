//
function script1551(int0: number, int1: number, int2: number, string0: string): number {
    var string0 = script1602(string0);
    var int0 = MIN(STRING_LENGTH(string0), int0);
    if ((int0 <= 0)) {
        return int2;
    };
    return (STRINGWIDTH(SUBSTRING(string0, 0, int0), int1) + int2);
}