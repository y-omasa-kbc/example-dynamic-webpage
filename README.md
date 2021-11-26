# example-dynamic-webpage
## About This Repository
Intended to be provided to students of Kawahara Computer Business College (KBC) as an example of a dynamyc webpage project using Express framework on TypeScript.  
このリポジトリは、河原電子ビジネス専門学校の学生に提供するために作成された、ExpressフレームワークをTypeScriptで使用する動的ページのプロジェクトのサンプルです。

## 各コミットについて(参照用)
### 007: refactor: all public methods in PeopleModel changed to static   
PeopleModelのすべてのpublicメソッドをstaticに変更しました。
PeopleModelで保持するべきステータスが存在しないため、このように変更します。

#### 実行方法 (001 より変化なし)
```
npx ts-node src/app.ts
```


### 006: Add sample code for deleting existing data on MySQL 
MySQLのテーブル上のデータを削除するサンプル。
更新対象はindexページの「削除」リンクをクリックして指定。   
正常フローのみ対応。リクエスト元確認用のtokenデータを埋め込む仕様になっているが、tokenの確認は現時点で未実装。  

#### 実行方法 (001 より変化なし)
```
npx ts-node src/app.ts
```

### 005: Add sample code for updating existing data on MySQL 
MySQLのテーブル上のデータを更新するサンプル。
更新対象はindexページの「更新」ボタンをクリックして指定。   
正常フローのみ対応。エラー処理、バリデーションチェックなどは未実装。  

#### 実行方法 (001 より変化なし)
```
npx ts-node src/app.ts
```

### 004: Add sample code for adding address data to the table on MySQL 
ローカルPC上で実行されているMySQLにデータを追加するサンプル。   
正常フローのみ対応。エラー処理、バリデーションチェックなどは未実装。  
  
追加画面の表示と、POSTされたデータでDBにエントリを追加する処理は両方とも関数addController　（ファイルaddController.ts）で対処している。処理はHTTPリクエストメソッドで切り替えている。

#### 実行方法 (001 より変化なし)
```
npx ts-node src/app.ts
```

### 003: Add sample code for obtaining address data from MySQL running locally 
ローカルPC上で実行されているMySQLからデータを取得するサンプル。  
現状では、アドレスのエントリを全部取得・表示する機能のみ。  

#### ddlフォルダ内のファイル
- create_db.sql  アプリケーションで使用するDB（addressbook）とアクセスユーザーの作成
- ddl_addressbook.sql  DB（addressbook）内のテーブル、ビューの作成
- testdata.sql  テストデータ追加

#### 実行方法 (001 より変化なし)
```
npx ts-node src/app.ts
```

### 002: Add sample code for usage of EJS template engine 
テンプレートエンジン EJSを使用したウェブページ表示のサンプル。
#### 実行方法 (001 より変化なし)
```
npx ts-node src/app.ts
```
サンプルはMVCの形式を踏襲。データは最終的にDBMSから取得するが、現時点ではソースコード上で設定。

### 001: Minimum Setup using Express on TypeScript 
TypeScriptでExpressフレームワークを使用するための最低限のセットアップ。
#### 実行方法
```
npx ts-node src/app.ts
```


