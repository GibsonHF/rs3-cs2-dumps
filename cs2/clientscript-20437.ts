//
function script20437(int0: dbrow, int1: int): void {
    var string0 = dbrow_getfield(int0, 1404928, 0);
    var string1 = "";
    var int2 = -1 as obj;
    var int3 = -1 as obj;
    [int3, int2, string1] = script20428(int0);
    script20441(int1, string0, 1, string1, int3, int2);
    script20425(int1);
    script20439(int1);
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 180);
    return;
}