//
function script11744(): void {
    var int0 = script623(8);
    var int1 = script10(8);
    var string0 = "Lent item";
    var string1 = "Still on loan";
    var int2 = INV_GETOBJ(540 as inv, 0);
    if ((int2 == -1 as obj)) {
        IF_SETHIDE(false, comp(105, 196));
        IF_SETOBJECT(-1 as obj, -1, comp(105, 193));
        IF_SETTEXT("", comp(105, 194));
        IF_SETOPBASE("null", comp(105, 193));
        IF_SETOP(1, "null", comp(105, 193));
        return;
    };
    IF_SETHIDE(true, comp(105, 196));
    IF_SETOBJECT(int2, -1, comp(105, 193));
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int2)}</col>`, comp(105, 193));
    var int3 = 1140;
    IF_SETONMOUSEOVER(callback(script44, 6881472, int3), comp(105, 192));
    int3 = 18266;
    IF_SETONMOUSELEAVE(callback(script44, 6881472, int3), 6881472);
    var string2 = "";
    if (((varplayer_429 != -1) || (varplayer_431 > 0))) {
        IF_SETTRANS(200, comp(105, 193));
        IF_SETCOLOUR(16711680, comp(105, 194));
        string2 = "Demand";
    } else {
        IF_SETTRANS(0, comp(105, 193));
        IF_SETCOLOUR(57088, comp(105, 194));
        string1 = "Available";
        string2 = "Reclaim";
    };
    IF_SETOP(1, string2, comp(105, 193));
    IF_SETONMOUSEREPEAT(callback(script8799, string2, 6881473, -1), 6881473);
    IF_SETONMOUSELEAVE(callback(script8805), 6881473);
    IF_SETTEXT(string1, 6881474);
    return;
}