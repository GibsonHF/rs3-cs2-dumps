//
function script12326(int0: component, int1: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((varclient_5156 != 0)) {
        return;
    };
    var int2 = 0;
    if ((IF_FIND(int0) == 1)) {
        if (((cc_getparam(5639) != varbitclient_30621) || (cc_getparam(5640) != varbitclient_30622))) {
            return;
        };
        int2 = cc_getparam(5643);
    };
    var int3 = 0;
    var int4 = 0;
    var string0 = `${enum_getvalue(0, 36, 10039 as cs2enum, varbitclient_30620)}:`;
    var string1 = "";
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTRANS(0);
        int3 = cc_getparam(5946);
        if ((int3 == 2147483647)) {
            string0 = `${string0} Max (`;
            string1 = ")";
        } else if ((int3 == -2147483648)) {
            string0 = `${string0} Min (`;
            string1 = ")";
        };
        int3 = script11853(int3, varbitclient_30620);
        string0 = `${string0} ${script11498(int3, varbitclient_30619, varbitclient_30620, -1)}${string1}`;
        script8803(string0, 250, 0, int0, int1, 27 as fontmetrics, 14931919);
    };
    return;
}