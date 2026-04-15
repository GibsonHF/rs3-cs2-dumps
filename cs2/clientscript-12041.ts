//
function script12041(int0: stat): unknown_int {
    var int1 = script12039(int0);
    if ((int1 == -1 as struct)) {
        return 1;
    };
    if (((struct_getparam(int1, 5510) != -1 as stat) && (STAT_BASE_ACTUAL(struct_getparam(int1, 5510)) < struct_getparam(int1, 5511)))) {
        return 0;
    };
    if (((struct_getparam(int1, 5512) != -1 as stat) && (STAT_BASE_ACTUAL(struct_getparam(int1, 5512)) < struct_getparam(int1, 5513)))) {
        return 0;
    };
    if (((struct_getparam(int1, 5514) != -1 as stat) && (STAT_BASE_ACTUAL(struct_getparam(int1, 5514)) < struct_getparam(int1, 5515)))) {
        return 0;
    };
    return 1;
}