//
function script7536(int0: number, int1: number, int2: number, int3: number): void {
    if (((int2 == -1) || (int3 == -1))) {
        return;
    };
    SOUND_VORBIS_VOLUME(6185, 1, 0, 200);
    var int4 = (ENUM_GETOUTPUTCOUNT(int2) - 1);
    IF_SETOBJECT_NONUM(struct_getparam(int3, 3252), 1, 91357192);
    var string0 = `<col=ffffff>${inttostring(struct_getparam(int3, 3249), 10)} x ${enum_getvalue(0, 36, 1563 as cs2enum, struct_getparam(int3, 3248))}</col><br>`;
    var string1 = `<br><br>You need to carry the scroll to make progress on the contract. Kills that are counted towards this contract cannot also count towards a Slayer assignment.<br><br>You will receive Slayer XP for each contract kill: <col=ffffff>${inttostring(20, 10)}%</col> of the amount you'd have received on a Slayer assignment.`;
    script7538(string0, string1, int3, int1);
    IF_SETONSTATTRANSMIT(callback(script7537, string0, string1, int3, int1, 18, 1), 91357190);
    IF_SETHIDE(0, 91357188);
    return;
}