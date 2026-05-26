//
function script11168(int0: number, int1: number): void {
    script2996(int0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4127);
    CC_SENDTOBACK();
    script2995(int0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 2100, `DEBUG: Displaying status ${inttostring(int1, 10)} for this component.`);
    CC_SETTEXTALIGN(1, 1, 0);
    return;
}