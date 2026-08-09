//
function script14185(int0: number, int1: number): void {
    if ((script14177(int0) == 0)) {
        return;
    };
    IF_SETPINCHDEADZONE(5, int0);
    stack(3);
    stack(int0);
    IF_SETPINCHFLAGS();
    stack(callback(script14204, int1, -2147483646, 1));
    stack(int0);
    IF_SETONVERTICALPINCH();
    stack(callback(script14204, int1, -2147483647, 1));
    stack(int0);
    IF_SETONHORIZONTALPINCH();
    return;
}