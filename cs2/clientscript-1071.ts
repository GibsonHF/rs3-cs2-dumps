//[proc,quickchat_phrase]
function script1071(int0: number, int1: number, int2: number, int3: number): void {
    script8543(int3);
    if ((int2 >= 0)) {
        script1068(int0, int2, int3);
    };
    script8632(int3, 0);
    if ((CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int1) > 0)) {
        script1072(int0, int1, int3);
    } else {
        script1077(int1, int3);
    };
    return;
}