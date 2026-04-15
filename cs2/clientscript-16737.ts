//
function script16737(string0: string): string {
    var int0 = STRING_INDEXOF_STRING(string0, "<br>", 0);
    var string1 = "";
    var string2 = "";
    if ((int0 > -1)) {
        string1 = SUBSTRING(string0, 0, int0);
        string2 = SUBSTRING(string0, (int0 + 4), STRING_LENGTH(string0));
        var string0 = `${string1} ${string2}`;
    };
    return string0;
}