//[proc,mob_locator_resource_setup]
function script2490(): void {
    if ((varclient_826 < 0)) {
        varclient_826 = 0;
    };
    if ((varclient_827 < 0)) {
        varclient_827 = 1;
    };
    IF_SETTEXT(`Charges left: ${inttostring(varclient_826, 10)}`, comp(844, 50));
    IF_SETOBJECT_NONUM(436 as obj, 1, comp(844, 28));
    IF_SETOBJECT_NONUM(438 as obj, 1, comp(844, 29));
    IF_SETOBJECT_NONUM(440 as obj, 1, comp(844, 30));
    if ((varclient_827 < 2)) {
        IF_SETCOLOUR(4210752, comp(844, 31));
        IF_SETCOLOUR(4210752, comp(844, 32));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 31));
        IF_SETCOLOUR(16777215, comp(844, 32));
    };
    IF_SETOBJECT_NONUM(442 as obj, 1, comp(844, 31));
    IF_SETOBJECT_NONUM(434 as obj, 1, comp(844, 32));
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 33));
        IF_SETCOLOUR(4210752, comp(844, 34));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 33));
        IF_SETCOLOUR(16777215, comp(844, 34));
    };
    IF_SETOBJECT_NONUM(444 as obj, 1, comp(844, 33));
    IF_SETOBJECT_NONUM(447 as obj, 1, comp(844, 34));
    if ((varclient_827 < 4)) {
        IF_SETCOLOUR(4210752, comp(844, 35));
        IF_SETCOLOUR(4210752, comp(844, 36));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 35));
        IF_SETCOLOUR(16777215, comp(844, 36));
    };
    IF_SETOBJECT_NONUM(449 as obj, 1, comp(844, 35));
    IF_SETOBJECT_NONUM(451 as obj, 1, comp(844, 36));
    IF_SETTEXT(OC_NAME(436 as obj), comp(844, 37));
    IF_SETTEXT(OC_NAME(438 as obj), comp(844, 38));
    IF_SETTEXT(OC_NAME(440 as obj), comp(844, 39));
    if ((varclient_827 < 2)) {
        IF_SETTEXT(`${OC_NAME(442 as obj)} (locked)`, comp(844, 40));
        IF_SETTEXT(`${OC_NAME(434 as obj)} (locked)`, comp(844, 41));
    } else {
        IF_SETTEXT(OC_NAME(442 as obj), comp(844, 40));
        IF_SETTEXT(OC_NAME(434 as obj), comp(844, 41));
    };
    if ((varclient_827 < 3)) {
        IF_SETTEXT(`${OC_NAME(444 as obj)} (locked)`, comp(844, 42));
        IF_SETTEXT(`${OC_NAME(447 as obj)} (locked)`, comp(844, 43));
    } else {
        IF_SETTEXT(OC_NAME(444 as obj), comp(844, 42));
        IF_SETTEXT(OC_NAME(447 as obj), comp(844, 43));
    };
    if ((varclient_827 < 4)) {
        IF_SETTEXT(`${OC_NAME(449 as obj)} (locked)`, comp(844, 44));
        IF_SETTEXT(`${OC_NAME(451 as obj)} (locked)`, comp(844, 45));
    } else {
        IF_SETTEXT(OC_NAME(449 as obj), comp(844, 44));
        IF_SETTEXT(OC_NAME(451 as obj), comp(844, 45));
    };
    IF_SETOBJECT_NONUM(1521 as obj, 1, comp(844, 12));
    IF_SETOBJECT_NONUM(1519 as obj, 1, comp(844, 13));
    if ((varclient_827 < 2)) {
        IF_SETCOLOUR(4210752, comp(844, 14));
        IF_SETCOLOUR(4210752, comp(844, 15));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 14));
        IF_SETCOLOUR(16777215, comp(844, 15));
    };
    IF_SETOBJECT_NONUM(1517 as obj, 1, comp(844, 14));
    IF_SETOBJECT_NONUM(12581 as obj, 1, comp(844, 15));
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 16));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 16));
    };
    IF_SETOBJECT_NONUM(1515 as obj, 1, comp(844, 16));
    if ((varclient_827 < 4)) {
        IF_SETCOLOUR(4210752, comp(844, 17));
        IF_SETCOLOUR(4210752, comp(844, 18));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 17));
        IF_SETCOLOUR(16777215, comp(844, 18));
    };
    IF_SETOBJECT_NONUM(1513 as obj, 1, comp(844, 17));
    IF_SETOBJECT_NONUM(29556 as obj, 1, comp(844, 18));
    IF_SETTEXT(OC_NAME(1521 as obj), comp(844, 20));
    IF_SETTEXT(OC_NAME(1519 as obj), comp(844, 21));
    if ((varclient_827 < 2)) {
        IF_SETTEXT(`${OC_NAME(1517 as obj)} (locked)`, comp(844, 22));
        IF_SETTEXT("Special logs (locked)", comp(844, 23));
    } else {
        IF_SETTEXT(OC_NAME(1517 as obj), comp(844, 22));
        IF_SETTEXT("Special logs", comp(844, 23));
    };
    if ((varclient_827 < 3)) {
        IF_SETTEXT(`${OC_NAME(1515 as obj)} (locked)`, comp(844, 24));
    } else {
        IF_SETTEXT(OC_NAME(1515 as obj), comp(844, 24));
    };
    if ((varclient_827 < 4)) {
        IF_SETTEXT(`${OC_NAME(1513 as obj)} (locked)`, comp(844, 25));
        IF_SETTEXT(`${OC_NAME(29556 as obj)} (locked)`, comp(844, 26));
    } else {
        IF_SETTEXT(OC_NAME(1513 as obj), comp(844, 25));
        IF_SETTEXT(OC_NAME(29556 as obj), comp(844, 26));
    };
    IF_SETOBJECT_NONUM(317 as obj, 1, comp(844, 8));
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 10));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 10));
    };
    IF_SETOBJECT_NONUM(377 as obj, 1, comp(844, 10));
    IF_SETTEXT("Fish 1", comp(844, 9));
    if ((varclient_827 < 3)) {
        IF_SETTEXT("Fish 2 (locked)", comp(844, 11));
    } else {
        IF_SETTEXT("Fish 2", comp(844, 11));
    };
    IF_SETOBJECT_NONUM(2152 as obj, 1, comp(844, 4));
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 6));
    } else {
        IF_SETCOLOUR(16777215, comp(844, 6));
    };
    IF_SETOBJECT_NONUM(239 as obj, 1, comp(844, 6));
    IF_SETTEXT("Herblore<br>secondaries 1", comp(844, 5));
    if ((varclient_827 < 3)) {
        IF_SETTEXT("Herblore<br>secondaries 2 (locked)", comp(844, 7));
    } else {
        IF_SETTEXT("Herblore<br>secondaries 2", comp(844, 7));
    };
    return;
}