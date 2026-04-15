//
function script13682(int0: int, int1: unknown_int, string0: string): string {
    var string1 = "null";
    var string2 = script12161(int0);
    string1 = `<col=f5b241>Currently have:</col> <col=ffffff>${TOSTRING_LOCALISED(script12054(int0), 1)}</col>`;
    if (((int1 == 1) && (STRING_LENGTH(string0) > 0))) {
        string1 = `${string1} ${string0}`;
    };
    if ((STRING_LENGTH(string2) > 0)) {
        string1 = `${string1}<br><br><col=f5b241>To collect this material, disassemble:</col><br><col=ffffff>${string2}</col>`;
    };
    return string1;
}