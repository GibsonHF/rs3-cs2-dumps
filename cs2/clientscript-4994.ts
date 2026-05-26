//
function script4994(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    var int17 = -1;
    var int18 = -1;
    var int19 = -1;
    var int20 = -1;
    var int21 = -1;
    var int22 = -1;
    var int23 = -1;
    var int24 = -1;
    var int25 = -1;
    var int26 = -1;
    var int27 = -1;
    if ((CLANPROFILE_FIND() == 1)) {
        int0 = script4948(1);
        int1 = script4948(2);
        int2 = script4948(3);
        int3 = script4948(4);
        int4 = script4948(7);
        int5 = script4948(6);
        int6 = script4948(5);
        int7 = script4959(int0);
        int8 = script4959(int1);
        int9 = script4959(int2);
        int10 = script4959(int3);
        int11 = script4959(int4);
        int12 = script4959(int5);
        int13 = script4959(int6);
        int14 = script4961(int0, 3);
        int15 = script4961(int1, 3);
        int16 = script4961(int2, 3);
        int17 = script4961(int3, 3);
        int18 = script4961(int4, 3);
        int19 = script4961(int5, 3);
        int20 = script4961(int6, 3);
        int21 = script4953(int14);
        int22 = script4953(int15);
        int23 = script4953(int16);
        int24 = script4953(int17);
        int25 = script4953(int18);
        int26 = script4953(int19);
        int27 = script4953(int20);
        IF_SETTEXT(`Tier ${inttostring(varbitclan_6507, 10)}`, comp(1261, 262));
        IF_SETTEXT(`Tier ${inttostring(varbitclan_6508, 10)}`, comp(1261, 271));
        IF_SETTEXT(`Tier ${inttostring(varbitclan_6509, 10)}`, comp(1261, 280));
        IF_SETTEXT(`Tier ${inttostring(int7, 10)}`, comp(1261, 289));
        IF_SETTEXT(`Tier ${inttostring(int8, 10)}`, comp(1261, 298));
        IF_SETTEXT(`Tier ${inttostring(int9, 10)}`, comp(1261, 307));
        IF_SETTEXT(`Tier ${inttostring(int10, 10)}`, comp(1261, 316));
        IF_SETTEXT(`Tier ${inttostring(int11, 10)}`, comp(1261, 334));
        IF_SETTEXT(`Tier ${inttostring(int12, 10)}`, comp(1261, 325));
        IF_SETTEXT(`Tier ${inttostring(int13, 10)}`, comp(1261, 343));
        if ((int7 == 0)) {
            if ((int21 > 0)) {
                IF_SETTEXT("Building", comp(1261, 289));
            } else {
                IF_SETTEXT("Buy", comp(1261, 289));
            };
        };
        if ((int8 == 0)) {
            if ((int22 > 0)) {
                IF_SETTEXT("Building", comp(1261, 298));
            } else {
                IF_SETTEXT("Buy", comp(1261, 298));
            };
        };
        if ((int9 == 0)) {
            if ((int23 > 0)) {
                IF_SETTEXT("Building", comp(1261, 307));
            } else {
                IF_SETTEXT("Buy", comp(1261, 307));
            };
        };
        if ((int10 == 0)) {
            if ((int24 > 0)) {
                IF_SETTEXT("Building", comp(1261, 316));
            } else {
                IF_SETTEXT("Buy", comp(1261, 316));
            };
        };
        if ((int11 == 0)) {
            if ((int25 > 0)) {
                IF_SETTEXT("Building", comp(1261, 334));
            } else {
                IF_SETTEXT("Buy", comp(1261, 334));
            };
        };
        if ((int12 == 0)) {
            if ((int26 > 0)) {
                IF_SETTEXT("Building", comp(1261, 325));
            } else {
                IF_SETTEXT("Buy", comp(1261, 325));
            };
        };
        if ((int13 == 0)) {
            if ((int27 > 0)) {
                IF_SETTEXT("Building", comp(1261, 343));
            } else {
                IF_SETTEXT("Buy", comp(1261, 343));
            };
        };
    };
    return;
}