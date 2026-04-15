//
function script13784(): [int, int] {
    if ((varbitplayer_28796 == 10)) {
        return [3, script9170()];
    };
    var int0 = (720 - MODULO(DATE_MINUTES(), 720));
    if ((int0 >= 700)) {
        return [4, (int0 - 700)];
    };
    return [2, int0];
}