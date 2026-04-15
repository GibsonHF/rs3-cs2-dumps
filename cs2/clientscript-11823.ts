//
function script11823(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = script5259((varclient_5078 / 50));
    var string0 = "";
    if ((int0 > 9)) {
        string0 = `${inttostring(int0, 10)}:`;
    } else {
        string0 = `0${inttostring(int0, 10)}:`;
    };
    if ((int1 > 9)) {
        string0 = strconcat(string0, `${inttostring(int1, 10)}:`);
    } else {
        string0 = strconcat(string0, `0${inttostring(int1, 10)}:`);
    };
    if ((int2 > 9)) {
        string0 = strconcat(string0, inttostring(int2, 10));
    } else {
        string0 = strconcat(string0, `0${inttostring(int2, 10)}`);
    };
    if ((IF_FIND(comp(1588, 38)) == 1)) {
        CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
        if ((strcmp(CC_GETTEXT(), string0) != 0)) {
            CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
        } else {
            CC_SETONMOUSEREPEAT(callback());
        };
    };
    if ((IF_FIND(comp(1681, 65)) == 1)) {
        CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
        if ((strcmp(CC_GETTEXT(), string0) != 0)) {
            CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
        } else {
            CC_SETONMOUSEREPEAT(callback());
        };
    };
    return;
}