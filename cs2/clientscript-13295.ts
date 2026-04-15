//
function script13295(int0: int, int1: int, int2: int, int3: int): string {
    return `Skill: ${inttostring(int0, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int1)} or ${inttostring(int2, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)}`;
}