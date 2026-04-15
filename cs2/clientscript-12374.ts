//
function script12374(int0: unknown_int, string0: string, string1: string, string2: string): void {
    if ((((strcmp(string0, "mtxn_rs_shop") == 0) && (PLATFORMTYPE() != 0)) && (PLATFORMTYPE() != 5))) {
        if ((PLATFORMTYPE() == 1)) {
            if ((strcmp(string1, "index") == 0)) {
                var string1 = "index?steamMode=runescape";
                var string2 = "index?steamMode=runescape";
            } else {
                string1 = `${string1}&steamMode=runescape`;
                string2 = `${string2}&steamMode=runescape`;
            };
        } else {
            script15318();
            return;
        };
    };
    script10030(string0, string1, string2, int0, 0);
    return;
}