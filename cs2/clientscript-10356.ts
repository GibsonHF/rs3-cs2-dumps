//
function script10356(int0: number, int1: number, string0: string): void {
    IF_SETTEXT(`Are you sure you want to delete ${string0}`, int1);
    IF_SETPARAM_STRING(5206, string0, int1);
    IF_SETHIDE(0, int0);
    return;
}