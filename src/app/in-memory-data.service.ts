import { InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cards = [
            { id: 1, content: 'The SpaceX Dragon cargo vehicle was successfully installed on International Space Station at 8:26 a.m. EST, where it will stay until returning to Earth in January with results of previous experiments.', comments: [
                {
                    id : 1,
                    name: 'Jhon',
                    text: 'Any word on if the solar panels are going to be reusable? Shame to throw those away with how expensive they are.'
                },
                {
                    id : 2,
                    name: 'Stephen',
                    text: ' I presume that Christmas gifts are on board too...'
                },
            ] },
            { id: 2, content: 'LIVE NOW: Watch as SpaceX’s Dragon cargo vehicle is secured to International Space Station, delivering science & supplies' , comments: [
                {
                    id : 1,
                    text: 'It`s a tarp'
                },
                {
                    id : 2,
                    text: 'What`s the role of 33rd degree masons within your infrastructure ?'
                },
            ] },
            { id: 3, content: 'Tune in at 7:30 a.m. EST to watch as SpaceX’s Dragon cargo vehicle is secured to the International Space Station, delivering over 4,800 pounds of science & supplies to crew on board' },
            { id: 4, content: 'Captured cargo! Crew used International Space Station’s robotic arm to capture SpaceX’s Dragon cargo vehicle at 5:57 a.m. EST' },
            { id: 5, content: 'What`s on Board? SpaceX`s Dragon cargo craft is delivering almost 4,800 pounds of cargo and research to the International Space Station.' },
            { id: 6, content: 'And LIFTOFF! Three new crew -- NASA’s Scott Tingle, Anton Shkaplerov of the Russian space agency Roscosmos, and Norishige Kanai of the Japan Aerospace Exploration Agency -- are headed to the International Space Station after launching at 2:21 a.m. EST Dec. 17. The trio will orbit the Earth for approximately two days before docking to the station on Tuesday, Dec. 19.' },
            { id: 7, content: 'The condition of deformations stretching over layered deposits on the surface of Mars may provide a geologic timeline around their creation.' },
            { id: 8, content: 'The Moon shined brightly this year, whether it was blocking out the Sun during one of the most-viewed events in U.S. history, or reinvigorating our human space exploration plans.' }
        ];

        const users = [
            { id: 1, login: 'admin', password: 'admin' }
          ];
        return {cards, users};
    }
}