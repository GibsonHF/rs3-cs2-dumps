//
function script1480(int0: number, int1: number, int2: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if (((varbitplayer_38906 == int2) && (varbitplayer_38905 == 1))) {
            CC_SETOP(5, "Unloop");
        } else {
            CC_SETOP(5, "Loop");
        };
    };
    return;
}