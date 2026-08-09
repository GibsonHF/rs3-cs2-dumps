//
function script14740(int0: number, int1: number, string0: string, string1: string): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            script14741(string0, string1);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        script14741(string0, string1);
    };
    return;
}