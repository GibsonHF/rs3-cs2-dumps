//
function script2671(): void {
    var int0 = false;
    var int1 = false;
    var int2 = false;
    var int3 = false;
    var int4 = false;
    var int5 = false;
    var int6 = false;
    var int7 = false;
    if ((varplayer_1831 != -1 as obj)) {
        [int0, int1, int2, int3, int4, int5, int6, int7] = script8083(varplayer_1784);
        if ((OC_CATEGORY(varplayer_1831) == 2840)) {
            if ((item_getparam(varplayer_1831, 5048) == 1)) {
                int0 = true;
            } else {
                int0 = false;
            };
            int1 = false;
            int2 = false;
            int3 = true;
            int4 = true;
            if (((item_getparam(varplayer_1831, 5048) == 1) && (varbitplayer_27747 == 1))) {
                int5 = true;
            } else {
                int5 = false;
            };
            int6 = false;
            int7 = true;
        };
        if ((item_getparam(varplayer_1831, 5120) == 0)) {
            int7 = false;
        };
    };
    if (((varbitplayer_6068 == 5) && (int0 == true))) {
        IF_SETHIDE(0, 93716526);
        IF_SETHIDE(1, 93716525);
        IF_SETHIDE(0, 98697243);
        IF_SETHIDE(1, 98697242);
        IF_SETHIDE(0, 126025772);
        IF_SETHIDE(1, 126025771);
    } else {
        IF_SETHIDE(1, 93716526);
        IF_SETHIDE(0, 93716525);
        IF_SETHIDE(1, 98697243);
        IF_SETHIDE(0, 98697242);
        IF_SETHIDE(1, 126025772);
        IF_SETHIDE(0, 126025771);
    };
    if (((varbitplayer_6068 == 2) && (int2 == true))) {
        IF_SETHIDE(0, 93716523);
        IF_SETHIDE(1, 93716513);
        IF_SETHIDE(0, 98697240);
        IF_SETHIDE(1, 98697229);
        IF_SETHIDE(0, 126025769);
        IF_SETHIDE(1, 126025759);
    } else {
        IF_SETHIDE(1, 93716523);
        IF_SETHIDE(0, 93716513);
        IF_SETHIDE(1, 98697240);
        IF_SETHIDE(0, 98697229);
        IF_SETHIDE(1, 126025769);
        IF_SETHIDE(0, 126025759);
    };
    if (((varbitplayer_6068 == 4) && (int3 == true))) {
        IF_SETHIDE(0, 93716530);
        IF_SETHIDE(1, 93716528);
        IF_SETHIDE(0, 98697247);
        IF_SETHIDE(1, 98697245);
        IF_SETHIDE(0, 126025776);
        IF_SETHIDE(1, 126025774);
    } else {
        IF_SETHIDE(1, 93716530);
        IF_SETHIDE(0, 93716528);
        IF_SETHIDE(1, 98697247);
        IF_SETHIDE(0, 98697245);
        IF_SETHIDE(1, 126025776);
        IF_SETHIDE(0, 126025774);
    };
    if (((varbitplayer_6068 == 3) && (int4 == true))) {
        IF_SETHIDE(0, 93716531);
        IF_SETHIDE(1, 93716529);
        IF_SETHIDE(0, 98697248);
        IF_SETHIDE(1, 98697246);
        IF_SETHIDE(0, 126025777);
        IF_SETHIDE(1, 126025775);
        if (((item_getparam(varplayer_1831, 395) > 0) && (item_getparam(varplayer_1831, 5051) == -1 as struct))) {
            IF_SETOP(1, "Pick up", 93716531);
            IF_SETOP(1, "Pick up", 98697248);
            IF_SETOP(1, "Pick up", 126025777);
        } else {
            IF_SETOP(1, "Dismiss", 93716531);
            IF_SETOP(1, "Dismiss", 98697248);
            IF_SETOP(1, "Dismiss", 126025777);
        };
    } else {
        IF_SETHIDE(1, 93716531);
        IF_SETHIDE(0, 93716529);
        IF_SETHIDE(1, 98697248);
        IF_SETHIDE(0, 98697246);
        IF_SETHIDE(1, 126025777);
        IF_SETHIDE(0, 126025775);
    };
    if (((varbitplayer_6068 == 8) && (int5 == true))) {
        IF_SETHIDE(0, 93716520);
        IF_SETHIDE(1, 93716510);
        IF_SETHIDE(0, 98697236);
        IF_SETHIDE(1, 98697226);
        IF_SETHIDE(0, 126025766);
        IF_SETHIDE(1, 126025756);
    } else {
        IF_SETHIDE(1, 93716520);
        IF_SETHIDE(0, 93716510);
        IF_SETHIDE(1, 98697236);
        IF_SETHIDE(0, 98697226);
        IF_SETHIDE(1, 126025766);
        IF_SETHIDE(0, 126025756);
    };
    if (((varbitplayer_6068 == 9) && (int5 == true))) {
        IF_SETHIDE(0, 93716521);
        IF_SETHIDE(1, 93716511);
        IF_SETHIDE(0, 98697237);
        IF_SETHIDE(1, 98697227);
        IF_SETHIDE(0, 126025767);
        IF_SETHIDE(1, 126025757);
    } else {
        IF_SETHIDE(1, 93716521);
        IF_SETHIDE(0, 93716511);
        IF_SETHIDE(1, 98697237);
        IF_SETHIDE(0, 98697227);
        IF_SETHIDE(1, 126025767);
        IF_SETHIDE(0, 126025757);
    };
    if (((varbitplayer_6068 == 7) && (int6 == true))) {
        IF_SETHIDE(0, 93716522);
        IF_SETHIDE(1, 93716512);
        IF_SETHIDE(0, 98697239);
        IF_SETHIDE(1, 98697228);
        IF_SETHIDE(0, 126025768);
        IF_SETHIDE(1, 126025758);
    } else {
        IF_SETHIDE(1, 93716522);
        IF_SETHIDE(0, 93716512);
        IF_SETHIDE(1, 98697239);
        IF_SETHIDE(0, 98697228);
        IF_SETHIDE(1, 126025768);
        IF_SETHIDE(0, 126025758);
    };
    if (((varbitplayer_6068 == 6) && (int7 == true))) {
        IF_SETHIDE(0, 93716524);
        IF_SETHIDE(1, 93716514);
        IF_SETHIDE(0, 98697241);
        IF_SETHIDE(1, 98697230);
        IF_SETHIDE(0, 126025770);
        IF_SETHIDE(1, 126025760);
    } else {
        IF_SETHIDE(1, 93716524);
        IF_SETHIDE(0, 93716514);
        IF_SETHIDE(1, 98697241);
        IF_SETHIDE(0, 98697230);
        IF_SETHIDE(1, 126025770);
        IF_SETHIDE(0, 126025760);
    };
    IF_SETHIDE(0, 93716532);
    IF_SETHIDE(1, 93716534);
    IF_SETHIDE(0, 93716507);
    IF_SETHIDE(0, 98697249);
    IF_SETHIDE(0, 126025778);
    IF_SETHIDE(1, 98697251);
    IF_SETHIDE(1, 126025780);
    IF_SETHIDE(0, 98697222);
    IF_SETHIDE(0, 126025753);
    if ((((varplayer_1831 == 24906 as obj) || (varplayer_1831 == 24907 as obj)) || (varplayer_1831 == 24908 as obj))) {
        IF_SETHIDE(0, 93716508);
        IF_SETHIDE(0, 98697223);
        IF_SETHIDE(0, 126025754);
        IF_SETHIDE(0, 93716530);
        IF_SETHIDE(1, 93716528);
        IF_SETHIDE(1, 93716523);
        IF_SETHIDE(1, 93716513);
        IF_SETHIDE(1, 93716531);
        IF_SETHIDE(0, 93716529);
        IF_SETHIDE(1, 93716520);
        IF_SETHIDE(1, 93716510);
        IF_SETHIDE(1, 93716521);
        IF_SETHIDE(1, 93716511);
        IF_SETHIDE(1, 93716522);
        IF_SETHIDE(1, 93716512);
        IF_SETHIDE(1, 93716524);
        IF_SETHIDE(1, 93716514);
        IF_SETHIDE(1, 93716526);
        IF_SETHIDE(0, 93716525);
        IF_SETHIDE(0, 98697247);
        IF_SETHIDE(1, 98697245);
        IF_SETHIDE(1, 98697240);
        IF_SETHIDE(1, 98697229);
        IF_SETHIDE(1, 98697248);
        IF_SETHIDE(0, 98697246);
        IF_SETHIDE(1, 98697236);
        IF_SETHIDE(1, 98697226);
        IF_SETHIDE(1, 98697237);
        IF_SETHIDE(1, 98697227);
        IF_SETHIDE(1, 98697239);
        IF_SETHIDE(1, 98697228);
        IF_SETHIDE(1, 98697241);
        IF_SETHIDE(1, 98697230);
        IF_SETHIDE(1, 98697243);
        IF_SETHIDE(0, 98697242);
        IF_SETHIDE(0, 126025776);
        IF_SETHIDE(1, 126025774);
        IF_SETHIDE(1, 126025769);
        IF_SETHIDE(1, 126025759);
        IF_SETHIDE(1, 126025777);
        IF_SETHIDE(0, 126025775);
        IF_SETHIDE(1, 126025766);
        IF_SETHIDE(1, 126025756);
        IF_SETHIDE(1, 126025767);
        IF_SETHIDE(1, 126025757);
        IF_SETHIDE(1, 126025768);
        IF_SETHIDE(1, 126025758);
        IF_SETHIDE(1, 126025770);
        IF_SETHIDE(1, 126025760);
        IF_SETHIDE(1, 126025772);
        IF_SETHIDE(0, 126025771);
        IF_SETHIDE(1, 93716533);
        IF_SETHIDE(1, 98697250);
        IF_SETHIDE(1, 126025779);
    } else if ((((((((((((((((((((((((((((((((((((((((((((((((((((((((OC_CATEGORY(varplayer_1831) == 2840) || (varplayer_1831 == 26547 as obj)) || (varplayer_1831 == 26549 as obj)) || (varplayer_1831 == 26550 as obj)) || (varplayer_1831 == 26551 as obj)) || (varplayer_1831 == 26553 as obj)) || (varplayer_1831 == 26554 as obj)) || (varplayer_1831 == 26555 as obj)) || (varplayer_1831 == 26557 as obj)) || (varplayer_1831 == 26558 as obj)) || (varplayer_1831 == 29531 as obj)) || (varplayer_1831 == 27211 as obj)) || (varplayer_1831 == 27213 as obj)) || (varplayer_1831 == 27214 as obj)) || (varplayer_1831 == 28824 as obj)) || (varplayer_1831 == 28826 as obj)) || (varplayer_1831 == 28827 as obj)) || (varplayer_1831 == 28829 as obj)) || (varplayer_1831 == 28831 as obj)) || (varplayer_1831 == 28832 as obj)) || (varplayer_1831 == 30062 as obj)) || (varplayer_1831 == 30065 as obj)) || (varplayer_1831 == 30909 as obj)) || (varplayer_1831 == 31304 as obj)) || (varplayer_1831 == 40181 as obj)) || (varplayer_1831 == 31307 as obj)) || (varplayer_1831 == 30234 as obj)) || (varplayer_1831 == 30364 as obj)) || (varplayer_1831 == 30231 as obj)) || (varplayer_1831 == 30369 as obj)) || (varplayer_1831 == 30366 as obj)) || (varplayer_1831 == 30367 as obj)) || (varplayer_1831 == 30811 as obj)) || (varplayer_1831 == 31025 as obj)) || (varplayer_1831 == 28683 as obj)) || (varplayer_1831 == 31302 as obj)) || (varplayer_1831 == 31659 as obj)) || (varplayer_1831 == 31662 as obj)) || (varplayer_1831 == 31656 as obj)) || (varplayer_1831 == 31957 as obj)) || (varplayer_1831 == 31960 as obj)) || (varplayer_1831 == 31963 as obj)) || (varplayer_1831 == 32148 as obj)) || (varplayer_1831 == 32512 as obj)) || (varplayer_1831 == 32730 as obj)) || (varplayer_1831 == 32613 as obj)) || (varplayer_1831 == 33566 as obj)) || (varplayer_1831 == 33631 as obj)) || (varplayer_1831 == 33643 as obj)) || (varplayer_1831 == 33656 as obj)) || (varplayer_1831 == 34109 as obj)) || (varplayer_1831 == 34196 as obj)) || (varplayer_1831 == 34478 as obj)) || (varplayer_1831 == 34504 as obj)) || (varplayer_1831 == 34753 as obj))) {
        IF_SETHIDE(0, 93716508);
        IF_SETHIDE(0, 98697223);
        IF_SETHIDE(0, 126025754);
        if ((int0 == false)) {
            IF_SETHIDE(1, 93716525);
            IF_SETHIDE(1, 98697242);
            IF_SETHIDE(1, 126025771);
        };
        if ((int1 == false)) {
            IF_SETHIDE(1, 93716515);
            IF_SETHIDE(1, 98697231);
            IF_SETHIDE(1, 126025761);
        };
        if ((int2 == false)) {
            IF_SETHIDE(1, 93716513);
            IF_SETHIDE(1, 98697229);
            IF_SETHIDE(1, 126025759);
        };
        if ((int3 == false)) {
            IF_SETHIDE(1, 93716528);
            IF_SETHIDE(1, 98697245);
            IF_SETHIDE(1, 126025774);
        };
        if ((int4 == false)) {
            IF_SETHIDE(1, 93716529);
            IF_SETHIDE(1, 98697246);
            IF_SETHIDE(1, 126025775);
        };
        if ((int5 == false)) {
            IF_SETHIDE(1, 93716510);
            IF_SETHIDE(1, 98697226);
            IF_SETHIDE(1, 126025756);
            IF_SETHIDE(1, 93716511);
            IF_SETHIDE(1, 98697227);
            IF_SETHIDE(1, 126025757);
        };
        if ((int6 == false)) {
            IF_SETHIDE(1, 93716512);
            IF_SETHIDE(1, 98697228);
            IF_SETHIDE(1, 126025758);
        };
        if ((int7 == false)) {
            IF_SETHIDE(1, 93716514);
            IF_SETHIDE(1, 98697230);
            IF_SETHIDE(1, 126025760);
        };
        IF_SETHIDE(0, 93716507);
        IF_SETHIDE(0, 98697222);
        IF_SETHIDE(0, 126025753);
    } else if (((varplayer_1831 != -1 as obj) && (varplayer_1784 != -1 as npc))) {
        IF_SETHIDE(0, 93716508);
        IF_SETHIDE(0, 98697223);
        IF_SETHIDE(0, 126025754);
        if ((int0 == false)) {
            IF_SETHIDE(1, 93716525);
            IF_SETHIDE(1, 98697242);
            IF_SETHIDE(1, 126025771);
        };
        if ((int1 == false)) {
            IF_SETHIDE(1, 93716515);
            IF_SETHIDE(1, 98697231);
            IF_SETHIDE(1, 126025761);
        };
        if ((int2 == false)) {
            IF_SETHIDE(1, 93716513);
            IF_SETHIDE(1, 98697229);
            IF_SETHIDE(1, 126025759);
        };
        if ((int3 == false)) {
            IF_SETHIDE(1, 93716528);
            IF_SETHIDE(1, 98697245);
            IF_SETHIDE(1, 126025774);
        };
        if ((int4 == false)) {
            IF_SETHIDE(1, 93716529);
            IF_SETHIDE(1, 98697246);
            IF_SETHIDE(1, 126025775);
        };
        if ((int5 == false)) {
            IF_SETHIDE(1, 93716510);
            IF_SETHIDE(1, 98697226);
            IF_SETHIDE(1, 126025756);
            IF_SETHIDE(1, 93716511);
            IF_SETHIDE(1, 98697227);
            IF_SETHIDE(1, 126025757);
        };
        if ((int6 == false)) {
            IF_SETHIDE(1, 93716512);
            IF_SETHIDE(1, 98697228);
            IF_SETHIDE(1, 126025758);
        };
        if ((int7 == false)) {
            IF_SETHIDE(1, 93716514);
            IF_SETHIDE(1, 98697230);
            IF_SETHIDE(1, 126025760);
        };
        IF_SETHIDE(0, 93716507);
        IF_SETHIDE(0, 98697222);
        IF_SETHIDE(0, 126025753);
    } else {
        script8084();
    };
    varclient_6248 = int0;
    varclient_6249 = int1;
    varclient_6250 = int2;
    varclient_6251 = int3;
    varclient_6252 = int4;
    varclient_6253 = int5;
    varclient_6254 = int6;
    varclient_6255 = int7;
    script9286();
    return;
}