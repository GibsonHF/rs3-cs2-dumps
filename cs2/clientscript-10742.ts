//
function script10742(int0: number): void {
    if ((int0 == -1)) {
        script10743("Select an enhancer from the list to view effects.");
        return;
    };
    var int1 = enum_getvalue(0, 33, 9456 as cs2enum, int0);
    if ((int1 == -1 as obj)) {
        script10743("Select an enhancer from the list to view effects.");
        return;
    };
    var int2 = item_getparam(int1, 4669);
    if ((int2 == -1)) {
        script10743("Select an enhancer from the list to view effects.");
        return;
    };
    var int3 = MAX(1, (item_getparam(int1, 4668) / 2));
    var string0 = OC_NAME(int1);
    var string1 = enum_getvalue(33, 36, 9457 as cs2enum, int1);
    var int4 = script6561(32708);
    var int5 = script6561(32716);
    IF_SETTEXT(string0, 101842960);
    if ((int2 == 1)) {
        if ((int4 == 0)) {
            IF_SETHIDE(0, 101842955);
        } else {
            IF_SETHIDE(1, 101842955);
        };
        string1 = strconcat(string1, `<br><br>You need an unfocused damage enhancer to exchange for this.<br><br>You have:<br>${inttostring(int4, 10)} unfocused damage enhancers.`);
    } else if ((int2 == 2)) {
        if ((int5 == 0)) {
            IF_SETHIDE(0, 101842955);
        } else {
            IF_SETHIDE(1, 101842955);
        };
        string1 = strconcat(string1, `<br><br>You need an unfocused reward enhancer to exchange for this.<br><br>You have:<br>${inttostring(int5, 10)} unfocused reward enhancers.`);
    };
    string1 = strconcat(string1, "<br><br>Enhancers from here will have half the charges of enhancers obtained from the Motherlode Maw or trading in shards.");
    CC_DELETEALL(101842958);
    CC_CREATE(101842958, 4, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXT(string1);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(26);
    if ((int3 != -1)) {
        IF_SETTEXT(`You will receive ${TOSTRING_LOCALISED(int3, 1)} ${script4583(int3, "charge", "charges")}.`, 101842959);
    } else {
        IF_SETTEXT("-", 101842959);
    };
    return;
}