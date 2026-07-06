//
function script2250(int0: number): number {
    var int1 = 0;
    var int2 = npc_getparam(int0, 1078);
    if ((int2 == -1 as var_reference)) {
        unk11016("Invalid $person reached in quest_wendle_secrets_part_2_puzzle_activity_getter");
        return 0;
    };
    var int3 = WORLDMAP_GETDISPLAYCOORD(int2);
    while ((int1 <= 5)) {
        if ((TESTBIT(int3, int1) == 1)) {
            return int1;
        };
        int1 = (int1 + 1);
    };
    if (((int1 < 0) || (int1 > 6))) {
        unk11016("Invalid $activity_index reached in quest_wendle_secrets_part_2_puzzle_activity_getter");
    };
    return 0;
}