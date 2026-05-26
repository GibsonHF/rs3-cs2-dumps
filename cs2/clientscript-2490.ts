//[proc,mob_locator_resource_setup]
function script2490(): void {
    if ((varclient_826 < 0)) {
        varclient_826 = 0;
    };
    if ((varclient_827 < 0)) {
        varclient_827 = 1;
    };
    IF_SETTEXT(`Charges left: ${inttostring(varclient_826, 10)}`, 55312434);
    IF_SETOBJECT_NONUM(436, 1, 55312412);
    IF_SETOBJECT_NONUM(438, 1, 55312413);
    IF_SETOBJECT_NONUM(440, 1, 55312414);
    if ((varclient_827 < 2)) {
        IF_SETCOLOUR(4210752, 55312415);
        IF_SETCOLOUR(4210752, 55312416);
    } else {
        IF_SETCOLOUR(16777215, 55312415);
        IF_SETCOLOUR(16777215, 55312416);
    };
    IF_SETOBJECT_NONUM(442, 1, 55312415);
    IF_SETOBJECT_NONUM(434, 1, 55312416);
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, 55312417);
        IF_SETCOLOUR(4210752, 55312418);
    } else {
        IF_SETCOLOUR(16777215, 55312417);
        IF_SETCOLOUR(16777215, 55312418);
    };
    IF_SETOBJECT_NONUM(444, 1, 55312417);
    IF_SETOBJECT_NONUM(447, 1, 55312418);
    if ((varclient_827 < 4)) {
        IF_SETCOLOUR(4210752, 55312419);
        IF_SETCOLOUR(4210752, 55312420);
    } else {
        IF_SETCOLOUR(16777215, 55312419);
        IF_SETCOLOUR(16777215, 55312420);
    };
    IF_SETOBJECT_NONUM(449, 1, 55312419);
    IF_SETOBJECT_NONUM(451, 1, 55312420);
    IF_SETTEXT(OC_NAME(436), 55312421);
    IF_SETTEXT(OC_NAME(438), 55312422);
    IF_SETTEXT(OC_NAME(440), 55312423);
    if ((varclient_827 < 2)) {
        IF_SETTEXT(`${OC_NAME(442)} (locked)`, 55312424);
        IF_SETTEXT(`${OC_NAME(434)} (locked)`, 55312425);
    } else {
        IF_SETTEXT(OC_NAME(442), 55312424);
        IF_SETTEXT(OC_NAME(434), 55312425);
    };
    if ((varclient_827 < 3)) {
        IF_SETTEXT(`${OC_NAME(444)} (locked)`, 55312426);
        IF_SETTEXT(`${OC_NAME(447)} (locked)`, 55312427);
    } else {
        IF_SETTEXT(OC_NAME(444), 55312426);
        IF_SETTEXT(OC_NAME(447), 55312427);
    };
    if ((varclient_827 < 4)) {
        IF_SETTEXT(`${OC_NAME(449)} (locked)`, 55312428);
        IF_SETTEXT(`${OC_NAME(451)} (locked)`, 55312429);
    } else {
        IF_SETTEXT(OC_NAME(449), 55312428);
        IF_SETTEXT(OC_NAME(451), 55312429);
    };
    IF_SETOBJECT_NONUM(1521, 1, 55312396);
    IF_SETOBJECT_NONUM(1519, 1, 55312397);
    if ((varclient_827 < 2)) {
        IF_SETCOLOUR(4210752, 55312398);
        IF_SETCOLOUR(4210752, 55312399);
    } else {
        IF_SETCOLOUR(16777215, 55312398);
        IF_SETCOLOUR(16777215, 55312399);
    };
    IF_SETOBJECT_NONUM(1517, 1, 55312398);
    IF_SETOBJECT_NONUM(12581, 1, 55312399);
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, 55312400);
    } else {
        IF_SETCOLOUR(16777215, 55312400);
    };
    IF_SETOBJECT_NONUM(1515, 1, 55312400);
    if ((varclient_827 < 4)) {
        IF_SETCOLOUR(4210752, 55312401);
        IF_SETCOLOUR(4210752, 55312402);
    } else {
        IF_SETCOLOUR(16777215, 55312401);
        IF_SETCOLOUR(16777215, 55312402);
    };
    IF_SETOBJECT_NONUM(1513, 1, 55312401);
    IF_SETOBJECT_NONUM(29556, 1, 55312402);
    IF_SETTEXT(OC_NAME(1521), 55312404);
    IF_SETTEXT(OC_NAME(1519), 55312405);
    if ((varclient_827 < 2)) {
        IF_SETTEXT(`${OC_NAME(1517)} (locked)`, 55312406);
        IF_SETTEXT("Special logs (locked)", 55312407);
    } else {
        IF_SETTEXT(OC_NAME(1517), 55312406);
        IF_SETTEXT("Special logs", 55312407);
    };
    if ((varclient_827 < 3)) {
        IF_SETTEXT(`${OC_NAME(1515)} (locked)`, 55312408);
    } else {
        IF_SETTEXT(OC_NAME(1515), 55312408);
    };
    if ((varclient_827 < 4)) {
        IF_SETTEXT(`${OC_NAME(1513)} (locked)`, 55312409);
        IF_SETTEXT(`${OC_NAME(29556)} (locked)`, 55312410);
    } else {
        IF_SETTEXT(OC_NAME(1513), 55312409);
        IF_SETTEXT(OC_NAME(29556), 55312410);
    };
    IF_SETOBJECT_NONUM(317, 1, 55312392);
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, 55312394);
    } else {
        IF_SETCOLOUR(16777215, 55312394);
    };
    IF_SETOBJECT_NONUM(377, 1, 55312394);
    IF_SETTEXT("Fish 1", 55312393);
    if ((varclient_827 < 3)) {
        IF_SETTEXT("Fish 2 (locked)", 55312395);
    } else {
        IF_SETTEXT("Fish 2", 55312395);
    };
    IF_SETOBJECT_NONUM(2152, 1, 55312388);
    if ((varclient_827 < 3)) {
        IF_SETCOLOUR(4210752, 55312390);
    } else {
        IF_SETCOLOUR(16777215, 55312390);
    };
    IF_SETOBJECT_NONUM(239, 1, 55312390);
    IF_SETTEXT("Herblore<br>secondaries 1", 55312389);
    if ((varclient_827 < 3)) {
        IF_SETTEXT("Herblore<br>secondaries 2 (locked)", 55312391);
    } else {
        IF_SETTEXT("Herblore<br>secondaries 2", 55312391);
    };
    return;
}