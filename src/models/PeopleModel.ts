import { Person } from '../common/Person';
import * as mysql from "promise-mysql";
import config from "../config/Config";

export class PeopleModel {

    //MySQLに接続
    private static async connectDb() {
        return await mysql.createConnection(config.db);
    };

    //指定されたSQL(SELECT)を実行して、取得したPersonの配列を返す
    private static async executeSqlSelect(sql: string): Promise<Person[]> {
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
                            elem.tel, elem.eMail, elem.postalCode, elem.address1));
                }
                resolve(people);    //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    //指定されたPersonをInsert文で登録する
    private static async insertPerson(person: Person): Promise<number> {
        let queryParam = {
            sql: "INSERT INTO address_entry (fullName, fullNameKana, gender, tel, eMail, "
                         + "postalCode, address1) VALUES (?,?,?,?,?,?,?)",
            values: [person.fullName, person.fullNameKana, person.gender, person.tel, person.eMail,
                        person.postalCode, person.address]
        }

        return new Promise<number>((resolve, _) => {    //<<このメソッドの戻り値>>
            PeopleModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(queryParam);   //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                         //クエリ終了で結果を受け取り
                resolve(rows.insertId);                //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    //引数に指定されたPersonのidを持つエントリをUpdate文で更新する
    private static async updatePerson(person: Person): Promise<number> {
        let queryParam = {
            sql: "UPDATE address_entry SET fullName = ?, fullNameKana = ?, gender = ?, tel = ?, "
                         + "eMail = ?, postalCode = ?, address1 = ? WHERE id = ?",
            values: [person.fullName, person.fullNameKana, person.gender, person.tel, person.eMail,
                        person.postalCode, person.address, Number(person.id)]
        }

        return new Promise<number>((resolve, _) => {    //<<このメソッドの戻り値>>
            PeopleModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(queryParam);   //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                         //クエリ終了で結果を受け取り
                resolve(rows.changedRows);              //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    public static async del(id: number):Promise<number> {
        let queryParam = {
            sql: "UPDATE address_entry SET deleted = true WHERE id=?",
            values: [id]
        }

        return new Promise<number>((resolve, _) => {    //<<このメソッドの戻り値>>
            PeopleModel.connectDb().then((con) => {    //DBへの接続が取得できたので
                const result = con.query(queryParam);   //接続にクエリを送る
                con.end();                              //クエリ実行終了
                return result;                          //クエリ結果を次のthenへ
            }).then((rows) => {                         //クエリ終了で結果を受け取り
                resolve(rows.affectedRows);             //<<このメソッドの戻り値>>のPromiseに値を設定
            });
        });
    }

    public static async add(newEntry: Person) : Promise<number> {
        return await PeopleModel.insertPerson(newEntry);
    }

    //全員のデータを順序指定なしで取得
    public static async all(): Promise<Person[]> {
        //staticなExecuteSqlSelectを呼び出して、全エントリ取得(DBアクセスのため非同期)
        return await PeopleModel.executeSqlSelect("SELECT * FROM v_address_entry");
    }

    public static async findOne(param: { id: number; }): Promise<Person> {
        const people = await PeopleModel.executeSqlSelect("SELECT * FROM v_address_entry WHERE id = " + param.id);
        return people[0];
    }

    public static async edit(updateEntry: Person) {
        return await PeopleModel.updatePerson(updateEntry);
    }

}
