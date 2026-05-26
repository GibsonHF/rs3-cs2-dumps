//[clientscript,assist_flash_icon]
function script537(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = (int1 + 25);
    var int4 = (CLIENTCLOCK() - int0);
    if ((CLIENTCLOCK() >= int1)) {
        if ((CLIENTCLOCK() < int3)) {
            int2 = (255 / (int3 - int1));
            int2 = (255 - (int2 * (CLIENTCLOCK() - int1)));
            IF_SETTRANS(int2, 48824333);
            return;
        };
        IF_SETONTIMER(callback(), 48824333);
        IF_SETTRANS(0, 48824333);
        return;
    };
    if ((int4 <= 5)) {
        IF_SETTRANS(0, 48824333);
    } else if ((int4 <= 10)) {
        IF_SETTRANS(85, 48824333);
    } else if ((int4 <= 15)) {
        IF_SETTRANS(200, 48824333);
    } else {
        IF_SETTRANS(85, 48824333);
    };
    return;
}