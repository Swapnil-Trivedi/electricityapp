## Backend
This is the requiremnts/todo for the backend

- Add app user detail having user detail model as per the erd.

### Views and Paths-->
- /bill/     --> get all the bills BillList view
- /bill/:id  --> get specific bill detail BillDetail View get and put to change payment status
- /addBill   --> for the admin to add a bill for any user give To work on 
- /addBill/:userId --> delete that bill for any user To work on


### Endpoint Brief

Base Url: localhost:8000/api/v1/


    Method  |   Endpoint    |     Desc                         |
    GET     |   bill        | To get the list of all the bills |
