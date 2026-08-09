//[proc,quickchat_phrase_setup]
function script1072(int0: number, int1: number, int2: number): void {
    var int3 = CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int1);
    var int4 = 0;
    if ((int3 > 0)) {
        while ((script8631(int2) < int3)) {
            if ((script8631(int2) < 10)) {
                int4 = CHATPHRASE_GETDYNAMICCOMMAND(int1, script8631(int2));
                if ((int4 == 0)) {
                    script1044(int1, int2);
                    return;
                };
                if ((int4 == 1)) {
                    script1037(int1, 0, int2);
                    return;
                };
                if ((int4 == 10)) {
                    script1037(int1, 1, int2);
                    return;
                };
                if ((int4 == 2)) {
                    script1047(int1, int2);
                    return;
                };
                script8632(int2, (script8631(int2) + 1));
            };
            script1077(int1, int2);
            return;
        };
    };
    script1077(int1, int2);
    return;
}