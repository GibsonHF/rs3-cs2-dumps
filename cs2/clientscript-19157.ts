//
function script19157(int0: number): void {
    var int1 = 84410414;
    IF_SETPOSITION(200, 125, 0, 0, int1);
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), 84410390);
    IF_SETTRANS(0, 84410387);
    IF_SETTRANS(0, 84410388);
    IF_SETTRANS(0, 84410389);
    IF_SETTRANS(0, 84410390);
    IF_SETHIDE(0, int1);
    IF_SETONTIMER(callback(script16735, 1, 0, -2147483645), int1);
    IF_SETONTIMER(callback(script16773), 84410390);
    return;
}