//
function script13050(int0: stat, int1: stat): string {
    if (((int0 == -1 as stat) && (int1 == -1 as stat))) {
        return "N/A";
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "N/A";
    var string1 = "N/A";
    if ((int0 != -1 as stat)) {
        if ((int1 != -1 as stat)) {
            return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP + ${enum_getvalue(17, 36, 680 as cs2enum, int1)} XP`;
        };
        return `${enum_getvalue(17, 36, 680 as cs2enum, int0)} XP`;
    };
    if ((int1 != -1 as stat)) {
        return `${enum_getvalue(17, 36, 680 as cs2enum, int1)} XP`;
    };
    return "N/A";
}