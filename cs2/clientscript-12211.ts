//
function script12211(): void {
    var int0 = 0;
    IF_SETTEXT(`Prestige Level - ${inttostring(varbitplayer_30445, 10)}`, 112459785);
    while ((int0 <= varbitplayer_30446)) {
        script12212(int0);
        int0 = (int0 + 1);
    };
    switch (varbitplayer_30445) {
        case 1: {
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(0, 112459979);
            };
            IF_SETHIDE(1, 112459982);
            IF_SETHIDE(0, 112459859);
            IF_SETHIDE(0, 112459850);
            IF_SETHIDE(0, 112459782);
            IF_SETHIDE(0, 112459868);
            break;
        }
        case 2: {
            IF_SETHIDE(1, 112459982);
            IF_SETHIDE(0, 112459979);
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(0, 112459856);
            };
            IF_SETHIDE(1, 112459859);
            IF_SETHIDE(0, 112459850);
            IF_SETHIDE(0, 112459782);
            IF_SETHIDE(0, 112459868);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 112459979);
            IF_SETHIDE(1, 112459982);
            IF_SETHIDE(0, 112459856);
            IF_SETHIDE(1, 112459859);
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(0, 112459847);
            };
            IF_SETHIDE(1, 112459850);
            IF_SETHIDE(0, 112459782);
            IF_SETHIDE(0, 112459868);
            break;
        }
        case 4: {
            IF_SETHIDE(0, 112459979);
            IF_SETHIDE(1, 112459982);
            IF_SETHIDE(0, 112459856);
            IF_SETHIDE(1, 112459859);
            IF_SETHIDE(0, 112459847);
            IF_SETHIDE(1, 112459850);
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(0, 112459779);
            };
            IF_SETHIDE(1, 112459782);
            IF_SETHIDE(0, 112459868);
            break;
        }
        case 5: {
            IF_SETHIDE(0, 112459979);
            IF_SETHIDE(1, 112459982);
            IF_SETHIDE(0, 112459856);
            IF_SETHIDE(1, 112459859);
            IF_SETHIDE(0, 112459847);
            IF_SETHIDE(1, 112459850);
            IF_SETHIDE(0, 112459779);
            IF_SETHIDE(1, 112459782);
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(0, 112459863);
            };
            IF_SETHIDE(1, 112459868);
            break;
        }
    };
    if ((varbitplayer_30445 > varbitplayer_30446)) {
        IF_SETHIDE(0, 112459835);
        IF_SETHIDE(0, 112459967);
    } else {
        IF_SETHIDE(1, 112459835);
    };
    return;
}