//
function script2949(string0: string): string {
    var int0 = STRING_LENGTH(string0);
    var string0 = "";
    while ((int0 > 0)) {
        string0 = `${string0}*`;
        int0 = (int0 - 1);
    };
    return string0;
}