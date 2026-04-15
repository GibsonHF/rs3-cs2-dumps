//
function script20205(): void {
    IF_SETTEXT(enum_getvalue(0, 36, 9057 as cs2enum, varbitplayer_58391), comp(1409, 48));
    if ((script20135(varbitplayer_58391) == 1)) {
        IF_SETENABLED(true, comp(1409, 84));
        IF_SETCOLOUR(16777215, comp(1409, 85));
    } else {
        IF_SETENABLED(false, comp(1409, 84));
        IF_SETCOLOUR(3289650, comp(1409, 85));
    };
    stack(18100);
    stack(92340283);
    IF_SETGRAPHIC();
    stack(18100);
    stack(92340286);
    IF_SETGRAPHIC();
    stack(18100);
    stack(92340290);
    IF_SETGRAPHIC();
    stack(18100);
    stack(92340305);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, 92340297);
    IF_SETHIDE(1, 92340299);
    IF_SETHIDE(1, 92340301);
    IF_SETHIDE(1, 92340303);
    switch (varbitplayer_58390) {
        case 1: {
            stack(18102);
            stack(92340283);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 92340297);
            break;
        }
        case 2: {
            stack(18102);
            stack(92340286);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 92340299);
            break;
        }
        case 3: {
            stack(18102);
            stack(92340290);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 92340301);
            break;
        }
        case 4: {
            stack(18102);
            stack(92340305);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 92340303);
            break;
        }
        default: {
            return;
        }
    };
    return;
}