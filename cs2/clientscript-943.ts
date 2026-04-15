//
function script943(int0: int): void {
    if ((varclient_1279 == int0)) {
        return;
    };
    SOUND_VORBIS_RATE(6185 as vorbis, 1, 0, 100, 350);
    switch (int0) {
        case 1: {
            IF_SETHIDE(true, comp(60, 47));
            IF_SETSIZE(IF_GETWIDTH(comp(60, 43)), 22, 0, 0, comp(60, 43));
            IF_SETCOLOUR(16248247, comp(60, 48));
            stack(10465);
            stack(3932204);
            IF_SETGRAPHIC();
            stack(10466);
            stack(3932205);
            IF_SETGRAPHIC();
            stack(10465);
            stack(3932206);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 3932232);
            switch (varclient_1279) {
                case 2: {
                    IF_SETHIDE(false, comp(60, 53));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 49)), 20, 0, 0, comp(60, 49));
                    IF_SETCOLOUR(15052881, comp(60, 54));
                    stack(10463);
                    stack(3932210);
                    IF_SETGRAPHIC();
                    stack(10464);
                    stack(3932211);
                    IF_SETGRAPHIC();
                    stack(10463);
                    stack(3932212);
                    IF_SETGRAPHIC();
                    IF_SETHIDE(1, 3932371);
                    break;
                }
                case 3: {
                    IF_SETHIDE(false, comp(60, 59));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 55)), 20, 0, 0, comp(60, 55));
                    IF_SETCOLOUR(15052881, comp(60, 60));
                    stack(10463);
                    stack(3932216);
                    IF_SETGRAPHIC();
                    stack(10464);
                    stack(3932217);
                    IF_SETGRAPHIC();
                    stack(10463);
                    stack(3932218);
                    IF_SETGRAPHIC();
                    IF_SETHIDE(1, 3932444);
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
            stack(10465);
            stack(3932210);
            IF_SETGRAPHIC();
            stack(10466);
            stack(3932211);
            IF_SETGRAPHIC();
            stack(10465);
            stack(3932212);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 3932371);
            switch (varclient_1279) {
                case 1: {
                    IF_SETHIDE(false, comp(60, 47));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 43)), 20, 0, 0, comp(60, 43));
                    IF_SETCOLOUR(15052881, comp(60, 48));
                    stack(10463);
                    stack(3932204);
                    IF_SETGRAPHIC();
                    stack(10464);
                    stack(3932205);
                    IF_SETGRAPHIC();
                    stack(10463);
                    stack(3932206);
                    IF_SETGRAPHIC();
                    IF_SETHIDE(1, 3932232);
                    break;
                }
                case 3: {
                    IF_SETHIDE(false, comp(60, 59));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 55)), 20, 0, 0, comp(60, 55));
                    IF_SETCOLOUR(15052881, comp(60, 60));
                    stack(10463);
                    stack(3932216);
                    IF_SETGRAPHIC();
                    stack(10464);
                    stack(3932217);
                    IF_SETGRAPHIC();
                    stack(10463);
                    stack(3932218);
                    IF_SETGRAPHIC();
                    IF_SETHIDE(1, 3932444);
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
            stack(10465);
            stack(3932216);
            IF_SETGRAPHIC();
            stack(10466);
            stack(3932217);
            IF_SETGRAPHIC();
            stack(10465);
            stack(3932218);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 3932444);
            switch (varclient_1279) {
                case 1: {
                    IF_SETHIDE(false, comp(60, 47));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 43)), 20, 0, 0, comp(60, 43));
                    IF_SETCOLOUR(15052881, comp(60, 48));
                    stack(10463);
                    stack(3932204);
                    IF_SETGRAPHIC();
                    stack(10464);
                    stack(3932205);
                    IF_SETGRAPHIC();
                    stack(10463);
                    stack(3932206);
                    IF_SETGRAPHIC();
                    IF_SETHIDE(1, 3932232);
                    break;
                }
                case 2: {
                    IF_SETHIDE(false, comp(60, 53));
                    IF_SETSIZE(IF_GETWIDTH(comp(60, 49)), 20, 0, 0, comp(60, 49));
                    IF_SETCOLOUR(15052881, comp(60, 54));
                    stack(10463);
                    stack(3932210);
                    IF_SETGRAPHIC();
                    stack(10464);
                    stack(3932211);
                    IF_SETGRAPHIC();
                    stack(10463);
                    stack(3932212);
                    IF_SETGRAPHIC();
                    IF_SETHIDE(1, 3932371);
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