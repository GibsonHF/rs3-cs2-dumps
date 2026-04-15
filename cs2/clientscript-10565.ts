//
function script10565(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 32094 as obj), 1), comp(1533, 9));
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 3000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(3000, 1)}</col>`, comp(1533, 10));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(3000, 1), comp(1533, 10));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 3000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(3000, 1)}</col>`, comp(1533, 11));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(3000, 1), comp(1533, 11));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 2000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(2000, 1)}</col>`, comp(1533, 12));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1533, 12));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(1500, 1)}</col>`, comp(1533, 13));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(1500, 1), comp(1533, 13));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(1500, 1)}</col>`, comp(1533, 18));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(1500, 1), comp(1533, 18));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(1000, 1)}</col>`, comp(1533, 14));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1533, 14));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(500, 1)}</col>`, comp(1533, 15));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(500, 1), comp(1533, 15));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(500, 1)}</col>`, comp(1533, 16));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(500, 1), comp(1533, 16));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(500, 1)}</col>`, comp(1533, 17));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(500, 1), comp(1533, 17));
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 100)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(100, 1)}</col>`, comp(1533, 19));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(100, 1), comp(1533, 19));
    };
    script10577();
    IF_SETHIDE(true, comp(1533, 29));
    varbitplayer_24852 = 0;
    return;
}