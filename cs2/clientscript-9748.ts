//
function script9748(): void {
    IF_SETHIDE(true, comp(1049, 32));
    IF_SETHIDE(true, comp(1049, 36));
    if (((varclient_4189 == 1) || (varplayer_4474 == 1))) {
        IF_SETHIDE(false, comp(1049, 29));
        if ((IF_GETGRAPHIC(comp(1049, 10)) == 18525 as graphic)) {
            stack(17535);
            stack(68747328);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747328);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 33));
        if ((IF_GETGRAPHIC(comp(1049, 53)) == 18525 as graphic)) {
            stack(17535);
            stack(68747329);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747329);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 37));
        if ((IF_GETGRAPHIC(comp(1049, 55)) == 18525 as graphic)) {
            stack(17535);
            stack(68747330);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747330);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 39));
        if ((IF_GETGRAPHIC(comp(1049, 57)) == 18525 as graphic)) {
            stack(17535);
            stack(68747331);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747331);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 41));
        if ((IF_GETGRAPHIC(comp(1049, 59)) == 18525 as graphic)) {
            stack(17535);
            stack(68747332);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747332);
            IF_SETGRAPHIC();
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 11));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 54));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 56));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 58));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 60));
    } else {
        IF_SETHIDE(true, comp(1049, 29));
        IF_SETHIDE(true, comp(1049, 33));
        IF_SETHIDE(true, comp(1049, 37));
        IF_SETHIDE(true, comp(1049, 39));
        IF_SETHIDE(true, comp(1049, 41));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 11));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 54));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 56));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 58));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 60));
        switch (varplayer_4474) {
            case 2: {
                IF_SETHIDE(false, comp(1049, 37));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 56));
                IF_SETHIDE(false, comp(1049, 39));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 58));
                IF_SETHIDE(false, comp(1049, 41));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 60));
                IF_SETHIDE(false, comp(1049, 32));
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1049, 39));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 58));
                IF_SETHIDE(false, comp(1049, 41));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 60));
                IF_SETHIDE(false, comp(1049, 36));
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1049, 41));
                IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 60));
                IF_SETHIDE(false, comp(1049, 36));
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1049, 36));
                break;
            }
        };
    };
    return;
}