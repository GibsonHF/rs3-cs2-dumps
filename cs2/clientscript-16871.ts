//
function script16871(int0: component, int1: int): void {
    script2731(int0, -1, 21);
    var string0 = "";
    switch (int1) {
        case 1: {
            string0 = TOSTRING_LOCALISED(script4708(), 1);
            break;
        }
        case 2: {
            string0 = TOSTRING_LOCALISED(varplayer_1297, 1);
            break;
        }
        case 3: {
            string0 = TOSTRING_LOCALISED(varplayer_7122, 1);
            break;
        }
    };
    IF_SETTEXT(string0, int0);
    return;
}