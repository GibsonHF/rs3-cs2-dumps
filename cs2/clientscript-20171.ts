//
function script20171(int0: int, int1: int): int {
    if ((int1 == -1)) {
        return 0;
    };
    switch (int0) {
        case 0: {
            return unk10982(varplayer_12326, int1);
        }
        case 1: {
            return unk10982(varplayer_12325, int1);
        }
    };
    script12478(`Grouping ${inttostring(int0, 10)} missing plugin.`);
    return 0;
}