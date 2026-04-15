//[clientscript,component_flash_timer]
function script1726(int0: component): void {
    var int1 = 0;
    if ((MODULO(CLIENTCLOCK(), 40) > 20)) {
        IF_SETTRANS(0, int0);
    } else {
        IF_SETTRANS(255, int0);
    };
    return;
}