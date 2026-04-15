//
function script9872(int0: component): void {
    var string0 = "";
    if ((varclient_1000 > COMLEVEL_ACTIVE())) {
        string0 = `${inttostring(COMLEVEL_ACTIVE(), 10)}+${inttostring((varclient_1000 - COMLEVEL_ACTIVE()), 10)}`;
    } else {
        string0 = inttostring(COMLEVEL_ACTIVE(), 10);
    };
    string0 = `Combat Lvl: ${string0}`;
    if ((IF_FIND(int0) == 1)) {
        if (((PARAHEIGHT(string0, CC_GETWIDTH(), CC_GETFONTMETRICS()) > 1) || (PARAWIDTH(string0, CC_GETWIDTH(), CC_GETFONTMETRICS()) > CC_GETWIDTH()))) {
            CC_SETTEXT("");
        } else {
            CC_SETTEXT(string0);
        };
    };
    return;
}