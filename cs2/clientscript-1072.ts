//[proc,quickchat_phrase_setup]
function script1072(int0: component, int1: chatphrase, int2: int): void {
    var int3 = CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int1);
    var int4 = 0;
    if ((int3 > 0)) {
        while (((script8631(int2) < int3) && (script8631(int2) < 10))) {
            int4 = CHATPHRASE_GETDYNAMICCOMMAND(int1, script8631(int2));
            if ((int4 == 0)) {
                script1044(int1, int2);
                return;
            };
            if ((int4 == 1)) {
                script1037(int1, false, int2);
                return;
            };
            if ((int4 == 10)) {
                script1037(int1, true, int2);
                return;
            };
            if ((int4 == 2)) {
                script1047(int1, int2);
                return;
            };
            script8632(int2, (script8631(int2) + 1));
        };
    };
    script1077(int1, int2);
    return;
}