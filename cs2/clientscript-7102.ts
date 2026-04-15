//
function script7102(int0: component, string0: string): void {
    if ((STRING_LENGTH(string0) <= 4)) {
        if ((STRING_LENGTH(string0) == 1)) {
            var string0 = strconcat("0", string0);
        };
        string0 = `${SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 1))}${script8002()}${SUBSTRING(string0, (STRING_LENGTH(string0) - 1), STRING_LENGTH(string0))}xp`;
    } else {
        string0 = strconcat(SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 1)), "xp");
    };
    if ((STRING_LENGTH(string0) < 8)) {
        string0 = `+ ${string0}`;
    };
    IF_SETTEXT(string0, int0);
    return;
}