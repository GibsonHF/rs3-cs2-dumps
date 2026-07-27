//
function script11744(): void {
    var int0 = script623(8);
    var int1 = script10(8);
    var string0 = "Lent item";
    var string1 = "Still on loan";
    var int2 = INV_GETOBJ(540 as inv, 0);
    if ((int2 == -1 as obj)) {
        script2731(6881409, -1, 5);
        script7794(int1, 21362);
        IF_SETOBJECT(-1 as obj, -1, comp(105, 127));
        IF_SETTEXT("", comp(105, 128));
        IF_SETOPBASE("", comp(105, 127));
        IF_SETOP(1, "", comp(105, 127));
        IF_SETOP(10, "", comp(105, 127));
        IF_SETONMOUSEREPEAT(callback(), comp(105, 127));
        return;
    };
    script2731(6881409, -1, 1);
    script7794(int1, 21361);
    IF_SETOBJECT(int2, -1, comp(105, 127));
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int2)}</col>`, comp(105, 127));
    var int3 = 1140;
    IF_SETONMOUSEOVER(callback(script44, 6881406, int3), comp(105, 126));
    int3 = 18266;
    IF_SETONMOUSELEAVE(callback(script44, 6881406, int3), 6881406);
    var string2 = "";
    if (((varplayer_429 != -1) || (varplayer_431 > 0))) {
        IF_SETTRANS(200, comp(105, 127));
        IF_SETCOLOUR(16711680, comp(105, 128));
        string2 = "Demand";
    } else {
        IF_SETTRANS(0, comp(105, 127));
        IF_SETCOLOUR(57088, comp(105, 128));
        string1 = "Available";
        string2 = "Reclaim";
    };
    IF_SETOP(1, string2, comp(105, 127));
    IF_SETOP(10, "Examine", comp(105, 127));
    IF_SETONMOUSEREPEAT(callback(script8799, string2, 6881407, -1), 6881407);
    IF_SETONMOUSELEAVE(callback(script8805), 6881407);
    IF_SETTEXT(string1, 6881408);
    return;
}