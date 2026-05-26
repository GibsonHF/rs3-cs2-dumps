//
function script6263(): void {
    IF_SETTEXT(inttostring(varbitplayer_4662, 10), 60620937);
    IF_SETTEXT(inttostring(varbitplayer_4649, 10), 60620940);
    if ((varbitplayer_4638 == 0)) {
        IF_SETHIDE(1, 60620942);
        IF_SETHIDE(1, 60620941);
    } else {
        IF_SETHIDE(0, 60620942);
        IF_SETHIDE(0, 60620941);
    };
    IF_SETOBJECT(varclient_1118, varclient_1119, 60620862);
    IF_SETOPBASE(OC_NAME(varclient_1118), 60620862);
    IF_SETOBJECT(varclient_1120, varclient_1121, 60620860);
    IF_SETOPBASE(OC_NAME(varclient_1120), 60620860);
    switch (varclient_1118) {
        case 384: {
            IF_SETTEXT("Shark", 60620863);
            break;
        }
        case 372: {
            IF_SETTEXT("Swordfish", 60620863);
            break;
        }
        case 378: {
            IF_SETTEXT("Lobster", 60620863);
            break;
        }
        case 360: {
            IF_SETTEXT("Tuna", 60620863);
            break;
        }
        case 332: {
            IF_SETTEXT("Salmon", 60620863);
            break;
        }
        case 350: {
            IF_SETTEXT("Pike", 60620863);
            break;
        }
        case 336: {
            IF_SETTEXT("Trout", 60620863);
            break;
        }
        case 346: {
            IF_SETTEXT("Herring", 60620863);
            break;
        }
        case 328: {
            IF_SETTEXT("Sardine", 60620863);
            break;
        }
        case 318: {
            IF_SETTEXT("Shrimp", 60620863);
            break;
        }
        default: {
            IF_SETTEXT("", 60620863);
            break;
        }
    };
    switch (varclient_1120) {
        case 384: {
            IF_SETTEXT("Shark", 60620864);
            break;
        }
        case 372: {
            IF_SETTEXT("Swordfish", 60620864);
            break;
        }
        case 378: {
            IF_SETTEXT("Lobster", 60620864);
            break;
        }
        case 360: {
            IF_SETTEXT("Tuna", 60620864);
            break;
        }
        case 332: {
            IF_SETTEXT("Salmon", 60620864);
            break;
        }
        case 350: {
            IF_SETTEXT("Pike", 60620864);
            break;
        }
        case 336: {
            IF_SETTEXT("Trout", 60620864);
            break;
        }
        case 346: {
            IF_SETTEXT("Herring", 60620864);
            break;
        }
        case 328: {
            IF_SETTEXT("Sardine", 60620864);
            break;
        }
        case 318: {
            IF_SETTEXT("Shrimp", 60620864);
            break;
        }
        default: {
            IF_SETTEXT("", 60620864);
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
        IF_SETTEXT("(Insufficient tokens)", 60620865);
    } else {
        IF_SETTEXT(`${inttostring(int4, 10)} tokens`, 60620865);
    };
    if (((int4 == 0) || (varbitplayer_4662 < int4))) {
        IF_SETHIDE(0, 60620854);
    } else {
        IF_SETHIDE(1, 60620854);
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
        IF_SETTEXT(string0, 60620964);
        IF_SETTEXT(`Cost: ${inttostring(int4, 10)} tokens`, 60620965);
    };
    if ((varbitplayer_4638 == 8)) {
        IF_SETTEXT("You will catch an extra fish for the next 20 minutes.", 60620964);
        IF_SETTEXT(`Cost: ${inttostring(100, 10)} tokens`, 60620965);
    };
    if ((varbitplayer_4638 == 9)) {
        if ((int8 == 1)) {
            IF_SETTEXT(`This will reset your tackle boxes daily teleports.<br>You have ${inttostring(int8, 10)} teleport left currently.`, 60620964);
        } else {
            IF_SETTEXT(`This will reset your tackle boxes daily teleports.<br>You have ${inttostring(int8, 10)} teleports left currently.`, 60620964);
        };
        IF_SETTEXT(`Cost: ${inttostring(100, 10)} tokens`, 60620965);
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
        IF_SETTEXT(string1, 60620964);
        IF_SETTEXT(`Cost: ${inttostring(int4, 10)} tokens`, 60620965);
    };
    IF_SETTEXT(`${inttostring(int4, 10)} tokens`, 60620900);
    var int14 = enum_getvalue(0, 0, 5887 as cs2enum, int10);
    IF_SETTEXT(`Requires ${inttostring(int14, 10)} medals`, 60620899);
    if (((((((script259(15666) == 0) && (script259(15667) == 0)) && (script259(15668) == 0)) && (script259(15669) == 0)) && (script259(15670) == 0)) && (varbitplayer_4673 > 0))) {
        IF_SETHIDE(1, 60620894);
    } else if ((((varbitplayer_4662 < int4) || (varbitplayer_4649 < int14)) || (varbitplayer_4673 == 5))) {
        IF_SETHIDE(0, 60620894);
    } else {
        IF_SETHIDE(1, 60620894);
    };
    switch (varbitplayer_4673) {
        case 0: {
            IF_SETTEXT("Beginner's tackle box", 60620933);
            IF_SETOBJECT(15666 as obj, -1, 60620898);
            IF_SETOBJECT(15666 as obj, -1, 60620910);
            IF_SETHIDE(0, 60620906);
            IF_SETTEXT("You must buy a tackle box before you can reset it.", 60620911);
            break;
        }
        case 1: {
            IF_SETTEXT("Basic tackle box", 60620933);
            IF_SETOBJECT(15667 as obj, -1, 60620898);
            IF_SETOBJECT(15666 as obj, -1, 60620910);
            IF_SETHIDE(1, 60620906);
            IF_SETTEXT("Reset your<br>daily teleports.", 60620911);
            break;
        }
        case 2: {
            IF_SETTEXT("Standard tackle box", 60620933);
            IF_SETOBJECT(15668 as obj, -1, 60620898);
            IF_SETOBJECT(15667 as obj, -1, 60620910);
            IF_SETHIDE(1, 60620906);
            IF_SETTEXT("Reset your<br>daily teleports.", 60620911);
            break;
        }
        case 3: {
            IF_SETTEXT("Professional tackle box", 60620933);
            IF_SETOBJECT(15669 as obj, -1, 60620898);
            IF_SETOBJECT(15668 as obj, -1, 60620910);
            IF_SETHIDE(1, 60620906);
            IF_SETTEXT("Reset your<br>daily teleports.", 60620911);
            break;
        }
        case 4: {
            IF_SETTEXT("Champion's tackle box", 60620933);
            IF_SETOBJECT(15670 as obj, -1, 60620898);
            IF_SETOBJECT(15669 as obj, -1, 60620910);
            IF_SETHIDE(1, 60620906);
            IF_SETTEXT("Reset your<br>daily teleports.", 60620911);
            break;
        }
        case 5: {
            IF_SETTEXT("Champion's tackle box", 60620933);
            IF_SETTEXT("(Purchased)", 60620900);
            IF_SETTEXT("", 60620899);
            IF_SETOBJECT(15670 as obj, -1, 60620898);
            IF_SETOBJECT(15670 as obj, -1, 60620910);
            IF_SETHIDE(1, 60620906);
            IF_SETTEXT("Reset your<br>daily teleports.", 60620911);
            break;
        }
    };
    IF_SETMODELANGLE(0, 0, 250, 1666, 0, 1440, 60620898);
    IF_SETMODELANGLE(0, 0, 250, 1666, 0, 1440, 60620910);
    IF_SETOBJECT_NONUM(24427, 0, 60620829);
    if ((varbitplayer_4693 == 1)) {
        IF_SETTEXT("(Purchased)", 60620831);
    } else {
        if ((varbitplayer_4638 == 3)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, 60620965);
            IF_SETTEXT("Wear this fishing hat to increase the amount of Fishing experience you earn.", 60620964);
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, 60620831);
    };
    IF_SETOBJECT_NONUM(24428, 0, 60620823);
    if ((varbitplayer_4694 == 1)) {
        IF_SETTEXT("(Purchased)", 60620825);
    } else {
        if ((varbitplayer_4638 == 4)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, 60620965);
            IF_SETTEXT("Wear this fishing jacket to increase the amount of Fishing experience you earn.", 60620964);
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, 60620825);
    };
    IF_SETOBJECT_NONUM(24429, 0, 60620817);
    if ((varbitplayer_4695 == 1)) {
        IF_SETTEXT("(Purchased)", 60620819);
    } else {
        if ((varbitplayer_4638 == 5)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, 60620965);
            IF_SETTEXT("Wear these fishing waders to increase the amount of Fishing experience you earn.", 60620964);
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, 60620819);
    };
    IF_SETOBJECT_NONUM(24430, 0, 60620811);
    if ((varbitplayer_4696 == 1)) {
        IF_SETTEXT("(Purchased)", 60620813);
    } else {
        if ((varbitplayer_4638 == 6)) {
            IF_SETTEXT(`Cost: ${inttostring(140, 10)} tokens`, 60620965);
            IF_SETTEXT("Wear these fishing boots to increase the amount of Fishing experience you earn.", 60620964);
        };
        IF_SETTEXT(`${inttostring(140, 10)} tokens`, 60620813);
    };
    switch (varclient_4885) {
        case 0: {
            script11504(60620880, 60620848);
            break;
        }
        case 1: {
            script11504(60620871, 60620834);
            break;
        }
    };
    switch (varclient_4886) {
        case 0: {
            script11506(60620918, 60620889);
            break;
        }
        case 1: {
            script11506(60620927, 60620901);
            break;
        }
    };
    return;
}