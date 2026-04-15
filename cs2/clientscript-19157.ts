//
function script19157(int0: int): void {
    var int1 = comp(1288, 46);
    IF_SETPOSITION(200, 125, 0, 0, int1);
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(1288, 22));
    IF_SETTRANS(0, comp(1288, 19));
    IF_SETTRANS(0, comp(1288, 20));
    IF_SETTRANS(0, comp(1288, 21));
    IF_SETTRANS(0, comp(1288, 22));
    IF_SETHIDE(false, int1);
    IF_SETONTIMER(callback(script16735, 1, 0, -2147483645), int1);
    IF_SETONTIMER(callback(script16773), 84410390);
    return;
}