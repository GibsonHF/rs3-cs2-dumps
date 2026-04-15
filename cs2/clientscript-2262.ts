//[proc,rand_buyprice]
function script2262(int0: obj): int {
    var int1 = SCALE(script17369(int0), 100, item_getparam(int0, 1046));
    if (((varbitplayer_20536 == 1) && (MAP_MEMBERS() == 1))) {
        return (int1 - (int1 / 10));
    };
    return int1;
}