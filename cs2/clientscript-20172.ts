//
function script20172(int0: int, int1: int, int2: int): void {
    if ((int1 == -1)) {
        return;
    };
    switch (int0) {
        case 0: {
            if ((int2 == 1)) {
                varplayer_12326 = unk11029(varplayer_12326, int1);
            } else {
                varplayer_12326 = unk11028(varplayer_12326, int1);
            };
            break;
        }
        case 1: {
            if ((int2 == 1)) {
                varplayer_12325 = unk11029(varplayer_12325, int1);
            } else {
                varplayer_12325 = unk11028(varplayer_12325, int1);
            };
            break;
        }
        default: {
            script12478(`Grouping ${inttostring(int0, 10)} missing plugin.`);
            break;
        }
    };
    return;
}