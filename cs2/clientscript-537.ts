//[clientscript,assist_flash_icon]
function script537(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = (int1 + 25);
    var int4 = (CLIENTCLOCK() - int0);
    if ((CLIENTCLOCK() >= int1)) {
        if ((CLIENTCLOCK() < int3)) {
            int2 = (255 / (int3 - int1));
            int2 = (255 - (int2 * (CLIENTCLOCK() - int1)));
            IF_SETTRANS(int2, comp(745, 13));
            return;
        };
        IF_SETONTIMER(callback(), comp(745, 13));
        IF_SETTRANS(0, 48824333);
        return;
    };
    if ((int4 <= 5)) {
        IF_SETTRANS(0, comp(745, 13));
    } else if ((int4 <= 10)) {
        IF_SETTRANS(85, comp(745, 13));
    } else if ((int4 <= 15)) {
        IF_SETTRANS(200, comp(745, 13));
    } else {
        IF_SETTRANS(85, comp(745, 13));
    };
    return;
}