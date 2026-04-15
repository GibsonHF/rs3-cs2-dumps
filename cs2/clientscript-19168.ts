//
function script19168(int0: struct): void {
    var int1 = comp(1288, 43);
    var int2 = comp(1288, 111);
    var int3 = script19150(int0);
    if ((int3 == -1 as dbrow)) {
        script12478(`Null entity dbrow for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}.`);
        return;
    };
    var int4 = -1 as npc;
    var int5 = -1 as seq;
    [int4, int5] = script19151(int3);
    varclient_7803 = int5;
    IF_SETNPCMODEL(int4, int1);
    IF_SETMODELANGLE(script19205(int3), int1);
    IF_SETONTIMER(callback(), comp(1288, 43));
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
                IF_SETTEXTFONT(57 as fontmetrics, comp(1288, 112));
            } else if ((int6 >= 1000)) {
                IF_SETTEXTFONT(58 as fontmetrics, comp(1288, 112));
            } else {
                IF_SETTEXTFONT(58 as fontmetrics, comp(1288, 112));
            };
            break;
        }
        case 50263: {
            int7 = script16927(110, IF_GETHEIGHT(int2), 4, 16355 as cs2enum, 15, 11, string0);
            IF_SETTEXTFONT(int7, int2);
            int8 = MAX(script19155(string0, int7), 110);
            IF_SETSIZE(int8, IF_GETHEIGHT(int2), 0, 0, int2);
            break;
        }
        case 2951: {
            int7 = 57 as fontmetrics;
            IF_SETTEXTFONT(int7, int2);
            break;
        }
    };
    var int9 = -1 as graphic;
    var int10 = -1 as graphic;
    var int11 = -1 as graphic;
    var int12 = -1 as graphic;
    [int9, int10, int11, int12] = script19170(int3);
    script19169(int0);
    IF_SETHIDE(true, comp(1288, 46));
    IF_SETOP(5, "Examine", comp(1288, 44));
    IF_SETONOP(callback(script19188), comp(1288, 44));
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
        unk11087(int13, 1000, 200);
    };
    return;
}