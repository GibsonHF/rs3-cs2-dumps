//
function script14184(int0: component): void {
    if ((script14177(int0) == 0)) {
        return;
    };
    script14191(int0, 30, 15, 8, 15);
    IF_SETONVERTICALSWIPE(callback(script14146, -2147483647, -2147483646), int0);
    IF_SETONHORIZONTALSWIPE(callback(script14146, -2147483647, -2147483646), int0);
    IF_SETPINCHDEADZONE(5, int0);
    stack(3);
    stack(int0);
    IF_SETPINCHFLAGS();
    stack(14147);
    stack(-2147483646);
    stack("i");
    stack(int0);
    IF_SETONVERTICALPINCH();
    stack(14147);
    stack(-2147483647);
    stack("i");
    stack(int0);
    IF_SETONHORIZONTALPINCH();
    return;
}