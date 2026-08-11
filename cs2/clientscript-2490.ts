//[proc,mob_locator_resource_setup]
function script2490(): void {
    if ((varclient_826 < 0)) {
        varclient_826 = 0;
    };
    if ((varclient_827 < 0)) {
        varclient_827 = 1;
    };
    IF_SETTEXT(`Charges left: ${inttostring(varclient_826, 10)}`, comp(844, 50));  // mob_locator:charges
    IF_SETOBJECT_NONUM(436 as obj, 1, comp(844, 28));  // mob_locator:ore1
    IF_SETOBJECT_NONUM(438 as obj, 1, comp(844, 29));  // mob_locator:ore2
    IF_SETOBJECT_NONUM(440 as obj, 1, comp(844, 30));  // mob_locator:ore3
    if ((varclient_827 < 2)) {
        IF_SETCOLOUR(4210752, comp(844, 31));  // mob_locator:ore4
        IF_SETCOLOUR(4210752, comp(844, 32));  // mob_locator:ore5
    } else {
        IF_SETCOLOUR(16777215, comp(844, 31));  // mob_locator:ore4
        IF_SETCOLOUR(16777215, comp(844, 32));  // mob_locator:ore5
    };
    IF_SETOBJECT_NONUM(442 as obj, 1, comp(844, 31));  // mob_locator:ore4
    IF_SETOBJECT_NONUM(434 as obj, 1, comp(844, 32));  // mob_locator:ore5
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 33));  // mob_locator:ore6
        IF_SETCOLOUR(4210752, comp(844, 34));  // mob_locator:ore7
    } else {
        IF_SETCOLOUR(16777215, comp(844, 33));  // mob_locator:ore6
        IF_SETCOLOUR(16777215, comp(844, 34));  // mob_locator:ore7
    };
    IF_SETOBJECT_NONUM(444 as obj, 1, comp(844, 33));  // mob_locator:ore6
    IF_SETOBJECT_NONUM(447 as obj, 1, comp(844, 34));  // mob_locator:ore7
    if ((varclient_827 < 4)) {
        IF_SETCOLOUR(4210752, comp(844, 35));  // mob_locator:ore8
        IF_SETCOLOUR(4210752, comp(844, 36));  // mob_locator:ore9
    } else {
        IF_SETCOLOUR(16777215, comp(844, 35));  // mob_locator:ore8
        IF_SETCOLOUR(16777215, comp(844, 36));  // mob_locator:ore9
    };
    IF_SETOBJECT_NONUM(449 as obj, 1, comp(844, 35));  // mob_locator:ore8
    IF_SETOBJECT_NONUM(451 as obj, 1, comp(844, 36));  // mob_locator:ore9
    IF_SETTEXT(OC_NAME(436 as obj), comp(844, 37));  // mob_locator:oretext1
    IF_SETTEXT(OC_NAME(438 as obj), comp(844, 38));  // mob_locator:oretext2
    IF_SETTEXT(OC_NAME(440 as obj), comp(844, 39));  // mob_locator:oretext3
    if ((varclient_827 < 2)) {
        IF_SETTEXT(`${OC_NAME(442 as obj)} (locked)`, comp(844, 40));  // mob_locator:oretext4
        IF_SETTEXT(`${OC_NAME(434 as obj)} (locked)`, comp(844, 41));  // mob_locator:oretext5
    } else {
        IF_SETTEXT(OC_NAME(442 as obj), comp(844, 40));  // mob_locator:oretext4
        IF_SETTEXT(OC_NAME(434 as obj), comp(844, 41));  // mob_locator:oretext5
    };
    if ((varclient_827 < 3)) {
        IF_SETTEXT(`${OC_NAME(444 as obj)} (locked)`, comp(844, 42));  // mob_locator:oretext6
        IF_SETTEXT(`${OC_NAME(447 as obj)} (locked)`, comp(844, 43));  // mob_locator:oretext7
    } else {
        IF_SETTEXT(OC_NAME(444 as obj), comp(844, 42));  // mob_locator:oretext6
        IF_SETTEXT(OC_NAME(447 as obj), comp(844, 43));  // mob_locator:oretext7
    };
    if ((varclient_827 < 4)) {
        IF_SETTEXT(`${OC_NAME(449 as obj)} (locked)`, comp(844, 44));  // mob_locator:oretext8
        IF_SETTEXT(`${OC_NAME(451 as obj)} (locked)`, comp(844, 45));  // mob_locator:oretext9
    } else {
        IF_SETTEXT(OC_NAME(449 as obj), comp(844, 44));  // mob_locator:oretext8
        IF_SETTEXT(OC_NAME(451 as obj), comp(844, 45));  // mob_locator:oretext9
    };
    IF_SETOBJECT_NONUM(1521 as obj, 1, comp(844, 12));  // mob_locator:wood1
    IF_SETOBJECT_NONUM(1519 as obj, 1, comp(844, 13));  // mob_locator:wood2
    if ((varclient_827 < 2)) {
        IF_SETCOLOUR(4210752, comp(844, 14));  // mob_locator:wood3
        IF_SETCOLOUR(4210752, comp(844, 15));  // mob_locator:wood4
    } else {
        IF_SETCOLOUR(16777215, comp(844, 14));  // mob_locator:wood3
        IF_SETCOLOUR(16777215, comp(844, 15));  // mob_locator:wood4
    };
    IF_SETOBJECT_NONUM(1517 as obj, 1, comp(844, 14));  // mob_locator:wood3
    IF_SETOBJECT_NONUM(12581 as obj, 1, comp(844, 15));  // mob_locator:wood4
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 16));  // mob_locator:wood5
    } else {
        IF_SETCOLOUR(16777215, comp(844, 16));  // mob_locator:wood5
    };
    IF_SETOBJECT_NONUM(1515 as obj, 1, comp(844, 16));  // mob_locator:wood5
    if ((varclient_827 < 4)) {
        IF_SETCOLOUR(4210752, comp(844, 17));  // mob_locator:wood6
        IF_SETCOLOUR(4210752, comp(844, 18));  // mob_locator:wood7
    } else {
        IF_SETCOLOUR(16777215, comp(844, 17));  // mob_locator:wood6
        IF_SETCOLOUR(16777215, comp(844, 18));  // mob_locator:wood7
    };
    IF_SETOBJECT_NONUM(1513 as obj, 1, comp(844, 17));  // mob_locator:wood6
    IF_SETOBJECT_NONUM(29556 as obj, 1, comp(844, 18));  // mob_locator:wood7
    IF_SETTEXT(OC_NAME(1521 as obj), comp(844, 20));  // mob_locator:woodtext1
    IF_SETTEXT(OC_NAME(1519 as obj), comp(844, 21));  // mob_locator:woodtext2
    if ((varclient_827 < 2)) {
        IF_SETTEXT(`${OC_NAME(1517 as obj)} (locked)`, comp(844, 22));  // mob_locator:woodtext3
        IF_SETTEXT("Special logs (locked)", comp(844, 23));  // mob_locator:woodtext4
    } else {
        IF_SETTEXT(OC_NAME(1517 as obj), comp(844, 22));  // mob_locator:woodtext3
        IF_SETTEXT("Special logs", comp(844, 23));  // mob_locator:woodtext4
    };
    if ((varclient_827 < 3)) {
        IF_SETTEXT(`${OC_NAME(1515 as obj)} (locked)`, comp(844, 24));  // mob_locator:woodtext5
    } else {
        IF_SETTEXT(OC_NAME(1515 as obj), comp(844, 24));  // mob_locator:woodtext5
    };
    if ((varclient_827 < 4)) {
        IF_SETTEXT(`${OC_NAME(1513 as obj)} (locked)`, comp(844, 25));  // mob_locator:woodtext6
        IF_SETTEXT(`${OC_NAME(29556 as obj)} (locked)`, comp(844, 26));  // mob_locator:woodtext7
    } else {
        IF_SETTEXT(OC_NAME(1513 as obj), comp(844, 25));  // mob_locator:woodtext6
        IF_SETTEXT(OC_NAME(29556 as obj), comp(844, 26));  // mob_locator:woodtext7
    };
    IF_SETOBJECT_NONUM(317 as obj, 1, comp(844, 8));  // mob_locator:fish1
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 10));  // mob_locator:fish2
    } else {
        IF_SETCOLOUR(16777215, comp(844, 10));  // mob_locator:fish2
    };
    IF_SETOBJECT_NONUM(377 as obj, 1, comp(844, 10));  // mob_locator:fish2
    IF_SETTEXT("Fish 1", comp(844, 9));  // mob_locator:fishtext1
    if ((varclient_827 < 3)) {
        IF_SETTEXT("Fish 2 (locked)", comp(844, 11));  // mob_locator:fishtext2
    } else {
        IF_SETTEXT("Fish 2", comp(844, 11));  // mob_locator:fishtext2
    };
    IF_SETOBJECT_NONUM(2152 as obj, 1, comp(844, 4));  // mob_locator:herb1
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, comp(844, 6));  // mob_locator:herb2
    } else {
        IF_SETCOLOUR(16777215, comp(844, 6));  // mob_locator:herb2
    };
    IF_SETOBJECT_NONUM(239 as obj, 1, comp(844, 6));  // mob_locator:herb2
    IF_SETTEXT("Herblore<br>secondaries 1", comp(844, 5));  // mob_locator:herbtext1
    if ((varclient_827 < 3)) {
        IF_SETTEXT("Herblore<br>secondaries 2 (locked)", comp(844, 7));  // mob_locator:herbtext2
    } else {
        IF_SETTEXT("Herblore<br>secondaries 2", comp(844, 7));  // mob_locator:herbtext2
    };
    return;
}