//[proc,component_flash_stop]
function script1728(int0: number): void {
    IF_SETONTIMER(callback(), int0);
    IF_SETTRANS(0, int0);
    return;
}