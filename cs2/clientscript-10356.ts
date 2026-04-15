//
function script10356(int0: component, int1: component, string0: string): void {
    IF_SETTEXT(`Are you sure you want to delete ${string0}`, int1);
    IF_SETPARAM_STRING(5206, string0, int1);
    IF_SETHIDE(false, int0);
    return;
}