//
function script20436(int0: dbrow, string0: string): [boolean, boolean, string] {
    var int1 = dbrow_getfield(int0, 1404944, 0);
    var int2 = dbrow_getfield(int0, 1404960, 0);
    var int3 = WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 1404976, 0));
    var string1 = OC_NAME(enum_getvalue(17, 33, 14603 as cs2enum, int1));
    if ((script20430() == 1)) {
        string1 = OC_NAME(enum_getvalue(17, 33, 14604 as cs2enum, int1));
    };
    var int4 = WORLDMAP_GETDISPLAYCOORD(dbrow_getfield(int0, 1404992, 0));
    var string2 = OC_NAME(enum_getvalue(0, 33, 14624 as cs2enum, int2));
    var int5 = enum_getvalue(17, 0, 10865 as cs2enum, int1);
    var string3 = "virtual level 120";
    var int6 = script20429(int1);
    var int7 = script20447();
    if ((MAP_MEMBERS() == 0)) {
        return [false, true, "You must be on a members' world to unlock this cape."];
    };
    if ((script20449() == 1)) {
        if (((((int3 == 1) && (int4 == 0)) && (int6 == 1)) && (script20431(int2) == 1))) {
            return [true, false, `As you have already earned your ${string1} this year, you can now earn your ${string2}!`];
        };
        return [false, true, "You have already focussed on four skills this year."];
    };
    if (((int3 == 1) && (int4 == 1))) {
        return [false, true, `You have already unlocked the ${string1} and ${string2}.`];
    };
    if ((STAT_BASE_ACTUAL(int1) < 99)) {
        return [false, true, `You need to have achieved level 99 ${string0} to unlock the ${string1}.`];
    };
    if (((int6 == 0) && (int3 == 1))) {
        if ((int5 == 120)) {
            string3 = "level 120";
        };
        return [false, true, `You have already unlocked the ${string1}. You need to have achieved ${string3} ${string0} to unlock the ${string2}.`];
    };
    if ((int7 == 1)) {
        return [false, true, "You have earned all the capes you can this year."];
    };
    return [true, false, ""];
}