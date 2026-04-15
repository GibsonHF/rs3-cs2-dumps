//
function script3386(int0: int, int1: unknown_int): int {
    var int2 = 0;
    if ((int1 == 0)) {
        int2 = (DATE_MINUTES_FROMRUNEDAY(int0) - DATE_MINUTES());
    } else {
        int2 = (DATE_MINUTES_FROMRUNEDAY((int0 + 1)) - DATE_MINUTES());
    };
    return int2;
}