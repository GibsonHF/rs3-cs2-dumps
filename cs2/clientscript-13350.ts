//
function script13350(): struct {
    if (((DATE_RUNEDAY() >= 5563) && (DATE_RUNEDAY() < 5591))) {
        if ((script2193(355 as quest) != 2)) {
            return 1329 as struct;
        };
        if ((script2193(356 as quest) != 2)) {
            return 1331 as struct;
        };
    };
    return -1 as struct;
}