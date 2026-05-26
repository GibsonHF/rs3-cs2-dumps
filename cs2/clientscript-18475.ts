//
function script18475(int0: number, int1: number): void {
    IF_SETONVARTRANSMIT(callback(script18477, 11598, 1), comp(855, 7));
    var string0 = "";
    if ((CC_FIND(int0, 0) == 1)) {
        switch (int1) {
            case 2: {
                if ((unk11022("title_text") == 1)) {
                    string0 = unk11021("title_text");
                };
                IF_SETHIDE(false, comp(855, 9));
                script18476(1);
                IF_SETTEXT(string0, comp(855, 29));
                break;
            }
            case 3:
            case 4:
            case 5:
            case 6: {
                script18476(2);
                IF_SETHIDE(true, comp(855, 9));
                break;
            }
        };
    };
    return;
}