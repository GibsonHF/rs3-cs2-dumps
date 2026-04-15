//
function script10256(int0: component, string0: string): void {
    IF_SETTEXT(string0, int0);
    IF_SETTRANS(0, int0);
    IF_SETONTIMER(callback(script10257, int0), int0);
    return;
}