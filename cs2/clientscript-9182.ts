//
function script9182(int0: struct): int {
    var int1 = 30;
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    if ((script13356(int0, 1) == 0)) {
        int1 = script9183(int1, struct_getparam(int0, 1268), 0, comp(1344, 61));
    };
    if ((script13356(int0, 2) == 0)) {
        int1 = script9183(int1, struct_getparam(int0, 1268), 1, comp(1344, 63));
    };
    if ((script13356(int0, 3) == 0)) {
        int1 = script9183(int1, struct_getparam(int0, 1268), 2, comp(1344, 64));
    };
    if ((script13356(int0, 4) == 0)) {
        int1 = script9183(int1, struct_getparam(int0, 1268), 3, comp(1344, 65));
    };
    if ((script13356(int0, 5) == 0)) {
        int1 = script9183(int1, struct_getparam(int0, 1268), 4, comp(1344, 66));
    };
    if ((script13356(int0, 6) == 0)) {
        int1 = script9183(int1, struct_getparam(int0, 1268), 5, comp(1344, 67));
    };
    return int1;
}