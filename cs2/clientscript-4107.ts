//
function script4107(int0: obj, int1: int, long0: long): string {
    var string0 = "";
    if ((item_getparam(int0, 8695) == 1)) {
        string0 = "<col=ff0000> - Untradeable once traded</col>";
    };
    if ((int0 == 995 as obj)) {
        if (branch_gteq_long[18](long0, 10000n)) {
            return `<col=ff981f>${OC_NAME(int0)}</col> x ${script17371(long0)} (${TOSTRING_LOCALISED_LONG(long0, 1)})${string0}`;
        };
        return `<col=ff981f>${OC_NAME(int0)}</col> x ${TOSTRING_LOCALISED_LONG(long0, 1)}${string0}`;
    };
    if ((int1 >= 10000000)) {
        return `<col=ff981f>${OC_NAME(int0)}</col> x ${TOSTRING_LOCALISED((int1 / 1000000), 1)}M (${TOSTRING_LOCALISED(int1, 1)})${string0}`;
    };
    if ((int1 >= 10000)) {
        return `<col=ff981f>${OC_NAME(int0)}</col> x ${TOSTRING_LOCALISED((int1 / 1000), 1)}K (${TOSTRING_LOCALISED(int1, 1)})${string0}`;
    };
    if ((int1 > 1)) {
        return `<col=ff981f>${OC_NAME(int0)}</col> x ${TOSTRING_LOCALISED(int1, 1)}${string0}`;
    };
    return `<col=ff981f>${OC_NAME(int0)}</col>${string0}`;
}