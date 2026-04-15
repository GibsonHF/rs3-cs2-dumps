//
function script19546(int0: int): void {
    if ((int0 < 5)) {
        IF_SETONTIMER(callback(script19546, (int0 + 1)), comp(1313, 106));
        return;
    };
    IF_SETONTIMER(callback(), comp(1313, 106));
    var int1 = (200 - INV_FREESPACE(963));
    var string0 = "Total number of Group Ironman storage spaces used and available.";
    IF_SETHIDE(0, 86048875);
    IF_SETTEXT(TOSTRING_LOCALISED(int1, 1), 86048878);
    IF_SETTEXT(TOSTRING_LOCALISED(script19353(), 1), 86048879);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 86048875);
    return;
}