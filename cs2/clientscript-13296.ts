//
function script13296(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): string {
    return `Skill: ${inttostring(int0, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int1)}, or ${inttostring(int2, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)}, or ${inttostring(int4, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int5)}`;
}