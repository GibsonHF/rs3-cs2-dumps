//
function script19675(): string {
    var int0 = 5;
    var int1 = 3;
    var int2 = 1;
    var int3 = 10;
    if ((STAT_BASE(8 as stat) >= struct_getparam(28968, 2212))) {
        int0 = (int0 + 1);
        int1 = (int1 + 1);
        int2 = (int2 + 1);
        int3 = (int3 + 1);
    };
    return `- ${inttostring(int0, 10)}% XP when a log is obtained (for only 1 of the logs if multiple are obtained).<br>- ${inttostring(int1, 10)}% chance to obtain Bird's Nests.<br>- ${inttostring(int2, 10)}% chance to obtain Enchanted Bird's Nests.<br>- ${inttostring(int3, 10)}% chance to perform a 'Perfect Cut'.`;
}