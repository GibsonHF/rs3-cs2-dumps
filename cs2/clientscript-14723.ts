//
function script14723(string0: string): string {
    var int0 = script8942();
    if ((int0 == 0)) {
        var string0 = `${string0}- Your armour spikes gain <col=ffffff>${inttostring(65, 10)}%</col> of your melee power armour damage bonus as bonus damage.`;
        string0 = `${string0}<br>- Increase this bonus damage by <col=ffffff>${inttostring(50, 10)}%</col> of melee power armour damage bonus if your <sprite=18851><nbsp><col=ED705A>Life<nbsp>Points</col> are below <col=ffffff>${TOSTRING_LOCALISED(SCALE(60, 100, script2915()), 1)}</col> (<col=ffffff>60%</col> <sprite=18851><nbsp><col=ED705A>Maximum<nbsp>Life<nbsp>Points</col>).`;
    } else {
        string0 = `${string0}- Your armour spikes gain <col=ffffff>${inttostring(SCALE(int0, 100, 65), 10)}</col> (<col=ffffff>${inttostring(65, 10)}%</col> of melee power armour damage bonus) as bonus damage.`;
        string0 = `${string0}<br>- Increase this bonus damage by <col=ffffff>${inttostring(SCALE(int0, 100, 50), 10)}</col> (<col=ffffff>${inttostring(50, 10)}%</col> of melee power armour damage bonus) if your <sprite=18851><nbsp><col=ED705A>Life<nbsp>Points</col> are below <col=ffffff>${TOSTRING_LOCALISED(SCALE(60, 100, script2915()), 1)}</col> (<col=ffffff>60%</col> <sprite=18851><nbsp><col=ED705A>Maximum<nbsp>Life<nbsp>Points</col>).`;
    };
    return string0;
}