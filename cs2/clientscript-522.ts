//[clientscript,assist_skill_update]
function script522(int0: component, int1: stat): void {
    var int2 = STAT_VISIBLE_XP(int1);
    var int3 = STAT_VISIBLE_XP(int1);
    int2 = script523(int1);
    var int4 = (int3 - int2);
    IF_SETTEXT(inttostring(int4, 10), int0);
    return;
}