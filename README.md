# Parking-Sharing

A simple app using node & express for managing parking space booking.

---

Registered users can view both their current bookings as well as a list of available parking spaces, and make reservations.

For the moment only the system admin. (who has access to the database) can register new users as well as parking spaces.

## Static live preview

Coming soon ..
<!-- Open [index.html](https://popanionut.github.io/parking-sharing/public/index.html) -->

## Content

- **CRUD** operations:
    - **C**reate new reservation
    - **R**ead (users,) spots and reservations from .json files
    - **U**pdate reservations
    - **D**elete reservations
- **Search** available spots & user reservations
    - by: city / area / street name 

**User accounts**

###### User

- first name
- middle name (optional)
- last name
- phone number
- e-mail address
- vehicle number (optional, required for reservations)
- parking space details (optional, required for space registration)

###### Parking space (details)

- city/town
- street address
- space number
- start time (date & time; required)
- end time (date & time; required)

## Setup

*A later version will integrate proper and more secure user account security.*