//
function script3395(): void {
    var int0 = script15513();
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = -1;
    var int6 = varplayer_7102;
    if ((varplayer_7102 > 0)) {
        int1 = 1;
    };
    if ((script15513() == 52664 as struct)) {
        int1 = 0;
    };
    if ((varplayer_9853 != -1 as obj)) {
        int4 = varplayer_9853;
        int5 = varplayer_9854;
        if ((struct_getparam(int0, 8340) == true)) {
            stack(IF_GETGRAPHIC(comp(1253, 258)));
            stack(82116920);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 82116920);
        } else {
            IF_SETHIDE(true, comp(1253, 312));
        };
        IF_SETPOSITION(0, 25, 1, 0, comp(1253, 312));
        IF_SETPOSITION(0, 52, 1, 0, comp(1253, 313));
        IF_SETSIZE(87, 87, 0, 0, comp(1253, 312));
        int2 = 1;
    } else if ((varplayer_10323 != -1 as obj)) {
        int4 = varplayer_10323;
        int5 = varplayer_10324;
        stack(script8948(varbitplayer_29984));
        stack(82116920);
        IF_SETGRAPHIC();
        IF_SETSIZE(82, 100, 0, 0, 82116920);
        IF_SETPOSITION(0, 0, 1, 1, 82116920);
        IF_SETPOSITION(0, 0, 1, 1, 82116921);
        IF_SETTEXT("as a bonus reward.", 82116922);
        int2 = 1;
    };
    switch (int0) {
        case 39801: {
            if ((script16422() > 0)) {
                int3 = 1;
            };
            break;
        }
        case 21098: {
            if ((script6735() > 0)) {
                int3 = 1;
            };
            break;
        }
        case 51131: {
            if ((script19753() > 0)) {
                int3 = 1;
            };
            break;
        }
    };
    var int7 = script13749();
    if ((int1 == 1)) {
        stack(script14484(varplayer_7101));
        stack(82116911);
        IF_SETGRAPHIC();
        IF_SETTEXT(OC_NAME(varplayer_7101), 82116913);
        IF_SETTEXT(`to spend in the : ${script14481(varplayer_7101)}.`, 82116914);
        IF_SETTEXT(`+${inttostring(int6, 10)}`, 82116912);
        IF_SETHIDE(0, 82116906);
        if ((int2 == 0)) {
            IF_SETPOSITION(IF_GETX(comp(1253, 298)), 2, 0, 1, comp(1253, 298));
        } else if ((int7 == false)) {
            IF_SETPOSITION(IF_GETX(comp(1253, 298)), 113, 0, 0, comp(1253, 298));
        } else {
            IF_SETPOSITION(IF_GETX(comp(1253, 298)), -88, 0, 1, comp(1253, 298));
        };
    } else {
        IF_SETHIDE(true, comp(1253, 298));
    };
    var int8 = 0;
    if ((int2 == 1)) {
        IF_SETHIDE(false, comp(1253, 307));
        int8 = script17187(int4);
        if ((int8 == 0)) {
            IF_SETOBJECT(int4, int5, comp(1253, 313));
        };
        script3394(int4, comp(1253, 313));
        if ((int1 == 1)) {
            if ((int7 == false)) {
                IF_SETPOSITION(IF_GETX(comp(1253, 307)), 93, 0, 1, comp(1253, 307));
            } else {
                IF_SETPOSITION(IF_GETX(comp(1253, 307)), 90, 0, 1, comp(1253, 307));
            };
        } else {
            IF_SETPOSITION(IF_GETX(comp(1253, 307)), 2, 0, 1, comp(1253, 307));
        };
    } else {
        IF_SETHIDE(true, comp(1253, 307));
    };
    if ((int3 == 1)) {
        script6754(int0);
        IF_SETHIDE(false, comp(1253, 315));
    } else {
        IF_SETHIDE(true, comp(1253, 315));
    };
    return;
}