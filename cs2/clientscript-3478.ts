//[proc,love_puzzle_node]
function script3478(int0: number, int1: number, int2: number, int3: number): void {
    CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(6, 6, 0, 0);
    CC_SETCOLOUR(int3);
    CC_SETFILL(1);
    CC_SETPOSITION((int1 * 16), (int2 * 16), 1, 1);
    return;
}