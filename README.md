This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Puphub - Your one stop pup drop

## A simple to use dog boarding application meant to make booking your dog for a stay easy.

**[Live application can be found here](https://abounding-sea-mm.surge.sh/)**

This appliation is meant to be a dog boarding site where users can easily add their dogs and create bookings for them. Whether you are going away on vacation or are unable to have your furry friend for a night, Puphub is an easy to use site that allows for booking them in for dog boarding.

Users **must** register an account to be able to view full features.

### Use the application via a test user

Login to the site with these credentials to preview its capabilities:
**Username:** walnut
**Password:** password

### Technologies used 

- HTML5 & CSS
- React 
- Node.js 
- Express
- PostgreSQL
- JavaScript
- Git
- Bootstrap
- JSX

### Features implemented

- Login & register functionality
- Authorization for users to view pages, add dogs, add bookings, and update their information
- Delete bookings and dogs
- Select information via React forms
  
### Tests

Tests for different sections can be found accompanying the file that they are testing. To run tests is very simple:

- Have the application running on your system
- Run ```$ npm install``` in both the backend and frontend folders
- Run **jest** from inside the **frontend** folder
  ```
  frontend $ jest
  ```

### Standard user flow

When you first arrive at the site, you will be prompted to login or register as a new user.

Upon logging in or registering, you will be brought to your profile page where you can choose to update your profile. You will also see that the navigation has expanded to view the full features of this application.

Users can then view their dogs, view all the dogs in the database, view their bookings, and add new dogs or bookings. 

### API

I created my own API using PostgreSQL. There are 3 different tables: a **users** table, a **dogs** table, and a **bookings** table. 

The **dogs** table references the **users** table based on the users username. This allows for the dogs to have their owners listed in the database.

The **bookings** table references the **users** table in order to add the booking for the correct user. Only that users dogs will be visible to book for a booking from the form.

### Continuation of this project

I have different features and plans to upgrade this project. As I continue my work, I will update here with the new additions. Some goals of mine are to implement a more creative UI, add the capabilities for day boarding including drop off & pick up times, and also a more elaborate dog page. 

Thank you for viewing my progress so far!



