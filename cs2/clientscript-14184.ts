//
function script14184(int0: number): void {
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
    stack(callback(script14147, -2147483646));
    stack(int0);
    IF_SETONVERTICALPINCH();
    stack(callback(script14147, -2147483647));
    stack(int0);
    IF_SETONHORIZONTALPINCH();
    return;
}