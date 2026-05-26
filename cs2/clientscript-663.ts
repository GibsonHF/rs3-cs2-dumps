//[clientscript,gravestone_plaque_setup]
function script663(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETTEXTFONT(5, int0);
    IF_SETTEXTALIGN(1, 1, 0, int0);
    if ((varbitplayer_1670 == 0)) {
        stack(13087);
        stack(int1);
        IF_SETGRAPHIC();
        stack(13088);
        stack(int2);
        IF_SETGRAPHIC();
        stack(13089);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(script693(242, 242, 242), int0);
    } else if ((varbitplayer_1670 == 1)) {
        stack(13084);
        stack(int1);
        IF_SETGRAPHIC();
        stack(13085);
        stack(int2);
        IF_SETGRAPHIC();
        stack(13086);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(script693(242, 242, 242), int0);
    };
    return;
}