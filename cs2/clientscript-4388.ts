//[clientscript,clan_motif_set]
function script4388(int0: unknown_int, int1: unknown_int): void {
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    if ((unk10986(0) == 1)) {
        [int2, int3] = script4384(varbitplayer_8965, varbitplayer_8966, 0);
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
        stack(int3);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(HSVTORGB(varplayer_2067), int0);
        IF_SETCOLOUR(HSVTORGB(varplayer_2068), int1);
    };
    return;
}