//
function script12861(): void {
    var int0 = 1;
    while ((int0 <= 16)) {
        if ((script166(int0) == 1)) {
            IF_SETHIDE(0, enum_getvalue(0, 9, 11830 as cs2enum, int0));
        };
        int0 = (int0 + 1);
    };
    if ((varbitplayer_34151 == 1)) {
        stack(26651);
        stack(118030430);
        IF_SETGRAPHIC();
    } else {
        stack(26650);
        stack(118030430);
        IF_SETGRAPHIC();
    };
    IF_SETTEXT(`Prestige ${inttostring(MIN(5, (varbitplayer_34150 + 1)), 10)}/5`, 118030427);
    script12866();
    switch (varbitplayer_34150) {
        case 1:
        case 3: {
            IF_SETHIDE(1, comp(1801, 67));
            IF_SETHIDE(1, comp(1801, 68));
            IF_SETHIDE(1, comp(1801, 73));
            IF_SETHIDE(1, comp(1801, 78));
            IF_SETHIDE(1, comp(1801, 84));
            IF_SETHIDE(0, comp(1801, 66));
            IF_SETHIDE(0, comp(1801, 72));
            IF_SETHIDE(0, comp(1801, 77));
            IF_SETHIDE(0, comp(1801, 82));
            IF_SETHIDE(0, comp(1801, 83));
            break;
        }
        case 0: {
            break;
        }
        case 2: {
            IF_SETMODEL(115350, 118030403);
            IF_SETMODEL(115353, 118030404);
            IF_SETMODEL(115359, 118030409);
            IF_SETMODEL(115362, 118030414);
            IF_SETMODEL(115356, 118030420);
            break;
        }
        case 4: {
            IF_SETMODEL(115351, 118030403);
            IF_SETMODEL(115354, 118030404);
            IF_SETMODEL(115360, 118030409);
            IF_SETMODEL(115363, 118030414);
            IF_SETMODEL(115357, 118030420);
            break;
        }
    };
    return;
}