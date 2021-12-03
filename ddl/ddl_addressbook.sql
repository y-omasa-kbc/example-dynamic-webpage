CONNECT addressbook;
create table if not exists address_entry
(
    id            serial       primary key,
    fullName      varchar(100) not null,
    fullNameKana  varchar(100),
    gender        char(5),
    tel           char(20),
    eMail         varchar(255),
    postalCode    char(20),
    address1      varchar(255),
    note          varchar(255),
    deleted       boolean   default false
);

CREATE VIEW v_address_entry AS
    SELECT id,fullName,fullNameKana,gender,tel,
                eMail, postalCode, address1, note
    FROM address_entry 
    WHERE deleted = false
;




