//
function script19237(): void {
    var int0 = script10495(2);
    var int1 = script10495(0);
    var int2 = script10495(21);
    var int3 = MAX(0, (script19656() - script15113()));
    stack(PUSH_CONSTANT_INT[16]("<col=F99222>Days Remaining:</col> <col=", int2));
    var string0 = `${stack()}${inttostring()}>${inttostring(int3, 10)}</col>`;
    IF_SETTEXT(string0, comp(1289, 4));
    IF_SETTEXT(string0, comp(1289, 35));
    stack(PUSH_CONSTANT_INT[16]("<col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">The Horsemen have brought Halloween to the Land of Harvest!</col><br><br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Head to their camp in the <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Harvest Hollow</col> <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">to tackle a variety of activities:</col><br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">- Train your</col> <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Archaeology, Farming, Firemaking, Prayer, Summoning <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">and</col> <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Thieving</col> <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">skills in the graveyard.</col><br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">- Become an honorary member of <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">The Horsemen</col> <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">and join one of their five teams in the quest, <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">'Field of Screams'</col><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">.</col><br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">- Bring some <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">bonfire night</col> <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">and</col> <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">harvest festival</col> <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">vibes to Harvest Hollow in the new quest,</col> <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">'Guys and Dolls'</col><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">.</col><br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">- Find your way to the centre of the <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Maize Maze</col> <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">to fight spooky bosses and earn rewards.</col><br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">- Hand in <col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Clan confections</col> <col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">to contribute to your team's rank and claim rewards from clan ceremonies every Sunday.</col><br><br><col=", int1));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Event runs:</col> <col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>13th October - 9th November</col>`, comp(1289, 30));
    script19247();
    var int4 = 34367;
    var int5 = varbitplayer_56136;
    if (((int5 == 0) || (script18522(515 as quest) == false))) {
        int5 = (RANDOM(5) + 1);
    };
    switch (int5) {
        case 1: {
            int4 = 34367;
            break;
        }
        case 2: {
            int4 = 34371;
            break;
        }
        case 3: {
            int4 = 34368;
            break;
        }
        case 4: {
            int4 = 34370;
            break;
        }
        case 5: {
            int4 = 34369;
            break;
        }
    };
    stack(int4);
    stack(84475937);
    IF_SETGRAPHIC();
    script19239();
    script19241();
    script19243();
    script19245();
    return;
}