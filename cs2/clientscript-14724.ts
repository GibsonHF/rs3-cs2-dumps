//
function script14724(int0: number, int1: number, string0: string): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            script14725(string0);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        script14725(string0);
    };
    return;
}