//[clientscript,interface_flash_slot_static]
function script714(int0: component): void {
    CC_CREATE(int0, 5, 4);
    CC_SETGRAPHIC(937 as graphic);
    CC_SETSIZE(10, 32, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETHIDE(false);
    CC_SETONTIMER(callback(script144, int0, 4, CLIENTCLOCK(), (CLIENTCLOCK() + 750)));
    return;
}