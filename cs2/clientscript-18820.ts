//
function script18820(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        stack(int2);
        var int2 = (int2 - 1);
        if (BRANCH_GREATER_THAN(0)) {
            CC_SETONTIMER(callback(script18820, int0, int1, int2, int3, int4));
            return;
        };
        CC_SETONTIMER(callback(script18820, int0, int1, (SEQLENGTH(int3) + 1), int3, int4));
        script18821(int0, int1, int3, int4);
    };
    return;
}