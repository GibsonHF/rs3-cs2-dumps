//[clientscript,interface_flash_fade]
function script144(int0: component, int1: int, int2: int, int3: int): void {
    var int4 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CLIENTCLOCK() >= int3)) {
            CC_DELETE();
            return;
        };
        if ((MODULO(CLIENTCLOCK(), 40) < 20)) {
            int4 = (CLIENTCLOCK() - int2);
            int4 = (int4 * 255);
            int4 = (int4 / (int3 - int2));
            CC_SETTRANS(int4);
        } else {
            CC_SETTRANS(255);
        };
    };
    return;
}