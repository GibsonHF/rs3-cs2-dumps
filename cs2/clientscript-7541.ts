//
function script7541(int0: int): void {
    script13972(comp(1096, 6), comp(1096, 7), 28595 as struct, "Clanmates", script9670(0, int0));
    script13972(comp(1096, 9), comp(1096, 10), 28595 as struct, "Clan Settings", script9670(1, int0));
    script13972(comp(1096, 12), comp(1096, 13), 28595 as struct, "Permissions", script9670(2, int0));
    IF_SETHIDE(script9464(0, int0), comp(1096, 15));
    IF_SETHIDE(script9464(1, int0), comp(1096, 68));
    IF_SETHIDE(script9464(2, int0), comp(1096, 142));
    return;
}