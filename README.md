User Stories
As a user, I want to see a list of current projects seeking funding.
As a user, I want to be able to create an account.
As a registered user, I want to post my own projects to ask for funding.

Acceptance Criteria
It's done when the /project/:id route renders an individual project's details based on the route parameter id.
It's done when an existing user can enter their credentials on the login page to create a session on the server.
It's done when a new user can create an account on the login page and then be immediately logged in with a session.
It's done when the /profile route renders the logged-in user's projects and a form to create a new project.
It's done when only a logged in user can visit the /profile route.
It's done when a logged in user is redirected to /profile when they try to visit /login again.
It's done when a user on the profile page can use the form to create a new project in the database.
It's done when a user on the profile page can select a "Delete" button to remove their project from the database.
It's done when a logged-in user can select a "Logout" button to remove their session.
It's done when the session for a logged-in user expires after a set time.
It's done when the API routes to create and delete posts are protected from non logged-in users.
