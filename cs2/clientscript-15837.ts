//
function script15837(int0: number): void {
    var int1 = IF_GETWIDTH(63963141);
    var int2 = SCALE(int0, 100, int1);
    IF_SETSIZE(int2, 0, 0, 1, 63963143);
    IF_SETTEXT(`Auto-configuration in progress... ${inttostring(int0, 10)}%`, 63963140);
    return;
}