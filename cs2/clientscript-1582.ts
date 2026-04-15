//
function script1582(int0: component): void {
    var string0 = varclient_2477;
    var int1 = IF_GETWIDTH(int0);
    if ((PARAWIDTH(string0, 2147483647, IF_GETFONTMETRICS(int0)) > int1)) {
        while ((PARAWIDTH(`${string0}...`, 2147483647, IF_GETFONTMETRICS(int0)) > int1)) {
            string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 1));
        };
        string0 = `${string0}...`;
        IF_SETONMOUSEREPEAT(callback(script8799, varclient_2477, int0, -1), int0);
    } else {
        IF_SETONMOUSEREPEAT(callback(), int0);
    };
    IF_SETTEXT(string0, int0);
    return;
}