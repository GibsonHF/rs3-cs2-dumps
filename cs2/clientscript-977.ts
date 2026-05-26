//
function script977(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    script8421(int2, int3, int4, int5, "Lucky Dip", 21218, -1, 1, -1, -1);
    script13969(13369349, -1, 41028, struct_getparam(int0, 7423));
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