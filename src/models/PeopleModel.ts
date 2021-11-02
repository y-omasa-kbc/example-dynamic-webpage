import { Person } from '../common/Person';
import * as mysql from "promise-mysql";
import config from "../config/Config";

export class PeopleModel {

    //MySQLに接続
    private static async connectDb() {
        return await mysql.createConnection(config.db);
    };

    //指定されたSQL(SELECT)を実行して、取得したPersonの配列を返す
    private static async ExecuteSqlSelect(sql: string): Promise<Person[]> {
        return new Promise<Array<Person>>((resolve, _) => { //<<このメソッドの戻り値>>
            PeopleModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(sql);          //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                       //クエリ終了で結果を受け取り
                //                console.log( JSON.stringify(rows));
                const people = new Array();
                for (var elem of rows) {                  //クエリ結果の各行をelementに入れながらループ
                    people.push(                        //メソッド呼び出し元に返す配列に入れていく
                        new Person(elem.id, elem.fullName, elem.fullNameKana, elem.gender,
                            elem.tel, elem.eMail, elem.postalCode, elem.address));
                }
                resolve(people);    //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    //全員のデータを順序指定なしで取得
    public async all(): Promise<Person[]> {
        //staticなExecuteSqlSelectを呼び出して、全エントリ取得(DBアクセスのため非同期)
        return await PeopleModel.ExecuteSqlSelect("SELECT * FROM address_entry");
    }
}
