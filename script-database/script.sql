create table employee (
	employee_Id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    name varchar(255) NOT NULL,
    job_Role varchar(255) NOT NULL,
    salary NUMERIC(5,2),
    Birth DATE NOT NULL,
    employee_Registration INTEGER NOT NULL
)

