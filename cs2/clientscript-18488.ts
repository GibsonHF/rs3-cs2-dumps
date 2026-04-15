//
function script18488(int0: component, int1: component, int2: component, int3: struct, int4: component): void {
    var int5 = 0;
    var int6 = 5;
    var int7 = 0;
    var int8 = 3;
    var string0 = "No content exclusively obtained via Treasure Hunter is essential to play RuneScape.";
    int5 = script15891(string0, IF_GETWIDTH(int4), 206 as fontmetrics, 0);
    script2995(int4, int7, 0, int6, 0, 0, 0, int5, 1, 0, 2101 as dbrow, string0);
    int6 = (int6 + (int5 + int8));
    int7 = (int7 + 1);
    var string1 = "Items gained from Treasure Hunter have no real-world value and cannot be returned, redeemed or exchanged for any monetary value outside the game.";
    int5 = script15891(string1, IF_GETWIDTH(int4), 206 as fontmetrics, 0);
    script2995(int4, int7, 0, int6, 0, 0, 0, int5, 1, 0, 2101 as dbrow, string1);
    int6 = (int6 + (int5 + int8));
    int7 = (int7 + 1);
    var string2 = "Some items from Treasure Hunter are not useable on non-members worlds.";
    int5 = script15891(string2, IF_GETWIDTH(int4), 206 as fontmetrics, 0);
    script2995(int4, int7, 0, int6, 0, 0, 0, int5, 1, 0, 2101 as dbrow, string2);
    int6 = (int6 + (int5 + int8));
    int7 = (int7 + 1);
    if ((MAP_MEMBERS() == 0)) {
        string2 = "Members are eligible for members only rewards, and should play Treasure Hunter on members worlds.";
        int5 = script15891(string2, IF_GETWIDTH(int4), 206 as fontmetrics, 0);
        script2995(int4, int7, 0, int6, 0, 0, 0, int5, 1, 0, 2101 as dbrow, string2);
        int6 = (int6 + (int5 + int8));
        int7 = (int7 + 1);
    };
    if ((int3 == -1 as struct)) {
        IF_SETSIZE(IF_GETWIDTH(int2), ((IF_GETHEIGHT(int2) - IF_GETHEIGHT(int4)) - 5), 0, 0, int2);
        return;
    };
    var string3 = "";
    var int9 = 0;
    if ((int2 == comp(1253, 473))) {
        int9 = 452;
    } else {
        int9 = 395;
    };
    if ((struct_getparam(int3, 9072) == true)) {
        string3 = struct_getparam(int3, 9073);
        int5 = script15891(string3, IF_GETWIDTH(int4), 206 as fontmetrics, 0);
        script2995(int4, int7, 0, int6, 0, 0, 0, int5, 1, 0, 2101 as dbrow, string3);
        int6 = (int6 + (int5 + int8));
    };
    IF_SETSIZE(IF_GETWIDTH(int4), int6, 0, 0, int4);
    IF_SETSIZE(IF_GETWIDTH(int2), ((int9 - IF_GETHEIGHT(int4)) - 5), 0, 0, int2);
    return;
}