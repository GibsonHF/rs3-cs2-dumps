//
function script14047(int0: int, int1: unknown_int): void {
    var int2 = 31190;
    if ((int1 == 1)) {
        int2 = 31191;
    };
    var int3 = 0;
    var int4 = -1;
    while ((++int3 <= 5)) {
        switch (int3) {
            case 1: {
                int4 = 93913142;
                break;
            }
            case 2: {
                int4 = 93913141;
                break;
            }
            case 3: {
                int4 = 93913140;
                break;
            }
            case 4: {
                int4 = 93913139;
                break;
            }
            case 5: {
                int4 = 93913138;
                break;
            }
        };
        if ((int0 >= int3)) {
            stack(int2);
            stack(int4);
            IF_SETGRAPHIC();
        } else {
            stack(31192);
            stack(int4);
            IF_SETGRAPHIC();
        };
    };
    return;
}