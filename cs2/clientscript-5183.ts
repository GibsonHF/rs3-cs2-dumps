//
function script5183(int0: int, int1: int, int2: int, int3: int): int {
    varplayer_1111 = int0;
    varbitplayer_3020 = MIN(63, MAX(0, (varbitplayer_3020 + int1)));
    varbitplayer_3021 = MIN(7, MAX(0, (varbitplayer_3021 + int2)));
    varbitplayer_3022 = MIN(127, MAX(0, (varbitplayer_3022 + int3)));
    return varplayer_1111;
}