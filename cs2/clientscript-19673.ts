//
function script19673(): unknown_int {
    var int0 = -1 as obj;
    var int1 = 1;
    [int0, int1] = script19671(varplayer_3079);
    var int2 = DATE_MINUTES_FROMRUNEDAY((varplayer_3079 + 1));
    var int3 = MAX(0, (int2 - DATE_MINUTES()));
    if (((int3 == 0) && (int1 == 1))) {
        script10943("Please logout and back in to view probabilities.", comp(1253, 66));
        return 0;
    };
    return 1;
}