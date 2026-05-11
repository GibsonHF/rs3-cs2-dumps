//
function script9748(): void {
    IF_SETHIDE(true, comp(1049, 32));
    IF_SETHIDE(true, comp(1049, 36));
    IF_SETHIDE(true, comp(1049, 40));
    IF_SETHIDE(true, comp(1049, 46));
    if (((varclient_4189 == 1) || (varplayer_4474 == 1))) {
        IF_SETHIDE(false, comp(1049, 29));
        if ((IF_GETGRAPHIC(comp(1049, 10)) == 18525 as graphic)) {
            stack(17535);
            stack(68747332);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747332);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 33));
        if ((IF_GETGRAPHIC(comp(1049, 61)) == 18525 as graphic)) {
            stack(17535);
            stack(68747333);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747333);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 37));
        if ((IF_GETGRAPHIC(comp(1049, 63)) == 18525 as graphic)) {
            stack(17535);
            stack(68747334);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747334);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 43));
        if ((IF_GETGRAPHIC(comp(1049, 41)) == 18525 as graphic)) {
            stack(17535);
            stack(68747335);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747335);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 49));
        if ((IF_GETGRAPHIC(comp(1049, 47)) == 18525 as graphic)) {
            stack(17535);
            stack(68747336);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747336);
            IF_SETGRAPHIC();
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 11));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 62));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 64));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 42));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));
    } else {
        IF_SETHIDE(true, comp(1049, 29));
        IF_SETHIDE(true, comp(1049, 33));
        IF_SETHIDE(true, comp(1049, 37));
        IF_SETHIDE(true, comp(1049, 43));
        IF_SETHIDE(true, comp(1049, 49));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 11));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 62));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 64));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 42));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 48));
        switch (varplayer_4474) {
            case 2: {
                IF_SETHIDE(false, comp(1049, 37));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 64));
                IF_SETHIDE(false, comp(1049, 43));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 42));
                IF_SETHIDE(false, comp(1049, 49));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));
                IF_SETHIDE(false, comp(1049, 32));
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1049, 43));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 42));
                IF_SETHIDE(false, comp(1049, 49));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));
                IF_SETHIDE(false, comp(1049, 36));
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1049, 49));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 48));
                IF_SETHIDE(false, comp(1049, 40));
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1049, 46));
                break;
            }
        };
    };
    return;
}