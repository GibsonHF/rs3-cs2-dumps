//
function script19168(int0: number): void {
    var int1 = 84410411;
    var int2 = 84410479;
    var int3 = script19150(int0);
    if ((int3 == -1)) {
        script12478(`Null entity dbrow for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}.`);
        return;
    };
    var int4 = -1;
    var int5 = -1 as seq;
    [int4, int5] = script19151(int3);
    varclient_7803 = int5;
    IF_SETNPCMODEL(int4, int1);
    IF_SETMODELANGLE(script19205(int3), int1);
    IF_SETONTIMER(callback(), 84410411);
    IF_SETMODELANIM(int5, int1);
    var string0 = script19154(int3);
    IF_SETTEXT(string0, int2);
    var int6 = script19206(int3);
    IF_SETTEXT(`Level<br>${inttostring(int6, 10)}`, 84410480);
    var int7 = -1;
    var int8 = 0;
    switch (int0) {
        case 32986: {
            if ((int6 >= 10000)) {
                IF_SETTEXTFONT(57, 84410480);
            } else if ((int6 >= 1000)) {
                IF_SETTEXTFONT(58, 84410480);
            } else {
                IF_SETTEXTFONT(58, 84410480);
            };
            break;
        }
        case 50263: {
            int7 = script16927(110, IF_GETHEIGHT(int2), 4, 16355, 15, 11, string0);
            IF_SETTEXTFONT(int7, int2);
            int8 = MAX(script19155(string0, int7), 110);
            IF_SETSIZE(int8, IF_GETHEIGHT(int2), 0, 0, int2);
            break;
        }
        case 2951: {
            int7 = 57;
            IF_SETTEXTFONT(int7, int2);
            break;
        }
    };
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    [int9, int10, int11, int12] = script19170(int3);
    script19169(int0);
    IF_SETHIDE(1, 84410414);
    IF_SETOP(5, "Examine", 84410412);
    IF_SETONOP(callback(script19188), 84410412);
    IF_SETOPBASE(`<col=FFFF00>${script16737(string0)}</col>`, 84410412);
    stack(int9);
    stack(82116613);
    IF_SETGRAPHIC();
    stack(int9);
    stack(84410372);
    IF_SETGRAPHIC();
    stack(int10);
    stack(84410371);
    IF_SETGRAPHIC();
    stack(int11);
    stack(84410447);
    IF_SETGRAPHIC();
    stack(int11);
    stack(84410444);
    IF_SETGRAPHIC();
    stack(int11);
    stack(84410441);
    IF_SETGRAPHIC();
    stack(int12);
    stack(84410401);
    IF_SETGRAPHIC();
    stack(int12);
    stack(84410397);
    IF_SETGRAPHIC();
    stack(int12);
    stack(84410393);
    IF_SETGRAPHIC();
    var int13 = script19207(int3);
    if ((int13 != -1)) {
        unk11086(int13, 1000, 200);
    };
    return;
}