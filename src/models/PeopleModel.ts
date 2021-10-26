import {Person} from '../common/Person'

export class PeopleModel {
    public all(): Person[] {
        const people = new Array();
        people.push( new Person(1,'篠原 正輝','シノハラ マサキ','男','090-8770-8584 ',' ','229-1113','神奈川県相模原市すすきの町6-2-6'));
        people.push( new Person(2,'北野 時司','キタノ トキジ','男','090-5708-5330 ','kitano7626@example.ad.jp  ','737-0034','広島県呉市溝路町7-11-4 フリード溝路町 14F'));
        people.push( new Person(3,'二宮 征四郎','ニノミヤ セイシロウ','男',' ','ninomiya.seisirou@dti.ne.jp  ','283-0012','千葉県東金市下武射田5-7-8 下武射田ガーデン 1002'));
        people.push( new Person(4,'谷川 良司','タニカワ リョウジ','男','070-5575-7342 ','wknt145@infoseek.co.jp  ','145-0065','東京都大田区東雪谷7-1-8'));
        people.push( new Person(5,'原口 菜美','ハラグチ ナミ','女','090-5656-2899 ',' ','371-0854','群馬県前橋市大渡町1-2-9'));
        people.push( new Person(6,'中井 督彦','ナカイ トクヒコ','男','090-7038-8242 ','okihukot207@comeon.to  ','207-0001','東京都東大和市多摩湖7-12-2 スカイコート多摩湖 706'));
        
        return people;
    }
}
