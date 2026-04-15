//
function script3646(int0: int, int1: int, int2: int, int3: component, int4: component, int5: component): void {
    var string0 = `${TOSTRING_LOCALISED(int2, 1)}/${TOSTRING_LOCALISED(int1, 1)}`;
    if ((int0 < varplayer_9078)) {
        string0 = "Completed";
    } else if ((int0 > varplayer_9078)) {
        string0 = "";
        var int2 = 0;
    };
    IF_SETHIDE(false, int3);
    var int1 = MAX(int1, 1);
    IF_SETSIZE(((IF_GETWIDTH(IF_GETPARENTLAYER(int3)) * int2) / int1), IF_GETHEIGHT(int3), 0, 0, int3);
    IF_SETTEXT(string0, int4);
    IF_SETTEXT(string0, int5);
    return;
}