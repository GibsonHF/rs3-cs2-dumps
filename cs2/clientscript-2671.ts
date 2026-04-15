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
        if ((OC_CATEGORY(varplayer_1831) == 2840 as category)) {
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
        IF_SETHIDE(false, comp(1430, 44));
        IF_SETHIDE(true, comp(1430, 43));
        IF_SETHIDE(false, comp(1506, 27));
        IF_SETHIDE(true, comp(1506, 26));
        IF_SETHIDE(false, comp(1923, 44));
        IF_SETHIDE(true, comp(1923, 43));
    } else {
        IF_SETHIDE(true, comp(1430, 44));
        IF_SETHIDE(false, comp(1430, 43));
        IF_SETHIDE(true, comp(1506, 27));
        IF_SETHIDE(false, comp(1506, 26));
        IF_SETHIDE(true, comp(1923, 44));
        IF_SETHIDE(false, comp(1923, 43));
    };
    if (((varbitplayer_6068 == 2) && (int2 == true))) {
        IF_SETHIDE(false, comp(1430, 41));
        IF_SETHIDE(true, comp(1430, 31));
        IF_SETHIDE(false, comp(1506, 24));
        IF_SETHIDE(true, comp(1506, 13));
        IF_SETHIDE(false, comp(1923, 41));
        IF_SETHIDE(true, comp(1923, 31));
    } else {
        IF_SETHIDE(true, comp(1430, 41));
        IF_SETHIDE(false, comp(1430, 31));
        IF_SETHIDE(true, comp(1506, 24));
        IF_SETHIDE(false, comp(1506, 13));
        IF_SETHIDE(true, comp(1923, 41));
        IF_SETHIDE(false, comp(1923, 31));
    };
    if (((varbitplayer_6068 == 4) && (int3 == true))) {
        IF_SETHIDE(false, comp(1430, 48));
        IF_SETHIDE(true, comp(1430, 46));
        IF_SETHIDE(false, comp(1506, 31));
        IF_SETHIDE(true, comp(1506, 29));
        IF_SETHIDE(false, comp(1923, 48));
        IF_SETHIDE(true, comp(1923, 46));
    } else {
        IF_SETHIDE(true, comp(1430, 48));
        IF_SETHIDE(false, comp(1430, 46));
        IF_SETHIDE(true, comp(1506, 31));
        IF_SETHIDE(false, comp(1506, 29));
        IF_SETHIDE(true, comp(1923, 48));
        IF_SETHIDE(false, comp(1923, 46));
    };
    if (((varbitplayer_6068 == 3) && (int4 == true))) {
        IF_SETHIDE(false, comp(1430, 49));
        IF_SETHIDE(true, comp(1430, 47));
        IF_SETHIDE(false, comp(1506, 32));
        IF_SETHIDE(true, comp(1506, 30));
        IF_SETHIDE(false, comp(1923, 49));
        IF_SETHIDE(true, comp(1923, 47));
        if (((item_getparam(varplayer_1831, 395) > 0) && (item_getparam(varplayer_1831, 5051) == -1 as struct))) {
            IF_SETOP(1, "Pick up", comp(1430, 49));
            IF_SETOP(1, "Pick up", comp(1506, 32));
            IF_SETOP(1, "Pick up", comp(1923, 49));
        } else {
            IF_SETOP(1, "Dismiss", comp(1430, 49));
            IF_SETOP(1, "Dismiss", comp(1506, 32));
            IF_SETOP(1, "Dismiss", comp(1923, 49));
        };
    } else {
        IF_SETHIDE(true, comp(1430, 49));
        IF_SETHIDE(false, comp(1430, 47));
        IF_SETHIDE(true, comp(1506, 32));
        IF_SETHIDE(false, comp(1506, 30));
        IF_SETHIDE(true, comp(1923, 49));
        IF_SETHIDE(false, comp(1923, 47));
    };
    if (((varbitplayer_6068 == 8) && (int5 == true))) {
        IF_SETHIDE(false, comp(1430, 38));
        IF_SETHIDE(true, comp(1430, 28));
        IF_SETHIDE(false, comp(1506, 20));
        IF_SETHIDE(true, comp(1506, 10));
        IF_SETHIDE(false, comp(1923, 38));
        IF_SETHIDE(true, comp(1923, 28));
    } else {
        IF_SETHIDE(true, comp(1430, 38));
        IF_SETHIDE(false, comp(1430, 28));
        IF_SETHIDE(true, comp(1506, 20));
        IF_SETHIDE(false, comp(1506, 10));
        IF_SETHIDE(true, comp(1923, 38));
        IF_SETHIDE(false, comp(1923, 28));
    };
    if (((varbitplayer_6068 == 9) && (int5 == true))) {
        IF_SETHIDE(false, comp(1430, 39));
        IF_SETHIDE(true, comp(1430, 29));
        IF_SETHIDE(false, comp(1506, 21));
        IF_SETHIDE(true, comp(1506, 11));
        IF_SETHIDE(false, comp(1923, 39));
        IF_SETHIDE(true, comp(1923, 29));
    } else {
        IF_SETHIDE(true, comp(1430, 39));
        IF_SETHIDE(false, comp(1430, 29));
        IF_SETHIDE(true, comp(1506, 21));
        IF_SETHIDE(false, comp(1506, 11));
        IF_SETHIDE(true, comp(1923, 39));
        IF_SETHIDE(false, comp(1923, 29));
    };
    if (((varbitplayer_6068 == 7) && (int6 == true))) {
        IF_SETHIDE(false, comp(1430, 40));
        IF_SETHIDE(true, comp(1430, 30));
        IF_SETHIDE(false, comp(1506, 23));
        IF_SETHIDE(true, comp(1506, 12));
        IF_SETHIDE(false, comp(1923, 40));
        IF_SETHIDE(true, comp(1923, 30));
    } else {
        IF_SETHIDE(true, comp(1430, 40));
        IF_SETHIDE(false, comp(1430, 30));
        IF_SETHIDE(true, comp(1506, 23));
        IF_SETHIDE(false, comp(1506, 12));
        IF_SETHIDE(true, comp(1923, 40));
        IF_SETHIDE(false, comp(1923, 30));
    };
    if (((varbitplayer_6068 == 6) && (int7 == true))) {
        IF_SETHIDE(false, comp(1430, 42));
        IF_SETHIDE(true, comp(1430, 32));
        IF_SETHIDE(false, comp(1506, 25));
        IF_SETHIDE(true, comp(1506, 14));
        IF_SETHIDE(false, comp(1923, 42));
        IF_SETHIDE(true, comp(1923, 32));
    } else {
        IF_SETHIDE(true, comp(1430, 42));
        IF_SETHIDE(false, comp(1430, 32));
        IF_SETHIDE(true, comp(1506, 25));
        IF_SETHIDE(false, comp(1506, 14));
        IF_SETHIDE(true, comp(1923, 42));
        IF_SETHIDE(false, comp(1923, 32));
    };
    IF_SETHIDE(false, comp(1430, 50));
    IF_SETHIDE(true, comp(1430, 52));
    IF_SETHIDE(false, comp(1430, 25));
    IF_SETHIDE(false, comp(1506, 33));
    IF_SETHIDE(false, comp(1923, 50));
    IF_SETHIDE(true, comp(1506, 35));
    IF_SETHIDE(true, comp(1923, 52));
    IF_SETHIDE(false, comp(1506, 6));
    IF_SETHIDE(false, comp(1923, 25));
    if ((((varplayer_1831 == 24906 as obj) || (varplayer_1831 == 24907 as obj)) || (varplayer_1831 == 24908 as obj))) {
        IF_SETHIDE(false, comp(1430, 26));
        IF_SETHIDE(false, comp(1506, 7));
        IF_SETHIDE(false, comp(1923, 26));
        IF_SETHIDE(false, comp(1430, 48));
        IF_SETHIDE(true, comp(1430, 46));
        IF_SETHIDE(true, comp(1430, 41));
        IF_SETHIDE(true, comp(1430, 31));
        IF_SETHIDE(true, comp(1430, 49));
        IF_SETHIDE(false, comp(1430, 47));
        IF_SETHIDE(true, comp(1430, 38));
        IF_SETHIDE(true, comp(1430, 28));
        IF_SETHIDE(true, comp(1430, 39));
        IF_SETHIDE(true, comp(1430, 29));
        IF_SETHIDE(true, comp(1430, 40));
        IF_SETHIDE(true, comp(1430, 30));
        IF_SETHIDE(true, comp(1430, 42));
        IF_SETHIDE(true, comp(1430, 32));
        IF_SETHIDE(true, comp(1430, 44));
        IF_SETHIDE(false, comp(1430, 43));
        IF_SETHIDE(false, comp(1506, 31));
        IF_SETHIDE(true, comp(1506, 29));
        IF_SETHIDE(true, comp(1506, 24));
        IF_SETHIDE(true, comp(1506, 13));
        IF_SETHIDE(true, comp(1506, 32));
        IF_SETHIDE(false, comp(1506, 30));
        IF_SETHIDE(true, comp(1506, 20));
        IF_SETHIDE(true, comp(1506, 10));
        IF_SETHIDE(true, comp(1506, 21));
        IF_SETHIDE(true, comp(1506, 11));
        IF_SETHIDE(true, comp(1506, 23));
        IF_SETHIDE(true, comp(1506, 12));
        IF_SETHIDE(true, comp(1506, 25));
        IF_SETHIDE(true, comp(1506, 14));
        IF_SETHIDE(true, comp(1506, 27));
        IF_SETHIDE(false, comp(1506, 26));
        IF_SETHIDE(false, comp(1923, 48));
        IF_SETHIDE(true, comp(1923, 46));
        IF_SETHIDE(true, comp(1923, 41));
        IF_SETHIDE(true, comp(1923, 31));
        IF_SETHIDE(true, comp(1923, 49));
        IF_SETHIDE(false, comp(1923, 47));
        IF_SETHIDE(true, comp(1923, 38));
        IF_SETHIDE(true, comp(1923, 28));
        IF_SETHIDE(true, comp(1923, 39));
        IF_SETHIDE(true, comp(1923, 29));
        IF_SETHIDE(true, comp(1923, 40));
        IF_SETHIDE(true, comp(1923, 30));
        IF_SETHIDE(true, comp(1923, 42));
        IF_SETHIDE(true, comp(1923, 32));
        IF_SETHIDE(true, comp(1923, 44));
        IF_SETHIDE(false, comp(1923, 43));
        IF_SETHIDE(true, comp(1430, 51));
        IF_SETHIDE(true, comp(1506, 34));
        IF_SETHIDE(true, comp(1923, 51));
    } else if ((((((((((((((((((((((((((((((((((((((((((((((((((((((((OC_CATEGORY(varplayer_1831) == 2840 as category) || (varplayer_1831 == 26547 as obj)) || (varplayer_1831 == 26549 as obj)) || (varplayer_1831 == 26550 as obj)) || (varplayer_1831 == 26551 as obj)) || (varplayer_1831 == 26553 as obj)) || (varplayer_1831 == 26554 as obj)) || (varplayer_1831 == 26555 as obj)) || (varplayer_1831 == 26557 as obj)) || (varplayer_1831 == 26558 as obj)) || (varplayer_1831 == 29531 as obj)) || (varplayer_1831 == 27211 as obj)) || (varplayer_1831 == 27213 as obj)) || (varplayer_1831 == 27214 as obj)) || (varplayer_1831 == 28824 as obj)) || (varplayer_1831 == 28826 as obj)) || (varplayer_1831 == 28827 as obj)) || (varplayer_1831 == 28829 as obj)) || (varplayer_1831 == 28831 as obj)) || (varplayer_1831 == 28832 as obj)) || (varplayer_1831 == 30062 as obj)) || (varplayer_1831 == 30065 as obj)) || (varplayer_1831 == 30909 as obj)) || (varplayer_1831 == 31304 as obj)) || (varplayer_1831 == 40181 as obj)) || (varplayer_1831 == 31307 as obj)) || (varplayer_1831 == 30234 as obj)) || (varplayer_1831 == 30364 as obj)) || (varplayer_1831 == 30231 as obj)) || (varplayer_1831 == 30369 as obj)) || (varplayer_1831 == 30366 as obj)) || (varplayer_1831 == 30367 as obj)) || (varplayer_1831 == 30811 as obj)) || (varplayer_1831 == 31025 as obj)) || (varplayer_1831 == 28683 as obj)) || (varplayer_1831 == 31302 as obj)) || (varplayer_1831 == 31659 as obj)) || (varplayer_1831 == 31662 as obj)) || (varplayer_1831 == 31656 as obj)) || (varplayer_1831 == 31957 as obj)) || (varplayer_1831 == 31960 as obj)) || (varplayer_1831 == 31963 as obj)) || (varplayer_1831 == 32148 as obj)) || (varplayer_1831 == 32512 as obj)) || (varplayer_1831 == 32730 as obj)) || (varplayer_1831 == 32613 as obj)) || (varplayer_1831 == 33566 as obj)) || (varplayer_1831 == 33631 as obj)) || (varplayer_1831 == 33643 as obj)) || (varplayer_1831 == 33656 as obj)) || (varplayer_1831 == 34109 as obj)) || (varplayer_1831 == 34196 as obj)) || (varplayer_1831 == 34478 as obj)) || (varplayer_1831 == 34504 as obj)) || (varplayer_1831 == 34753 as obj))) {
        IF_SETHIDE(false, comp(1430, 26));
        IF_SETHIDE(false, comp(1506, 7));
        IF_SETHIDE(false, comp(1923, 26));
        if ((int0 == false)) {
            IF_SETHIDE(true, comp(1430, 43));
            IF_SETHIDE(true, comp(1506, 26));
            IF_SETHIDE(true, comp(1923, 43));
        };
        if ((int1 == false)) {
            IF_SETHIDE(true, comp(1430, 33));
            IF_SETHIDE(true, comp(1506, 15));
            IF_SETHIDE(true, comp(1923, 33));
        };
        if ((int2 == false)) {
            IF_SETHIDE(true, comp(1430, 31));
            IF_SETHIDE(true, comp(1506, 13));
            IF_SETHIDE(true, comp(1923, 31));
        };
        if ((int3 == false)) {
            IF_SETHIDE(true, comp(1430, 46));
            IF_SETHIDE(true, comp(1506, 29));
            IF_SETHIDE(true, comp(1923, 46));
        };
        if ((int4 == false)) {
            IF_SETHIDE(true, comp(1430, 47));
            IF_SETHIDE(true, comp(1506, 30));
            IF_SETHIDE(true, comp(1923, 47));
        };
        if ((int5 == false)) {
            IF_SETHIDE(true, comp(1430, 28));
            IF_SETHIDE(true, comp(1506, 10));
            IF_SETHIDE(true, comp(1923, 28));
            IF_SETHIDE(true, comp(1430, 29));
            IF_SETHIDE(true, comp(1506, 11));
            IF_SETHIDE(true, comp(1923, 29));
        };
        if ((int6 == false)) {
            IF_SETHIDE(true, comp(1430, 30));
            IF_SETHIDE(true, comp(1506, 12));
            IF_SETHIDE(true, comp(1923, 30));
        };
        if ((int7 == false)) {
            IF_SETHIDE(true, comp(1430, 32));
            IF_SETHIDE(true, comp(1506, 14));
            IF_SETHIDE(true, comp(1923, 32));
        };
        IF_SETHIDE(false, comp(1430, 25));
        IF_SETHIDE(false, comp(1506, 6));
        IF_SETHIDE(false, comp(1923, 25));
    } else if (((varplayer_1831 != -1 as obj) && (varplayer_1784 != -1 as npc))) {
        IF_SETHIDE(false, comp(1430, 26));
        IF_SETHIDE(false, comp(1506, 7));
        IF_SETHIDE(false, comp(1923, 26));
        if ((int0 == false)) {
            IF_SETHIDE(true, comp(1430, 43));
            IF_SETHIDE(true, comp(1506, 26));
            IF_SETHIDE(true, comp(1923, 43));
        };
        if ((int1 == false)) {
            IF_SETHIDE(true, comp(1430, 33));
            IF_SETHIDE(true, comp(1506, 15));
            IF_SETHIDE(true, comp(1923, 33));
        };
        if ((int2 == false)) {
            IF_SETHIDE(true, comp(1430, 31));
            IF_SETHIDE(true, comp(1506, 13));
            IF_SETHIDE(true, comp(1923, 31));
        };
        if ((int3 == false)) {
            IF_SETHIDE(true, comp(1430, 46));
            IF_SETHIDE(true, comp(1506, 29));
            IF_SETHIDE(true, comp(1923, 46));
        };
        if ((int4 == false)) {
            IF_SETHIDE(true, comp(1430, 47));
            IF_SETHIDE(true, comp(1506, 30));
            IF_SETHIDE(true, comp(1923, 47));
        };
        if ((int5 == false)) {
            IF_SETHIDE(true, comp(1430, 28));
            IF_SETHIDE(true, comp(1506, 10));
            IF_SETHIDE(true, comp(1923, 28));
            IF_SETHIDE(true, comp(1430, 29));
            IF_SETHIDE(true, comp(1506, 11));
            IF_SETHIDE(true, comp(1923, 29));
        };
        if ((int6 == false)) {
            IF_SETHIDE(true, comp(1430, 30));
            IF_SETHIDE(true, comp(1506, 12));
            IF_SETHIDE(true, comp(1923, 30));
        };
        if ((int7 == false)) {
            IF_SETHIDE(true, comp(1430, 32));
            IF_SETHIDE(true, comp(1506, 14));
            IF_SETHIDE(true, comp(1923, 32));
        };
        IF_SETHIDE(false, comp(1430, 25));
        IF_SETHIDE(false, comp(1506, 6));
        IF_SETHIDE(false, comp(1923, 25));
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