//[proc,quickchat_respond]
function script1052(int0: number, int1: number, int2: number, string0: string): void {
    if (((int2 == 19) || (int2 == 1019))) {
        var int2 = script7026(int2);
    };
    if (((int1 == -1) || (CHATPHRASE_GETAUTORESPONSECOUNT(int1) == 0))) {
        return;
    };
    if ((script174(int0, string0, 1, int2) == 0)) {
        return;
    };
    script1063(script8599(int2), int1, int2);
    return;
}