//
function script4679(): void {
    if ((enum_getvalue(0, 0, 3839 as cs2enum, varclient_1535) < 1)) {
        IF_SETHIDE(1, 19791891);
        IF_SETTEXT(`Difficulty: ${inttostring(varclient_1535, 10)}/10`, 19791877);
    } else {
        IF_SETHIDE(0, 19791891);
        IF_SETTEXT(`Difficulty: ${inttostring(varclient_1535, 10)}/10`, 19791877);
    };
    return;
}