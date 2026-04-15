//
function script977(int0: struct, int1: unknown_int, int2: component, int3: component, int4: component, int5: component): void {
    script8421(int2, int3, int4, int5, "Lucky Dip", 21218 as struct, -1, 1, -1 as graphic, -1 as struct);
    script13969(comp(204, 5), comp(-1, 65535), 41028 as struct, struct_getparam(int0, 7423));
    stack(struct_getparam(int0, 7424));
    stack(13369347);
    IF_SETGRAPHIC();
    script16040(int0, int1);
    IF_SETPOSITION(0, (int1 * (40 + 1)), 0, 0, 13369365);
    IF_SETONVARTRANSMIT(callback(script979, int0, 8046, 1), 13369346);
    IF_SETONVARTRANSMIT(callback(script987, int0, 8048, 1), 13369439);
    IF_SETONVARTRANSMIT(callback(script981, int0, 8043, 8043, 8725, 10165, 8046, 5), 13369389);
    IF_SETONOP(callback(script986, int0), 13369464);
    return;
}