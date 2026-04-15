//
function script14182(int0: component): void {
    script14191(int0, 0, 0, 0, 0);
    IF_SETONVERTICALSWIPE(callback(), int0);
    IF_SETONHORIZONTALSWIPE(callback(), int0);
    stack(-1);
    stack("");
    stack(int0);
    IF_SETONHOOK46();
    return;
}