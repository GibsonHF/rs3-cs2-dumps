//
function script7169(int0: cs2enum, int1: cs2enum, int2: obj): [component, int] {
    if ((varplayer_1168 == int0)) {
        if ((varplayer_1169 != int1)) {
            if ((varplayer_4734 == varplayer_7881)) {
                return [comp(1477, 895), enum_getreverseindex(26, 0, int0, int1, 0)];
            };
            return [comp(1371, 28), -1];
        };
        if ((varplayer_1170 != int2)) {
            return [comp(1371, 22), (4 * enum_getreverseindex(33, 0, int1, int2, 0))];
        };
        return [comp(1370, 28), -1];
    };
    return [comp(-1, 65535), -1];
}