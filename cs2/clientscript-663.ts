//[clientscript,gravestone_plaque_setup]
function script663(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETTEXTFONT(5 as fontmetrics, int0);
    IF_SETTEXTALIGN(1, 1, 0, int0);
    if ((varbitplayer_1670 == 0)) {
        IF_SETGRAPHIC(13087 as graphic, int1);
        IF_SETGRAPHIC(13088 as graphic, int2);
        IF_SETGRAPHIC(13089 as graphic, int3);
        IF_SETCOLOUR(script693(242, 242, 242), int0);
    } else if ((varbitplayer_1670 == 1)) {
        IF_SETGRAPHIC(13084 as graphic, int1);
        IF_SETGRAPHIC(13085 as graphic, int2);
        IF_SETGRAPHIC(13086 as graphic, int3);
        IF_SETCOLOUR(script693(242, 242, 242), int0);
    };
    return;
}