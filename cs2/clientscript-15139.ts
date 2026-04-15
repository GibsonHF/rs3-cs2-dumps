//
function script15139(int0: dbrow, int1: dbrow): [unknown_int, string] {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 106))) {
        return [0, ""];
    };
    if (((script4148() == true) && (dbrow_getfield(int0, 434336, 0) == false))) {
        return [2, "This item isn't available to ironmen."];
    };
    if ((script15140(int0) == true)) {
        return [3, "You already own this item. You can't craft it again."];
    };
    var int2 = script15124(int0);
    if ((((int2 != -1 as obj) && (OC_MEMBERS(int2) == 1)) && (PLAYERMEMBER() == false))) {
        return [5, "You need to be a member to craft this item."];
    };
    var int3 = 0;
    var int4 = -1 as npc;
    var int5 = 0;
    [int3, int4] = dbrow_getfield(int1, 438304, 0);
    int5 = dbrow_getfield(int0, 434304, 0);
    if ((((int3 > 0) && (int5 > 0)) && (script15121(int3) < int5))) {
        return [4, `Requires ${script15179(int4)} to be at least level ${inttostring(int5, 10)}`];
    };
    return [1, ""];
}