//
function script20205(): void {
    IF_SETTEXT(enum_getvalue(0, 36, 9057 as cs2enum, varbitplayer_58391), 92340272);
    if ((script20135(varbitplayer_58391) == 1)) {
        IF_SETENABLED(1, 92340308);
        IF_SETCOLOUR(16777215, 92340309);
    } else {
        IF_SETENABLED(0, 92340308);
        IF_SETCOLOUR(3289650, 92340309);
    };
    IF_SETGRAPHIC(18100, 92340283);
    IF_SETGRAPHIC(18100, 92340286);
    IF_SETGRAPHIC(18100, 92340290);
    IF_SETGRAPHIC(18100, 92340305);
    IF_SETHIDE(1, 92340297);
    IF_SETHIDE(1, 92340299);
    IF_SETHIDE(1, 92340301);
    IF_SETHIDE(1, 92340303);
    switch (varbitplayer_58390) {
        case 1: {
            IF_SETGRAPHIC(18102, 92340283);
            IF_SETHIDE(0, 92340297);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(18102, 92340286);
            IF_SETHIDE(0, 92340299);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(18102, 92340290);
            IF_SETHIDE(0, 92340301);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(18102, 92340305);
            IF_SETHIDE(0, 92340303);
            break;
        }
        default: {
            return;
        }
    };
    return;
}