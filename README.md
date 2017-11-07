# ng2Sample
Display added users as they have been added

1. Backend
1) launch command prompt(on Windows) and run following commands:
1.1) cd backend
1.2) npm install
1.3) node server.js
5) confirm the output is "listening on port 3000"

2. Frontend
1) launch command prompt(on Windows) and run following commands:
1.1) cd frontend
1.2) npm install
1.3) ng serve
2) confirm the last output message is "webpack: Compiled successfully

3. Verify functionality
1) launch Chrome, navigate to localhost:4200
2) add a new user on the top, observe the user added to the list at the bottom
3) use forbidden characters for name: $, %, #, @, or a name with more than 20 characters, observe corresponding error messages and disabled "Add" button
4) use malformed email for email, observe corresponding error message and disabled "Add" button
5) use negative or greater than 100 number for age, observe corresponding error message and disabled "Add" button
6) fix the incorrect input in 3)-5), observe "Add" button became enabled.
