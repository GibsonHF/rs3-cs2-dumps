//
function script19409(int0: int, int1: int, int2: int, int3: unknown_int, string0: string): void {
    CC_SETOPBASE(string0);
    if ((((int0 == int1) || (strcmp(string0, "- Vacant -") == 0)) || (strcmp(string0, "-") == 0))) {
        return;
    };
    if ((int2 != -1)) {
        if ((FRIEND_GETSLOTFROMNAME(string0) >= 0)) {
            CC_SETOP(1, "Message");
            CC_SETOP(2, "Quick Message");
        } else {
            CC_SETOP(1, "");
            CC_SETOP(2, "");
        };
        CC_SETOP(3, "Trail");
        CC_SETOP(6, "Join");
        if ((int2 == MAP_WORLD())) {
            CC_SETOP(7, "Inspect");
        };
    };
    if ((int3 == 1)) {
        CC_SETOP(10, "Initiate vote to kick");
    };
    CC_SETONOP(callback(script19410, -2147483644, "event_opbase"));
    return;
}