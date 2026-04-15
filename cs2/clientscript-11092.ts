//
function script11092(int0: struct, int1: struct, int2: int, int3: int, int4: int): void {
    var int5 = comp(1594, 40);
    var int6 = comp(1594, 43);
    var int7 = comp(1594, 62);
    var string0 = script13337(int1);
    IF_SETTEXT(string0, int5);
    CC_DELETEALL(int6);
    CC_CREATE(int6, 5, 0);
    if ((struct_getparam(int1, 4852) != -1 as graphic)) {
        CC_SETSIZE(MIN(struct_getparam(int1, 4860), 32), MIN(struct_getparam(int1, 4861), 32), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int1, 4852));
        if ((int2 > 1)) {
            IF_SETTEXT(`${string0} X${inttostring(int2, 10)}`, int5);
        };
    } else if ((struct_getparam(int1, 4851) != -1 as obj)) {
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT(script14453(int1, struct_getparam(int1, 4851)), int2);
    };
    CC_SETPOSITION(0, 0, 1, 1);
    SOUND_VORBIS_VOLUME(34371 as vorbis, 1, 0, 150);
    var string1 = `This will cost you: ${script12658(int0, int1, int3, int4, 1)}`;
    if ((struct_getparam(int1, 7140) == 1)) {
        string1 = "You are about to claim this item.";
    } else if ((struct_getparam(int1, 4645) == 1)) {
        string1 = "You are about to unlock this upgrade.";
    };
    var string2 = struct_getparam(int1, 7228);
    if (((script10080(int1) == 1) && (STRING_LENGTH(string2) > 0))) {
        string2 = strconcat("<br>", string2);
        string1 = strconcat(string1, string2);
    };
    IF_SETTEXT(string1, int7);
    SOUND_VORBIS_VOLUME(34371 as vorbis, 1, 0, 150);
    return;
}