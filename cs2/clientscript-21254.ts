//
function script21254(): void {
    if ((strcmp(string0, "") == 0)) {
        stack(string0);
        return;
    };
    var string0 = REMOVETAGS(string0);
    if ((strcmp(string0, "") == 0)) {
        stack(string0);
        return;
    };
    var string1 = SUBSTRING(string0, 0, 1);
    var int0 = STRING_INDEXOF_STRING(string0, " ", 0);
    if ((int0 == -1)) {
        stack(string1);
        return;
    };
    if ((STRING_LENGTH(string0) >= (int0 + 1))) {
        string1 = `${string1}${SUBSTRING(string0, (int0 + 1), (int0 + 2))}`;
    };
    stack(string1);
    return;
}