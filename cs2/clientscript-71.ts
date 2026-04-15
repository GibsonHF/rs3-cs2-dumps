//
function script71(): void {
    if ((varbitplayer_34637 == 1)) {
        IF_SETHIDE(false, comp(1820, 88));
    } else {
        IF_SETHIDE(true, comp(1820, 88));
    };
    if ((varbitplayer_34643 == 2)) {
        IF_SETHIDE(false, comp(1820, 2));
    } else {
        IF_SETHIDE(true, comp(1820, 2));
    };
    if ((varbitplayer_34636 == 1)) {
        IF_SETHIDE(false, comp(1820, 90));
    } else {
        IF_SETHIDE(true, comp(1820, 90));
    };
    if ((varbitplayer_34640 == 1)) {
        IF_SETHIDE(false, comp(1820, 92));
    } else {
        IF_SETHIDE(true, comp(1820, 92));
    };
    if ((varbitplayer_34639 == 1)) {
        IF_SETHIDE(false, comp(1820, 94));
    } else {
        IF_SETHIDE(true, comp(1820, 94));
    };
    if ((varbitplayer_34638 == 1)) {
        IF_SETHIDE(false, comp(1820, 86));
    } else {
        IF_SETHIDE(true, comp(1820, 86));
    };
    switch (varbitplayer_34641) {
        case 0: {
            IF_SETHIDE(true, comp(1820, 78));
            IF_SETHIDE(true, comp(1820, 80));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1820, 78));
            IF_SETHIDE(true, comp(1820, 80));
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1820, 78));
            IF_SETHIDE(false, comp(1820, 80));
            break;
        }
    };
    switch (varbitplayer_34642) {
        case 0: {
            IF_SETHIDE(true, comp(1820, 82));
            IF_SETHIDE(true, comp(1820, 84));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1820, 82));
            IF_SETHIDE(true, comp(1820, 84));
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(1820, 82));
            IF_SETHIDE(false, comp(1820, 84));
            break;
        }
    };
    IF_SETONVARTRANSMIT(callback(script12992, 6699, 1), comp(1820, 35));
    IF_SETONVARTRANSMIT(callback(script12993, 6699, 1), 119275557);
    IF_SETONVARTRANSMIT(callback(script12994, 6699, 1), 119275559);
    IF_SETONVARTRANSMIT(callback(script12995, 6699, 1), 119275561);
    IF_SETONVARTRANSMIT(callback(script12996, 6699, 1), 119275563);
    IF_SETONVARTRANSMIT(callback(script12997, 6699, 1), 119275565);
    IF_SETONVARTRANSMIT(callback(script12990, 6699, 1), 119275569);
    IF_SETONVARTRANSMIT(callback(script12991, 6699, 1), 119275574);
    return;
}