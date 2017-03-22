update user set username='张三' ,`password`='123'
alert table user COLUMN id
insert into `user`(username,`password`)  VALUE('张三','123456')

create table user(
id int(9) primary key not null auto_increment,
name varchar(255),
password varchar(255)
)CHARSET=utf8 