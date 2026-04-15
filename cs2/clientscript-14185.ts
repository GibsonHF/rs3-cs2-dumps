//
function script14185(int0: component, int1: unknown_int): void {
    if ((script14177(int0) == 0)) {
        return;
    };
    IF_SETPINCHDEADZONE(5, int0);
    stack(3);
    stack(int0);
    IF_SETPINCHFLAGS();
    stack(14204);
    stack(int1);
    stack(-2147483646);
    stack(1);
    stack("iii");
    stack(int0);
    IF_SETONVERTICALPINCH();
    stack(14204);
    stack(int1);
    stack(-2147483647);
    stack(1);
    stack("iii");
    stack(int0);
    IF_SETONHORIZONTALPINCH();
    return;
}