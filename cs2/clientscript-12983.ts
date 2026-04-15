//
function script12983(): void {
    var int0 = 1;
    while ((int0 <= 16)) {
        if ((script12972(int0) == 1)) {
            IF_SETHIDE(false, enum_getvalue(0, 9, 11970 as cs2enum, int0));
        };
        int0 = (int0 + 1);
    };
    if ((varbitplayer_34527 == 1)) {
        stack(29132);
        stack(119079006);
        IF_SETGRAPHIC();
    } else {
        stack(29130);
        stack(119079006);
        IF_SETGRAPHIC();
    };
    IF_SETTEXT(`Prestige ${inttostring(MIN(5, (varbitplayer_34526 + 1)), 10)}/5`, comp(1817, 91));
    script12988();
    switch (varbitplayer_34526) {
        case 1:
        case 3: {
            IF_SETHIDE(true, comp(1817, 67));
            IF_SETHIDE(true, comp(1817, 68));
            IF_SETHIDE(true, comp(1817, 73));
            IF_SETHIDE(true, comp(1817, 78));
            IF_SETHIDE(true, comp(1817, 84));
            IF_SETHIDE(false, comp(1817, 66));
            IF_SETHIDE(false, comp(1817, 72));
            IF_SETHIDE(false, comp(1817, 77));
            IF_SETHIDE(false, comp(1817, 82));
            IF_SETHIDE(false, comp(1817, 83));
            break;
        }
        case 0: {
            break;
        }
        case 2: {
            IF_SETMODEL(116233 as model, comp(1817, 67));
            IF_SETMODEL(116234 as model, comp(1817, 73));
            IF_SETMODEL(116235 as model, comp(1817, 78));
            IF_SETMODEL(116236 as model, comp(1817, 84));
            break;
        }
        case 4: {
            IF_SETMODEL(116227 as model, comp(1817, 67));
            IF_SETMODEL(116228 as model, comp(1817, 73));
            IF_SETMODEL(116229 as model, comp(1817, 78));
            IF_SETMODEL(116230 as model, comp(1817, 84));
            break;
        }
    };
    return;
}