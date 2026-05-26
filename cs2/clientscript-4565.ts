//
function script4565(int0: number, int1: number, int2: number): void {
    IF_SETONFRIENDTRANSMIT(callback(script4566, int0, int1, int2), int0);
    IF_SETONCLANTRANSMIT(callback(script4566, int0, int1, int2), int0);
    IF_SETONCHATTRANSMIT(callback(script4566, int0, int1, int2), int0);
    IF_SETONRESIZE(callback(script4566, int0, int1, int2), int0);
    script4567(int0, int1, int2);
    return;
}