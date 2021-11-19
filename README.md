# cinema_api
Back-end part of the KPI project of the web application development course

---
## To run 
### Write in console:

`git clone https://github.com/JmalinCode/cinema_api`

`cd cinema_api`

Activate your venv

`pip install -r requirements.txt`

`cd cinema_back`

`python manage.py makemigrations`

`python manage.py migrate`


`python manage.py runserver`

---

### Check http://localhost:8000

---

You can add example data in db using  `python populate_data.py ` 

---


### Admin panel http://localhost:8000/admin/
To get access to admin panel run `python manage.py createsuperuser`

### GET movies screenings information: http://localhost:8000/api/movies/
### GET / POST / UPDATE orders: http://localhost:8000/api/orders/

Example json POST request:
```json
{
        "tickets": [
            {
                "screening": 1,
                "row": 1,
                "seat": 1
            }, 
            {
                "screening": 1,
                "row": 1,
                "seat": 2
            }
        ],
        "customer_mail": "mailOfCustomer@mail.com",
        "price": "1.00"
}
```

![](https://camo.githubusercontent.com/ac13209e52632d84e059057f2a8110195656ec2be028b7b7d86b187466b35808/68747470733a2f2f63646e312e73617665706963652e72752f75706c6f6164732f323032312f31312f31352f37333231643663313364656239613834653261333231333637323235396461322d66756c6c2e706e67)