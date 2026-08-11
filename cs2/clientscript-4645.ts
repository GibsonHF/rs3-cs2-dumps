//
function script4645(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script4644(int0);
    switch (int0) {
        case 1: {
            int1 = comp(153, 16);  // fremsaga_storyselect:signature_storytype
            int2 = comp(153, 17);  // fremsaga_storyselect:signature_abridged
            break;
        }
        case 2: {
            int1 = comp(153, 20);  // fremsaga_storyselect:vengeance_storytype
            int2 = comp(153, 21);  // fremsaga_storyselect:vengeance_abridged
            break;
        }
        case 4: {
            int1 = comp(153, 24);  // fremsaga_storyselect:thok_storytype
            int2 = comp(153, 25);  // fremsaga_storyselect:thok_abridged
            break;
        }
        case 3: {
            int1 = comp(153, 34);  // fremsaga_storyselect:bilrach_storytype
            int2 = comp(153, 35);  // fremsaga_storyselect:bilrach_abridged
            break;
        }
        case 6: {
            int1 = comp(153, 30);  // fremsaga_storyselect:thok2_storytype
            int2 = comp(153, 31);  // fremsaga_storyselect:thok2_abridged
            break;
        }
        default: {
            return;
        }
    };
    if ((script4643(int0) == 1)) {
        if ((int3 == 1)) {
            IF_SETGRAPHIC(6272 as graphic, int1);
            IF_SETGRAPHIC(6275 as graphic, int2);
            IF_SETHIDE(false, int2);
            if ((int4 == 1)) {
                IF_SETGRAPHIC(6274 as graphic, int1);
            };
        };
    } else if ((int3 == 1)) {
        IF_SETGRAPHIC(6275 as graphic, int1);
    } else {
        IF_SETGRAPHIC(6273 as graphic, int1);
    };
    IF_SETHIDE(false, int1);
    return;
}