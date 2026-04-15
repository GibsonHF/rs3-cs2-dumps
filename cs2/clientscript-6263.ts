//
function script6263(): void {
    IF_SETTEXT(inttostring(varbitplayer_4662, 10), comp(925, 137));
    IF_SETTEXT(inttostring(varbitplayer_4649, 10), comp(925, 140));
    if ((varbitplayer_4638 == 0)) {
        IF_SETHIDE(true, comp(925, 142));
        IF_SETHIDE(true, comp(925, 141));
    } else {
        IF_SETHIDE(false, comp(925, 142));
        IF_SETHIDE(false, comp(925, 141));
    };
    IF_SETOBJECT(varclient_1118, varclient_1119, comp(925, 62));
    IF_SETOPBASE(OC_NAME(varclient_1118), comp(925, 62));
    IF_SETOBJECT(varclient_1120, varclient_1121, comp(925, 60));
    IF_SETOPBASE(OC_NAME(varclient_1120), comp(925, 60));
    switch (varclient_1118) {
        case 384: {
            IF_SETTEXT("Shark", comp(925, 63));
            break;
        }
        case 372: {
            IF_SETTEXT("Swordfish", comp(925, 63));
            break;
        }
        case 378: {
            IF_SETTEXT("Lobster", comp(925, 63));
            break;
        }
        case 360: {
            IF_SETTEXT("Tuna", comp(925, 63));
            break;
        }
        case 332: {
            IF_SETTEXT("Salmon", comp(925, 63));
            break;
        }
        case 350: {
            IF_SETTEXT("Pike", comp(925, 63));
            break;
        }
        case 336: {
            IF_SETTEXT("Trout", comp(925, 63));
            break;
        }
        case 346: {
            IF_SETTEXT("Herring", comp(925, 63));
            break;
        }
        case 328: {
            IF_SETTEXT("Sardine", comp(925, 63));
            break;
        }
        case 318: {
            IF_SETTEXT("Shrimp", comp(925, 63));
            break;
        }
        default: {
            IF_SETTEXT("", comp(925, 63));
            break;
        }
    };
    switch (varclient_1120) {
        case 384: {
            IF_SETTEXT("Shark", comp(925, 64));
            break;
        }
        case 372: {
            IF_SETTEXT("Swordfish", comp(925, 64));
            break;
        }
        case 378: {
            IF_SETTEXT("Lobster", comp(925, 64));
            break;
        }
        case 360: {
            IF_SETTEXT("Tuna", comp(925, 64));
            break;
        }
        case 332: {
            IF_SETTEXT("Salmon", comp(925, 64));
            break;
        }
        case 350: {
            IF_SETTEXT("Pike", comp(925, 64));
            break;
        }
        case 336: {
            IF_SETTEXT("Trout", comp(925, 64));
            break;
        }
        case 346: {
            IF_SETTEXT("Herring", comp(925, 64));
            break;
        }
        case 328: {
            IF_SETTEXT("Sardine", comp(925, 64));
            break;
        }
        case 318: {
            IF_SETTEXT("Shrimp", comp(925, 64));
            break;
        }
        default: {
            IF_SETTEXT("", comp(925, 64));
            break;
        }
    };
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    [int0, int1, int2, int3, int4, int5, int6, int7] = script6264();
    if ((int4 == 0)) {
        IF_SETTEXT("(Insufficient tokens)", comp(925, 65));
    } else {
        IF_SETTEXT(`${inttostring(int4, 10)} tokens`, comp(925, 65));
    };
    if (((int4 == 0) || (varbitplayer_4662 < int4))) {
        IF_SETHIDE(false, comp(925, 54));
    } else {
        IF_SETHIDE(true, comp(925, 54));
    };
    var string0 = "Noted raw fish appropriate for your Fishing level:<br>";
    var int8 = (script7721() - varbitplayer_18495);
    if ((varbitplayer_4638 == 1)) {
        if ((int0 != -1 as obj)) {
            string0 = `${string0}${inttostring(int1, 10)}x ${OC_NAME(int0)}<br>`;
        };
        if ((int2 != -1 as obj)) {
            string0 = `${string0}${inttostring(int3, 10)}x ${OC_NAME(int2)}<br>`;
        };
        IF_SETTEXT(string0, comp(925, 164));
        IF_SETTEXT(`Cost: ${inttostring(int4, 10)} tokens`, comp(925, 165));
    };
    if ((varbitplayer_4638 == 8)) {
        IF_SETTEXT("You will catch an extra fish for the next 20 minutes.", comp(925, 164));
        IF_SETTEXT(`Cost: ${inttostring(100, 10)} tokens`, comp(925, 165));
    };
    if ((varbitplayer_4638 == 9)) {
        if ((int8 == 1)) {
            IF_SETTEXT(`This will reset your tackle boxes daily teleports.<br>You have ${inttostring(int8, 10)} teleport left currently.`, comp(925, 164));
        } else {
            IF_SETTEXT(`This will reset your tackle boxes daily teleports.<br>You have ${inttostring(int8, 10)} teleports left currently.`, comp(925, 164));
        };
        IF_SETTEXT(`Cost: ${inttostring(100, 10)} tokens`, comp(925, 165));
    };
    var string1 = "This tackle box holds:<br>";
    var int9 = 0;
    var int10 = (varbitplayer_4673 + 1);
    if ((script2189(int10, 0) == 1)) {
        int9 = (int9 + 1);
    };
    if ((script2189(int10, 1) == 1)) {
        int9 = (int9 + 1);
    };
    if ((script2189(int10, 2) == 1)) {
        int9 = (int9 + 1);
    };
    if ((script2189(int10, 3) == 1)) {
        int9 = (int9 + 1);
    };
    if ((script2189(int10, 4) == 1)) {
        int9 = (int9 + 1);
    };
    if ((int9 == 1)) {
        string1 = `${string1}${inttostring(int9, 10)} fishing tool<br>`;
    } else if ((int9 > 0)) {
        string1 = `${string1}${inttostring(int9, 10)} fishing tools<br>`;
    };
    var int11 = 0;
    if ((script2189(int10, 5) == 1)) {
        int11 = (int11 + 1);
    };
    if ((script2189(int10, 6) == 1)) {
        int11 = (int11 + 1);
    };
    if ((script2189(int10, 7) == 1)) {
        int11 = (int11 + 1);
    };
    if ((int11 == 1)) {
        string1 = `${string1}${inttostring(int11, 10)} stack of ${inttostring(script6261(int10), 10)} bait<br>`;
    } else if ((int11 > 0)) {
        string1 = `${string1}${inttostring(int11, 10)} stacks of ${inttostring(script6261(int10), 10)} bait<br>`;
    };
    var int12 = 0;
    if ((script2189(int10, 8) == 1)) {
        int12 = (int12 + 1);
    };
    if ((script2189(int10, 9) == 1)) {
        int12 = (int12 + 1);
    };
    if ((int12 == 1)) {
        string1 = `${string1}${inttostring(int12, 10)} fishing gloves<br>`;
    } else if ((int12 > 0)) {
        string1 = `${string1}${inttostring(int12, 10)} fishing gloves<br>`;
    };
    var int13 = 0;
    if ((script2189(int10, 10) == 1)) {
        int13 = (int13 + 1);
    };
    if ((int13 == 1)) {
        string1 = `${string1}${inttostring(int13, 10)} stack of ${inttostring(script6262(int10), 10)} raw fish<br>`;
    } else if ((int13 > 0)) {
        string1 = `${string1}${inttostring(int13, 10)} stacks of ${inttostring(script6262(int10), 10)} raw fish<br>`;
    };
    string1 = `${string1}The fishing outfit<br>`;
    int4 = enum_getvalue(0, 0, 5886 as cs2enum, int10);
    if ((varbitplayer_4638 == 2)) {
        IF_SETTEXT(string1, comp(925, 164));
        IF_SETTEXT(`Cost: ${inttostring(int4, 10)} tokens`, comp(925, 165));
    };
    IF_SETTEXT(`${inttostring(int4, 10)} tokens`, comp(925, 100));
    var int14 = enum_getvalue(0, 0, 5887 as cs2enum, int10);
    IF_SETTEXT(`Requires ${inttostring(int14, 10)} medals`, comp(925, 99));
    if (((((((script259(15666 as obj) == 0) && (script259(15667 as obj) == 0)) && (script259(15668 as obj) == 0)) && (script259(15669 as obj) == 0)) && (script259(15670 as obj) == 0)) && (varbitplayer_4673 > 0))) {
        IF_SETHIDE(true, comp(925, 94));
    } else if ((((varbitplayer_4662 < int4) || (varbitplayer_4649 < int14)) || (varbitplayer_4673 == 5))) {
        IF_SETHIDE(false, comp(925, 94));
    } else {
        IF_SETHIDE(true, comp(925, 94));
    };
    switch (varbitplayer_4673) {
        case 0: {
            IF_SETTEXT("Beginner's tackle box", comp(925, 133));
            IF_SETOBJECT(15666 as obj, -1, comp(925, 98));
            IF_SETOBJECT(15666 as obj, -1, comp(925, 110));
            IF_SETHIDE(false, comp(925, 106));
            IF_SETTEXT("You must buy a tackle box before you can reset it.", comp(925, 111));
            break;
        }
        case 1: {
            IF_SETTEXT("Basic tackle box", comp(925, 133));
            IF_SETOBJECT(15667 as obj, -1, comp(925, 98));
            IF_SETOBJECT(15666 as obj, -1, comp(925, 110));
            IF_SETHIDE(true, comp(925, 106));
            IF_SETTEXT("Reset your<br>daily teleports.", comp(925, 111));
            break;
        }
        case 2: {
            IF_SETTEXT("Standard tackle box", comp(925, 133));
            IF_SETOBJECT(15668 as obj, -1, comp(925, 98));
            IF_SETOBJECT(15667 as obj, -1, comp(925, 110));
            IF_SETHIDE(true, comp(925, 106));
            IF_SETTEXT("Reset your<br>daily teleports.", comp(925, 111));
            break;
        }
        case 3: {
            IF_SETTEXT("Professional tackle box", comp(925, 133));
            IF_SETOBJECT(15669 as obj, -1, comp(925, 98));
            IF_SETOBJECT(15668 as obj, -1, comp(925, 110));
            IF_SETHIDE(true, comp(925, 106));
            IF_SETTEXT("Reset your<br>daily teleports.", comp(925, 111));
            break;
        }
        case 4: {
            IF_SETTEXT("Champion's tackle box", comp(925, 133));
            IF_SETOBJECT(15670 as obj, -1, comp(925, 98));
            IF_SETOBJECT(15669 as obj, -1, comp(925, 110));
            IF_SETHIDE(true, comp(925, 106));
            IF_SETTEXT("Reset your<br>daily teleports.", comp(925, 111));
            break;
        }
        case 5: {
            IF_SETTEXT("Champion's tackle box", comp(925, 133));
            IF_SETTEXT("(Purchased)", comp(925, 100));
            IF_SETTEXT("", comp(925, 99));
            IF_SETOBJECT(15670 as obj, -1, comp(925, 98));
            IF_SETOBJECT(15670 as obj, -1, comp(925, 110));
            IF_SETHIDE(true, comp(925, 106));
            IF_SETTEXT("Reset your<br>daily teleports.", comp(925, 111));
            break;
        }
    };
    IF_SETMODELANGLE(0, 0, 250, 1666, 0, 1440, comp(925, 98));
    IF_SETMODELANGLE(0, 0, 250, 1666, 0, 1440, comp(925, 110));
    IF_SETOBJECT_NONUM(24427 as obj, 0, comp(925, 29));
    if ((varbitplayer_4693 == 1)) {
        IF_SETTEXT("(Purchased)", comp(925, 31));
    } else {
        if ((varbitplayer_4638 == 3)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, comp(925, 165));
            IF_SETTEXT("Wear this fishing hat to increase the amount of Fishing experience you earn.", comp(925, 164));
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, comp(925, 31));
    };
    IF_SETOBJECT_NONUM(24428 as obj, 0, comp(925, 23));
    if ((varbitplayer_4694 == 1)) {
        IF_SETTEXT("(Purchased)", comp(925, 25));
    } else {
        if ((varbitplayer_4638 == 4)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, comp(925, 165));
            IF_SETTEXT("Wear this fishing jacket to increase the amount of Fishing experience you earn.", comp(925, 164));
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, comp(925, 25));
    };
    IF_SETOBJECT_NONUM(24429 as obj, 0, comp(925, 17));
    if ((varbitplayer_4695 == 1)) {
        IF_SETTEXT("(Purchased)", comp(925, 19));
    } else {
        if ((varbitplayer_4638 == 5)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, comp(925, 165));
            IF_SETTEXT("Wear these fishing waders to increase the amount of Fishing experience you earn.", comp(925, 164));
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, comp(925, 19));
    };
    IF_SETOBJECT_NONUM(24430 as obj, 0, comp(925, 11));
    if ((varbitplayer_4696 == 1)) {
        IF_SETTEXT("(Purchased)", comp(925, 13));
    } else {
        if ((varbitplayer_4638 == 6)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, comp(925, 165));
            IF_SETTEXT("Wear these fishing boots to increase the amount of Fishing experience you earn.", comp(925, 164));
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, comp(925, 13));
    };
    switch (varclient_4885) {
        case 0: {
            script11504(comp(925, 80), comp(925, 48));
            break;
        }
        case 1: {
            script11504(comp(925, 71), comp(925, 34));
            break;
        }
    };
    switch (varclient_4886) {
        case 0: {
            script11506(comp(925, 118), comp(925, 89));
            break;
        }
        case 1: {
            script11506(comp(925, 127), comp(925, 101));
            break;
        }
    };
    return;
}