//
function script5709(int0: component, int1: int): void {
    if ((int1 >= 50)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    var int2 = (255 - script12452(int1, 50, 0, 255, 4));
    if ((IF_FIND(int0) == 1)) {
        CC_SETTRANS(int2);
    };
    var int1 = (int1 + 1);
    IF_SETONTIMER(callback(script5709, int0, int1), int0);
    return;
}