//[proc,component_flash_start]
function script1725(int0: component): void {
    IF_SETHIDE(false, int0);
    IF_SETONTIMER(callback(script1726, int0), int0);
    return;
}