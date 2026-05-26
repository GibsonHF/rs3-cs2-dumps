//
function script5548(): void {
    var int0 = -1 as struct;
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = -1;
    var int4 = ENUM_GETOUTPUTCOUNT(5348 as cs2enum);
    while (((++int3 < int4) && (int2 == 0))) {
        int0 = enum_getvalue(0, 73, 5348 as cs2enum, int3);
        int1 = struct_getparam(int0, 6991);
        if (((varplayer_3079 < struct_getparam(int1, 4632)) && (varplayer_3079 >= script766(int1)))) {
            int2 = 1;
        };
    };
    if ((int2 == 0)) {
        return;
    };
    if (((int0 == -1 as struct) || (int1 == -1 as struct))) {
        return;
    };
    IF_SETGRAPHIC(struct_getparam(int0, 6992), comp(1178, 3));
    IF_SETTEXT(struct_getparam(int0, 6993), comp(1178, 8));
    IF_SETTEXT(`Prestige ${inttostring(script5537(int1), 10)}/${inttostring(5, 10)}`, comp(1178, 5));
    script11636(int1);
    IF_SETGRAPHIC(struct_getparam(int0, 6994), comp(1178, 7));
    IF_SETONMOUSEOVER(callback(script44, 77201415, struct_getparam(int0, 6995)), comp(1178, 7));
    IF_SETONMOUSELEAVE(callback(script5549, int1, int0), 77201415);
    script14117(int1, int0);
    IF_SETGRAPHIC(struct_getparam(int0, 6996), 77201430);
    IF_SETGRAPHIC(struct_getparam(int0, 6998), 77201433);
    IF_SETGRAPHIC(struct_getparam(int0, 7000), 77201436);
    IF_SETGRAPHIC(struct_getparam(int0, 7002), 77201439);
    IF_SETONMOUSEOVER(callback(script44, 77201430, struct_getparam(int0, 6997)), 77201430);
    IF_SETONMOUSEOVER(callback(script44, 77201433, struct_getparam(int0, 6999)), 77201433);
    IF_SETONMOUSEOVER(callback(script44, 77201436, struct_getparam(int0, 7001)), 77201436);
    IF_SETONMOUSEOVER(callback(script44, 77201439, struct_getparam(int0, 7003)), 77201439);
    IF_SETONMOUSELEAVE(callback(script44, 77201430, struct_getparam(int0, 6996)), 77201430);
    IF_SETONMOUSELEAVE(callback(script44, 77201433, struct_getparam(int0, 6998)), 77201433);
    IF_SETONMOUSELEAVE(callback(script44, 77201436, struct_getparam(int0, 7000)), 77201436);
    IF_SETONMOUSELEAVE(callback(script44, 77201439, struct_getparam(int0, 7002)), 77201439);
    IF_SETGRAPHIC(struct_getparam(int0, 7004), 77201443);
    IF_SETGRAPHIC(struct_getparam(int0, 7006), 77201446);
    IF_SETGRAPHIC(struct_getparam(int0, 7008), 77201449);
    IF_SETGRAPHIC(struct_getparam(int0, 7010), 77201452);
    IF_SETONMOUSEOVER(callback(script44, 77201443, struct_getparam(int0, 7005)), 77201443);
    IF_SETONMOUSEOVER(callback(script44, 77201446, struct_getparam(int0, 7007)), 77201446);
    IF_SETONMOUSEOVER(callback(script44, 77201449, struct_getparam(int0, 7009)), 77201449);
    IF_SETONMOUSEOVER(callback(script44, 77201452, struct_getparam(int0, 7011)), 77201452);
    IF_SETONMOUSELEAVE(callback(script44, 77201443, struct_getparam(int0, 7004)), 77201443);
    IF_SETONMOUSELEAVE(callback(script44, 77201446, struct_getparam(int0, 7006)), 77201446);
    IF_SETONMOUSELEAVE(callback(script44, 77201449, struct_getparam(int0, 7008)), 77201449);
    IF_SETONMOUSELEAVE(callback(script44, 77201452, struct_getparam(int0, 7010)), 77201452);
    IF_SETGRAPHIC(struct_getparam(int0, 7012), 77201456);
    IF_SETGRAPHIC(struct_getparam(int0, 7014), 77201459);
    IF_SETGRAPHIC(struct_getparam(int0, 7016), 77201462);
    IF_SETGRAPHIC(struct_getparam(int0, 7018), 77201465);
    IF_SETONMOUSEOVER(callback(script44, 77201456, struct_getparam(int0, 7013)), 77201456);
    IF_SETONMOUSEOVER(callback(script44, 77201459, struct_getparam(int0, 7015)), 77201459);
    IF_SETONMOUSEOVER(callback(script44, 77201462, struct_getparam(int0, 7017)), 77201462);
    IF_SETONMOUSEOVER(callback(script44, 77201465, struct_getparam(int0, 7019)), 77201465);
    IF_SETONMOUSELEAVE(callback(script44, 77201456, struct_getparam(int0, 7012)), 77201456);
    IF_SETONMOUSELEAVE(callback(script44, 77201459, struct_getparam(int0, 7014)), 77201459);
    IF_SETONMOUSELEAVE(callback(script44, 77201462, struct_getparam(int0, 7016)), 77201462);
    IF_SETONMOUSELEAVE(callback(script44, 77201465, struct_getparam(int0, 7018)), 77201465);
    IF_SETGRAPHIC(struct_getparam(int0, 7020), 77201469);
    IF_SETGRAPHIC(struct_getparam(int0, 7022), 77201472);
    IF_SETGRAPHIC(struct_getparam(int0, 7024), 77201475);
    IF_SETGRAPHIC(struct_getparam(int0, 7026), 77201478);
    IF_SETONMOUSEOVER(callback(script44, 77201469, struct_getparam(int0, 7021)), 77201469);
    IF_SETONMOUSEOVER(callback(script44, 77201472, struct_getparam(int0, 7023)), 77201472);
    IF_SETONMOUSEOVER(callback(script44, 77201475, struct_getparam(int0, 7025)), 77201475);
    IF_SETONMOUSEOVER(callback(script44, 77201478, struct_getparam(int0, 7027)), 77201478);
    IF_SETONMOUSELEAVE(callback(script44, 77201469, struct_getparam(int0, 7020)), 77201469);
    IF_SETONMOUSELEAVE(callback(script44, 77201472, struct_getparam(int0, 7022)), 77201472);
    IF_SETONMOUSELEAVE(callback(script44, 77201475, struct_getparam(int0, 7024)), 77201475);
    IF_SETONMOUSELEAVE(callback(script44, 77201478, struct_getparam(int0, 7026)), 77201478);
    int4 = ENUM_GETOUTPUTCOUNT(5351);
    int3 = -1;
    var int5 = -1;
    var int6 = struct_getparam(int0, 7028);
    while ((++int3 < int4)) {
        int5 = enum_getvalue(0, 9, 5350 as cs2enum, int3);
        IF_SETGRAPHIC(int6, int5);
        script14119(int1, int3, int5);
    };
    int4 = ENUM_GETOUTPUTCOUNT(5352 as cs2enum);
    int3 = -1;
    var int7 = -1 as graphic;
    while ((++int3 < int4)) {
        if ((int3 <= 3)) {
            int7 = struct_getparam(int0, 7029);
        } else {
            int7 = struct_getparam(int0, 7030);
        };
        IF_SETGRAPHIC(int7, enum_getvalue(0, 9, 5353 as cs2enum, int3));
        int5 = enum_getvalue(0, 9, 5354 as cs2enum, int3);
        IF_SETGRAPHIC(int6, int5);
        script14120(int1, int3, int5);
    };
    script6069(int1, int0, struct_getparam(int0, 7567));
    script14127(int1, int0);
    IF_SETGRAPHIC(struct_getparam(int0, 7031), comp(1178, 127));
    IF_SETONMOUSEOVER(callback(script44, 77201535, struct_getparam(int0, 7032)), comp(1178, 127));
    IF_SETONMOUSELEAVE(callback(script44, 77201535, struct_getparam(int0, 7031)), 77201535);
    IF_SETGRAPHIC(int6, 77201537);
    script14121(int1, 77201537);
    IF_SETTEXT(`Prestige Level - ${inttostring(script5537(int1), 10)}`, 77201543);
    IF_SETTEXT(struct_getparam(int0, 7033), 77201546);
    int4 = ENUM_GETOUTPUTCOUNT(5355);
    int3 = -1;
    while ((++int3 < int4)) {
        IF_SETGRAPHIC(struct_getparam(int0, 7034), enum_getvalue(0, 9, 5356 as cs2enum, int3));
        int5 = enum_getvalue(0, 9, 5357 as cs2enum, int3);
        IF_SETGRAPHIC(int6, int5);
        script14123(int1, int3, int5);
    };
    IF_SETONVARTRANSMIT(callback(script5552, 7870, 1), comp(1178, 133));
    var int8 = struct_getparam(int0, 7080);
    var int9 = struct_getparam(int0, 7122);
    if ((int8 != -1)) {
        IF_SETMODEL(int8, comp(1178, 148));
        IF_SETMODELANGLE(struct_getparam(int0, 7081), struct_getparam(int0, 7082), struct_getparam(int0, 7083), struct_getparam(int0, 7084), struct_getparam(int0, 7085), struct_getparam(int0, 7086), comp(1178, 148));
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7122);
        IF_SETGRAPHIC(int9, comp(1178, 150));
    };
    int8 = struct_getparam(int0, 7087);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 149));
        IF_SETMODELANGLE(struct_getparam(int0, 7088), struct_getparam(int0, 7089), struct_getparam(int0, 7090), struct_getparam(int0, 7091), struct_getparam(int0, 7092), struct_getparam(int0, 7093), comp(1178, 149));
    };
    int8 = struct_getparam(int0, 7094);
    int9 = struct_getparam(int0, 7123);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 156));
        IF_SETMODELANGLE(struct_getparam(int0, 7095), struct_getparam(int0, 7096), struct_getparam(int0, 7097), struct_getparam(int0, 7098), struct_getparam(int0, 7099), struct_getparam(int0, 7100), comp(1178, 156));
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7123);
        IF_SETGRAPHIC(int9, comp(1178, 157));
    };
    int8 = struct_getparam(int0, 7101);
    int9 = struct_getparam(int0, 7124);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 163));
        IF_SETMODELANGLE(struct_getparam(int0, 7102), struct_getparam(int0, 7103), struct_getparam(int0, 7104), struct_getparam(int0, 7105), struct_getparam(int0, 7106), struct_getparam(int0, 7107), comp(1178, 163));
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7124);
        IF_SETGRAPHIC(int9, comp(1178, 164));
    };
    int8 = struct_getparam(int0, 7108);
    int9 = struct_getparam(int0, 7125);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 170));
        IF_SETMODELANGLE(struct_getparam(int0, 7109), struct_getparam(int0, 7110), struct_getparam(int0, 7111), struct_getparam(int0, 7112), struct_getparam(int0, 7113), struct_getparam(int0, 7114), comp(1178, 170));
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7125);
        IF_SETGRAPHIC(int9, comp(1178, 171));
    };
    int8 = struct_getparam(int0, 7115);
    int9 = struct_getparam(int0, 7126);
    if ((int8 != -1 as model)) {
        IF_SETMODEL(int8, comp(1178, 177));
        IF_SETMODELANGLE(struct_getparam(int0, 7116), struct_getparam(int0, 7117), struct_getparam(int0, 7118), struct_getparam(int0, 7119), struct_getparam(int0, 7120), struct_getparam(int0, 7121), comp(1178, 177));
    } else if ((int9 != -1 as graphic)) {
        int9 = struct_getparam(int0, 7126);
        IF_SETGRAPHIC(int9, comp(1178, 178));
    };
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 148));
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 149));
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 156));
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 163));
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 170));
    IF_SETPOSITION(0, 0, 0, 0, comp(1178, 177));
    script6071(int1);
    script14126(int1);
    return;
}