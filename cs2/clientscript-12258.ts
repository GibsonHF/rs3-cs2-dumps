//
function script12258(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1 as obj;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var int4 = 0;
    switch (varbitplayer_30520) {
        case 120: {
            string0 = "Fire Blast";
            string1 = "Shield Dome";
            string2 = "Shadow Stalk";
            string3 = "Fire Blast<br>Blasts all nearby Rorarii with a powerful homing projectile.";
            string4 = "Shield Dome<br>Reduces all incoming damage and reflects damage from Gladii back at them, for a short duration.";
            string5 = "Shadow Stalk<br>Uses a copy of yourself to attack a nearby Scutarius from behind.";
            int0 = 14363;
            int1 = 25931;
            int2 = 14241;
            break;
        }
        case 130: {
            string0 = "Provoke";
            string1 = "Scythe";
            string2 = "Soul Reap";
            string3 = "Provoke<br>Taunts the construct to attack your current location.<br>Will only work due North, East, South and West of the construct.";
            string4 = "Scythe Swipe<br>Uses your scythe to attack the construct when in range.<br>Will release a trapped soul.";
            string5 = "Soul Reap<br>Releases a freed soul to weaken the construct.";
            int0 = 14221;
            int3 = 36838 as obj;
            int2 = 26042;
            break;
        }
        case 140: {
            string0 = "Soul Release";
            string2 = "Deflection Shield";
            string3 = "Soul Release<br>Releases all nearby souls in a wide area.<br>Release more souls than the construct to reduce its power.";
            string5 = "Deflection Shield<br>Reflects a powerful Soul Beam back at the construct.<br>The effectiveness of the shield depends on how many souls you have released.";
            int3 = 36839 as obj;
            int2 = 25931;
            int4 = 1;
            break;
        }
    };
    IF_SETOP(1, string0, comp(1725, 5));
    IF_SETOP(1, string1, comp(1725, 9));
    IF_SETOP(1, string2, comp(1725, 19));
    IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -1), 113049603);
    IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -1), 113049607);
    IF_SETONMOUSEREPEAT(callback(script8799, string5, -2147483645, -1), 113049611);
    if ((int0 != -1)) {
        stack(int0);
        stack(113049605);
        IF_SETGRAPHIC();
    } else {
        IF_SETOBJECT_NONUM(int3, 0, comp(1725, 5));
    };
    if ((int1 != -1)) {
        stack(int1);
        stack(113049609);
        IF_SETGRAPHIC();
    } else {
        IF_SETOBJECT_NONUM(int3, 0, comp(1725, 9));
    };
    stack(int2);
    stack(113049619);
    IF_SETGRAPHIC();
    var int5 = IF_GETWIDTH(113049600);
    var int6 = IF_GETHEIGHT(113049600);
    if ((int4 == 1)) {
        int6 = 112;
        IF_SETHIDE(true, comp(1725, 7));
        IF_SETPOSITION(24, IF_GETY(comp(1725, 3)), 0, 0, comp(1725, 3));
        IF_SETPOSITION(((IF_GETX(comp(1725, 3)) + IF_GETWIDTH(comp(1725, 3))) + 4), IF_GETY(comp(1725, 11)), 0, 0, comp(1725, 11));
    } else {
        IF_SETHIDE(false, comp(1725, 7));
        IF_SETPOSITION(6, IF_GETY(comp(1725, 3)), 0, 0, comp(1725, 3));
        IF_SETPOSITION(102, IF_GETY(comp(1725, 11)), 0, 0, comp(1725, 11));
    };
    IF_SETSIZE(int5, int6, 0, 0, comp(1725, 0));
    return;
}