//
function script7894(int0: number, int1: number): void {
    stack(19674);
    stack(93061213);
    IF_SETGRAPHIC();
    stack(19675);
    stack(93061209);
    IF_SETGRAPHIC();
    stack(19676);
    stack(93061205);
    IF_SETGRAPHIC();
    stack(19677);
    stack(93061201);
    IF_SETGRAPHIC();
    stack(19678);
    stack(93061197);
    IF_SETGRAPHIC();
    stack(19679);
    stack(93061193);
    IF_SETGRAPHIC();
    stack(18100);
    stack(93061212);
    IF_SETGRAPHIC();
    stack(18100);
    stack(93061208);
    IF_SETGRAPHIC();
    stack(18100);
    stack(93061204);
    IF_SETGRAPHIC();
    stack(18100);
    stack(93061200);
    IF_SETGRAPHIC();
    stack(18100);
    stack(93061196);
    IF_SETGRAPHIC();
    stack(18100);
    stack(93061192);
    IF_SETGRAPHIC();
    IF_SENDTOBACK(93061210);
    IF_SENDTOBACK(93061206);
    IF_SENDTOBACK(93061202);
    IF_SENDTOBACK(93061198);
    IF_SENDTOBACK(93061194);
    IF_SENDTOBACK(93061190);
    IF_SETHIDE(1, 93061222);
    if ((varclient_3687 == 1)) {
        IF_SETHIDE(1, 93061190);
    } else {
        IF_SETHIDE(0, 93061190);
    };
    if (((int0 == 1) || (int0 == 5))) {
        IF_SETHIDE(1, 93061166);
        IF_SETHIDE(0, 93061167);
    } else {
        IF_SETHIDE(0, 93061166);
        IF_SETHIDE(1, 93061167);
    };
    switch (int0) {
        case 0: {
            stack(19668);
            stack(93061213);
            IF_SETGRAPHIC();
            stack(18102);
            stack(93061212);
            IF_SETGRAPHIC();
            IF_SENDTOFRONT(93061210);
            IF_SETTEXT("Choose Appearance", 93061187);
            IF_SETHIDE(0, 93061222);
            break;
        }
        case 1: {
            stack(19669);
            stack(93061209);
            IF_SETGRAPHIC();
            stack(18102);
            stack(93061208);
            IF_SETGRAPHIC();
            IF_SENDTOFRONT(93061206);
            IF_SETTEXT("Choose A Hair Style", 93061187);
            if ((int1 == 1)) {
                IF_SETMODELANIM(20948, 93061166);
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 159)), 93061134);
            };
            break;
        }
        case 2: {
            stack(19670);
            stack(93061205);
            IF_SETGRAPHIC();
            stack(18102);
            stack(93061204);
            IF_SETGRAPHIC();
            IF_SENDTOFRONT(93061202);
            IF_SETTEXT("Choose A Top", 93061187);
            if ((int1 == 1)) {
                IF_SETMODELANIM(20945, 93061166);
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 180)), 93061134);
            };
            break;
        }
        case 3: {
            stack(19671);
            stack(93061201);
            IF_SETGRAPHIC();
            stack(18102);
            stack(93061200);
            IF_SETGRAPHIC();
            IF_SENDTOFRONT(93061198);
            IF_SETTEXT("Choose Some Legs", 93061187);
            if ((int1 == 1)) {
                IF_SETMODELANIM(20946, 93061166);
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), 93061134);
            };
            break;
        }
        case 4: {
            stack(19672);
            stack(93061197);
            IF_SETGRAPHIC();
            stack(18102);
            stack(93061196);
            IF_SETGRAPHIC();
            IF_SENDTOFRONT(93061194);
            IF_SETTEXT("Choose Some Shoes", 93061187);
            if ((int1 == 1)) {
                IF_SETMODELANIM(20944, 93061166);
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 189)), 93061134);
            };
            break;
        }
        case 5: {
            stack(19673);
            stack(93061193);
            IF_SETGRAPHIC();
            stack(18102);
            stack(93061192);
            IF_SETGRAPHIC();
            IF_SENDTOFRONT(93061190);
            IF_SETTEXT("Choose A Beard", 93061187);
            if ((int1 == 1)) {
                IF_SETMODELANIM(20947, 93061166);
                IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 150)), 93061134);
            };
            break;
        }
    };
    if ((int0 == varclient_3482)) {
        return;
    };
    varclient_3482 = int0;
    if ((IF_GETHEIGHT(93061247) != 0)) {
        IF_SETONTIMER(callback(), 93061125);
        IF_SETSIZE(0, 0, 1, 0, 93061247);
    };
    script7867();
    return;
}