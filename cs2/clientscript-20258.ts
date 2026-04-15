//
function script20258(int0: int, int1: int, int2: unknown_int, string0: string): void {
    if ((int2 != 4)) {
        CC_SETOP(1, "View");
        CC_SETOPBASE(string0);
        CC_SETONOP(callback(script20262, int0, int1));
    };
    CC_SENDTOFRONT();
    return;
}