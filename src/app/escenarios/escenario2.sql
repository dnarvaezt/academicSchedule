select
    department_name COUNT (UNIC_employee.id)
from
    UNIC_department
    INNER JOIN UNIC_department ON UNIC_employee.department_id = UNIC_department.id
ORDER BY
    department_name