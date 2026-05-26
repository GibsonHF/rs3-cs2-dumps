//
function script12983(): void {
    var int0 = 1;
    while ((int0 <= 16)) {
        if ((script12972(int0) == 1)) {
            IF_SETHIDE(0, enum_getvalue(0, 9, 11970 as cs2enum, int0));
        };
        int0 = (int0 + 1);
    };
    if ((varbitplayer_34527 == 1)) {
        IF_SETGRAPHIC(29132, 119079006);
    } else {
        IF_SETGRAPHIC(29130, 119079006);
    };
    IF_SETTEXT(`Prestige ${inttostring(MIN(5, (varbitplayer_34526 + 1)), 10)}/5`, 119079003);
    script12988();
    switch (varbitplayer_34526) {
        case 1:
        case 3: {
            IF_SETHIDE(1, comp(1817, 67));
            IF_SETHIDE(1, comp(1817, 68));
            IF_SETHIDE(1, comp(1817, 73));
            IF_SETHIDE(1, comp(1817, 78));
            IF_SETHIDE(1, comp(1817, 84));
            IF_SETHIDE(0, comp(1817, 66));
            IF_SETHIDE(0, comp(1817, 72));
            IF_SETHIDE(0, comp(1817, 77));
            IF_SETHIDE(0, comp(1817, 82));
            IF_SETHIDE(0, comp(1817, 83));
            break;
        }
        case 0: {
            break;
        }
        case 2: {
            IF_SETMODEL(116233, 119078979);
            IF_SETMODEL(116234, 119078985);
            IF_SETMODEL(116235, 119078990);
            IF_SETMODEL(116236, 119078996);
            break;
        }
        case 4: {
            IF_SETMODEL(116227, 119078979);
            IF_SETMODEL(116228, 119078985);
            IF_SETMODEL(116229, 119078990);
            IF_SETMODEL(116230, 119078996);
            break;
        }
    };
    return;
}