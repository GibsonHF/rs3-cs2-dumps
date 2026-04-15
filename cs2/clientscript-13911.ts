//
function script13911(): int {
    var int0 = 0;
    if ((varplayer_6168 == -1 as struct)) {
        return 30;
    };
    while ((int0 < 25)) {
        if ((script13932(int0) == struct_getparam(varplayer_6168, 5694))) {
            return int0;
        };
        int0 = (int0 + 1);
    };
    return 0;
}