//
function script17069(int0: int, int1: int): void {
    SOUND_VORBIS_VOLUME(52153 as vorbis, 1, 0, 240);
    var int2 = -1 as obj;
    var int3 = 0;
    [int2, int3] = script16481(int0, int1, script10515());
    if ((item_getparam(int2, 5405) != -1 as struct)) {
        script16368(script17036(int0), int1);
    } else {
        script16663(6974 as dbrow, int2, int3);
    };
    return;
}