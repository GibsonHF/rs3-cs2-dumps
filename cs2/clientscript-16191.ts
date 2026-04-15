//
function script16191(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: component, int10: component, int11: component): void {
    if (((CC_FINDBYCATEGORY(int0, int1, int2) == 1) && (CC_FINDBYCATEGORY[1](int0, int3, int4) == 1))) {
        if ((CC_GETHEIGHT() > int7)) {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36960 as vorbis, 1, 0, 160, 15, 15));
            IF_SETSCROLLSIZE(0, (IF_GETSCROLLHEIGHT(int0) - (CC_GETHEIGHT() - int7)), int9);
            CC_SETSIZE(0, int7, 1, 0);
            CC_SETTEXT[1]("+");
            CC_SETOP[1](1, "Expand");
            if ((CC_FINDBYCATEGORY[1](int0, int5, int6) == 1)) {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36973 as vorbis, 1, 0, 100, 10, 10));
                CC_SETOP[1](1, "Expand");
            };
        } else {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36957 as vorbis, 1, 0, 160, 15, 15));
            IF_SETSCROLLSIZE(0, (IF_GETSCROLLHEIGHT(int0) + (int8 - CC_GETHEIGHT())), int9);
            CC_SETSIZE(0, int8, 1, 0);
            CC_SETTEXT[1]("-");
            CC_SETOP[1](1, "Collapse");
            if ((CC_FINDBYCATEGORY[1](int0, int5, int6) == 1)) {
                SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36959 as vorbis, 1, 0, 100, 10, 10));
                CC_SETOP[1](1, "Collapse");
            };
        };
    };
    script72(int10, int0, IF_GETSCROLLY(int0));
    if ((IF_GETSCROLLHEIGHT(int0) > (IF_GETHEIGHT(int11) - 30))) {
        IF_SETHIDE(false, int10);
    } else {
        IF_SETHIDE(true, int10);
    };
    return;
}