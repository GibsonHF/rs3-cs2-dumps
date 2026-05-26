//
function script943(int0: number): void {
    if ((varclient_1279 == int0)) {
        return;
    };
    SOUND_VORBIS_RATE(6185 as vorbis, 1, 0, 100, 350);
    switch (int0) {
        case 1: {
            IF_SETHIDE(true, comp(60, 47));
            IF_SETSIZE(IF_GETWIDTH(comp(60, 43)), 22, 0, 0, comp(60, 43));
            IF_SETCOLOUR(16248247, comp(60, 48));
            IF_SETGRAPHIC(10465 as graphic, comp(60, 44));
            IF_SETGRAPHIC(10466 as graphic, comp(60, 45));
            IF_SETGRAPHIC(10465 as graphic, comp(60, 46));
            IF_SETHIDE(false, comp(60, 72));
            switch (varclient_1279) {
                case 2: {
                    IF_SETHIDE(false, comp(60, 53));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 49)), 20, 0, 0, comp(60, 49));
                    IF_SETCOLOUR(15052881, comp(60, 54));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 50));
                    IF_SETGRAPHIC(10464 as graphic, comp(60, 51));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 52));
                    IF_SETHIDE(true, comp(60, 211));
                    break;
                }
                case 3: {
                    IF_SETHIDE(false, comp(60, 59));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 55)), 20, 0, 0, comp(60, 55));
                    IF_SETCOLOUR(15052881, comp(60, 60));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 56));
                    IF_SETGRAPHIC(10464 as graphic, comp(60, 57));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 58));
                    IF_SETHIDE(true, comp(60, 284));
                    break;
                }
            };
            IF_SETONMOUSEOVER(callback(script1881, 1, 1, 3932204, 3932205, 3932206), 3932203);
            IF_SETONMOUSELEAVE(callback(script1881, 1, 0, 3932204, 3932205, 3932206), 3932203);
            IF_SETONMOUSEOVER(callback(script1881, 0, 1, 3932210, 3932211, 3932212), 3932209);
            IF_SETONMOUSELEAVE(callback(script1881, 0, 0, 3932210, 3932211, 3932212), 3932209);
            IF_SETONMOUSEOVER(callback(script1881, 0, 1, 3932216, 3932217, 3932218), 3932215);
            IF_SETONMOUSELEAVE(callback(script1881, 0, 0, 3932216, 3932217, 3932218), 3932215);
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(60, 53));
            IF_SETSIZE(IF_GETWIDTH(comp(60, 49)), 22, 0, 0, comp(60, 49));
            IF_SETCOLOUR(16248247, comp(60, 54));
            IF_SETGRAPHIC(10465 as graphic, comp(60, 50));
            IF_SETGRAPHIC(10466 as graphic, comp(60, 51));
            IF_SETGRAPHIC(10465 as graphic, comp(60, 52));
            IF_SETHIDE(false, comp(60, 211));
            switch (varclient_1279) {
                case 1: {
                    IF_SETHIDE(false, comp(60, 47));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 43)), 20, 0, 0, comp(60, 43));
                    IF_SETCOLOUR(15052881, comp(60, 48));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 44));
                    IF_SETGRAPHIC(10464 as graphic, comp(60, 45));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 46));
                    IF_SETHIDE(true, comp(60, 72));
                    break;
                }
                case 3: {
                    IF_SETHIDE(false, comp(60, 59));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 55)), 20, 0, 0, comp(60, 55));
                    IF_SETCOLOUR(15052881, comp(60, 60));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 56));
                    IF_SETGRAPHIC(10464 as graphic, comp(60, 57));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 58));
                    IF_SETHIDE(true, comp(60, 284));
                    break;
                }
            };
            IF_SETONMOUSEOVER(callback(script1881, 0, 1, 3932204, 3932205, 3932206), 3932203);
            IF_SETONMOUSELEAVE(callback(script1881, 0, 0, 3932204, 3932205, 3932206), 3932203);
            IF_SETONMOUSEOVER(callback(script1881, 1, 1, 3932210, 3932211, 3932212), 3932209);
            IF_SETONMOUSELEAVE(callback(script1881, 1, 0, 3932210, 3932211, 3932212), 3932209);
            IF_SETONMOUSEOVER(callback(script1881, 0, 1, 3932216, 3932217, 3932218), 3932215);
            IF_SETONMOUSELEAVE(callback(script1881, 0, 0, 3932216, 3932217, 3932218), 3932215);
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(60, 59));
            IF_SETSIZE(IF_GETWIDTH(comp(60, 55)), 22, 0, 0, comp(60, 55));
            IF_SETCOLOUR(16248247, comp(60, 60));
            IF_SETGRAPHIC(10465 as graphic, comp(60, 56));
            IF_SETGRAPHIC(10466 as graphic, comp(60, 57));
            IF_SETGRAPHIC(10465 as graphic, comp(60, 58));
            IF_SETHIDE(false, comp(60, 284));
            switch (varclient_1279) {
                case 1: {
                    IF_SETHIDE(false, comp(60, 47));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 43)), 20, 0, 0, comp(60, 43));
                    IF_SETCOLOUR(15052881, comp(60, 48));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 44));
                    IF_SETGRAPHIC(10464 as graphic, comp(60, 45));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 46));
                    IF_SETHIDE(true, comp(60, 72));
                    break;
                }
                case 2: {
                    IF_SETHIDE(false, comp(60, 53));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 49)), 20, 0, 0, comp(60, 49));
                    IF_SETCOLOUR(15052881, comp(60, 54));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 50));
                    IF_SETGRAPHIC(10464 as graphic, comp(60, 51));
                    IF_SETGRAPHIC(10463 as graphic, comp(60, 52));
                    IF_SETHIDE(true, comp(60, 211));
                    break;
                }
            };
            IF_SETONMOUSEOVER(callback(script1881, 0, 1, 3932204, 3932205, 3932206), 3932203);
            IF_SETONMOUSELEAVE(callback(script1881, 0, 0, 3932204, 3932205, 3932206), 3932203);
            IF_SETONMOUSEOVER(callback(script1881, 0, 1, 3932210, 3932211, 3932212), 3932209);
            IF_SETONMOUSELEAVE(callback(script1881, 0, 0, 3932210, 3932211, 3932212), 3932209);
            IF_SETONMOUSEOVER(callback(script1881, 1, 1, 3932216, 3932217, 3932218), 3932215);
            IF_SETONMOUSELEAVE(callback(script1881, 1, 0, 3932216, 3932217, 3932218), 3932215);
            break;
        }
    };
    varclient_1279 = int0;
    return;
}