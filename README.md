# Parking-Sharing

A simple web application using node js & express for managing parking space booking.

---

Registered users can view both their current bookings as well as a list of available parking spaces, and make reservations.

For the moment only the system administrator (who has access to the database) can register both new users and parking spaces.

## Static live preview

Coming soon ...
<!-- Open [index.html](https://popanionut.github.io/parking-sharing/public/index.html) -->

## Content

Once logged in..

- **CRUD** operations:
    - **C**reate new reservation
    - **R**ead users (account data) spots and reservations from .json files
    - **U**pdate reservations
    - **D**elete reservations
- **Search** available spots & user reservations
    - by: city / area / street name 

###### Database: **Parking**

- Use a mysql database.
- Create database named "parking" using encoding "UTF8_general_ci".
- Import tables & example data from the provided sql file.
    - ```./public/data/parking.sql```

- **Users**
    - first name
    - last name
    - phone number
    - e-mail address
    - vehicle number
- **Spots**
    - city / town
    - area / neighborhood name
    - address
    - parking space number / ID
    - free from time (daily availability)
    - free until time (daily availability)
    - description / spot owner's notes
- **Reservations**
    - user reference (id)
    - spot reference (id)
    - booking time (timestamp)
    - end time (of reservation release; datetime)

## Features

- [x] Use flex box for element arrangement
- [x] Use of MariaDB with MySql for data storage.
- [x] **After** logging in: View available & booked spots
- [x] Basic login, storing session data in "local storage"
- [x] **After** logging in: Dynamic spot search based on any combination of: City, Area (Neighborhood), Address

### To Do

- [ ] Logout & session end
- [ ] Login page styling
- [ ] "Proper" login, session & logout management
- [ ] View all available Spots even without logging in
- [ ] View & modify account information **by** the user
    - Names, phone number, e-mail address, car & parking space data
- [ ] View Name, phone number & e-amil address of user booking a spot by spot owner
- [ ] "Send e-mail" type message Form for the Contact page.

## Setup

```
git clone git@github.com:popanionut/parking-sharing.git
cd node-agenda-app
npm install
```

## Running app

```
npm run devstart
```

open http://localhost:3000/index.html